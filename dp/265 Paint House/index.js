/*

//There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. 
//The cost of painting each house with a certain color is different. You have to paint all the houses such 
//that no two adjacent houses have the same color.

//The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, 
//costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 
//with color green, and so on... Find the minimum cost to paint all houses.

//Note:
//All costs are positive integers.

// [17, 2, 17], [16, 16, 5], [13, 3, 19] => 2 + 3 + 5


Time O(N * K)

 */

const buildHouses = costs => {
  if (costs == null || costs.length == 0) {
    return 0;
  }

  let m = costs.length;
  let n = costs[0].length;

  let min1 = -1;
  let min2 = -1;

  for (let i = 0; i < m; i++) {
    let last1 = min1;
    let last2 = min2;

    min1 = -1;
    min2 = -1;

    for (let j = 0; j < n; j++) {
      if (j != last1) {
        costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];
      } else {
        costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];
      }

      if (min1 < 0 || costs[i][j] < costs[i][min1]) {
        min2 = min1;
        min1 = j;
      } else if (min2 < 0 || costs[i][j] < costs[i][min2]) {
        min2 = j;
      }
    }
  }

  return costs[m - 1][min1];
};

const res = buildHouses([[17, 2, 17], [16, 16, 5], [13, 3, 19]]);
console.log('---', res);
