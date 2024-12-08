import React, { useState, useEffect } from "react";
import './scores.css';

export function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    refreshScores();
  }, []);

  async function refreshScores() {
    try {
      const response = await fetch('/api/scores');
      if (response.ok) {
        const fetchedScores = await response.json();
        const sortedScores = [...fetchedScores].sort((a, b) => a.score - b.score);
        setScores(sortedScores);
      } else {
        console.error('Error fetching scores:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  async function clearScores() {
    const storedUser = JSON.parse(localStorage.getItem("userName"));
    const userName = storedUser.name;
    try {
      const response = await fetch('/api/scores', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: userName })
      });

      if (response.ok) {
        console.log('Scores deleted');
        // Refresh scores after successful deletion
        refreshScores();
      } else {
        console.error('Error deleting scores:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
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
