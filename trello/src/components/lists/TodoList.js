import React from 'react'
import EachTodo from '../item/EachTodo'

const TodoList = (props) => {
     
    return (
        <div>
            {props.tlist.map(task => (
                <EachTodo key={task.id} taskData={task} nextClick={props.nextClick} prevClick={props.prevClick}/>
                
            ))}
        </div>
    )
}

export default TodoList