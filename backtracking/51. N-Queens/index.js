/*

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

P/S
NO Two queens share the same row, column, or diagonal.

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

If We want all posible solutions we must use backtracking
If all count we mast use dynamic programming


The 3 Keys To Backtracking Problems:

Our Choice

-) What choice are we making at each call of the function
-) RECURSION REPRESENTS A DECISION.
-) RECURSION REPRESENTS A CHOICE & its associated state
-) Each function call represents a state. From that state decisions can be made.

Our Constraints

-) What tells us to stop following a certain path that we are searching on?
-) Have we exhausted all possibilities?

Our Goal

-) What is our target?
-) What are we trying to find?
-) These will craft our base cases.

// More !!!
https://github.com/bephrem1/backtobackswe/blob/master/Dynamic%20Programming%2C%20Recursion%2C%20%26%20Backtracking/nQueens.java

 */

const isValid = comb => {
  let rowWeAreValidatingOn = comb.length - 1;

  for (let i = 0; i < rowWeAreValidatingOn; i++) {
    let absoluteColumnDistance = Math.abs(comb[i] - comb[rowWeAreValidatingOn]);

    // If the absolute difference in columns equals the distance in rows from the
    //  i'th queen we placed then the queen we just placed is attacked diagonally.
    //  absoluteColumnDistance == rowWeAreValidatingOn - i
    if (absoluteColumnDistance === 0 || absoluteColumnDistance === rowWeAreValidatingOn - i) {
      return false;
    }
  }
  return true;
};

const generateBoardFromPlacements = (comb, n) => {
  const board = [];
  const size = comb.length;
  for (let i = 0; i < size; i++) {
    let str = [];
    for (let j = 0; j < n; j++) {
      if (j === comb[i]) {
        str.push('Q');
      } else {
        str.push('.');
      }
    }
    board.push(str.join(''));
  }
  return board;
};

const solveNQueens = function(n) {
  let ans = [];

  const backtracking = (ans, comb, row) => {
    if (row === n) {
      ans.push(generateBoardFromPlacements(comb, n)); // out goal
      return;
    } else {
      for (let i = 0; i < n; i++) {
        comb.push(i); // out choice

        // out constraints
        if (isValid(comb)) {
          backtracking(ans, comb, row + 1);
        }
        comb.pop(); // undo out choice
      }
    }
  };

  backtracking(ans, [], 0);

  return ans;
};

const res = solveNQueens(4);
console.log('---', res);
