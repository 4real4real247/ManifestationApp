import React from 'react';
import ReactConfetti from 'react-confetti'; //react-confetti to draw confetti.
import { useWindowSize } from 'react-use'; //useWindowSize to get current browser window dimensions.

//Get the width and height of the current window.
function Confetti() {
  const { width, height } = useWindowSize();

  //render confetti using window size, it falls with gravity, stops after initial burst
  return (
    <ReactConfetti
      width={width}
      height={height}
      colors={[
        '#FFD700',
        '#FF44FF',
        '#9370DB',
        '#4B0082',
        '#8A2BE2',
        '#BA55D3',
        '#7B68EE',
      ]}
      numberOfPieces={1000}
      recycle={false}
      gravity={0.5}
    />
  );
}

export default Confetti;
