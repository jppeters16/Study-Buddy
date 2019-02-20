import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


class Homepage extends Component {
  constructor(props) {
    super(props);
  


  this.state = {
  loginFail: false
  };
}

render() {
    return (
    
      <Container fluid>
      <Nav />
        <Row>
          <Col size="md-12">
      
            <Jumbotron>
            <MyContext.Consumer>
              {({ currentUser }) => (
                <h1 className="App-title">
                  {currentUser ? <Redirect to="/getQuestions"/> : "Welcome to StudyBuddy, please Log In!"}
                </h1>
              )}
            </MyContext.Consumer>
            <Link to="/register"><h3>Click Here to Register</h3></Link>
            </Jumbotron>
          </Col>
        </Row>

        </Container>
    )
  }
}

export default Homepage;