import React, { Component } from "react";

class Classclick extends Component {
  clickHandler() {
    console.log("Clicked Button to Click Handler");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default Classclick;
