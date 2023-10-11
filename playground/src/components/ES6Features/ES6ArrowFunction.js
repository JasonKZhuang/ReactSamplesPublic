import React from 'react'

function ES6ArrowFunction() {
    // ES5
    let myFunction = function (x, y) {
        return x * y;
    }
    console.log("In ES5 to call function: " + myFunction(1,2));

    // ES6 //Arrow Functions
    //const z = (x, y) => x * y;

    //const A = (x, y) => { return x * y };



    return (
        <div>
            using Arrow Function
        </div>
    )
}

export default ES6ArrowFunction
