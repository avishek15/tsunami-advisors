# Deployment Guide - Tsunami Advisors

## 🚀 **Ready for Hostinger Deployment**

Your website is built and ready for deployment! All files are in the `dist/` folder.

## 📁 **Files to Upload**

Upload **ALL** files from the `dist/` folder to your Hostinger `public_html/` directory:

### **Essential Files:**

-   ✅ `.htaccess` - Apache server configuration (IMPORTANT!)
-   ✅ `index.html` - Main application
-   ✅ `contact.html` - Redirect to /#/contact
-   ✅ `services.html` - Redirect to /#/services
-   ✅ `apps.html` - Redirect to /#/apps

### **Assets:**

-   ✅ `assets/` folder containing:
    -   `index-7eQSrHYP.css` - Styles
    -   `index-C9heMH5U.js` - JavaScript bundle

### **Static Files:**

-   ✅ `favicon.ico` - Website icon
-   ✅ `robots.txt` - SEO robots file
-   ✅ `sitemap.xml` - SEO sitemap
-   ✅ `ta-logo.png`, `ta-logo.webp` - Logo files
-   ✅ `ta-text.png`, `ta-text.webp` - Text logo files
-   ✅ `ta.jpeg` - Hero image
-   ✅ `hero-video-placeholder.mp4` - Hero video
-   ✅ `hero-video-placeholder.webm` - Hero video (WebM format)
-   ✅ `vite.svg` - Vite logo

## 🔧 **Configuration Required**

### **Before Uploading:**

1. **Update reCAPTCHA configuration:**

    - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
    - Edit your site
    - Add your Hostinger domain (e.g., `yourdomain.com`)

2. **Update Google Apps Script:**
    - Make sure your Google Apps Script is deployed with "Anyone" access
    - Test the script URL directly in browser

### **After Uploading:**

1. **Test the main page:** `yourdomain.com/`
2. **Test navigation:** Click through menu items
3. **Test direct URLs:** Try `yourdomain.com/contact` (should redirect)
4. **Test contact form:** Submit a test message
5. **Check Google Sheet:** Verify data appears

## 🎯 **URL Structure**

Your website will use hash routing for better compatibility:

-   **Home**: `yourdomain.com/` or `yourdomain.com/#/`
-   **Services**: `yourdomain.com/#/services`
-   **Apps**: `yourdomain.com/#/apps`
-   **Contact**: `yourdomain.com/#/contact`

## ✅ **Features Included**

-   ✅ **reCAPTCHA v3** - Invisible spam protection
-   ✅ **Google Sheets Integration** - Automatic form data storage
-   ✅ **Form Validation** - Client-side validation with error messages
-   ✅ **Loading States** - User feedback during submission
-   ✅ **Success/Error Handling** - Clear feedback to users
-   ✅ **Responsive Design** - Works on all devices
-   ✅ **Professional Animations** - Smooth Framer Motion effects
-   ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt

## 🔍 **Troubleshooting**

### **If main page doesn't load:**

-   Check that `index.html` is in the root of `public_html/`
-   Verify file permissions (644 for files, 755 for folders)

### **If navigation doesn't work:**

-   Check browser console for JavaScript errors
-   Ensure all files in `assets/` folder are uploaded

### **If contact form doesn't work:**

-   Verify reCAPTCHA site key is correct
-   Check Google Apps Script URL is accessible
-   Test the Google Apps Script URL directly

### **If you get "connection reset" errors:**

-   The `.htaccess` file should handle this
-   Make sure `.htaccess` is uploaded to the root directory

## 🎉 **Deployment Checklist**

-   [ ] Upload all files from `dist/` to `public_html/`
-   [ ] Verify `.htaccess` file is in root directory
-   [ ] Add your domain to reCAPTCHA configuration
-   [ ] Test main page loads correctly
-   [ ] Test navigation works
-   [ ] Test contact form submission
-   [ ] Verify data appears in Google Sheet
-   [ ] Test on different devices/browsers

## 🚀 **You're Ready!**

Your website is fully prepared for deployment with:

-   Professional design and animations
-   Working contact form with spam protection
-   Automatic data storage in Google Sheets
-   SEO optimization
-   Mobile-responsive design

**Upload the files and your website will be live!** 🎯
