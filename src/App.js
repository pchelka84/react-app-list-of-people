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

  switchNameHandler = newName => {
    // console.log("Was clicked");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Jane", age: 34 },
        { name: "Jake", age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 34 }, // value a user entered
        { name: "Jake", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!")}
        >
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!!")}
          changed={this.nameChangedHandler}
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
