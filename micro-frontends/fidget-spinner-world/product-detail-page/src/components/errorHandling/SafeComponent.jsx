import React, { Component } from "react";

/**
 * To implement an error boundary component, you need to provide static getDerivedStateFromError which lets you update state in response to an error and display an error message to the user.
 * You can also optionally implement componentDidCatch to add some extra logic,
 * for example, to log the error to an analytics service.
 * Reference: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 * This one does not work very well
 */
export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: { message: "", stack: "" },
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError = (error) => {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  };

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    //logErrorToMyService(error, info.componentStack);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // return this.props.fallback;
      return this.props.fallback;
    }
    return this.props.children;
  }
}
