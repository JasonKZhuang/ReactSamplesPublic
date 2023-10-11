import React, { useState, useEffect } from 'react';

function ES6Example() {

    useEffect(() => {

        return () => {
        }
    }, [])

    // ES5 Function
    let f_let = function (x, y) {
        return x * y;
    }

    //// ES6 Arrow Functions
    const f_const = (x, y) => {
        return x * y
    };

    const f_forOfLoop = () => {
        let cars = ["BMW", "Volvo", "Mini"];
        let x;

        for (x of cars) {
            console.log(x);
            //document.write(x + "<br >");
        }
    }

    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }
    
    let myCar1 = new Car("Ford", 2014);
    let myCar2 = new Car("Audi", 2019);

    return (
        <div>
            <ul>
                <li>1.JavaScript let  let x = 2; </li>
                <li>2.JavaScript const,  const x = 2; </li>
                <li>3.Arrow Functions f_let={f_let(4, 5)}, f_const={f_const(5, 6)}</li>
                <li>4.The For/Of Loop {f_forOfLoop()}</li>
                <li>5.Using a Class: my new Car is {myCar1.name}</li>
            </ul>

        </div>
    )
}

export default ES6Example
