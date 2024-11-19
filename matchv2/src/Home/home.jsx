import React from "react";
import './home.css'

export function Home() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <div className="buttons">
        <form method="get" action="match.html">
            <button className="playbutton" type="submit">Play</button>
        </form>
        <form method="get" action="deck.html">
            <button className="deckbutton" type="submit">Deck</button>
        </form>
        <form method="get" action="scores.html">
            <button className="scoresbutton" type="submit">Scores</button>
        </form>
        <form method="get" action="about.html">
            <button className="aboutbutton" type="submit">About</button>
        </form>
    </div>
    <h3>Live Games:</h3>
    <ul className="notification">
        <li className="player-name">Tim started a new game</li>
        <li className="player-name">Ada started a new game</li>
        <li className="player-name">Tim scored 337</li>
    </ul>
    <form method="get" action="index.html">
        <button className="backbutton" type="submit">Back</button>
    </form>
  </main>
);
}
