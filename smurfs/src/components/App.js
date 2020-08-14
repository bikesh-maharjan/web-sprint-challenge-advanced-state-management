import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO SMURF VILLAGE!</h1>

        <SmurfForm />
        <SmurfList />

        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
