import React, { Component } from "react";

class H15 extends Component {
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

        <h1 style={{ color: isClicked ? "green" : "pink" }}>Привет, мир!</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}><button onClick={this.handleClick}>Жми меня</button>
        </div>
      </div>
    );
  }
}

export default H15;
