import React from 'react'
import EachBacklog from '../item/EachBacklog'

const BacklogList = (props) => {
     
    return (
        <div>
            {props.blist.map(task => (
                <EachBacklog key={task.id} taskData={task} nextClick={props.nextClick}/>                

            ))}
        </div>
    )
}

export default BacklogList