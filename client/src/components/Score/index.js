import React from "react";
import "./style.css";

function Score(props) {
  return (
     <div className="scoreBoard">
      <nav className="navbar fs-20">
        <div id="score">Correct: {props.correct}</div>
        
        <div id="hScore">Incorrect: {props.wrong}</div>
        <p onClick={() => props.restartGame()} id="restart">Restart Game</p>
      </nav>
    </div>
  );
}

export default Score;