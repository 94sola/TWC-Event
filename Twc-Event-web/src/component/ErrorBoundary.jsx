import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  // When an error is thrown, this will update the state to show an error message
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // This is for logging error details, can be extended for reporting to external services
  componentDidCatch(error, info) {
    console.log('Error caught in ErrorBoundary:', error, info);
  }

  render() {
    // If an error is encountered, render a fallback UI
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong: {this.state.errorMessage}</div>;
    }

    // Otherwise, render the children (your app's components)
    return this.props.children;
  }
}

export default ErrorBoundary;
