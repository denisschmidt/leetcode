/*

Given a binary array data, return the minimum number of swaps required to group all 1’s present in the array together in any place in the array.

Example 1:
  Input: [1,0,1,0,1]
  Output: 1
  Explanation: 
    There are 3 ways to group all 1's together:
    [1,1,1,0,0] using 1 swap.
    [0,1,1,1,0] using 2 swaps.
    [0,0,1,1,1] using 1 swap.
    The minimum is 1.

Example 2:
  Input: [0,0,0,1,0]
  Output: 0
  Explanation: Since there is only one 1 in the array, no swaps needed.

Example 3:
  Input: [1,0,1,0,1,0,0,1,1,0,1]
  Output: 3
  Explanation: One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].
 

Note:
  1 <= data.length <= 10^5
  0 <= data[i] <= 1

*/

/*

  Алгоритм:

  1) maxRange - содержит общее кол-во 1 во всем массиве 
    Это нам нужно для понимания того, какая максимальная длинна подмассива состоящего только из 1 

  2) maxLocalRange - максимальное число единиц в подмассиве длинной не более maxRange

  3) Итого кол-во свопов это maxRange - maxLocalRange

*/

// Time O(N)
// Space O(1)
const minSwaps = data => {
  let maxRange = 0;
  for (let n of data) {
    if (n == 1) maxRange++;
  }

  let lo = 0;
  let hi = 0;
  let n = data.length;
  let cnt = 0;
  let maxLocalRange = 0;

  while (hi < n) {
    while (hi < n && hi - lo < maxRange) {
      if (data[hi++] == 1) {
        cnt++;
      }
    }

    maxLocalRange = Math.max(maxLocalRange, cnt);

    if (data[lo++] == 1) {
      cnt--;
    }
  }

  return maxRange - maxLocalRange;
};
