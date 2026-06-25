import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  // error aaya toh yeh chalta hai
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div>Something went wrong: {this.state.message}</div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;