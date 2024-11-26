import React, { useState } from "react";
import './match.css';

export function Match() {
  const [cards] = useState(shuffle());
  const [flipped, setFlipped] = useState([]);
  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState([]);
  const isGameOver = matched.length === cards.length;

  function shuffle() {
    const cardValues = Array.from({ length: 9 }, (_, i) => i + 1);
    const deck = [...cardValues, ...cardValues];
    return deck.sort(() => Math.random() - 0.5);
  }

  function match(index) {
    if (matched.includes(index) || flipped.length === 2 || flipped.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      setScore(score + 1);

      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
      }

      setTimeout(() => setFlipped([]), 500);
    }
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="Game">
        {isGameOver ? (
          <div className="gameOver">
            <h1>You Win!</h1>
            <p>Your final score: {score}</p>
            <button onClick={() => window.location.reload()}>Play Again</button>
          </div>
        ) : (
          <>
            <div className="Board">
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <button
                    type="button"
                    onClick={() => match(index)}
                    className={`
                      ${flipped.includes(index) ? "flipped" : ""}
                      ${matched.includes(index) ? "matched" : ""}
                    `}
                  >
                    {(flipped.includes(index) || matched.includes(index)) ? cards[index] : ""}
                  </button>
                </div>
              ))}
            </div>
            <h3 className="score">Score: {score}</h3>
            <button
              type="button"
              className="restartButton"
              onClick={() => window.location.reload()}>Restart</button>
          </>
        )}
      </div>
    </main>
  );
}
