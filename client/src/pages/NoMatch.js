import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
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
        <Footer />
      </Container>
    );
  }
}

export default NoMatch;
