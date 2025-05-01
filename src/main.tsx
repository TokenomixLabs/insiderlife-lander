
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Simple initialization without complex retry logic
const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render app:', error);
    
    // Simple fallback if React fails to render
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #060821; color: white; text-align: center; padding: 20px;">
        <div>
          <h2>Unable to load InsiderLife</h2>
          <p>Please try refreshing the page</p>
          <button onclick="window.location.href='/?reload=' + Date.now()" style="padding: 10px; background: linear-gradient(to right, #8B5CF6, #3B82F6); color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">
            Reload Application
          </button>
        </div>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
}
