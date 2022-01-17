// import { useState } from 'react';
import * as React from "react";
import { questions } from "./questions";
import "./quizPartyStyle.scss";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = React.useState(true);

  return (
    <div className="quiz-component">
      <article className="question">
        <header>{question}</header>
        <p className="answer">
          <span className={`${isHidden ? "blurred" : "visible"}`}>
            {answer}
          </span>
        </p>
        <footer>
          <button onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
        </footer>
      </article>
    </div>
  );
};

const QuizParty = () => {
  return (
    <main>
      <div className="quiz-component">
        {questions.map((q) => (
          <Question question={q.question} answer={q.answer} key={q.id} />
        ))}
      </div>
    </main>
  );
};

export default QuizParty;
