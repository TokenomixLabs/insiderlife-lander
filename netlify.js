
// This is a special helper script for Netlify deployment
console.log('Netlify deployment script running at', new Date().toISOString());

// Create a _headers file to ensure aggressive cache control
const fs = require('fs');

try {
  // Write _headers file to the dist folder
  fs.writeFileSync('./dist/_headers', `
# Netlify headers file - forces no caching
/*
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
  Surrogate-Control: no-store
  Clear-Site-Data: "cache","storage"
`);
  console.log('Successfully created _headers file');
} catch (error) {
  console.error('Error creating _headers file:', error);
}
