/*

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  

On each player's turn, that player makes a move consisting of:
  Choosing any x with 0 < x < N and N % x == 0.
  Replacing the number N on the chalkboard with N - x.

Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally.

Example 1:
  Input: 2
  Output: true
  Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:
  Input: 3
  Output: false
  Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

///////////////////////////////
 2
 2 - 1 = 1

 3
 3 - 1 = 2
 2 - 1 = 1

 4
 4 - 1 = 3
 3 - 1 = 2
 2 - 1 = 1




  2
  true

  3
  false

  4
  true

  5
  false

  6
    true

  7
    false

  8
   true

  9
   false

  10
    true

 */

/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function(N) {
  return N % 2 === 0;
};

const res = divisorGame(55);
console.log('---', res); // false

////////////////////////////////////////////////////////////////////////////////////////////////////////////
