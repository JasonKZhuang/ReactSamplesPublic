/* eslint-disable no-restricted-globals */

//============Arrow functions, the basics=======================================//
//https://javascript.info/arrow-functions-basics
// Arrow functions are handy for one-liners. They come in two flavors:
// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
// With    curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, 
// ,but we need an explicit return to return something.
// syntax: let func = (arg1, arg2, ..., argN) => expression
// let func = function(arg1, arg2, ..., argN) {
//     return expression;
// };
let afSum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log("The arrow function (a,b)=>a+b is " + afSum(1, 2)); // 3

//If we have only one argument n, then parentheses around parameters can be omitted
let afDouble = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log("The arrow function with only one parameter n => n * 2 is " + afDouble(3));

//If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => console.log("Hello!");
sayHi();

//dynamically create a function
let age = window.prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => console.log('Hello, the age is less than 18') :
  () => alert("Greetings!, the age is more than 18");
welcome();

//Multiline arrow functions
let fSum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
console.log(fSum(1, 2)); // 3
//===================================================================//


//============Function expressions=======================================//
//https://javascript.info/function-basics
//There is another syntax for creating a function that is called a Function Expression.
let fShowMessage = function (parameter1, parameter2, ...parameterN) {
  // ...body...
  console.log("===>This is function body.");
};
fShowMessage();
//Please note that this line does not run the function, because there are no parentheses after fShowMessage.
console.log(fShowMessage); // shows the function code
//Here, the function is created and assigned to the variable explicitly, like any other value. 
//No matter how the function is defined, it’s just a value stored in the variable fShowMessage.
//---------------------------------------------------------------------------//


//============Callback functions=======================================//
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
//The arguments showOk and showCancel of ask are called callback functions or just callbacks.

ask(
  "Do you agree?",
  function () { alert("You agreed."); },
  function () { alert("You canceled the execution."); }
);

//---------------------------------------------------------------------------//

//============Functions=======================================//
//https://javascript.info/function-basics
let userName = 'John';
function showMessage(parameter1, parameter2 = "the default value") {
  userName = "Bob"; // (1) changed the outer variable
  let message = "Hello, I'm JavaScript!  " + userName; // local variable + Outer variables  
  console.log(message);
}
showMessage();
//===================================================================//

//============The "switch" statement=======================================//
//https://javascript.info/switch
let a = 2 + 2;
switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert('One or zero');
    break;

  case '2':
    alert('Two');
    break;

  case 3:
    alert('Never executes!');
    break;
  default:
    alert('An unknown value');
}
//===================================================================//

//============Loops: while and for=======================================//
//https://javascript.info/while-for
//===================================================================//


//============Nullish coalescing operator '??'=======================================//
//https://javascript.info/nullish-coalescing-operator
//===================================================================//

//============Logical operators=======================================//
//https://javascript.info/logical-operators
//===================================================================//


//============Comparisons=======================================//
//https://javascript.info/comparison
//===================================================================//


//============Basic operators, maths=======================================//
//https://javascript.info/operators
//===================================================================//



//============Type Conversions=======================================//
//https://javascript.info/type-conversions
//===================================================================//


//============Interaction: alert, prompt, confirm=======================================//
// There are 3 browser-specific functions to interact with visitors:
// 1.alert
// shows a message.
alert("Hello");
// 2.prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
//The syntax: result = prompt(title, [default]);
let promptAge = prompt('How old are you?', 100);
alert(`You are ${promptAge} years old!`); // You are 100 years old!

// 3.confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
//The syntax:result = confirm(question);
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
//==========================================================================//

//============Data Types=======================================//
// There are 8 basic data types in JavaScript.
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint is for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.
// The typeof operator allows us to see which type is stored in a variable.

// Two forms: typeof x or typeof(x).
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.

//String type with initial string value, but then assign a number
//which means dynamically typed - there exist data types, but variables are not bound to any of them
let dyVar = "This is a String";
console.log("The string variable is " + dyVar);
dyVar = 1234.567;
console.log("Reassign the string variable to a number " + dyVar);

//Number Data Type
let dyMyNumber = 123;
dyMyNumber = 123.456;
//infinity
console.log("Infinity", 1 / 0);

//NaN
console.log("not a number" / 2);

//BigInt Data Type
//the "n" at the end means it's a BigInt
const dyBigInt = 12345678901234567890n;

//Backticks:`Hello`
console.log("Using Backticks with variable " + `Hellow, ${dyVar}`);
console.log("Using Backticks with calculation 1+2= " + `Hello, ${1 + 2}`);

//Boolean Data Type
let dyFieldChecked = true;
let dyIsFinished = false;
let dyMybool = (4 > 1);
console.log(dyFieldChecked);
console.log(dyIsFinished);
console.log(dyMybool);

//the null variable
//the special null value does not belong to any of data types
//It forms a separate type of its own which contains only the null value
let dyAge = null;

//the undefined value
let dyUnDefinedValue;
console.log(dyUnDefinedValue);

//The typeof operator
console.log(typeof (undefined)) // "undefined"
console.log(typeof (0)) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math) // "object"  (1)
console.log(typeof null)// "object"  (2)
console.log(typeof alert)// "function"  (3)
//==========================================================================//



//============Constants=======================================//
//constant variable cannot be reassigned
const myBirthday = "01.01.2000";
//myBirthday = "01.01.1999";//Uncaught TypeError: Assignment to constant variable.

//uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
let myColor = COLOR_RED;
//console.log(myColor);
//==========================================================================//


//============Variables=======================================//
//define a variable and assign a string value
let message;
message = "Hello Message";
//console.log(message);

let userName2 = "Jason", userAge = 30, userMesg = "This is Jason";
//console.log(userName);
//console.log(age);
message = userMesg;
//console.log(message);

//repeated 'let' the same variable name leads to an error
//let message="other";

//variable naming
let varName = "camelCase";
let varNAME = "camelCaseUppercase";
let var123 = "characterWithNumber";
let $ = "Dollar sign is ok it is weird";
let _ = "underscore is ok but it is rare"
//==========================================================================//
