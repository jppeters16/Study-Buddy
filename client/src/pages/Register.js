import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      name: "",
      lastName: "",
      notComplete: true
    };
  }

  saveUser = () => {
    console.log("started................");
    const sendIt = {
      userName: this.state.userId,
      password: this.state.password,
      firstName: this.state.name,
      lastName: this.state.lastName,
      saved: true,
      createDate: new Date(Date.now())
    };

    API.saveUser(sendIt)
      .then(res => console.log(res))
      .then(res =>
        this.setState({
          userId: "",
          password: "",
          name: "",
          lastName: "",
          notComplete: false
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, event: event });
    console.log(this.state);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Link to="/">
              <i
                class="fas fa-strikethrough"
                style={{
                  fontSize: "40px",
                  marginLeft: "40px",
                  marginTop: "15px"
                }}
              />
              tudy Buddy
            </Link>
            
            <h1 className="registerTitle">Register</h1>
            <form style={{ paddingTop: "20px" }}>
              <Input
                value={this.state.userId}
                onChange={this.handleInputChange}
                name="userId"
                placeholder="User ID"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
            </form>
            <FormBtn
              disabled={
                !this.state.userId ||
                !this.state.password ||
                !this.state.name ||
                !this.state.lastName
              }
              onClick={() => this.saveUser()}
            >
              Submit
            </FormBtn>
          </Col>
          {this.state.notComplete ? (
            <h2 />
          ) : (
            <div style={{ margin: "0 auto" }}>
              <h1 className="regComplete">Registration Successful!</h1>
              <Link to="/">
                <h2
                  className="regHomeBtn"
                  style={{
                    width: "100px",
                    textAlign: "center",
                    color: "#40676E",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    margin:"0 auto",
                    padding:"5px",
                    fontSize: "20px"
                  }}
                >
                  Return <i class="fas fa-home" />
                </h2>
              </Link>
            </div>
          )}
        </Row>
      </Container>
    );
  }
}
export default Register;
