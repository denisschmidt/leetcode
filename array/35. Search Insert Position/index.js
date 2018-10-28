/*

Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

 Input: [1,3,5,6], 7
 Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(arr, search) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] >= search) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[right] < search ? right + 1 : right;
};

const res = searchInsert([1,3,5,6], 0);

console.log('---', res);
