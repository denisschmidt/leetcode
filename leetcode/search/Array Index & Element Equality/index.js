/*

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. 

Return -1 if there is no such index. 

Analyze the time and space complexities of your solution and explain its correctness.

Examples:
  input: arr = [-8,0,2,5]
  output: 2 # since arr[2] == 2

  input: arr = [-1,0,3,6]
  output: -1 # since no index in arr satisfies arr[i] == i.

Constraints:
  [time limit] 5000ms
  [input] array.integer arr

1 ≤ arr.length ≤ 100
[output] integer

*/

// Time O(LogN)
// Space O(1)
const indexEqualsValueSearch = arr => {
  let n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] - mid == 0 && (mid == 0 || arr[mid - 1] - (mid - 1) < 0)) {
      return mid;
    }

    if (arr[mid] - mid < 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
