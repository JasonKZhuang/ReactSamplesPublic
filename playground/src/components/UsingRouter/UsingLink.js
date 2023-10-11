//https://reactrouter.com/web/api/Link
import React, { useState, useEffect }  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function UsingLink() {
    return (
        <Router>
            <div>
                <h2>Using Link 提供围绕应用程序的声明式，可访问的导航。</h2>
                <ul>
                    <li>
                        {/* to: string */}
                        <Link to="/">Link to a String Home</Link>
                    </li>
                    <li>
                        {/* to: object ,An object that can have any of the following properties: */}
                        <Link
                            to={{
                                pathname: "/about",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { fromDashboard: false, name:'fsdafd' },
                            }}
                        >Link to an Object About</Link>
                    </li>
                    <li>
                        {/* to: function, A function to which current location is passed as an argument 
                        and which should return location representation as a string or as an object*/}
                        <Link to={location => ({ ...location, pathname: "/dashboard" })}>Link to a function with parameters Dashboard1</Link>
                    </li>
                    <li>
                        <Link to={location => `${location.pathname}?sort=name`}>Link to a function with url parameters Dashboard2</Link>
                    </li>
                    <li>
                        {/* replace: bool, When true, clicking the link will replace 
                        the current entry in the history stack instead of adding a new one.*/}
                        <Link to="/courses" replace> Using replace atrribute to link to Courses component </Link>
                    </li>
                </ul>
                
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about" component={About}/>                        
                    
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/courses">
                        <Courses />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h2 style={{ color: 'red' }}>Home</h2>
        </div>
    );
}

//https://reactrouter.com/web/api/location
function About(props){
    console.log(props.location.state.name);
    return (
        <div>
            <h2 style={{ color: 'yellow' }}>About</h2>
        </div>
    );
}

function Dashboard(props) {
    return (
        <div>
            <h2 style={{ color: 'blue' }}>Dashboard</h2>
            <h3>{props.location}</h3>
        </div>
    );
}

function Courses(props) {
    return (
        <div>
            <h2 style={{ color: 'pink' }}>Courses</h2>
        </div>
    );
}


export default UsingLink
