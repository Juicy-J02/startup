import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameEvent, GameNotifier } from '../webSocket.js';
import './home.css';

export function Home() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleEvent = (event) => {
      if (event.type === GameEvent.End) {
        const { name, score } = event.value;
        setNotifications((prev) => [
          `${name} scored ${score}`,
          ...prev.slice(0, 2),
        ]);
      }
    };

    GameNotifier.addHandler(handleEvent);

    return () => {
      GameNotifier.removeHandler(handleEvent);
    };
  }, []);

  const startGame = () => {
    navigate('/match');
  };

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="StartGame">
        <button className="playbutton" type="submit" onClick={startGame}>
          Play
        </button>
      </div>
      <div className="Notifications">
        <h3 className="NotificationTitle">Live Games:</h3>
        <ul className="Notification">
          {notifications.map((notification, index) => (
            <li className="player-name" key={index}>
              {notification}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
