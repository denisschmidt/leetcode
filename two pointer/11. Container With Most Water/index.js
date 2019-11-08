/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 

Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].

In this case, the max area of water (blue section) the container can contain is 49.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

 */

// Time O(N)
// Space O(1)
const maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let ans = -Number.MAX_VALUE;

  while (l < r) {
    ans = Math.max(ans, Math.abs(l - r) * Math.min(height[l], height[r]));
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(N)
const maxArea2 = function(height) {
  let ans = -Number.MAX_VALUE;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const min = Math.min(height[i], height[j]);
      ans = Math.max(ans, min * (j - i));
    }
  }
  return ans;
};
