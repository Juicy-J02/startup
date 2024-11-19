import React from "react";
import './scores.css'

export function Scores() {
  return (
  <main className='container-fluid bg-secondary text-center'>
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
        <tr>
          <td>1</td>
          <td>Jackson</td>
          <td>100</td>
          <td>11/19/24</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Kira</td>
          <td>3</td>
          <td>11/19/24</td>
        </tr>
      </tbody>
    </table>
  </main>
);
}
