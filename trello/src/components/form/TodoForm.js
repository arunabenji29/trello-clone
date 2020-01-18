import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <form>
            <input 
                    placeholder = 'add an item'
                    value = {props.todoProp.task}
                    onChange = {props.handleTodoChange}
                    name = 'task'
                />
                <button onClick = {props.addTodo}>Add Item</button>      
            </form>
        </div>
    )
}

export default Todo