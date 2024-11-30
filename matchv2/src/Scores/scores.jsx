import React, { useState, useEffect } from "react";
import './scores.css';

export function Scores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(scores);
  }, []);

  function getUniqueScores(scores) {
    const seen = new Set();
    return scores.filter((entry) => {
      const identifier = `${entry.name}-${entry.score}-${entry.date}`;
      if (seen.has(identifier)) {
        return false;
      }
      seen.add(identifier);
      return true;
    });
  }

  const sortedScores = [...highScores].sort((a, b) => a.score - b.score);

  const uniqueScores = getUniqueScores(sortedScores);

  function clearScores() {
    localStorage.removeItem('highScores');
    setHighScores([]);
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="Scores">
        <h3>High Scores:</h3>
        <table className='HighScoresTable'>
          <thead>
            <tr>
              <th>Place</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {uniqueScores.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="clearButton"
          onClick={clearScores}
        >
          Clear High Scores
        </button>
      </div>
    </main>
  );
}
