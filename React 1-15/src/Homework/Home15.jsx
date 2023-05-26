import React, { Component } from "react";

class Home15 extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  }

  render() {
    const { isClicked } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <h1 style={{ color: isClicked ? "green" : "pink" }}>Привет, мир!</h1>
      </div>
    );
  }
}

export default Home15;
