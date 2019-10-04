/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 
Example 1:
  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

Example 2:
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
 */

// Time O(N)
// Space O(1)
const reverseString = function(arr) {
  return helper(arr, 0, arr.length - 1);

  function helper(arr, l, r) {
    if (l > r) return arr;
    swap(arr, l, r);
    helper(arr, l + 1, r - 1);
  }

  function swap(arr, i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  }
};
