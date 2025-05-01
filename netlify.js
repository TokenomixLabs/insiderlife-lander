
// This is a special helper script for Netlify deployment
console.log('Netlify deployment script running at', new Date().toISOString());

// Create more aggressive no-cache files
const fs = require('fs');

try {
  // Create _redirects file to ensure proper SPA routing
  fs.writeFileSync('./dist/_redirects', `/* /index.html 200`);
  console.log('Successfully created _redirects file');
  
} catch (error) {
  console.error('Error creating deployment files:', error);
}
