/*

Given an array A of integers, a ramp is a tuple (i, j) for which i < j and A[i] <= A[j].  

The width of such a ramp is j - i.

Find the maximum width of a ramp in A.  If one doesn't exist, return 0.

Example 1:
  Input: [6,0,8,2,1,5]
  Output: 4
  Explanation: 
  The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.

Example 2:
  Input: [9,8,1,0,1,9,4,0,4,1]
  Output: 7
  Explanation: 
  The maximum width ramp is achieved at (i, j) = (2, 9): A[2] = 1 and A[9] = 1.
  

Note:
  2 <= A.length <= 50000
  0 <= A[i] <= 50000

*/

// Time O(N)
// Space O(N)
const maxWidthRamp = A => {
  let n = A.length;

  // keep track monotonic decreasing stack
  let stack = [];

  for (let i = 0; i < n; i++) {
    if (!stack.length || A[i] < A[peek(stack)]) {
      stack.push(i);
    }
  }

  let max = 0;

  for (let j = n - 1; j >= 0; j--) {
    while (stack.length && A[j] >= A[peek(stack)]) {
      // we need delete last index from stack
      // because we already got max width with index j and next j only decrease width
      let i = stack.pop();

      max = Math.max(max, j - i);
    }
  }

  return max;

  function peek(x) {
    return x[x.length - 1];
  }
};

// Time O(NLoN)
// Space O(N)
const maxWidthRamp_II = A => {
  let max = 0;
  let n = A.length;
  let nums = A.map((v, i) => [v, i]);

  nums.sort((a, b) => a[0] - b[0]);

  let minIndex = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    minIndex = Math.min(minIndex, nums[i][1]);

    max = Math.max(max, nums[i][1] - minIndex);
  }

  return max;
};
