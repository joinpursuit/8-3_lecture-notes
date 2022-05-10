import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    console.log("incrementing...");
    // Use this.setState() to add 1 to the count
    this.setState({ count: this.state.count + 1 });


    // let num = 1
    // num++ // shorthand for: num = num + 1
    // num += 1 // shorthand for: num = num + 1
    
  };

  render() {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        {/* pass a prop called onClick to the button */}
        <button onClick={this.increment}>+1</button>
      </>
    );
  }
}

export default Counter;
