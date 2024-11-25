import React from "react";
import './home.css'

export function Home() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <div className="StartGame">
        <button className="playbutton" type="submit">Play</button>
    </div>
    <div className="Notifications">
        <h3 className="NotificationTitle">Live Games:</h3>
        <ul className="Notification">
            <li className="player-name">Tim started a new game</li>
            <li className="player-name">Ada started a new game</li>
            <li className="player-name">Tim scored 337</li>
        </ul>
    </div>
  </main>
);
}
