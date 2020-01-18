import React from 'react'
import EachProgress from '../item/EachProgress'

const InProgressList = (props) => {
    return (
        <div>
            {props.ilist.map(task => (
                <EachProgress key={task.id} taskData={task} nextClick={props.nextClick} prevClick={props.prevClick}/>

            ))}
        </div>
    )
}

export default InProgressList