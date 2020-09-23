/*

  Note that after going to the next state, Bob becomes the player removing the stones, which is the position of Alice in the current state. 
  
  Therefore, to find out whether Bob will lose in the next state, we just need to check whether our function gives False for remaining stones.

*/

// Time O(N*SQRT(N))
// Space O(N)
const winnerSquareGame = n => {
  let squareList = new Set();
  let cache = new Map();

  for (let i = 1; i * i <= n; i++) {
    squareList.add(i * i);
  }

  let x = dfs(n, 0);

  console.log(cache);

  function dfs(N, next) {
    // base case
    // this are not any stones
    if (N == 0) {
      return false;
    }

    if (cache.has(N)) {
      return cache.get(N);
    }

    for (let square of squareList.values()) {
      if (square > N) break;

      // if there is any chance to make the opponent lose the game in the next round
      // then the current player will win.
      if (!dfs(N - square, next + 1)) {
        cache.set(N, true);
        return true;
      }
    }

    cache.set(N, false);
    return false;
  }
};
