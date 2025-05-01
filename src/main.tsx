
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Add verbose console logging to help debug
console.log("Main.tsx executing - Build timestamp: " + new Date().toISOString());
console.log("Browser: " + navigator.userAgent);
console.log("URL: " + window.location.href);
console.log("Path: " + window.location.pathname);

// Clean up any lingering data that might cause issues
try {
  // Find root element
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found");
    // Create a root element if it doesn't exist
    const newRoot = document.createElement("div");
    newRoot.id = "root";
    document.body.appendChild(newRoot);
    console.log("Created new root element");
    
    createRoot(newRoot).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  } else {
    console.log("Rendering app to existing root element");
    
    // Create a fresh root and render
    createRoot(rootElement).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    
    // Confirm rendering
    console.log("App rendered to DOM");
  }
} catch (error) {
  console.error("Fatal error rendering application:", error);
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: system-ui, sans-serif;">
      <h1>Error Loading Application</h1>
      <p>Please try refreshing the page or clearing your browser cache.</p>
      <p>Error details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload(true)" style="padding: 10px; background: #4444ff; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Hard Refresh Page
      </button>
    </div>
  `;
}
