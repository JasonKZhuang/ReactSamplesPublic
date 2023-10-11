import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const headingStyle={
    color: 'red',
    backgroundColor: 'blue',
}
const Header = (props) => {
    
    const handleOnClick=(e)=>{
        console.log(e);
    }
    
    
    return (
        <header className='header'>
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{props.title}</h1>
            <h2 style={headingStyle}>{props.title}</h2>
           <Button color='gree' text='Add' onClick={handleOnClick}/>
        </header>
    )
}

// const Header = ({title}) => {
//     return (
//         <header>
//             <h1>{title}</h1>
//         </header>
//     )
// }

Header.defaultProps = {
    title: "The default value: Task Tracker",
}

Header.protoTypes = {
    title: PropTypes.string,
}

export default Header
