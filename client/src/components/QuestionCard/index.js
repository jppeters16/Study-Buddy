import React from "react";
import "./style.css";


function QuestionCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <h1 className="cardText">{props.question}</h1> 
      </div>
    </div>
  );
}

export default QuestionCard;
