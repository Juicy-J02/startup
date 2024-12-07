import React, { useState, useEffect } from "react";
import './about.css';

export function About() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const width = Math.min(window.innerWidth - 100, 1500);
        const height = Math.min(window.innerHeight, 250);
        setImageUrl(`https://picsum.photos/id/${data[0].id}/${width}/${height}`);
      })
  }, []);

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="Descriptioncontainer">
        <h2>Description:</h2>
        <p className="Description">
          Match is a game that will test your memory and speed. The goal of the game is to find the "match" of each card
          on the board. Every time two cards are flipped, your score will go up. Just like golf rules, the lower your score,
          the better you've done!
        </p>
        <h2>Features:</h2>
        <ol className="FeatureList">
          <li className="FeatureList-item">Individual accounts that save progression and score</li>
          <li className="FeatureList-item">Fast pace memory match game</li>
          <li className="FeatureList-item">High Scores display to show all-time best score</li>
        </ol>
        <h2>Thanks for Playing!</h2>
        <div id="picture" className="AboutImage">
          <img alt="Service Image" src={imageUrl} />
        </div>
      </div>
    </main>
  );
}
