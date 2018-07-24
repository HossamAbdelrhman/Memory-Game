# Memory Game:-

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

**Each turn:-**
- The player flips one card over to reveal its underlying symbol.
- The player then turns over a second card, trying to find the corresponding card with the same symbol.
- If the cards match, both cards stay flipped over.
- If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.

## Game Behavior:-
1. **Memory Game Logic:-** The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

2. **Congratulations Popup:-** When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also    tell the user how much time it took to win the game, and what the star rating was.

3. **Restart Button:-** A restart button allows the player to reset the game board, the timer, and the star rating.

4. **Star Rating:-** The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating. The number of moves needed to change the rating is up to you, but it should happen at some point.

5. **Timer:-** When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

6. **Move Counter:-** Game displays the current number of moves a user has made.

## Game most impotant files:-
### 1. .html file:-
- Head
  - meta tag
  - link tag
  - script tag
- Body 
  - \.game-data div
  - \.cardsBox div
  - script tag
 ### 2. .css file:-
contain style of all html's elements inside the body tag
### 3. .js file:-
- **shuffle function:-** take array of cards and return the same array with random distribution.
- **timer function:-** calculate time of the game.
- **counter function:-** count number of moves.
- **restart function:-** allow player to restart the game or play new game.