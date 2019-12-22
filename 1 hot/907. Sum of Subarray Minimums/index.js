/*
Given an array of integers A, find the sum of min(B), where B ranges over every (contiguous) subarray of A.

Since the answer may be large, return the answer modulo 10^9 + 7.

Example 1:
  Input: [3,1,2,4]
  Output: 17
  Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
  Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.


[1, 2, ]


Note:
  1 <= A.length <= 30000
  1 <= A[i] <= 30000

 */

/*
res = sum(A[i] * f(i))

где f(i) - число подмассивов,

в которой nums[i] является минимумом.

Чтобы получить f (i), нам нужно выяснить

left[i], длина строгих больших чисел слева от nums[i],
right [i], длина больших чисел справа от nums[i].

Чтобы вычислить left[i] и right[i], мы используем увеличивающийся стек.

 */

// Time O(N)
// Space O(N)
const sumSubarrayMins = nums => {
  let stack = [];
  let left = [];
  let right = [];
  let mod = 1e9 + 7;

  // найти все элементы PLE(Previous Less Element).
  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;

    // prev less
    while (stack.length && stack[stack.length - 1][0] > nums[i]) {
      let item = stack.pop();
      cnt += item[1];
    }

    stack.push([nums[i], cnt]);
    left[i] = cnt;
  }

  stack = [];

  // найти все элементы NLE(Next Less Element).
  for (let i = nums.length - 1; i >= 0; i--) {
    let cnt = 1;

    // next less
    while (stack.length && stack[stack.length - 1][0] >= nums[i]) {
      let item = stack.pop();
      cnt += item[1];
    }

    stack.push([nums[i], cnt]);
    right[i] = cnt;
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // left[i] * right[i] -
    result = (result + nums[i] * left[i] * right[i]) % mod;
  }

  return result;
};

const res = sumSubarrayMins([3, 1, 2, 4]);
console.log(res);
