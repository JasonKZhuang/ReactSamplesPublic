import React, { useRef, useState } from 'react'
//https://styled-components.com/docs/basics
//npm install --save styled-components
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
    height: 20px;
    width: 100%;
    background-color: #222;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
    height: 20px;
    width: ${props => props.percentage}%;
    background-color: #6bccf9;
    border-radius: inherit;
    transition: width 0.3s ease-in-out;   
`;

function ProgressBar(props) {
    const clamp = (min, value, max) => {
        return Math.min(Math.max(min, value), max);
    }
    return (
        <Track>
            <Thumb percentage={clamp(0, props.percentage,100)} />
        </Track>
    )
}

export default ProgressBar

ProgressBar.prototype = {
    percentage: PropTypes.number,
}