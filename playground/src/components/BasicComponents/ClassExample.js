import React, { Component } from 'react'
import PropTypes from 'prop-types'

const options = {
    weekday: 'long'
    , year: 'numeric'
    , month: 'long'
    , day: 'numeric'
    , hour: 'numeric'
    , minute: 'numeric'
    , second: 'numeric'
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

class ClassExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isToggleOn: true,
            id: 10000,

        };

        // This binding is necessary to make `this` work in the callback
        this.handleToggleClickWithBind = this.handleToggleClickWithBind.bind(this);
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }


    //Handling events with React elements is very similar to handling events on DOM elements. 
    //There are some syntax differences.
    //React events are named using camelCase, rather than lowercase.
    //With JSX you pass a function as the event handler, rather than a string.
    handleHrefClick = (e) => {
        //You must call preventDefault explicitly to prevent default behavior in React.
        e.preventDefault();
        console.log('The link was clicked.');
    }

    //this function must have a bind in constructor method
    handleToggleClickWithBind() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    //if this function is not binded, then the dom must use arrow function or bind(this)
    handleToggleClickWithArrow() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    //Passing Arguments to Event Handlers, using arrow function
    handlePassingArgument1(e, id) {
        console.log(e.target.innerText);
        console.log(id);
    }

    //Passing Arguments to Event Handlers, using bind(this)
    handlePassingArgument2(id) {
        console.log(id);
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <InsideComponent name="Sara" />
                <InsideComponent name="Cahal" date={new Date()} />
                <InsideComponent name="Jason" unreadMessages={messages} />
                <a href="#" onClick={this.handleHrefClick}>
                    PreventDefault explicitly to prevent default behavior in React
                </a>
                <br />
                <button onClick={this.handleToggleClickWithBind}>
                    handleToggleClickWithBind {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={() => this.handleToggleClickWithArrow()}>
                    handleToggleClickWithArrow {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br />
                <button onClick={(e) => this.handlePassingArgument1(e, this.state.id)}>
                    Button with Arrow and Pass arguments
                </button>
                <button onClick={this.handlePassingArgument2.bind(this, this.state.id)}>
                    Button with Bind and Pass arguments
                </button>
                <br />
                {button}
                <div>
                    {isLoggedIn
                        ? <LogoutButton onClick={this.handleLogoutClick} />
                        : <LoginButton onClick={this.handleLoginClick} />
                    }
                </div>

            </div>
        )
    }

    componentDidMount() {

    }

}

export class InsideComponent extends Component {
    //Props are Read-Only
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
        }
    };

    timerCallback = () => {
        //Do Not Modify State Directly,Instead, use setState()
        //You can update them independently with separate setState() calls
        this.setState({
            date: new Date()
        });
    }

    render() {

        const unreadMessages = this.props.unreadMessages?this.props.unreadMessages:[];
        return (
            <>
                <h1>Hello, {this.props.name}. &nbsp;
                    {
                        this.state.date &&
                        this.state.date.toLocaleDateString(undefined, options)
                    }
                    {
                        unreadMessages.length > 0 &&
                        <p>You have {unreadMessages.length} unread messages.</p>
                    }
                </h1>
                
            </>
        )
    };

    //lifecycle methods
    componentDidMount() {
        //The componentDidMount() method runs after the component output has been rendered to the DOM. 
        //This is a good place to set up a timer:
        this.timerID = setInterval(
            () => this.timerCallback(),
            1000
        );
    }

    //lifecycle methods
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}


export default ClassExample
