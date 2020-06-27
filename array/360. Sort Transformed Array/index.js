/*

Given a sorted array of integers nums and integer values a, b and c. 

Apply a quadratic function of the form f(x) = ax2 + bx + c to each element x in the array.

The returned array must be in sorted order.

Expected time complexity: O(n)

Example 1:
  Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
  Output: [3,9,15,33]

Example 2:
  Input: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
  Output: [-23,-5,1,7]

*/

// Time O(N)
// Space O(N)
const sortTransformedArray = (nums, a, b, c) => {
  let isNegative = a >= 0 ? false : true;

  let [calcNums, pivot] = calc(nums);

  if (a >= 0) {
    return merge(calcNums, pivot, isNegative);
  } else {
    return merge(calcNums, pivot, isNegative).reverse();
  }

  function calc(nums) {
    let res = [];
    let min = Number.MAX_VALUE;
    let max = -Number.MAX_VALUE;
    let minIndex = -1;
    let maxIndex = -1;

    for (let i = 0; i < nums.length; i++) {
      let x = a * Math.pow(nums[i], 2) + b * nums[i] + c;

      if (x > max) {
        max = x;
        maxIndex = res.length;
      }

      if (x < min) {
        min = x;
        minIndex = res.length;
      }

      res.push(x);
    }

    return isNegative ? [res, maxIndex] : [res, minIndex];
  }

  function merge(nums, pivot, isNegative) {
    let res = [];
    let left = pivot - 1;
    let right = pivot + 1;

    res.push(nums[pivot]);

    while (left >= 0 && right < nums.length) {
      if (isNegative) {
        if (nums[left] < nums[right]) {
          res.push(nums[right++]);
        } else {
          res.push(nums[left--]);
        }
      } else {
        if (nums[left] > nums[right]) {
          res.push(nums[right++]);
        } else {
          res.push(nums[left--]);
        }
      }
    }

    while (left >= 0) {
      res.push(nums[left--]);
    }

    while (right < nums.length) {
      res.push(nums[right++]);
    }

    return res;
  }
};
