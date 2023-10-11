// Countdown Timer using Reactjs hooks in exam
// https://www.youtube.com/watch?v=i6E48_L826Y
import React, { useState, useRef, useEffect } from 'react';

function CountdownTimer(props) {
    //we need ref in this, because we are dealing with javascript setIntrval
    //to keep track of it and stop it when needed
    const intervalRef = useRef(null);
    
    // the state for the timer   
    const [timer, setTimer] = useState("00h:00m:00s");

    //this will calculate the difference between the target timer and the current time we have right now
    function getTimerRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total, days, hours, minutes, seconds
        };

    }

    //update the timer and aslo stop it when the timer reach zero
    function startTimer(deadline) {
        let { total, days, hours, minutes, seconds } = getTimerRemaining(deadline);
        if (total >= 0) {
            //update the time
            //check if less than 10 than we need to add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds) 
            );
        } else {
            clearInterval(intervalRef.current);
        }
    }

    //reset the timer starting from the beginning
    //we can also use this function when updating the question
    function clearTimer(endtime) {
        //give an initial value 10 seconds for each question
        //so I set it like this but we can adjust it
        //if you adjust it you should also need to adjust the endtime formula
        setTimer(timer);        
        // if you try to remove this line, the updating of timer variable will be be after 1000ms or 1 second
        // try removing it and you will see the difference
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000);
        intervalRef.current = id;
    }

    function getDeadlineTime() {
        let deadline = new Date();
        //this is where you need to adjust if you intend to add more time from each question
        deadline.setSeconds(deadline.getSeconds() + 11);
        return deadline;
    }


    //this component sets the document title after React updates the DOM:
    //Similar to componentDidMount and componentDidUpdate:
    //now we need a starting point
    //we can use useEffect, so that when the component mounted, the timer will start ASAP
    useEffect(() => {
        clearTimer(getDeadlineTime());
        //this will be run when the component unmounted
        //we need to be sure no memory leak, otherwise our application will crash
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, []); // we put empty array to act as componentDidMount only once

    //another way to call the clearTimer to start the countdown is via an action event from a button
    //first we create a fuction to be called by the buttion
    function btnResetOnClicked() {
        //since we are not sure that interval is running, so we need to clear it
        //this is very important to avoid memory leak
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        clearTimer(getDeadlineTime());
    }
    return (
        <div>
            <h1 style={{ backgroundColor: "#ff7788", height: "100%", textAlign:"center" }} >{timer} </h1>
            <button onClick={btnResetOnClicked}>
                Reset Timer
            </button>
        </div>
    )
}

export default CountdownTimer
