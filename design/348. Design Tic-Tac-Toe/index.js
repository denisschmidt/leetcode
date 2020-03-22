/*
Design a Tic-tac-toe game that is played between two players on a n x n grid.

You may assume the following rules:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves is allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Example:
  Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.
  
  TicTacToe toe = new TicTacToe(3);
  
  toe.move(0, 0, 1); -> Returns 0 (no one wins)
  |X| | |
  | | | |    // Player 1 makes a move at (0, 0).
  | | | |
  
  toe.move(0, 2, 2); -> Returns 0 (no one wins)
  |X| |O|
  | | | |    // Player 2 makes a move at (0, 2).
  | | | |
  
  toe.move(2, 2, 1); -> Returns 0 (no one wins)
  |X| |O|
  | | | |    // Player 1 makes a move at (2, 2).
  | | |X|
  
  toe.move(1, 1, 2); -> Returns 0 (no one wins)
  |X| |O|
  | |O| |    // Player 2 makes a move at (1, 1).
  | | |X|
  
  toe.move(2, 0, 1); -> Returns 0 (no one wins)
  |X| |O|
  | |O| |    // Player 1 makes a move at (2, 0).
  |X| |X|
  
  toe.move(1, 0, 2); -> Returns 0 (no one wins)
  |X| |O|
  |O|O| |    // Player 2 makes a move at (1, 0).
  |X| |X|
  
  toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
  |X| |O|
  |O|O| |    // Player 1 makes a move at (2, 1).
  |X|X|X|

Follow up: Could you do better than O(n2) per move() operation?

[0, 0] [0, 1] [0, 2] либо i  равны либо j равны

 */

// Time O(1)
// Space O(N)
class TicTacToe {
  constructor(n) {
    this.rows = Array(n).fill(0);
    this.cols = Array(n).fill(0);
    this.size = n;
    this.diagonal = 0;
    this.antiDiagonal = 0;
  }
  /*

    Пример того как можно посчитывать значения в диагоналях

    Нам не нужно отслеживать всю N ^ 2 доску.
    Нам нужно только вести подсчет для каждой строки и столбца.
    Если в любое время строка или столбец соответствуют размеру доски, то этот игрок выиграл.
    
  */
  move(row, col, player) {
    let toAdd = player === 1 ? 1 : -1;

    // Допустим у нас точки 1 юзера равны [0,0] [0,1] [0,2] => row[0] = 3
    this.rows[row] += toAdd;

    this.cols[col] += toAdd;

    // главная диагональ
    if (row === col) {
      this.diagonal += toAdd;
    }

    // побочная диагональ
    if (this.size - 1 - row == col) {
      this.antiDiagonal += toAdd;
    }

    if (
      Math.abs(this.rows[row]) === this.size ||
      Math.abs(this.cols[col]) === this.size ||
      Math.abs(this.diagonal) === this.size ||
      Math.abs(this.antiDiagonal) === this.size
    ) {
      return player;
    }

    return 0;
  }
}

// Time O(N)
// Space O(N)
class TicTacToe2 {
  constructor(n) {
    this.size = n;
    this.first = [];
    this.second = [];
    this.matrix = Array(n)
      .fill(null)
      .map(() => Array(n).fill(0));
  }

  move(row, col, player) {
    if (player === 1) {
      this.first.push([row, col]);
    } else {
      this.second.push([row, col]);
    }

    this.matrix[row][col] = player;

    if (this.first.length >= this.size && player === 1) {
      return this.hasWinner(this.first.slice(this.first.length - this.size)) ? player : 0;
    } else if (this.second.length >= this.size && player === 2) {
      return this.hasWinner(this.second.slice(this.second.length - this.size)) ? player : 0;
    }
    return 0;
  }

  checkColumn(row, col) {
    let valid = true;
    for (let i = 0; i < this.size; i++) {
      if (i === row) continue;
      if (this.matrix[i][col] !== this.matrix[row][col]) {
        valid = false;
      }
      if (!valid) break;
    }
    return valid;
  }

  checkRow(row, col) {
    let valid = true;
    for (let j = 0; j < this.size; j++) {
      if (j === col) continue;
      if (this.matrix[row][j] !== this.matrix[row][col]) {
        valid = false;
      }
      if (!valid) break;
    }
    return valid;
  }

  checkDiagTopToBot(row, col) {
    let valid = true;
    for (let i = 0; i < this.size; i++) {
      if (this.matrix[i][i] !== this.matrix[row][col]) {
        valid = false;
      }
      if (!valid) break;
    }
  }

  checkDiagBotToTop(row, col) {
    let valid = true;
    for (let i = this.size - 1, j = 0; j < this.size && i >= 0; i--, j++) {
      if (this.matrix[j][i] !== this.matrix[row][col]) {
        valid = false;
      }
      if (!valid) break;
    }
    return valid;
  }

  hasWinner(nums) {
    let [row, col] = nums[nums.length - 1];

    return !!(
      this.checkColumn(row, col) ||
      this.checkRow(row, col) ||
      this.checkDiagBotToTop(row, col) ||
      this.checkDiagTopToBot(row, col)
    );
  }
}
