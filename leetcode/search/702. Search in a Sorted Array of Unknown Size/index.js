/*

Given an integer array sorted in ascending order, write a function to search target in nums.  
If target exists, then return its index, otherwise return -1. 

However, the array size is unknown to you. 

You may only access the array using an ArrayReader interface, where ArrayReader.get(k) returns the element of the array at index k (0-indexed).

You may assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.

 Example 1:
  Input: array = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

Example 2:
  Input: array = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
 

Note:
  You may assume that all elements in the array are unique.
  The value of each element in the array will be in the range [-9999, 9999].

*/

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

// Binary Search
// Time O(LogN + LogN)
// Space O(1)
const search = function (reader, target) {
  let lo = 0;
  // получаем верхнюю границу массива
  let hi = find(0, 10000);

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let val = reader.get(mid);

    if (val === target) return mid;

    if (reader.get(mid) < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;

  function find(lo, hi) {
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (reader.get(mid) === 2147483647) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    if (reader.get(lo) !== 2147483647) return lo;

    return lo - 1;
  }
};
