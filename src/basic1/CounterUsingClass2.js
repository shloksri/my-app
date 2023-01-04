import React, { Component } from "react";

export default class CounterUsingClass2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  add = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  sub = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  render() {
    return (
      <div>
        class 2<button onClick={this.add}>+ Add</button>
        Counter: {this.state.count}
        <button onClick={this.sub}>- Sub</button>
      </div>
    );
  }
}
