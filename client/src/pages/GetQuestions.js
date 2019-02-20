import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { QuestionList, QuestionListItem } from "../components/QuestionList";
import { Input, FormBtn } from "../components/Form";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";
import { Redirect } from 'react-router';


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
    .then(res => this.setState({ allQuestions : res.data.questions }))
    .catch(err => console.log(err));
    console.log(this.state.allQuestions);
  }

  handleGetUserQuestions= () => {
    API.getUser(this.context.currentId)
    .then(res => this.setState({ allQuestions : res.data.questions }))
    .catch(err => console.log(err));
  }

  deleteQuestion = id => {
    API.deleteQuestion(id)
    .then(res=> console.log(res.data))

    API.getUser(this.context.currentId)
    .then(res=>this.setState({allQuestions:res.data.questions}))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({ [name]: value, event: event })
  }

  ///////////////////////////save question////////////////////////
  handleQuestion=(currentId)=> {
     const sendIt = {
       question: this.state.question,
       answer: this.state.answer
     };

     API.saveQuestion(sendIt)
     .then(res=>API.updateUserQuestion(currentId, { "$push": {questions:res.data._id}}))
     .then(res=>API.getUser(this.context.currentId))
     .then(res=>this.setState({allQuestions:res.data.questions, answer:"", question:""}))
    }
  ////////////////////////save user//////////////////////////////added prevent default
  saveUser=()=> { 
    console.log("started................");
    const sendIt = {
      userName: "Ron",
      password: "1234",
      firstName: "Ron",
      lastName: "Burgundy",
      saved: true,
      createDate: new Date(Date.now())
    }

    API.saveUser(sendIt).then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
  
    return (
    
      <Container fluid>
      <Nav />
        <Row>
          <Col size="md-12">
           <div style={{height:'50px'}}>
            <MyContext.Consumer>
              {({ currentUser }) => (
                <h1 className="App-title" style={{textAlign:"center"}}>
                  {currentUser ? `Welcome ${currentUser}! Add Questions Below.` : <Redirect to="/"/>}
                </h1>
              )}
            </MyContext.Consumer>
            </div>
          </Col>
        </Row>
          <MyContext.Consumer>
              {({ auth, currentId }) => (
                auth ? (
          <Row>
           <Col size="md-12">  
            <form>
              <Input
                value={this.state.question}
                onChange={this.handleInputChange}
                name="question"
                placeholder="Term"
              />
              <Input
                value={this.state.answer}
                onChange={this.handleInputChange}
                name="answer"
                placeholder="Definition"
              />
            </form>
            <FormBtn
                disabled={!(this.state.question) || !(this.state.answer)}
                onClick={()=>this.handleQuestion(currentId)}
              >
                Submit
              </FormBtn>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.allQuestions.length ? (
              <QuestionList>
              {this.state.allQuestions.map(ques=> (
              
                <QuestionListItem
                  key = {ques._id}
                  id = {ques._id}
                  answer = {ques.answer}
                  question = {ques.question} 
                  deleteQuestion = {this.deleteQuestion}      
                  />
                )
                )}
            </QuestionList>
            ) : (
          
              <h2>No Questions Yet Entered</h2>
            )}
           </Col>
          </Row>
           ) : (<h2></h2>))}
            
           </MyContext.Consumer>
        </Container>
    )
  }
}
Questions.contextType = MyContext;
export default Questions;
