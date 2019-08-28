/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.


The above elevation map is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. 

In this case, 6 units of rain water (blue section) are being trapped. 

Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

const input = [4, 2, 3];

// Time O(N)
// Space O(N)
// DP
var trap = function(nums) {
  if (nums.length === 0) return 0;

  let ans = 0;
  let size = nums.length;

  let right = [];
  let left = [];
  left.push(nums[0]);
  right[size - 1] = nums[size - 1];

  for (let i = 1; i < size; i++) {
    left[i] = Math.max(nums[i], left[i - 1]);
  }

  for (let i = size - 2; i >= 0; i--) {
    right[i] = Math.max(nums[i], right[i + 1]);
  }

  for (let i = 0; i < size - 1; i++) {
    ans += Math.min(left[i], right[i]) - nums[i];
  }

  return ans;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(n)
// Space O(N)
// Stack
var trap2 = function(nums) {
  let ans = 0;
  let stack = [];
  let index = 0;

  while (index < nums.length) {
    while (stack.length && nums[index] > nums[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();

      if (!stack.length) break;

      let diff = index - stack[stack.length - 1] - 1;

      let height = Math.min(nums[index], nums[stack[stack.length - 1]]) - nums[prevIndex];
      ans += diff * height;
    }

    stack.push(index);
    index++;
  }

  return ans;
};

const res = trap2(input);
console.log('--', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N)
// Space O(1)

// Two pointers
var trap3 = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left <= right) {
    if (nums[left] <= nums[right]) {
      if (nums[left] > leftMax) leftMax = nums[left];
      else ans += leftMax - nums[left];
      left++;
    } else {
      if (nums[right] >= rightMax) rightMax = nums[right];
      else ans += rightMax - nums[right];
      right--;
    }
  }
  return ans;
};
