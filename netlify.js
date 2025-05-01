
// This is a special helper script for Netlify deployment
console.log('Netlify deployment script running at', new Date().toISOString());

// Create more aggressive no-cache files
const fs = require('fs');

try {
  // Write _headers file to the dist folder with aggressive no-cache
  fs.writeFileSync('./dist/_headers', `
# Netlify headers file - forces no caching
/*
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
  Surrogate-Control: no-store
  Clear-Site-Data: "cache","storage"

# Extra aggressive no-cache for index.html
/index.html
  Cache-Control: no-store, no-cache, must-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
  Clear-Site-Data: "cache","cookies","storage"
`);
  console.log('Successfully created _headers file');
  
  // Create _redirects file to ensure proper SPA routing
  fs.writeFileSync('./dist/_redirects', `
# Force SPA routing - serve index.html for all paths
/*    /index.html   200
`);
  console.log('Successfully created _redirects file');
  
} catch (error) {
  console.error('Error creating deployment files:', error);
}
