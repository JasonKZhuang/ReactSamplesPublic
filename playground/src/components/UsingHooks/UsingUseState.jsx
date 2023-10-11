import React, { useState } from "react";

function UsingUseState(props) {
  const initialState = 0;
  const [myState, setMyState] = useState(initialState);
  const [users, setUsers] = useState([
    { key: 1, name: "Jason1", location: "Sydney" },
    { key: 2, name: "Jason2", location: "Sydney" },
  ]);

  const someExpensiveComputation = () => {
    return 0;
  };

  //Lazy initial state
  //The initialState argument is the state used during the initial render.
  //In subsequent renders, it is disregarded.
  //If the initial state is the result of an expensive computation,
  //you may provide a function instead, which will be executed only on the initial render:
  const [state2, setState2] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  });

  //use spread operator to merge two objects
  const updateUsers = () => {
    let updatedValues = { key: 3, name: "Peter", location: "Melbourne" };
    let newArray = [...users, updatedValues];
    setUsers(newArray);
  };

  //using the previous state
  return (
    <div className="myDiv">
      <h2>Using Hooks : using useState, using prevState,using object spread syntax ...</h2>
      <h3>Count: {myState}</h3>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              Hello, {user.name} from {user.location}!
            </li>
          );
        })}
      </ul>
      <button onClick={() => setMyState(initialState)}>Reset</button>
      <button onClick={() => setMyState((prevMyState) => prevMyState - 1)}>-</button>
      <button onClick={() => setMyState((prevMyState) => prevMyState + 1)}>+</button>
      <button onClick={updateUsers}>object spread + </button>
    </div>
  );
}

export default UsingUseState;
