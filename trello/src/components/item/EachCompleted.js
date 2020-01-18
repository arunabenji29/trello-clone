import React from 'react'

const EachCompleted = (props) => {

    return (
        <div className='item' key={props.taskData.id}>
            <button onClick={(event) => props.prevClick(event, props.taskData.id)}> &lt;</button>
            <p>{props.taskData.task}</p>
            
        </div>
    )
}

export default EachCompleted