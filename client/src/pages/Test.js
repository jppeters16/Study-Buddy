import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import QuestionCard from "../components/QuestionCard";
import { MyContext } from "../MyContext";
import { FormBtn } from "../components/Form";
import Score from "../components/Score";
import {Animated} from "react-animated-css";
import Nav from "../components/Nav";
import { Redirect } from 'react-router';


class Test extends Component {
  constructor(props) {
    super(props);

  this.userAnswer = React.createRef();

  this.state = {
    allQuestions: [],
    question: "",
    answer: "",
    correct: 0,
    wrong: 0,
    notDone: true,
    rightScreen: true,
  };
}

componentDidMount() {
    API.getUser(this.context.currentId).then(res => this.setState({ allQuestions : res.data.questions }))
    .then(()=>console.log(this.state.allQuestions))
}

shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
     return a
    }

checkAnswer = (userAnswer, correctAnswer, id) => {
  let where;
  let whereWrong;
   if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
     console.log("Correct!")
     for (var i = 0; i < this.state.allQuestions.length; i++) {
       if (id === this.state.allQuestions[i]._id) {
         where = i;
       }
     }
     var tempState = this.state;
     tempState.allQuestions[where].active = false;
     if (this.state.correct + 1 === this.state.allQuestions.length) {

     this.setState({ allQuestions : tempState.allQuestions, correct : this.state.correct + 1, notDone:false });
     }
     else {
      this.setState({ allQuestions : tempState.allQuestions, correct : this.state.correct + 1 });
     }
   }
   else {
     console.log("Wrong");
     ;
     for (var j = 0; j < this.state.allQuestions.length; j++) {
      if (id === this.state.allQuestions[j]._id) {
        whereWrong = j;
      }
    }
    
    var temp2State = this.state;
     temp2State.allQuestions[whereWrong].correct = true;
     console.log(this.state.allQuestions[whereWrong].question);
     this.setState({ allQuestions: temp2State.allQuestions, wrong: this.state.wrong + 1, rightScreen: false})
     console.log(this.state);
   }
}

wrongAnswer = (question, answer, id) => {
  console.log(question, answer, id);
  let whereWrong;
  for (var k = 0; k < this.state.allQuestions.length; k++) {
    if (id === this.state.allQuestions[k]._id) {
      whereWrong = k;
    }
  }
  var temp3State = this.state;
   temp3State.allQuestions[whereWrong].correct = false;
   console.log(this.state.allQuestions[whereWrong].question);
   this.setState({ allQuestions: temp3State.allQuestions, rightScreen: true})
   console.log(this.state);

}

restartGame = () => {
  API.getUser(this.context.currentId)
  .then(res => this.setState({ allQuestions : res.data.questions, question:"", answer:"", correct:0, wrong:0, notDone:true, rightScreen:true }))
}

render() {
    return (
      <Container fluid>

       <Nav/>
       <MyContext.Consumer>
       {({ auth }) => (
         auth ? (
     
         <div>
          {this.state.notDone ? (
            <Row>
              <Col size="md-12">
                <Score 
                correct={this.state.correct}
                wrong={this.state.wrong}
                restartGame = {this.restartGame}
                />

              {this.state.rightScreen ? (    

                <div className="quesWrap">
                  {this.shuffle(this.state.allQuestions).filter(i=>i.active !== false).slice(0, 1).map(i=> (
                  <div className="questionCard" style={{width:"600px", margin:"10px auto"}} key={i._id+"div"}>
                  <Animated animationIn="bounceInRight" animationOut="wobble" isVisible={true}>
                    <QuestionCard
                    key={i._id+"questionCard"}
                    question={i.question}
                    >
                    </QuestionCard>
                      <input key={i._id+"Input"} style={{borderRadius:"5%", margin: "20px 0 20px 200px"}} placeholder="Answer Question" ref={this.userAnswer} />
                    <FormBtn 
                      key={i._id+"Button"}
                      onClick={()=>this.checkAnswer(this.userAnswer.current.value, i.answer, i._id)}
                      >Answer
                    </FormBtn>
                  </Animated>
                  </div>
                ))}
                </div>

                ) : (

                  <div className="quesWrap">
                  {this.state.allQuestions.filter(i=>i.correct !== false).map(i=> (
                  <div className="questionCard" key={i._id+"div"}>
                  <Animated animationIn="wobble" animationOut="wobble" isVisible={false}>
                    <QuestionCard 
                    key={i._id+"questionCard"}
                    question={"The correct answer is " +i.answer}
                    >
                    </QuestionCard>
                  </Animated>
                  <FormBtn
                      key={i._id+"Button"}
                      onClick={()=>this.wrongAnswer(i.question, i.answer, i._id)}
                      >Got It!
                    </FormBtn>
                  </div>
                ))}
                </div>)}


              </Col>
              <Col size="md-12 sm-12">
            
              </Col>
            </Row>  /////////////////////////////////////////////GAME SUMMARY RENDER/////////////////////////////////////////////
          ) : (  
            <Row>
              <Col size="md-12">
                <Score 
                correct={this.state.correct}
                wrong={this.state.wrong}
                />
                <h1>Done</h1>  
              </Col>
            </Row>
          
          
          )} </div> ) : (<Redirect to="/"/>))}

        </MyContext.Consumer>
      </Container>
    );
  }
}
Test.contextType = MyContext;
export default Test;