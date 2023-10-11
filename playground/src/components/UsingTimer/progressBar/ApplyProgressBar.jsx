import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function ApplyProgressBar(props) {

    const [myPercentage, setMyPercentage] = useState(0);
    
    
    const handleIncrease = () =>{
        if (myPercentage>100)
        {
            setMyPercentage(100);
        }else
        {
            setMyPercentage(myPercentage + 1);
        }
    }

    const handleDecrease = () =>{
        if (myPercentage<0)
        {
            setMyPercentage(0);
        }else
        {
            setMyPercentage(myPercentage - 1);
        }
    }

    return (
        <div>
            <button onClick={handleIncrease}>
                Increase
            </button>
            <button onClick={handleDecrease}>
                Decrease
            </button>
            <ProgressBar percentage={myPercentage}></ProgressBar>
        </div>
    )
}

export default ApplyProgressBar

