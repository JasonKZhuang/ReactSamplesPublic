import React, { useState, useEffect } from 'react';

//Hooks are a new addition in React 16.8. 
//They let you use state and other React features without writing a class.
//Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
//Hooks don’t work inside classes — they let you use React without classes.
//Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//Only call Hooks from React function components. 
//Don’t call Hooks from regular JavaScript functions. 
//https://reactjs.org/docs/hooks-state.html
function HooksExample(props) {

    // Declare a new state variable, which we'll call "count"
    const [myInteger, setMyInteger] = useState(0);
    const [myBoolean, setMyBoolean] = useState(false);
    const [myString, setMyString] = useState("");
    const [myObjects, setMyObjects] = useState([{ id: 0, text: 'Number One' }, { id: 1, text: 'Number Two' },]);

    //this component sets the document title after React updates the DOM:
    //Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${myInteger} times`;
    });

    useEffect(() => {
        //we can load data from web service in here
        
        
        //ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            //ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    },[]);

    function handleChange(params) {
        setMyBoolean(true);
        setMyString("abc@gmail.com");
        var myObj = [{ text: 'First' }, { text: 'Second' }];
        setMyObjects(myObj);
    }


    return (
        <div>
            <p>You clicked {myInteger} times</p>
            <button onClick={() => setMyInteger(myInteger + 1)}>
                Click me
            </button>
        </div>
    )
}

export default HooksExample
