import React from "react";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";
import "./style.css";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function QuestionList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
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
              <p className="storedQuestion">{question}</p>
              <p className="headerTerm">TERM</p>
            </div>

            <div className="cardSetA">
              <p className="storedAnswer">{answer}</p>
              <p className="headerDefinition">DEFINITION</p>
            </div>
          </Col>
        </Row>
        <DeleteBtn onClick={()=>deleteQuestion(id)} id={id} />
      </Container>
    </li>
  );
}
