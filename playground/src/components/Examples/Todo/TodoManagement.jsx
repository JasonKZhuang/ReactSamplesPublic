import React, { Component } from 'react';
import imgStructure from './assets/structure.jpeg';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoListComponent from './TodoListComponent';
import ErrorComponent from './ErrorComponent'

//import AuthenticationService from './AuthenticationService.js';
//https://github.com/ReactTraining/history
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/TodoManagement.css';
import AuthenticationRoute from './AuthenticationRoute';
import TodoFormComponent from './TodoFormComponent';

class TodoManagement extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="todoDiv">
                <h2>The example of TODO management</h2>
                <img src={imgStructure} alt="" />
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticationRoute path="/logout" component={LogoutComponent} />
                        <AuthenticationRoute path="/welcome/:username" component={WelcomeComponent} />
                        <AuthenticationRoute path="/welcome" component={WelcomeComponent} />
                        <AuthenticationRoute path="/todos" exact component={TodoListComponent} />
                        <AuthenticationRoute path="/todos/:id" component={TodoFormComponent} />

                        {/* Adding an Error Component for Invalid URIs 404*/}
                        <Route component={ErrorComponent} />

                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>
            </div>
        )
    }
}

export default TodoManagement
