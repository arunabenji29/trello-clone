import React from 'react'

const InProgress = (props) => {
    return (
        <div >
            <form>
            <input 
                    placeholder = 'add an item'
                    value = {props.inProp.task}
                    onChange = {props.handleInprogressChange}
                    name = 'task'
                />
                <button onClick = {props.addInProgress}>Add Item</button>   
            </form>
        </div>
    )
}

export default InProgress