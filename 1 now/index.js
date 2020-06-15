/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  let ans = [];

  function calc(left, right) {
    while (left <= right) {
      let x = customfunction.f(left, right);

      if (x == z) ans.push([left, right]);

      if (x < z) {
        left++;
      } else {
        right--;
      }
    }

    return ans;
  }

  let left = 1;
  let right = z;
};
