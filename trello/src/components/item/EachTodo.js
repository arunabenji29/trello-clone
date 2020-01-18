import React from 'react'

const EachTodo = (props) => {

    return (
        <div className='item' key={props.taskData.id}>
            <button onClick={(event) => props.prevClick(event, props.taskData.id)}> &lt;</button>
            <p>{props.taskData.task}</p>
            <button onClick={(event) => props.nextClick(event, props.taskData.id)}> &gt;</button>
        </div>
    )
}

export default EachTodo