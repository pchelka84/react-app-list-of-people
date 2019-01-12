import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Jane", age: 34 },
      { name: "Jake", age: 32 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>

        <button>Switch name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: reading
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[0].age}
        />
      </div>
    );
  }
}

export default App;
