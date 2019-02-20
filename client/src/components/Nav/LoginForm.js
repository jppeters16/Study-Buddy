import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import { Input, FormBtn } from "../Form";
import "./style.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userPassword: ""
    };
  }

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, event: event });
  };

  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { currentUser, logIn, logOut } = value;
          return currentUser ? (
            <span style={{ paddingRight: "10px" }}>
              <span className="loggedInUser">Logged in as, {currentUser}</span>
              <button className="btn" id="loginButton" onClick={logOut}>
                Log Out <i class="fas fa-sign-out-alt" />
              </button>
            </span>
          ) : (
            <div className="loginForm">
              <form style={{ paddingRight: "10px" }}>
                <input
                  className="usernameInput"
                  style={{borderRadius:"5%"}}
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                  name="userName"
                  placeholder="Username"
                />
                <input
                  className="passwordInput"
                  style={{
                    borderRadius:"5%"
                  }}
                  value={this.state.userPassword}
                  onChange={this.handleInputChange}
                  name="userPassword"
                  placeholder="Password"
                  type="password"
                />
              </form>
              <button
                className="btn"
                id="loginButton"
                disabled={!this.state.userName || !this.state.userPassword}
                onClick={() => {
                  logIn(this.state.userName, this.state.userPassword);
                }}
              >
                Log In <i class="fas fa-arrow-alt-circle-right" />
              </button>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default LoginForm;
