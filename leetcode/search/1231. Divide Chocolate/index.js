/*

You have one chocolate bar that consists of some chunks. 

Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your K friends so you start cutting the chocolate bar into K+1 pieces using K cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

Example 1:
  Input: sweetness = [1,2,3,4,5,6,7,8,9], K = 5
  Output: 6
  Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]

Example 2:
  Input: sweetness = [5,6,7,8,9,1,2,3,4], K = 8
  Output: 1
  Explanation: There is only one way to cut the bar into 9 pieces.

Example 3:
  Input: sweetness = [1,2,2,1,2,2,1,2,2], K = 2
  Output: 5
  Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]
 

Constraints:
  0 <= K < sweetness.length <= 10^4
  1 <= sweetness[i] <= 10^5

*/

// Почему работает binary search ???
// Потому что если есть лучший оптимальный ответ, binary search будет продолжать идти к нему

// Time O(N * Log(1e9))
// Space O(1)
const maximizeSweetness = (sweetness, K) => {
  let left = 1;
  let right = Math.floor(1e9 / (K + 1));
  let n = sweetness.length;

  while (left < right) {
    let m = Math.floor((right + left + 1) / 2);

    if (calc(m) > K) {
      left = m;
    } else {
      right = m - 1;
    }
  }

  return left;

  function calc(min) {
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (sum + sweetness[i] < min) {
        sum += sweetness[i];
      } else {
        cnt++;
        sum = 0;
      }
    }
    return cnt;
  }
};
