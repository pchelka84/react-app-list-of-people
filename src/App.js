import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sdfasd", name: "Max", age: 28 },
      { id: "nfghdg", name: "Jane", age: 34 },
      { id: "lhukmg", name: "Jake", age: 32 }
    ],
    showPersons: false
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

  deletePersonHandler = personIndex => {
    //copying full persons array with the slice()
    // const persons = this.state.persons.slice();
    //copying the full persons array//
    // spreding out the elements of the persosns array
    // into a list of elements, which simply then gets added
    // to [...this.state.persosn]
    // so now we have a new arrray with the object from the old array
    const persons = [...this.state.persons];
    //changing the array by removing one element from personIndex position
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePerosonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>

        <button style={style} onClick={this.togglePerosonsHandler}>
          Switch name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
