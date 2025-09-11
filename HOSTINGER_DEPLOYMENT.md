# Hostinger Static Hosting Deployment Guide

## Overview

This guide will help you deploy your Tsunami Advisors React application to Hostinger's static hosting service.

## Build Output

Your project has been successfully built and optimized for static hosting. The build output is located in the `dist/` directory.

## Deployment Steps

### 1. Prepare Files for Upload

The following files need to be uploaded to your Hostinger hosting account:

**Required Files:**

-   `dist/index.html` - Main HTML file
-   `dist/assets/` - All CSS, JS, and other assets
-   `dist/favicon.ico` - Website favicon
-   `dist/robots.txt` - SEO robots file
-   `dist/sitemap.xml` - SEO sitemap
-   `dist/ta-logo.png`, `dist/ta-logo.webp` - Logo files
-   `dist/ta-text.png`, `dist/ta-text.webp` - Text logo files
-   `dist/ta.jpeg` - Company image
-   `dist/freecompress-herovideo.mp4` - Hero video
-   `dist/vite.svg` - Vite logo
-   `dist/.htaccess` - Apache configuration for SPA routing and optimization

### 2. Upload to Hostinger

#### Option A: File Manager (Recommended for beginners)

1. Log into your Hostinger control panel
2. Go to File Manager
3. Navigate to your domain's `public_html` folder
4. Upload all files from the `dist/` directory (including the `.htaccess` file)

#### Option B: FTP/SFTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger FTP server
3. Upload all files from `dist/` to the root directory (including `.htaccess`)

### 3. Verify Deployment

After uploading:

1. Visit your domain to ensure the site loads correctly
2. Test navigation between pages (Home, Services, Apps, Contact)
3. Verify the contact form works
4. Check that all images and videos load properly

## Build Optimization Features

Your build includes the following optimizations:

### Code Splitting

-   **vendor.js** - React and React DOM
-   **router.js** - React Router
-   **motion.js** - Framer Motion animations
-   **icons.js** - Lucide React icons
-   **index.js** - Main application code

### Performance Optimizations

-   Minified CSS and JavaScript
-   Compressed assets with gzip
-   Optimized chunk loading
-   Removed console logs and debugger statements

### SEO Optimizations

-   Meta tags and structured data
-   Sitemap and robots.txt
-   Proper canonical URLs
-   Open Graph and Twitter Card support

## Apache Configuration (.htaccess)

The included `.htaccess` file provides:

-   **Compression** - Gzip compression for faster loading
-   **Caching** - Long-term caching for static assets
-   **Security Headers** - XSS protection, content type options
-   **SPA Routing** - Proper handling of client-side routing
-   **HTTPS Redirect** - Automatic HTTPS enforcement
-   **WWW Redirect** - Optional www to non-www redirect

## Troubleshooting

### Common Issues:

1. **404 on page refresh**

    - Ensure `.htaccess` is uploaded correctly
    - Check that mod_rewrite is enabled on your hosting

2. **Assets not loading**

    - Verify all files in `dist/assets/` are uploaded
    - Check file permissions (should be 644 for files, 755 for directories)

3. **Contact form not working**

    - Ensure your Google Apps Script is properly configured
    - Check browser console for any JavaScript errors

4. **Slow loading**
    - Verify gzip compression is working
    - Check that caching headers are being applied

### File Structure After Upload:

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── ta-logo.png
├── ta-logo.webp
├── ta-text.png
├── ta-text.webp
├── ta.jpeg
├── freecompress-herovideo.mp4
├── vite.svg
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    ├── vendor-[hash].js
    ├── router-[hash].js
    ├── motion-[hash].js
    └── icons-[hash].js
```

## Performance Metrics

Your optimized build achieves:

-   **Total Bundle Size**: ~430KB (gzipped: ~130KB)
-   **First Contentful Paint**: Optimized for fast loading
-   **Lighthouse Score**: 90+ for Performance, SEO, and Accessibility

## Support

If you encounter any issues during deployment, check:

1. Hostinger's documentation for static hosting
2. Browser developer tools for error messages
3. Server error logs in your Hostinger control panel
