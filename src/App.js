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

  switchNameHandler = () => {
    // console.log("Was clicked");
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Jane", age: 34 },
        { name: "Jake", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>

        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        >
          My hobbies: reading
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
