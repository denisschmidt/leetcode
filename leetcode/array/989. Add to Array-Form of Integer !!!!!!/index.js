/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.

For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.


Example 1:
  Input: A = [1,2,0,0], K = 34
  Output: [1,2,3,4]
  Explanation: 1200 + 34 = 1234

Example 2:
  Input: A = [2,7,4], K = 181
  Output: [4,5,5]
  Explanation: 274 + 181 = 455

Example 3:
  Input: A = [2,1,5], K = 806
  Output: [1,0,2,1]
  Explanation: 215 + 806 = 1021

Example 4:
  Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
  Output: [1,0,0,0,0,0,0,0,0,0,0]
  Explanation: 9999999999 + 1 = 10000000000

Note：
  1 <= A.length <= 10000
  0 <= A[i] <= 9
  0 <= K <= 10000
  If A.length > 1, then A[0] != 0
 */
// params
let A = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  K = 1;

// Time O(N)
const addToArrayForm = function (nums, target) {
  let prefix = 0;
  let str = target.toString();
  let ans = [];
  let i = nums.length - 1;
  let j = str.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = prefix;
    if (nums[i]) {
      sum += Number(nums[i]);
    }
    if (str[j]) {
      sum += Number(str[j]);
    }

    prefix = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;
    ans.push(sum);

    i--;
    j--;
  }

  if (prefix === 1) ans.push(1);

  return ans.reverse();
};

const res = addToArrayForm(A, K);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complexity Analysis
//
// Time Complexity: O(max(N, log K)) where N is the length of A.
//
// Space Complexity: O(max(N, log K)).

const addToArrayForm2 = function (nums, target) {
  let size = nums.length;
  let ans = [];
  let sum = target;
  let i = size;
  while (--i >= 0 || sum > 0) {
    if (i >= 0) {
      sum += nums[i];
    }
    ans.push(sum % 10);
    sum = Math.floor(sum / 10);
  }
  return ans.reverse();
};

const res2 = addToArrayForm2(A, K);
console.log('---', res2);
