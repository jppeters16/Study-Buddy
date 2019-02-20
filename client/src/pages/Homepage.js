import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import QuestionCard from "../components/QuestionCard";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.userAnswer = React.createRef();
    this.state = {
      allQuestions: [],
      shuffledQuestions: [],
      question: "",
      answer: "",
      correct: 0,
      wrong: 0,
      notDone: true,
      rightScreen: true,
      correctSound: false
    };
  }

  componentDidMount() {
    API.getQuestions()
      .then(res => this.setState({ allQuestions: res.data }))
      .then(() => console.log(this.state.allQuestions));
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="jumboTitle">Study Buddy</h1>
              <h3 className="jumboSlogan">The Best Way To Learn!</h3>
              <Link to="/register"><h3 className="registrationLink">Sign Up Now!</h3></Link>
            </Jumbotron>
            <span>
              <div className="quesWrap">
                {this.shuffle(this.state.allQuestions)
                  .filter(i => i.active !== false)
                  .slice(0, 1)
                  .map(i => (
                    <div className="exampleCard" key={i._id + "div"}>
                      <QuestionCard
                        key={i._id + "questionCard"}
                        question={i.question}
                      />
                    </div>
                  ))}
              </div>
              <p className="sbDescription">
                <h1 className="whyStudy">Why Study Buddy?</h1>
                Study Buddy is the easiest way to practice and master what
                you’re learning. Create your own flashcards and study sets or
                choose a set already created by one of our many users — it’s up
                to you.
                <br />
                <br />
                With Study Buddy you can:<br />- Put your memory to the test
                <br />- Easily prepare for an upcoming exam<br />- Share
                flashcards with classmates (if you're a student)<br />- Or your
                students (if you're a teacher)
              </p>
            </span>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
