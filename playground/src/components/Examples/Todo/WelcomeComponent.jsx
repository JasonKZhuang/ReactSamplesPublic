import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HelloWorldService from './api/HelloWorldService.js'
class WelcomeComponent extends Component {
    constructor(props) {
        super()

        this.state = {
            welcomeMessage: '',
            username: props.match.params.username
        }
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h1>Welcome {this.props.match.params.username}</h1>
                    <br />
                    {/* the a element will refresh the whole page */}
                    You can manage your TodoList: <a href='/todos'>- Refresh the whole page</a>
                    <br />
                    You can manage your TodoList: <Link to='/todos'>- Refresh the individual component</Link>
                </div>
                <div className='container'>
                    click here to call REST hello service
                    <button onClick={this.retrieveWelcomeMessage}
                        className="btn btn-success">
                        Get Welcome Message
                    </button>

                    <button onClick={this.retrieveWelcomeMessagePathVarible}
                        className="btn btn-success">
                        Get Welcome Message With Name
                    </button>
                </div>

                <div className='container'>
                    <h3> {this.state.welcomeMessage}</h3>
                </div>
            </>
        )
    }

    //asynchronous operation
    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHellowWorldService()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    retrieveWelcomeMessagePathVarible = () => {
        HelloWorldService.executeHellowWorldPathVaribleService(this.state.username)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse = (response) => {
        this.setState({
            welcomeMessage: response.data.name
        })
    }

    handleError = (error) => {
        console.log("========>" + error);
        let errorMessage = '';
        if (error.message) {
            errorMessage += error.message;
        }

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message;
        }

        this.setState({
            welcomeMessage: errorMessage
        })
    }
}

export default WelcomeComponent
