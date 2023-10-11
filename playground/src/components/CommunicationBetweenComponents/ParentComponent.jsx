//reference:
//Passing Data to Components //https://www.youtube.com/watch?v=ICmMVfKjEuo
//Practical React //https://www.youtube.com/playlist?list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
 
class ParentComponent extends Component {
  constructor(props) {
    super();
    // Don't call this.setState() here!
    this.state = {
      fieldA: "",
      fieldChildValue: "",
    };

    this.myChildRef = React.createRef();
  }

  //the parent function which can pass its pointer to Child component
  parentFunction = (data) => {
    //console.log(`The value is ==== ${data}`);
    this.setState({
      fieldA: "This is a Parent Function Called by child",
      fieldChildValue: data
    });
  };

  callChildComponentMethod = () => {
    //call the child component method and return a value
    let childValue = this.myChildRef.current.handleChildFunction();
    this.setState({
      fieldChildValue: childValue,
    });
  };

  componentDidMount() {
    // console.log(this.myChildRef);
  }

  render() {
    return (
      <div>
        <h4>The example : Child component calls Parent method</h4>
        <ChildComponent
          //passing the parent data to a child, so the child can get this data via this.props.data
          strData={"This data is from Parent"}
          intDate={9999}

          // passing the parent function pointer address to the child,
          // so the child can call this function via this.props.parentfunction
          parentFunction={this.parentFunction}

          //this is the pointer which points to the child Component
          ref={this.myChildRef}
        />
        <h4>{this.state.fieldA}</h4>
        <h4>The example : Parent component calls Child component method</h4>
        <button onClick={this.callChildComponentMethod}>
          Call Child Component Method
        </button>
        <h4>{this.state.fieldChildValue}</h4>
      </div>
    );
  }
}

export default ParentComponent;

