import './App.css';

function App() {


  return (
    <div className="question-text">
      {questions[0].questionText}
      quiz goes here
      <div className="answer-section">{questions[0].answerOptions.map((answerOption, index) =>
        (<button>{answerOptions.answerText}</button>))}
      </div>
    </div>
    
  );
}

export default App;
