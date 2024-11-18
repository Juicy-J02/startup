import React from "react";

const About = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link rel="stylesheet" href="about.css" />
      </head>
      <body>
        <header>
          <h1>Match</h1>
        </header>
        <main>
          <h2>Description:</h2>
          <p className="description">
            Many of us grew up with different kinds of games. Most of these
            games were very simple and gave us hours of fun. One of the most
            memorable of these for me was Memory Match. Memory Match is a game
            to test who has the best memory. Very simple. But what if there was
            another layer of this classic game added on? I present: Match. Match
            is a game that takes the same old rules of Memory Match and turns it
            up a notch. Each player will build a deck of cards with interesting
            and unique abilities. This deck is then shuffled and the game
            begins. When a match is made it is added to your pile and if it has
            an "action", the game gets a little more exciting. "Actions" range
            from flipping random cards, skipping your opponents turn, or giving
            cards unique status effects. All of these actions will help you
            gain the most matches against your opponent and win.
          </p>
          <h2>Features:</h2>
          <ol>
            <li>Individual accounts that save progression and score</li>
            <li>Ability to customize deck for a new game</li>
            <li>High Scores display and show all-time best for all players</li>
          </ol>
          <h2>Thanks for Playing!</h2>
          <img
            alt="Arches"
            src="https://github.com/Juicy-J02/startup/blob/main/cat-thumbs-up.gif?raw=true"
          />
          <form method="get" action="home.html">
            <button className="backbutton" type="submit">
              Back
            </button>
          </form>
        </main>
        <footer>
          <hr />
          <span className="text-reset">Jackson Gray</span>
          <br />
          <a href="https://github.com/Juicy-J02/startup">GitHub</a>
        </footer>
      </body>
    </div>
  );
};

export default About;
