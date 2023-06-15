import React from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";

import "../components/TaskDetails.css"
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
    const params = useParams()

    const history = useNavigate();
    
    const handleBackButtom = ()=>{
        history(-1)
    }

  return (
    <>
      <div className="back-buttom-container">
        <Button onClick={handleBackButtom}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
