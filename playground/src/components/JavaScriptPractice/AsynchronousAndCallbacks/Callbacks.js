//Reference: https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks

//A callback is a simple function that's passed as a argument value to another function, and will only be executed when the event happens.
// window.addEventListener('load', () => {
//  //window loaded
//  //do what you want
// })

// setTimeout(() => {
//  // runs after 2 seconds
// }, 2000)

//Handling errors in callbacks
//How do you handle errors with callbacks? 
//One very common strategy is to use what Node.js adopted: 
// the first parameter in any callback function is the error object: error-first callbacks
//
//If there is no error, the object is null.
//If there is an error, it contains some description of the error and other information.

/*
fs.readFile('/file.json', (err, data) => {
 if (err !== null) {
  //handle error
  console.log(err)
  return
 }
 //no errors, process data
 console.log(data)
})
*/

