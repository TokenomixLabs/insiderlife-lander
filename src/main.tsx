
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Add verbose console logging to help debug
console.log("Main.tsx executing - Build timestamp: " + new Date().toISOString());
console.log("Browser: " + navigator.userAgent);
console.log("URL: " + window.location.href);
console.log("Path: " + window.location.pathname);
console.log("Hostname: " + window.location.hostname);

// Create a fallback element if mounting fails
const createFallbackUI = () => {
  return `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #060821; color: white; text-align: center; padding: 20px;">
      <div>
        <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2rem; margin-bottom: 1rem;">InsiderLife</h1>
        <p style="margin-bottom: 1rem;">Unable to load the application</p>
        <button onclick="window.location.reload(true)" style="padding: 10px; background: linear-gradient(to right, #8B5CF6, #3B82F6); color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Application
        </button>
      </div>
    </div>
  `;
};

// Ensure DOM is fully loaded before mounting
function mountApp() {
  console.log("Attempting to mount application");
  
  // Get or create the root element
  let rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.warn("Root element not found - creating one");
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  } else {
    console.log("Root element found");
  }
  
  try {
    // Create React root and render
    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    console.log("Application successfully mounted");
  } catch (error) {
    console.error("Failed to render app:", error);
    rootElement.innerHTML = createFallbackUI();
  }
}

// Wait for DOM to be ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
