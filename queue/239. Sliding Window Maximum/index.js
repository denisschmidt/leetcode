/*

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
You can only see the k numbers in the window.
Each time the sliding window moves right by one position.
Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note: 
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?


 */
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

// Time O(N) * log K
// Adding and extracting from the heap will take O(log k)
const maxSlidingWindow = function(nums, k) {
  let end = 0;
  let stack = [];
  let maxValue = nums[0];
  let ans = [];

  while (end < nums.length) {
    stack.push(nums[end]);

    if (stack.length === k) {
      maxValue = Math.max(...stack);
      ans.push(maxValue);
      stack.shift();
    }

    end++;
  }
  return ans;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)

/*
10 5 2 7 8 7

init loop
[0, 1, 2]

second loop
[0, 1, 2] -> 10
[1, 2] del
[1] del
[3] -> 7
[3] del
[4] -> 8
[4] -> 8

 */

const maxSlidingWindow3 = function(nums, k) {
  const queue = [];
  const ans = [];

  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }

  // Loop invariant: queue is a list of indices where their corresponding values are in descending order.

  for (let i = k; i < nums.length; i++) {
    ans.push(nums[queue[0]]);
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);
  }
  ans.push(nums[queue[0]]);
  return ans;
};

console.log('----', maxSlidingWindow3([10, 5, 2, 7, 8, 7], 3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const maxSlidingWindow2 = function(nums, k) {
  if (!nums.length) {
    return [];
  }
  let end = 0;
  let stack = [];
  let maxValue = -Number.MAX_VALUE;
  let ans = [];

  while (end <= nums.length) {
    stack.push(nums[end]);

    if (stack.length > k) {
      ans.push(maxValue);
      stack.shift();
      if (stack[stack.length - 1] > maxValue) {
        maxValue = stack[stack.length - 1];
      } else {
        maxValue = Math.max(...stack);
      }
    }
    maxValue = Math.max(maxValue, stack[stack.length - 1]);
    end++;
  }
  return ans;
};
