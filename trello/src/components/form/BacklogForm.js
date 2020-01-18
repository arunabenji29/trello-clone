import React from 'react'

const Backlog = (props) => {
    return (
        <div >
            <form>
                <input 
                    placeholder = 'add an item'
                    value = {props.backlogProp.task}
                    onChange = {props.handleBacklogChange}
                    name = 'task'
                />
                <button onClick = {props.addBackLog}>Add Item</button>    
            </form>
        </div>
    )
}

export default Backlog