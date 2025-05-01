
// This is a special helper script for Netlify deployment
console.log('Netlify deployment script running at', new Date().toISOString());

// Create more aggressive no-cache files
const fs = require('fs');

try {
  // Create _redirects file to ensure proper SPA routing with no caching
  fs.writeFileSync('./dist/_redirects', `
# Force index.html for all routes with no-cache headers
/*    /index.html   200!    Cache-Control=no-store,no-cache,must-revalidate,max-age=0
  `.trim());
  console.log('Successfully created _redirects file');
  
  // Create _headers file with aggressive cache busting
  fs.writeFileSync('./dist/_headers', `
# Force all browsers to not cache any assets
/*
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
  Surrogate-Control: no-store
  Clear-Site-Data: "*"
  Access-Control-Allow-Origin: "*"
  X-Content-Type-Options: nosniff

# Specific aggressive no-cache settings for the index.html
/index.html
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
  Surrogate-Control: no-store
  Clear-Site-Data: "*"
  `.trim());
  console.log('Successfully created _headers file');
  
  console.log('Deployment files created successfully');
} catch (error) {
  console.error('Error creating deployment files:', error);
}
