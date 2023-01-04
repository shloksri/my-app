import React, { Component } from "react";

export default class CounterUsingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      val: 25,
    };
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }

  add() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  sub() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }
  render() {
    return (
      <div>
        Val: {this.state.val}
        <button onClick={this.add}>+ Add</button>
        Counter: {this.state.count}
        <button onClick={this.sub}>- Sub</button>
      </div>
    );
  }
}
