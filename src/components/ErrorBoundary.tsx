
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
          <h2 className="text-xl mb-4">Something went wrong loading the application</h2>
          <p className="mb-4">Please try refreshing the page or clearing your browser cache.</p>
          {this.state.error && (
            <div className="mt-4 p-4 bg-red-900/50 rounded max-w-md">
              <p className="font-mono text-sm">{this.state.error.toString()}</p>
            </div>
          )}
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
