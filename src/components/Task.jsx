import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const history = useNavigate()

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="button-remove-task"
          onClick={() => {
            handleTaskRemove(task.id);
          }}>
          <CgClose />
        </button>
        <button
          className="button-task-details"
          onClick={()=>history("/"+task.title)}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
