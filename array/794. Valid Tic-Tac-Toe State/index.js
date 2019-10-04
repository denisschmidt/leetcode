/*
A Tic-Tac-Toe board is given as a string array board.
Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.

Example 1:
  Input: board = ["O  ", "   ", "   "]
  Output: false
  Explanation: The first player always plays "X".

Example 2:
  Input: board = ["XOX", " X ", "   "]
  Output: false
  Explanation: Players take turns making moves.

Example 3:
  Input: board = ["XXX", "   ", "OOO"]
  Output: false

Example 4:
  Input: board = ["XOX", "O O", "XOX"]
  Output: true

Note:
  board is a length-3 array of strings, where each string board[i] has length 3.
  Each board[i][j] is a character in the set {" ", "X", "O"}.

  "XOX",
  "OXO",
  "XOX"


 */
// Time O(N)
// Space O(N)
const validTicTacToe = function(board) {
  const map = new Map();
  let p1 = 'X';
  let p2 = 'O';

  map.set(p1, 0);
  map.set(p2, 0);

  for (let str of board) {
    for (let i = 0; i < 3; i++) {
      if (str[i] === p1) {
        map.set(p1, map.has(p1) ? map.get(p1) + 1 : 0);
      } else if (str[i] === p2) {
        map.set(p2, map.has(p2) ? map.get(p2) + 1 : 0);
      }
    }
  }

  if (map.get(p1) === 0 && map.get(p2) === 0) return true;

  if (map.get(p1) === 0 || Math.abs(map.get(p1) - map.get(p2)) > 1 || map.get(p2) > map.get(p1)) {
    return false;
  }

  let rows = Array(3).fill(0);
  let cols = Array(3).fill(0);
  let diagonal = 0;
  let antiDiagonal = 0;

  let valid = new Map();
  valid.set(p1, false);
  valid.set(p2, false);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') continue;

      let toAdd = board[i][j] === p1 ? 1 : -1;

      rows[i] += toAdd;
      cols[j] += toAdd;

      if (i === j) {
        diagonal += toAdd;
      }

      if (j === 3 - 1 - i) {
        antiDiagonal += toAdd;
      }

      if (Math.abs(rows[i]) === 3) {
        valid.set(board[i][j], true);
      }

      if (Math.abs(cols[j]) === 3) {
        valid.set(board[i][j], true);
      }

      if (Math.abs(diagonal) === 3) {
        valid.set(board[i][j], true);
        diagonal = 0;
      }

      if (Math.abs(antiDiagonal) === 3) {
        valid.set(board[i][j], true);
        antiDiagonal = 0;
      }
    }
  }

  if (valid.get(p1) && valid.get(p2)) return false;

  if (valid.get(p1) && map.get(p1) === map.get(p2)) return false;

  if (valid.get(p2) && map.get(p1) > map.get(p2)) return false;

  return true;
};
