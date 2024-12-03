# startup
Startup application for BYU C S 260

## Specification Deliverable
### Elevator pitch
Many of us grew up with different kinds of games. Most of these games were very simple and gave us hours of fun. One of the most memorable of these for me was Memory Match. Memory Match is a game to test who has the best memory. Very simple. But what if there was another layer of this classic game added on? I present: Match. Match is a game that takes the same old rules of Memory Match and turns it up a notch. Each player will build a deck of cards with interesting and unique abilities. This deck is then shuffled and the game begins. When a match is made it is added to your pile and if it has an "action", the game gets a little more exciting. "Actions" range from flipping random cards, skipping your opponents turn, or giving cards unique status effects. All of these actions will help you gain the most matches against your opponent and win.

### Design
A mockup of the project I put together using Python Pygame:
![Screenshot 2024-09-14 231345](https://github.com/user-attachments/assets/f8a55df6-e4c5-4c10-a8fd-d184b25f92c9)
![Screenshot 2024-09-14 231444](https://github.com/user-attachments/assets/0b46eebb-b5a8-4a1b-a0be-7ec850a76b66)
![Screenshot 2024-09-14 231533](https://github.com/user-attachments/assets/b112484d-ab3c-441a-86f2-07ecf370e471)

### Key Features
- Individual accounts that save progression and score
- Ability to customize deck for a new game
- High Scores display and show all time best for all players
- Online Multiplayer (Maybe down the line)

### Technologies
- **HTML** - HTML page for game board, login, homepage, and deck customization
- **CSS** - Styling to make text, screen, and color look consistant
- **React** - Provides login, abilty to navigate menus, and clicking the board when the game is active
- **Service** - Backend service with endpoints for:
  - login
  - High Scores
- **DB/Login** - Store users to register and login.
- **WebSocket** - High Scores are displayed to all users

### HTML
My HTML section of code includes six pages of code. The Index page which includes a mockup of a login with a username and password. A Home page which includes navigation to all other pages and a Live update of other games happening. The Play page will be where the actual game takes place. Currently it only consists of buttons as placeholders for where the game cards would be positioned. Addtionally, it has a live score of the current game. The Deck page shows your current deck of cards and below that, all of the options to swap out your current cards with. The Scores page is a live scoreboard of all the best games done and the best of your own games. Lastly, the about page talks about the gmae itself, the features of the game, and an image that is pulled from a database.
### CSS
My CSS section of code includes a consistent style between all pages of the website. It is mostly made up of soft sided shapes and primary colors. The buttons on the web react to the mouse being over them and clickable objects are known so by the cursor changing. The Scores section has also been made into an easily readable table.
### React
My React components include makeing the Match game work. This game is pretty fast paced and allows the user to resart the game if they would like. Once the game is finsihed the user can see their scores on the scores page. The user is also able to log in by creating a password and username.
### Service Deliverable
My Service components includes two elements. One taht keeps a backend log of the scores that the player gets. This is saved once the primary game is finished and posted in the scores section. This data can also be deleted which refreshes the scores page. I also have a call to a image service that provides a little more to look at on the about section.
### DB/Login
- **user registration** - Creates a new account in the database.
- **existing user** - Stores the score and deck of a user that already exists
### Websocket
- **WebSocket data displayed** - Players can see high scores of other players
