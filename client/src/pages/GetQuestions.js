import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { QuestionList, QuestionListItem } from "../components/QuestionList";
import { Input, FormBtn } from "../components/Form";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Redirect } from "react-router";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuestions: [],
      question: "",
      answer: "",
      currentID: null
    };
  }

  componentDidMount() {
    API.getUser(this.context.currentId)
      .then(res => this.setState({ allQuestions: res.data.questions }))
      .catch(err => console.log(err));
    console.log(this.state.allQuestions);
  }

  handleGetUserQuestions = () => {
    API.getUser(this.context.currentId)
      .then(res => this.setState({ allQuestions: res.data.questions }))
      .catch(err => console.log(err));
  };

  deleteQuestion = id => {
    API.deleteQuestion(id).then(res => console.log(res.data));

    API.getUser(this.context.currentId)
      .then(res => this.setState({ allQuestions: res.data.questions }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, event: event });
  };

  ///////////////////////////save question////////////////////////
  // Below code currently broken. Kicks user back to homepage when they create a new study card
  ////////////////////////////////////
  // handleQuestion = currentId => {
  //   const sendIt = {
  //     question: this.state.question,
  //     answer: this.state.answer
  //   };

  //   API.saveQuestion(sendIt)
  //     .then(res =>
  //       API.updateUserQuestion(currentId, {
  //         $push: { questions: res.data._id }
  //       })
  //     )
  //     .then(res => API.getUser(this.context.currentId))
  //     .then(res =>
  //       this.setState({
  //         allQuestions: res.data.questions,
  //         answer: "",
  //         question: ""
  //       })
  //     );
  // };
  handleQuestion = currentId => {
    console.log(currentId);
    const sendIt = {
      question: this.state.question,
      answer: this.state.answer
    };
    var tempID = "5c5ecc4c2aac9312fcb3f439";
    API.saveQuestion(sendIt)
      //.then(res => console.log(res.data._id))
      //.then(res=>API.updateUserQuestion(tempID, {questions:res.data._id})) //FINISH TO UPDATE USER WITH ID FOR QUESTION
      .then(this.setState({ question: "", answer: "" }))
      .then(res =>
        API.getQuestions().then(res =>
          this.setState({ allQuestions: res.data })
        )
      )
      .catch(err => console.log(err));
  };
  ////////////////////////save user//////////////////////////////added prevent default
  saveUser = () => {
    console.log("started................");
    const sendIt = {
      userName: "Ron",
      password: "1234",
      firstName: "Ron",
      lastName: "Burgundy",
      saved: true,
      createDate: new Date(Date.now())
    };

    API.saveUser(sendIt)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <MyContext.Consumer>
              {({ currentUser }) => (
                <h1 className="createIntro">
                  {currentUser ? (
                    `Welcome, ${currentUser}!`
                  ) : (
                    <Redirect to="/" />
                  )}
                </h1>
              )}
            </MyContext.Consumer>
          </Col>
        </Row>
        <MyContext.Consumer>
          {({ auth, currentId }) =>
            auth ? (
              <Row>
                <Col size="md-12">
                  <p className="addToSet">Add a new card to the set</p>
                  <form>
                    <Input
                      value={this.state.answer}
                      onChange={this.handleInputChange}
                      name="answer"
                      placeholder="Term"
                    />
                    <Input
                      value={this.state.question}
                      onChange={this.handleInputChange}
                      name="question"
                      placeholder="Definition"
                    />

                    <FormBtn
                      disabled={!this.state.question || !this.state.answer}
                      onClick={() => this.handleQuestion(currentId)}
                    >
                      Submit <i class="fas fa-check-circle" />
                    </FormBtn>
                  </form>
                </Col>

                <Col size="md-12 sm-12">
                  {this.state.allQuestions.length ? (
                    <QuestionList>
                      {this.state.allQuestions.map(ques => (
                        <QuestionListItem
                          key={ques._id}
                          id={ques._id}
                          answer={ques.answer}
                          question={ques.question}
                          deleteQuestion={this.deleteQuestion}
                        />
                      ))}
                    </QuestionList>
                  ) : (
                    <h3 className="createIntro">No Questions Entered Yet!</h3>
                  )}
                </Col>
                <Footer />
              </Row>
            ) : (
              <h2 />
            )
          }
        </MyContext.Consumer>
      </Container>
    );
  }
}
Questions.contextType = MyContext;
export default Questions;
