import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class NoMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
              <h1 className="page404">Error: 404 - Page Not Found</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NoMatch;
