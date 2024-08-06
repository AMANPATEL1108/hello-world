import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import React, { Component } from "react";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Classclick from "./components/Classclick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyle.module.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="error">Error </h1>
        <h1 className={styles.success}>Sucess</h1>
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <Classclick /> */}
        {/* <Counter />
        <Greet name="Jay" heroName="superman"></Greet>
        <Welcome name="Jay" heroName="flash" /> */}
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
