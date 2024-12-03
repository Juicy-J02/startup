import React, { useState, useEffect } from "react";
import './scores.css';

export function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((fetchedScores) => {
        const sortedScores = [...fetchedScores].sort((a, b) => a.score - b.score);
        setScores(sortedScores);
      });
  }, []);

  function clearScores() {
    setScores([]);
    fetch('/api/scores', { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to clear scores");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const scoreRows = scores.map((score, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{score.name}</td>
      <td>{score.score}</td>
      <td>{score.date}</td>
    </tr>
  ));

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="Scores">
        <h3>High Scores:</h3>
        <table className="HighScoresTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{scoreRows}</tbody>
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
