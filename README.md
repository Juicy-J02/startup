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
 - **HTML pages** - A game board, login, homescreen, and deck customizer HTML page
 - **Text** - Descriptions of gameplay
 - **Images** - Profile Icon
 - **DB/Login** - An input box that will create an account and save gameplay information
 - **WebSocket** - Information on other players joining and Highscores
### CSS
- **Navigation Elements** - Customizing the way the UI buttons look
- **Responsive to window resizing** - Adjust the board to meet the window size
**Application text content** - Consistent fonts
### React
- **login** - When you press enter or the login button it takes you to the home page
- **database** - Stores information about individuals accounts
### Service Deliverable
- **scoring** - Recieves a player's score and returns the high score
### DB/Login
- **user registration** - Creates a new account in the database.
- **existing user** - Stores the score and deck of a user that already exists
### Websocket
- **WebSocket data displayed** - Players can see high scores of other players
