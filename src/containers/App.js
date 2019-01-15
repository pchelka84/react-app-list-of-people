import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persosns";
import Cockpit from "../components/Cockpit/Cockpit";

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePerosonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          ShowPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePerosonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
