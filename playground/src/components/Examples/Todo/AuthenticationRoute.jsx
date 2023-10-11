import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthenticationService from './api/AuthenticationService.js';

class AuthenticationRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            // using ... this.props to inherit all parent parameters
            return <Route {...this.props}></Route>
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticationRoute
