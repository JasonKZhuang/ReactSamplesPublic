import React from 'react'

//Using CSS And SASS Stylesheets
import './CSS_SASS_Stylesheets.css'

//using styled-components
//npm install styled-components --save
import styledComponents from 'styled-components';

//Import the stylesheet Module in your component
import stylesModule from './MyStyle.module.css'; 

//Using styled-components to style components
const Box = styledComponents.div`
    margin: 10px auto;
    border: 5px solid yellow;
    width: 500px;
    height: 50px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//Using styled-components to style components
const Content = styledComponents.p`
    font-size: 16px;
    text-align: center;
    color: red;
`;

//Using JavaScript Object to style HTML element
const myJsObjectStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

function StyleInCss() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: "red" }}>Hello Style, Using Inline Styling, camelCased Property Names </h3>
            <h3 style={myJsObjectStyle}>Hello Style, Using JavaScript Object to style HTML element</h3>
            <h3 className={stylesModule.bigBlue}>Hello Style, Using Style Module to style HTML element</h3>
            <div className="box">
                <p className="box_content"> Hello Style, Using CSS Stylesheet </p>
            </div>
            <Box>
                <Content>Hello Style, Using styled-components to style components</Content>
            </Box>
        </div>
    )
}

export default StyleInCss
