import React from "react";

const Index = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <header>
          <h1>Match</h1>
        </header>
        <main>
          <form method="get" action="home.html">
            <div>
              <span>👤</span>
              <input type="text" placeholder="username" />
            </div>
            <div>
              <span>🔒</span>
              <input type="password" placeholder="password" />
            </div>
            <p></p>
            <button className="login" type="submit">
              Login
            </button>
            <button className="create" type="submit">
              Create
            </button>
          </form>
          <footer>
            <hr />
            <span className="text-reset">Jackson Gray</span>
            <br />
            <a href="https://github.com/Juicy-J02/startup">GitHub</a>
          </footer>
        </main>
      </body>
    </div>
  );
};

export default Index;
