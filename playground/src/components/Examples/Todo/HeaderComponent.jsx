import React, { Component } from 'react'
import { withRouter } from 'react-router';
import bootstrapIcon from '../../../assets/images/bootstrap-solid.svg';
import AuthenticationService from './api/AuthenticationService.js';
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const username = AuthenticationService.getSessionUsername();

        //console.log(username);
        return (

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <img src={bootstrapIcon}
                            style={{ width: '30px', height: '30px', margin: '0 10px' }}
                            className="d-inline-block align-top"
                            alt="" />
                        Jason React
                    </a>
                    <ul className="navbar-nav">
                        {isUserLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to={'/welcome/' + username}>Home</Link>
                            </li>
                        }
                        {isUserLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/todos">TodoList</Link>
                            </li>
                        }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {isUserLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout"
                                    onClick={AuthenticationService.unRegisterLogin}>
                                    Logout
                            </Link>
                            </li>
                        }
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);