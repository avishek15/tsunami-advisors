// Configuration constants for the application
// Update these values with your actual keys and URLs

export const CONFIG = {
    // reCAPTCHA Configuration
    // Get your site key from: https://www.google.com/recaptcha/admin
    RECAPTCHA_SITE_KEY:
        import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY",

    // Google Apps Script URL
    // Get this URL after deploying your Google Apps Script as a web app
    GOOGLE_SCRIPT_URL:
        import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
} as const;

// For Hostinger deployment, replace the values above with your actual keys:
// RECAPTCHA_SITE_KEY: "6Lc...", // Your actual reCAPTCHA site key
// GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/ABC123.../exec", // Your actual script URL
