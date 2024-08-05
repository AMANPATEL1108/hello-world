import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import React, { Component } from "react";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Greet name="Jay" heroName="superman"></Greet>
        <Welcome name="Jay" heroName="flash" />
        {/* <Message /> */}
        {
          /* 
          <p>this is Children Props</p>
        </Greet>
        <Greet name="RS" heroName="superman">
          <button>Action</button>
        </Greet>*/
          // <Welcome name="GT" heroName="batman" />
          // <Welcome name="RS" heroName="superman" />
          /* 
  <Welcome name="Jay" heroName="flash" /> */
          // <Greet name="Jay" heroName="flash" />
        }
      </div>
    );
  }
}
export default App;
