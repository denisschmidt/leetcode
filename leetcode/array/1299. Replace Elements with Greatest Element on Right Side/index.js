/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
  Input: arr = [17,18,5,4,6,1]
  Output: [18,6,6,6,1,-1]
 

Constraints:
  1 <= arr.length <= 10^4
  1 <= arr[i] <= 10^5

*/

const replaceElements = arr => {
  let prev = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    arr[i] = prev;
    prev = Math.max(prev, cur);
  }
  return arr;
};

// Time O(N)
// Space O(N)
const replaceElements_II = arr => {
  let result = [-1];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = i - 1;
    while (j > 0 && arr[i] > arr[j]) {
      result.push(arr[i]);
      j--;
    }
    result.push(arr[i]);
    i = j + 1;
  }

  return result.reverse();
};

// Time O(N^2)
// Space O(N)
const replaceElements_III = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let max = -Number.MAX_VALUE;
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[j]);
    }
    if (max !== -Number.MAX_VALUE) result.push(max);
  }
  result.push(-1);
  return result;
};
