import React from 'react'

const EachBacklog = (props) => {

    return (
        <div className='item' key={props.taskData.id}>
            <p>{props.taskData.task}</p>
            <button onClick={(event) => props.nextClick(event, props.taskData.id)}> &gt;</button>
        </div>
    )
}

export default EachBacklog