// rce SHOT CUT
// it IS helpful as a visual aid when working with UI inside the JavaScript code.
// It also allows React to show more useful error and warning messages.
// Embedding Expressions in JSX
// Babel is a JavaScript Compiler https://babeljs.io/

import React, { Component } from "react";

const title = "There are examples of using JSX";
const aString = "This is a String variable";
const template = <p>Using a Template with  paragraph element in JSX</p>
const age = 40;

const element = (
  <div>
    <h2>{title}</h2>
    <h3>Using a String function UpperCase, {aString.toUpperCase()}</h3>
    <h3> Using a Date function, {new Date().toLocaleTimeString()}.</h3>
    <h3> {template}</h3>
    <h3> Using a Number, My Age is {age}.</h3>
  </div>
);

const user =
{
  name: "Jason",
  age: 30,
  location: "Sydney"

};

//you can use JSX inside of if statements and for loops,
//assign it to variables, accept it as arguments, and return it from functions:
function getUserName(user) {
  if (user) {
    return <p>Hello, {user.name}!</p>;
  } else {
    return <p>Hello, Stranger.</p>;
  }
}

function getUserLocation(location) {
  if (location) {
    return <p>The user Location is {location}</p>;
  } 
}

function getUserProfessional(professional) {
  if (professional) {
    return <p>The user's professional is {professional}</p>;
  } 
}


export class JSXFirstExample extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      fieldA: "",
    };
  }

  render() {
    return (
      <div>
        {element}
        <h3>
          You can put any valid JavaScript expression inside the curly braces in JSX.
        </h3>
        <span>2+2 = {2 + 2}</span>
        <br />
        <span>user.name = {user.name}</span>
        <br />
        <span>
          Since JSX is closer to JavaScript than to HTML, React DOM uses
          camelCase property naming convention instead of HTML attribute names.
          For example, class becomes className in JSX, and tabindex becomes
          tabIndex.
        </span>
        <h3>Conditional Rendering Examples - if statement</h3>
        {getUserName(user)}
        {getUserLocation(user.location)}
        Nothing will return is the property of the user object doesn't exist
        {getUserProfessional(user.professional)}
                
        <h3>Conditional Rendering Examples - Ternary</h3>
        Using Questions mark ? {user.name? user.name:"Anonymous"}
        
        <h3>Conditional Rendering Examples - Logical and operator</h3>
        User.age larger than 20, the tag will appear:{(user.age && user.age >= 20) && <span>{user.age}</span>}
      </div>
    );
  }
}



export default JSXFirstExample;
