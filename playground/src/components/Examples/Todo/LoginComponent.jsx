import React, { Component } from 'react';
import AuthenticationService from './api/AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            username: 'jason',
            password: 'jason',
            loginFailed: false,
            showMessage: false,
        }
    }

    handleFormItemChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        if (this.state.username === 'jason' && this.state.password === 'jason') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.setState({
                loginFailed: false,
                showMessage: true,
            })
            //https://github.com/ReactTraining/history/blob/master/docs/api-reference.md
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState({
                loginFailed: true,
                showMessage: false,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    {/* <ShowInvalidCredential loginFailed={this.state.loginFailed}></ShowInvalidCredential> */}
                    {this.state.loginFailed && <div className='myDiv'><h4 className="alert alert-warning">Invalid Credentials</h4></div>}
                    {/* <ShowingSuccessMessage showMessage={this.state.showMessage  }></ShowingSuccessMessage> */}
                    {this.state.showMessage && <div className='myDiv'><h4>Login Successfully</h4></div>}
                Username:
                <input type="text"
                        name='username'
                        value={this.state.username}
                        placeholder="inupt your name"
                        onChange={this.handleFormItemChange}
                    />
                Password:
                <input type="password"
                        name='password'
                        value={this.state.password}
                        placeholder="inupt your password"
                        onChange={this.handleFormItemChange}
                    />
                    <button className="btn btn-lg btn-primary" onClick={this.loginClicked}>login</button>

                </div>
            </div>
        )
    }
}


export default LoginComponent
