import React, { useState } from "react";
import { questions } from "../questions"

const QuestionList = (setShowScore) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="question-text">
      {questions[currentQuestion].questionText}
      quiz goes here
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button onClick={() => handleAnswerButtonClick()}>{answerOption.answerText}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
