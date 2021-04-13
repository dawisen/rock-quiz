import "./App.css";
import React from "react";
import Confetti from "./components/Confetti";
import QuestionList from "./components/QuestionList"

function App() {
  const [showScore, setShowScore] = useState(false);

  return (
    <div>
      <Confetti />
      <QuestionList showScore={showScore} setShowScore={setShowScore} />
      <div className="app">
        {showScore ? (
          <div className="score-section">// ... score section markup</div>
        ) : (
          
        )}
      </div>
    </div>
  );
}

export default App;
