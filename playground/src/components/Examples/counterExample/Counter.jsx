import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends Component {
    //define the inital state in the constuctor
    constructor() {
        super()
        this.state = {
            counterValue: 0
        }
        //if the function is not an ARROW function, 
        //the function needs to be binded this calss
        this.incrementParent = this.incrementParent.bind(this);
        this.decrementParent = this.decrementParent.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className='counter'>
                <h2>This Counter Exmaple</h2>
                <CounterButton by={5}
                    parentFunctionPointer1={this.incrementParent}
                    parentFunctionPointer2={this.decrementParent}>
                </CounterButton>
                <CounterButton by={10}
                    parentFunctionPointer1={this.incrementParent}
                    parentFunctionPointer2={this.decrementParent}>
                </CounterButton>
                <span className='count'>{this.state.counterValue}</span>
                <div>
                    <button className='reset' onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

    //a traditional function within the class
    incrementParent(data) { //update state counter++
        //let lValue = this.state.counterValue + data;
        this.setState(
            (prevState) => {
                return { counterValue: prevState.counterValue + data }
            }
        );
        //console.log(`========================= ${lValue}`);
    }

    //a traditional function within the class
    decrementParent(data) { //update state counter--
        //let lValue = this.state.counterValue - data;
        this.setState(
            (prevState) => {
                return { counterValue: prevState.counterValue - data }
            }
        );
        //console.log(`========================= ${lValue}`);
    }

    reset() {
        this.setState({
            counterValue: 0
        });
    }
}

class CounterButton extends Component {

    //define the inital state in the constuctor
    constructor() {
        super()
        this.state = {
            btnValue: 0
        }
    }

    render() {
        let countStyle = {
            fontSize: '20px',
            padding: '5px 10px',
            color: 'blue',
            display: 'block'
        }

        return (
            <div className='counterButton'>
                {/* refer to the css file */}
                <span className='count'>
                    Apply CSS from file,
                    The child button Value : {this.state.btnValue}
                </span>
                {/* refer to the css variable in the class */}
                <span style={countStyle}>
                    Apply CSS Object Variable in the Class,
                    The child button Value : {this.state.btnValue}
                </span>
                {/* the css apply to this specific object */}
                <span style={{
                    color: 'red',
                    backgroundColor: 'black',
                    padding: '5px 10px',
                    display: 'block'
                }}>
                    Apply inline CSS,
                    The child button value : {this.state.btnValue}
                </span>
                {/* This button call the inner function which calls the parent component function */}
                <button onClick={this.incrementChild}>Call Child Method and Parent Method +{this.props.by}</button>
                <button onClick={this.decrementChild}>Call Child Method and Parent Method -{this.props.by}</button>
                <br />
            </div>
        )
    }

    //An arrow function within the class
    incrementChild = () => { //update state counter++
        let lValue = this.state.btnValue + this.props.by;
        this.setState({
            btnValue: lValue
        });
        this.props.parentFunctionPointer1(this.props.by);
    }

    //a arrow function within the class
    decrementChild = () => { //update state counter--
        let lValue = this.state.btnValue - this.props.by;
        this.setState({
            btnValue: lValue
        });
        this.props.parentFunctionPointer2(this.props.by);
    }
}


//If there is no parameter passing to the Counter class,
// then the defaustProps will work
CounterButton.defaultProps = {
    by: 1,
    otherProp: ''
}

//this is to define the props type
CounterButton.propType = {
    by: PropTypes.number,
    otherProp: PropTypes.string
}

//this is in function component, calling function only needs the function name
// function CounterFunction() {
//     return (
//         <div className='counter'>
//             <h2>This Counter Exmaple</h2>
//             <button onClick={incrementOutSide}>
//                 Click Button +1
//             </button>
//             <span className='count'>0</span>
//         </div>
//     )
// }

// function incrementOutSide() {
//     console.log('increment function');
// }

export default Counter
