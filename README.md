# Battleship_Game

This is a game that will allow a player to call out spots on a grid to attempt to locate the other player's Battleships. When all of the opponents ships are found, the player wins.

[To Do](./ToDo.md)

The game board has several pieces:
- The opening game - where the player places their ships
- player's turn
- opponent's turn

The game will use the local cache to save the game (after every round).
If there is a game in cache when the user lands on the page, it will prompt them to continue playing or start a new game. A new game will clear the cache.

## The opening game
The player will create a character (player's name!).
The player will then be presented with a board to place the ships on

## The middle game (player's/opponent's turns)
Not quite sure on this design quite yet. it may be different for desktop vs mobile. I figure that the board will slide back and forth on the screen. It will show the player's board when they are playing and then when their turn is over, it will slide over and show the opponent's board.

The player's board will show the placement of the player's ships. The opponent's board will show where the opponent has taken his shots.

At some point, there should be different opponent play styles (chosen in settings). Initially the play will be random spaces until a ship is hit and then it will focus in on that ship. This will also affect the opening game in the placement of the ships.

The player's board will show blank squares. When a square is called, either a white dot (miss) or a red dot (hit) will display. When a ship is sunk, the red dots will change to show the picture of that ship. (you can't show the ship initially as it gives away the details of the ship -- orientation and where the hit took place). Also when the ship is sunk, a short video clip can display of the ship going down.

The opponent's board will show similarly to the player's board, except the ships will all be displayed (hit or missed).
