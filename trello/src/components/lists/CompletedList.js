import React from 'react'
import EachCompleted from '../item/EachCompleted'

const CompletedList = (props) => {
    return (
        <div>
            {props.clist.map(task => (
                <EachCompleted key={task.id} taskData={task} prevClick={props.prevClick}/>

            ))}
        </div>
    )
}

export default CompletedList