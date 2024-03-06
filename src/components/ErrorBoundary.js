import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false
    }
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({hasErrors: true});
  }

  render() {
    if(this.state.hasErrors) {
      return <p style={{textAlign: "center"}}>Something went wrong.</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
