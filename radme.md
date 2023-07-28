## Tic Tac Toe Game - Documentation

### Description

The Tic Tac Toe game is a classic two-player board game where each player takes turns to place their symbol (X or O) in a 3x3 grid. The objective of the game is to get three of their symbols in a row, either horizontally, vertically, or diagonally, to win the game. If the grid is filled without any player achieving a winning pattern, the game ends in a draw.

### Features

1. Simple and Intuitive Interface: The game has an easy-to-use interface designed to be user-friendly and enjoyable.

2. Real-Time Turn Switching: Players can take turns playing, and the current player's turn is displayed.

3. Visual Feedback: The game provides visual feedback for wins and draws, enhancing the user experience.

4. Responsive Design: The game is responsive, adapting to different screen sizes, making it playable on both mobile phones and PC screens.

### Code Overview

The Tic Tac Toe game is built using HTML, CSS, and Vanilla JavaScript. Below are the key components and their functionalities:

#### HTML Structure:

1. `<nav>`: The navigation bar displays the game's title.

2. `.gameContainer`: Contains the Tic Tac Toe grid and game info.

3. `.container`: Represents the 3x3 grid for the game.

4. `.line`: A line that appears when a player wins, indicating the winning pattern.

5. `.gameInfo`: Displays the game status, turn, and reset button.

6. `.drawDialog`: A dialog box that appears when the game ends in a draw.

#### CSS Styles:

- Styles are used to create a visually appealing and responsive layout for the game. Media queries ensure proper display on different screen sizes.

- Utility classes like `.bt-0`, `.bl-0`, `.br-0`, and `.bb-0` are used to remove specific borders from grid elements.

- Additional styles for the `.drawDialog` element provide an attractive presentation for the draw message.

#### JavaScript Functions:

1. `changeTurn()`: This function switches the player's turn from "X" to "O" and vice versa.

2. `checkWin()`: This function checks for a winning pattern on the grid by comparing the text content of relevant grid elements. If a player wins, it updates the game status, displays the winning line, and disables the grid.

3. `checkDraw()`: This function checks if the game ends in a draw by verifying if all grid elements are filled without any winner. If it's a draw, it displays the draw dialog box.

4. Event Listeners: Event listeners are used to detect player clicks on the grid and the reset button. The game logic is implemented to handle moves and check for wins or draws.

### Conclusion

The Tic Tac Toe game provides a fun and engaging experience for players, with real-time turn switching and visual feedback for wins and draws. Its responsive design ensures seamless gameplay on various devices. Enjoy playing this classic game and have fun!