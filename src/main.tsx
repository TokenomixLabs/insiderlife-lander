
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Add verbose console logging to help debug
console.log("Main.tsx executing - Build timestamp: " + new Date().toISOString());
console.log("Browser: " + navigator.userAgent);
console.log("URL: " + window.location.href);
console.log("Path: " + window.location.pathname);

// Create a fallback element if mounting fails
const createFallbackUI = (error: any) => {
  console.error("Fatal application error:", error);
  return `
    <div style="padding: 20px; font-family: system-ui, sans-serif;">
      <h1>Application Error</h1>
      <p>Unable to initialize the application. Please try refreshing the page.</p>
      <p>Error details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload(true)" style="padding: 10px; background: linear-gradient(to right, #8B5CF6, #3B82F6); color: white; border: none; border-radius: 4px; cursor: pointer;">
        Reload Application
      </button>
    </div>
  `;
};

// Mount the application with multiple fallbacks
try {
  console.log("Attempting to mount application");
  
  // Find or create root element
  let rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.warn("Root element not found - creating one");
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  } else {
    console.log("Root element found");
  }
  
  // Clear any existing content (fallback UI)
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }
  
  // Create React root and render
  try {
    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    console.log("Application rendered successfully");
    
    // Verify render worked
    setTimeout(() => {
      if (rootElement.children.length === 0) {
        console.error("Application may have rendered but produced no DOM elements");
        rootElement.innerHTML = createFallbackUI(new Error("No DOM elements rendered"));
      } else {
        console.log("Application rendering confirmed with DOM elements present");
      }
    }, 1000);
    
  } catch (renderError) {
    console.error("Failed during React rendering:", renderError);
    rootElement.innerHTML = createFallbackUI(renderError);
  }
} catch (error) {
  console.error("Critical application initialization error:", error);
  const fallbackElement = document.getElementById("root") || document.body;
  fallbackElement.innerHTML = createFallbackUI(error);
}
