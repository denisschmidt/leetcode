/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  let n = books.length;
  let INF = Number.MAX_VALUE;
  let dp = Array(1001)
    .fill(0)
    .map(() => Array(1001).fill(0));

  return helper(0, 0, 0);

  function helper(i, w, h) {
    if (start >= n) return h;

    if (dp[i][w] != 0) {
      return dp[i][w];
    }

    dp[i][w] = Math.min(
      h + helper(i + 1, books[i][0], books[i][1]),

      w + books[i][0] > shelf_width ? INF : helper(i + 1, w + books[i][0], Math.max(h, books[i][1])),
    );

    return dp[i][w];
  }
};
