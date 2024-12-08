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
  const [scoreSaved, setScoreSaved] = useState(() => JSON.parse(localStorage.getItem("scoreSaved")) || false);
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
    localStorage.setItem("scoreSaved", JSON.stringify(scoreSaved));
  }, [cards, flipped, score, matched, scoreSaved]);

  useEffect(() => {
    if (isGameOver && !scoreSaved) {
      saveScore(score);
      setScoreSaved(true);
    }
  }, [isGameOver, scoreSaved, score]);

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const storedUser = JSON.parse(localStorage.getItem("userName"));
    const userName = storedUser.name;
    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name : userName, score : score, date : date }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Score saved:', data);
      } else {
        console.error('Error saving score:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
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

  function restartGame() {
    const newCards = shuffle();
    setCards(newCards);
    setScore(0);
    setMatched([]);
    setFlipped([]);
    setScoreSaved(false);
    localStorage.removeItem("cards");
    localStorage.removeItem("score");
    localStorage.removeItem("flipped");
    localStorage.removeItem("matched");
    localStorage.removeItem("scoreSaved");
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
                    className={`card-button
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
