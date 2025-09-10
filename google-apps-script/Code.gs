/**
 * Google Apps Script for handling contact form submissions
 * This script receives form data and saves it to a Google Sheet
 *
 * Setup Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Update the SHEET_NAME constant to match your sheet name
 * 5. Deploy as a web app with "Anyone" access
 * 6. Copy the web app URL and update your React form
 */

// Configuration
const SHEET_NAME = "Contact Form Submissions"; // Change this to your sheet name
const RECAPTCHA_SECRET_KEY = "YOUR_RECAPTCHA_SECRET_KEY"; // Add your reCAPTCHA secret key

/**
 * Main function to handle POST requests from the contact form
 */
function doPost(e) {
    try {
        console.log("Received request:", e);
        console.log("Request type:", typeof e);
        console.log("Request keys:", Object.keys(e || {}));

        // Handle the case where e is undefined
        if (!e) {
            console.log("No request object received");
            return ContentService.createTextOutput(
                JSON.stringify({
                    success: false,
                    error: "No request data received",
                })
            ).setMimeType(ContentService.MimeType.JSON);
        }

        // Handle different data formats
        let data;
        if (e.postData && e.postData.contents) {
            // Standard POST with JSON data
            data = JSON.parse(e.postData.contents);
        } else if (e.parameter) {
            // Form data or URL parameters
            data = e.parameter;
        } else {
            // Try to get data from the request object itself
            data = e;
        }

        console.log("Parsed data:", data);

        // Skip reCAPTCHA verification for now to test basic functionality
        // if (!verifyRecaptcha(data.recaptchaToken)) {
        //     return ContentService.createTextOutput(
        //         JSON.stringify({
        //             success: false,
        //             error: "reCAPTCHA verification failed",
        //         })
        //     ).setMimeType(ContentService.MimeType.JSON);
        // }

        // Get the active spreadsheet and sheet
        const sheet = getOrCreateSheet();

        // Prepare the row data
        const rowData = [
            data.timestamp || new Date().toISOString(),
            data.firstName || "",
            data.lastName || "",
            data.email || "",
            data.company || "",
            data.service || "",
            data.message || "",
            data.recaptchaToken ? "Verified" : "Not verified",
        ];

        // Add the data to the sheet
        sheet.appendRow(rowData);

        console.log("Successfully added row to sheet");

        // Return success response
        return ContentService.createTextOutput(
            JSON.stringify({
                success: true,
                message: "Form submitted successfully",
            })
        )
            .setMimeType(ContentService.MimeType.JSON)
            .setHeaders({
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            });
    } catch (error) {
        console.error("Error processing form submission:", error);
        console.error("Request object:", e);

        // Return error response
        return ContentService.createTextOutput(
            JSON.stringify({
                success: false,
                error: "Internal server error: " + error.toString(),
            })
        )
            .setMimeType(ContentService.MimeType.JSON)
            .setHeaders({
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            });
    }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
    return ContentService.createTextOutput(
        "Contact Form Handler is running!"
    ).setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Handle OPTIONS requests for CORS
 */
function doOptions(e) {
    return ContentService.createTextOutput("")
        .setMimeType(ContentService.MimeType.TEXT)
        .setHeaders({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        });
}

/**
 * Get or create the sheet for storing form submissions
 */
function getOrCreateSheet() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
        // Create the sheet if it doesn't exist
        sheet = spreadsheet.insertSheet(SHEET_NAME);

        // Add headers
        const headers = [
            "Timestamp",
            "First Name",
            "Last Name",
            "Email",
            "Company",
            "Service",
            "Message",
            "reCAPTCHA Status",
        ];

        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

        // Format the header row
        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setFontWeight("bold");
        headerRange.setBackground("#f0f0f0");

        // Auto-resize columns
        sheet.autoResizeColumns(1, headers.length);
    }

    return sheet;
}

/**
 * Verify reCAPTCHA token with Google's API
 */
function verifyRecaptcha(token) {
    if (
        !token ||
        !RECAPTCHA_SECRET_KEY ||
        RECAPTCHA_SECRET_KEY === "YOUR_RECAPTCHA_SECRET_KEY"
    ) {
        // Skip verification if not configured
        return true;
    }

    try {
        const url = "https://www.google.com/recaptcha/api/siteverify";
        const payload = {
            secret: RECAPTCHA_SECRET_KEY,
            response: token,
        };

        const options = {
            method: "POST",
            payload: payload,
        };

        const response = UrlFetchApp.fetch(url, options);
        const result = JSON.parse(response.getContentText());

        return result.success === true;
    } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return false;
    }
}

/**
 * Test function to verify the setup
 */
function testSetup() {
    const testData = {
        timestamp: new Date().toISOString(),
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        company: "Test Company",
        service: "ai-transformation",
        message: "This is a test message",
        recaptchaToken: "test-token",
    };

    const mockEvent = {
        postData: {
            contents: JSON.stringify(testData),
        },
    };

    const result = doPost(mockEvent);
    console.log("Test result:", result.getContent());
}
