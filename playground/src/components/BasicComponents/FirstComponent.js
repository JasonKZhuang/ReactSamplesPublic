import React, { Component } from 'react'

//the name of a component must start with a capital letter
class FirstComponent extends Component {
    render() {
        return (
            <div className='firstComponent'>
                <h2> The example of basic components </h2>
                <h4>This is the FirstComponent</h4>
            </div>
        )
    }
}

export class FirstComponentInside extends Component {
    render() {
        return (
            <div className='firstComponentInside'>
                <h4>This is the a Component within the FirstComponent, which can be used by Curly BRACEs in the import</h4>
            </div>
        )
    }
}

export default FirstComponent
