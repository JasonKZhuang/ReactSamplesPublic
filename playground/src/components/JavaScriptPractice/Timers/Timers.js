//
//setTimeout()

setTimeout(() => {
 // runs after 2 seconds
}, 2000);

//or
const myFunction = (firstParam, secondParam) => {
 // do something
}
let firstParam = 0;
let secondParam = "abc";
// runs after 2 seconds
setTimeout(myFunction, 2000, firstParam, secondParam);

//setTimeout returns the timer id. 
//This is generally not used, but you can store this id, and clear it if you want to delete this scheduled function execution:

const id = setTimeout(() => {
 // should run after 2 seconds
}, 2000);

// I changed my mind
clearTimeout(id);

//setInterval()
//setInterval is a function similar to setTimeout, 
//with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify(in milliseconds):

const id2 = setInterval(() => {
 // runs every 2 seconds
}, 2000)

clearInterval(id2);

//It's common to call clearInterval inside the setInterval callback function, to let it auto-determine if it should run again or stop. For example this code runs something unless App.somethingIWait has the value arrived:

const interval = setInterval(() => {
 if (true) {
  clearInterval(interval)
  return
 }
 // otherwise do things
}, 1000)

//Recursive setTimeout
//setInterval starts a function every n milliseconds, without any consideration about when a function finished its execution.
//To avoid this, you can schedule a recursive setTimeout to be called when the callback function finishes:
const myFunction2 = () => {
 // do something
 setTimeout(myFunction2, 1000)
}

setTimeout(myFunction2, 1000)