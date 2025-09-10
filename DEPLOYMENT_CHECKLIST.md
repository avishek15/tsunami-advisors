# 🚀 Deployment Checklist

## **Pre-Deployment Setup**

### **1. Configuration**

-   [ ] Update `src/config/constants.ts` with your actual keys:
    -   [ ] reCAPTCHA site key
    -   [ ] Google Apps Script URL
-   [ ] Rebuild project: `npm run build`

### **2. Google Services**

-   [ ] reCAPTCHA site configured with your domain
-   [ ] Google Apps Script deployed with "Anyone" access
-   [ ] Google Sheet created and accessible

## **Upload to Hostinger**

### **3. File Upload**

-   [ ] Upload ALL files from `dist/` folder to `public_html/`
-   [ ] Verify `.htaccess` file is in root directory
-   [ ] Check file permissions (644 for files, 755 for folders)

### **4. Testing**

-   [ ] Main page loads: `yourdomain.com/`
-   [ ] Navigation works (hash routing)
-   [ ] Direct URLs redirect: `yourdomain.com/contact`
-   [ ] Contact form submits successfully
-   [ ] Data appears in Google Sheet
-   [ ] reCAPTCHA works (invisible)
-   [ ] Mobile responsive design

## **Final Verification**

### **5. Cross-Platform Testing**

-   [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
-   [ ] Mobile devices (iOS, Android)
-   [ ] Different screen sizes
-   [ ] Fast and slow internet connections

## **✅ Ready to Go Live!**

Your website is now fully deployed and functional! 🎉
