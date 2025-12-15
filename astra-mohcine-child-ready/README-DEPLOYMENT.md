# Deployment Guide for Hostinger

## Quick Fix (No Rebuild Needed)

The PHP files have been updated to work on production. Upload the entire `astra-mohcine-child-ready` folder to:
```
/wp-content/themes/astra-mohcine-child-ready/
```

### Important: URL Rewrite Fix

The React app was built with `/wordpress` basename for localhost. On production (root install), you need ONE of these fixes:

#### Option A: Add URL Rewrite in WordPress .htaccess (RECOMMENDED)

Add these rules to your WordPress root `.htaccess` file BEFORE the WordPress rules:

```apache
# React Router SPA routes - add BEFORE WordPress rules
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# Handle React SPA routes for Mohcine pages
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} ^/(about|news|contact|volunteer|governance|media)
RewriteRule ^(.*)$ /index.php [L]
</IfModule>
```

#### Option B: Rebuild the React App (Best Solution)

If you have Node.js locally:

```bash
cd astra-mohcine-child-ready/mohcine-src

# Install dependencies
npm install

# Build for production
npm run build

# Copy built files to assets
cp -r dist/* ../assets/mohcine/
```

This will create a new build with the correct `/` basename.

## Files Changed

1. **`inc/asset-loader.php`** - Removed `crossorigin="anonymous"` that can cause CORS issues
2. **`inc/data.php`** - Added `basename: '/'` to injected data
3. **`page-templates/mohcine-layout.php`** - Added runtime history patch
4. **`assets/mohcine/.htaccess`** - Created for proper MIME types
5. **`mohcine-src/src/App.tsx`** - Updated to read basename dynamically (requires rebuild)

## Verification Checklist

After upload:

1. ☐ Clear browser cache
2. ☐ Clear any WordPress/hosting cache
3. ☐ Visit https://tsst.qairouan.org.sa/
4. ☐ Check browser console for errors (F12 > Console)
5. ☐ Check Network tab for 404 errors on JS/CSS files
6. ☐ Test navigation to /about, /news, etc.

## Troubleshooting

### JS/CSS files return 404
- Check file permissions (should be 644)
- Verify files exist in `/assets/mohcine/assets/`

### Page loads but React doesn't render
- Check browser console for JavaScript errors
- Verify `window.Mohcine_DATA` is defined (run in console)

### Navigation doesn't work
- Use Option A or B above to fix routing
- Check `.htaccess` rules are correct
