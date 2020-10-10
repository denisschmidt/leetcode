/*
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.



Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function (A) {
  let odd = [],
    even = [],
    ans = [];
  for (let i = 0; i < A.length; i++) {
    let val = A[i];
    if (val % 2 !== 0) {
      odd.push(val);
    } else {
      even.push(val);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (i % 2 !== 0) {
      ans.push(odd.pop());
    } else {
      ans.push(even.pop());
    }
  }
  return ans;
};

const res = sortArrayByParityII([4, 2, 5, 7]);

console.log('---', res);
