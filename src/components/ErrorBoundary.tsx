import React, { Component, ReactNode } from 'react';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<{children: ReactNode}, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Something went wrong</h3>
          <p>Please refresh the app</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;