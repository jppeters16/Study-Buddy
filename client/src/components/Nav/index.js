import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <LoginForm />
      <Link to="/getQuestions">Add Questions</Link><span style={{padding:'10px'}}>|</span>
      <Link to="/test">Start Quiz</Link>
      

    </nav>
  );
}

export default Nav;