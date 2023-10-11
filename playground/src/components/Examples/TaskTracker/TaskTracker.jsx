import React from 'react'
import Header from './Header'
import './TaskTracker.css'

function TaskTracker() {
    return (
        <div>
            <Header title="Hello, This is a Title "></Header>
            <Header title={2}></Header>
        </div>
    )
}

export default TaskTracker
