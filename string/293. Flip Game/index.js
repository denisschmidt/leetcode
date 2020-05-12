/*

You are playing the following Flip Game with your friend: 

Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". 

The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.

Example:
  Input: s = "++++"
  Output: 
  [
    "--++",
    "+--+",
    "++--"
  ]

Note: If there is no valid move, return an empty list [].

*/

// Time O(N^2)
// Space O(N^2)
const generatePossibleNextMoves = s => {
  let n = s.length;
  let ans = [];

  for (let i = 0; i < n - 1; i++) {
    if (s[i] == '+' && s[i + 1] == '+') {
      let state = s.substring(0, i) + '--' + s.substring(i + 2);
      if (state != s) {
        ans.push(state);
      }
    }
  }

  return ans;
};
