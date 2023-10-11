import React, { Component, createRef } from "react";
 
class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldA: "",
    };

    //define a inpute HTML element Null reference pointer
    this.myInputRef = createRef(null);

    //define a reference for any HTML element
    this.myElementRef = createRef(null);

    //define a set Function with a parameter as an HTMl element
    this.setMyElementRef = (element) => {
      this.myElementRef = element;
    };
  }

  //using props with the pointer to call the parent function
  callParentFunction = () => {
    let data = "some value in child";
    this.props.parentFunction(data);
  };

  handleChildFunction = () => {
    return "Call the Child function and Return the value from Child to parent";
  };

  componentDidMount() {
    //console.log("==>The child component is mounted");
    //using ref.current to operate the HTML element
    this.myInputRef.current.value = 'Some default value';
    if (this.myElementRef) {
      this.myElementRef.value =
        "I don't use ref.current to reference the any HTML element";
    }
  }

  render() {
    return (
      <div>
        <h4>
          This is the child component, presenting parent variable,
          {this.props.strData}
          {this.props.intData}
        </h4>
        <button onClick={this.callParentFunction}>call Parent Fuction</button>
        <input type="text" ref={this.myInputRef} style={{ width: "500px" }} />
        <input
          type="text"
          ref={this.setMyElementRef}
          style={{ width: "500px" }}
        />
      </div>
    );
  }
}

export default ChildComponent;

