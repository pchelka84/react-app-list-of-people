import React from "react";

const person = () => {
  return (
    <div>
      <p>I'm a Person and I'm {Math.floor(Math.random() * 30)} years old!</p>
    </div>
  );
};

export default person;
