import React from "react";
import './Task.css'
import {CgClose} from "react-icons/cg"

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    return(
        <div
            className="task-container"
            style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}

        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="button-remove-task" onClick={()=>{handleTaskRemove(task.id)}}>
                    <CgClose/>
                </button>
            </div>
        </div>
    )
}
 
export default Task;