import React from "react";
import "./css.css";


function Score(props) {
  return (
     <div className="scoreBoard" style={{border: "2px solid red"}}>
      <nav className="navbar">
        <div id="score">Number Correct: {props.correct}</div>
        
        <div id="hScore">Number Wrong: {props.wrong}</div>
        <p onClick={() => props.restartGame()} id="restart">Restart Game</p>
      </nav>
    </div>
  );
}

export default Score;