import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { constants } from "zlib";

class App extends Component {
  state = {
    persons: [
      { id: "sdfasd", name: "Max", age: 28 },
      { id: "nfghdg", name: "Jane", age: 34 },
      { id: "lhukmg", name: "Jake", age: 32 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
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
      backgroundColor: "green",
      color: "white",
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
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // let classes=['red', 'bold'].join(' ') // 'red bold'

    const classes = []; // "red bold"
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>

        <button style={style} onClick={this.togglePerosonsHandler}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
