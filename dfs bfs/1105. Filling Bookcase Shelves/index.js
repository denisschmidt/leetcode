/*

We have a sequence of books: the i-th book has thickness books[i][0] and height books[i][1].

We want to place these books in order onto bookcase shelves that have total width shelf_width.

We choose some of the books to place on this shelf (such that the sum of their thickness is <= shelf_width), then build another level of shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down.  

We repeat this process until there are no more books to place.

Note again that at each step of the above process, the order of the books we place is the same order as the given sequence of books.  For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.


Example 1:
  Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
  Output: 6
  Explanation:
    The sum of the heights of the 3 shelves are 1 + 3 + 2 = 6.
    Notice that book number 2 does not have to be on the first shelf.
 

Constraints:
  1 <= books.length <= 1000
  1 <= books[i][0] <= shelf_width <= 1000
  1 <= books[i][1] <= 1000

*/

// Для каждой книги нам нужно изучить два случая: добавить на полку и добавить новую полку.

// Time O(2^N) with memo O(N * M)
const minHeightShelves = function(books, shelf_width) {
  let n = books.length;
  let INF = Number.MAX_VALUE;
  let dp = Array(1001)
    .fill(0)
    .map(() => Array(1001).fill(0));

  return helper(0, 0, 0);

  function helper(i, w, h) {
    if (i >= n) return h;

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
