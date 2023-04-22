import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Fireworks = ({ show }) => {
  if (!show) return null;
  const [stopConfetti, setStopConfetti] = useState(false);

  useEffect(() => {
    // Stop the confetti after 5 seconds
    const timeout = setTimeout(() => {
      setStopConfetti(true);
    }, 5000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        shouldStop={stopConfetti}
      />
    </>
  );
};

export default Fireworks;
