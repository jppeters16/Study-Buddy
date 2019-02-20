import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import "./style.css";


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.userInput = React.createRef();
    this.passwordInput = React.createRef();

    this.state = {};
  }


  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { currentUser, logIn, logOut } = value;
          return currentUser ? (
            <span style={{paddingRight: "10px"}}>
              <span className="loggedInUser">Logged in as, {currentUser}</span>
              <button className="btn-primary" onClick={logOut}>Log Out <i class="fas fa-sign-out-alt"></i></button>
            </span>
          ) : (
            <div>
              <form style={{paddingRight: "10px"}}
              >
                <input className="usernameInput" style={{borderRadius:"5%"}} placeholder="Username" ref={this.userInput} />
                <input className="passwordInput" style={{borderRadius:"5%"}} placeholder="Password" ref={this.passwordInput} />
                <button
                   className="btn-primary" 
                  onClick={() => {
                    logIn(this.userInput.current.value, this.passwordInput.current.value);
                  }}
                >
                 Log In <i class="fas fa-arrow-alt-circle-right"></i>
                </button>
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default LoginForm;
