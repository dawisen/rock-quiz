import "./App.css";
import React from "react";
import Confetti from "./components/Confetti";

function App() {
  return (
    <div>
      <Confetti/>
      <div className="question-text">
        {/* {questions[0].questionText} */}
        quiz goes here
        <div className="answer-section">
          {/* {questions[0].answerOptions.map((answerOption, index) => (
          <button>{answerOptions.answerText}</button>
        ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
