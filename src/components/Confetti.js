import { useEffect } from 'react';
import ConfettiGenerator from "confetti-js";
import '../components/Confetti.css'

const Confetti = () => {
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas', max: 150, size: 5, rotate: true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }, []) // add the var dependencies or not

  return (
    <div>
      <canvas id="my-canvas"></canvas>
    </div>
  );
}

export default Confetti;