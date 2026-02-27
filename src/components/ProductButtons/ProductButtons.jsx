import React from "react";
import "./ProductButtons.css"

export default class ProductButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
}

increment() {
    this.setState({ count: ++this.state.count });
  }

  decrement() {
    this.setState({ count: --this.state.count });

    if (this.state.count === -1) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <>
        <button onClick={() => this.decrement()} type="button" className="productButton">➖</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()} type="button" className="productButton">➕</button>
      </>
    );
  }
}
