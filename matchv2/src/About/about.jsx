import React from "react";
import './about.css';

export function About() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <h2>Description:</h2>
    <p className="Description">Many of us grew up with different kinds of games. Most of these games were very simple and gave us hours of fun. One of the most memorable of these for me was Memory Match. Memory Match is a game to test who has the best memory. Very simple. But what if there was another layer of this classic game added on? I present: Match. Match is a game that takes the same old rules of Memory Match and turns it up a notch. Each player will build a deck of cards with interesting and unique abilities. This deck is then shuffled and the game begins. When a match is made it is added to your pile and if it has an "action", the game gets a little more exciting. "Actions" range from flipping random cards, skipping your opponents turn, or giving cards unique status effects. All of these actions will help you gain the most matches against your opponent and win.</p>
    <h2>Features:</h2>
    <ol className="FeatureList">
        <li className="FeatureList-item">Individual accounts that save progression and score</li>
        <li className="FeatureList-item">Ability to customize deck for a new game</li>
        <li className="FeatureList-item">High Scores display and show all time best for all players</li>
    </ol>
    <h2>Thanks for Playing!</h2>
    <img className="AboutImage" alt="Arches" src="https://github.com/Juicy-J02/startup/blob/main/cat-thumbs-up.gif?raw=true" />
    <form method="get" action="home.html">
      <button className="backbutton" type="submit">Back</button>
    </form>
  </main>
  );
}