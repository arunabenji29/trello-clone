import React from 'react'

const Completed = (props) => {
    return (
        <div>

            <form>
            <input 
                    placeholder = 'add an item'
                    value = {props.completedProp.task}
                    onChange = {props.handleCompletedChange}
                    name = 'task'
                />
                <button onClick = {props.addCompleted}>Add Item</button>    
            </form>
        </div>
    )
}

export default Completed