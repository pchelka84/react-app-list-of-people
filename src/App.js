import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28" />
        <Person name="Jane" age="24">
          My hobbies: reading
        </Person>
        <Person name="Jake" age="32" />
      </div>
    );
  }
}

export default App;
