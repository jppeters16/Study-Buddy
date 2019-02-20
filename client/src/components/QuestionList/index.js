import React from "react";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";
import "./style.css";

export function QuestionList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function QuestionListItem({
  id,
  answer,
  question,
  deleteQuestion
}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
          <div className="cardSetQ">
              <p className="storedAnswer">{answer}</p>
              <p className="headerTerm">TERM</p>
            </div>

            <div className="cardSetA">
              <p className="storedQuestion">{question}</p>
              <p className="headerDefinition">DEFINITION</p>
            </div>
          </Col>
        </Row>
        <DeleteBtn onClick={()=>deleteQuestion(id)} id={id} />
      </Container>
    </li>
  );
}
