import React from 'react';
const tasks=[
    {
        id:1,
        text:"See Doctor",
        day:'2021-01-01 10:00',
        reminder: true,
    },
    {
        id:1,
        text:"Go to work",
        day:'2021-02-02 10:00',
        reminder: false,
    },
    {
        id:1,
        text:"Sleeping",
        day:'2021-03-03 10:00',
        reminder: false,
    }

];

const Task = () => {
    return (
        <>
            {
                tasks.map(
                    (task)=>(
                        <h3 key={task.id}>{task.text}</h3>
                    )
                )
            }
        </>
    )
}

export default Task
