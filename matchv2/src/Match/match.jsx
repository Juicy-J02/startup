import React, { useState, useEffect } from "react";
import './match.css';

export function Match() {
  const [cards, setCards] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("cards"));
    return saved || shuffle();
  });
  const [flipped, setFlipped] = useState(() => JSON.parse(localStorage.getItem("flipped")) || []);
  const [score, setScore] = useState(() => JSON.parse(localStorage.getItem("score")) || 0);
  const [matched, setMatched] = useState(() => JSON.parse(localStorage.getItem("matched")) || []);
  const isGameOver = matched.length === cards.length;

  function shuffle() {
    const cardValues = Array.from({ length: 9 }, (_, i) => i + 1);
    const deck = [...cardValues, ...cardValues];
    return deck.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("flipped", JSON.stringify(flipped));
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("matched", JSON.stringify(matched));
  }, [cards, flipped, score, matched]);

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

  function restartGame() {
    const newCards = shuffle();
    setCards(newCards);
    setScore(0);
    setMatched([]);
    setFlipped([]);
    localStorage.removeItem("cards");
    localStorage.removeItem("flipped");
    localStorage.removeItem("score");
    localStorage.removeItem("matched");
  }
  
  if (isGameOver) {
    saveScore(score);
  }

  function saveScore(score) {
    const now = new Date();
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const user = JSON.parse(localStorage.getItem("credentials")) || { userName: "Player" };
    const newScore = {
      name: user.userName,
      score,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="Game">
        {isGameOver ? (
          <div className="gameOver">
            <h1>You Win!</h1>
            <p>Your final score: {score}</p>
            <button onClick={restartGame}>Play Again</button>
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
              onClick={restartGame}
            >
              Restart
            </button>
          </>
        )}
      </div>
    </main>
  );
}
