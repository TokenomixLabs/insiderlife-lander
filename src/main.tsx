
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Add console logging to help debug
console.log("Main.tsx executing");

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found");
    document.body.innerHTML = "<div>Error: Root element not found</div>";
  } else {
    console.log("Rendering app to root element");
    createRoot(rootElement).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  }
} catch (error) {
  console.error("Error rendering application:", error);
  document.body.innerHTML = "<div>Error loading the application. Please try again later.</div>";
}
