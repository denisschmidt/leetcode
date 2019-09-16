/*
Given an array consists of non-negative integers, your task is to count the number of triplets chosen
from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:
  Input: [2,2,3,4]
  Output: 3
  Explanation:

    Valid combinations are: 
      2,3,4 (using the first 2)
      2,3,4 (using the second 2)
      2,2,3

Note:
  The length of the given array won't exceed 1000.
  The integers in the given array are in the range of [0, 1000].

 */

// Time O(N^2)
// Space O(1)
const triangleNumber = function(nums) {
  let count = 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 2; i < n; i++) {
    let l = 0;
    let h = i - 1;

    while (l < h) {
      if (nums[l] + nums[h] > nums[i]) {
        count += h - l;
        h--;
      } else {
        l++;
      }
    }
  }

  return count;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N!)
// Space O(N)
const triangleNumber2 = function(nums) {
  const n = nums.length;
  let count = 0;

  backtrack([], 0);

  return count;

  function backtrack(comb, start) {
    if (comb.length > 3) return;
    else if (comb.length === 3) {
      const [a, b, c] = comb;
      if (a + b > c && b + c > a && a + c > b) {
        count++;
      }
      return;
    } else {
      for (let i = start; i < n; i++) {
        comb.push(nums[i]);
        backtrack(comb, i + 1);
        comb.pop();
      }
    }
  }
};
