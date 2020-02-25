/*

Given an integer array, you need to find one continuous subarray that if you only sort this subarray
 in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
  Input: [2, 6, 4, 8, 10, 9, 15]
  Output: 5
  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:
  Then length of the input array is in range [1, 10,000].
  The input array may contain duplicates, so ascending order here means <=.

*/

// Монотонный стек
// Идем по массиву и используем монотонный стек для поиска наим. и наиб. индексов которые не в своих позициях
// Time O(N)
// Space O(N)
const findUnsortedSubarray = nums => {
  let stack = [];
  let min = nums.length;

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      min = Math.min(min, stack.pop());
    }
    stack.push(i);
  }

  stack = [];

  let max = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      max = Math.max(max, stack.pop());
    }
    stack.push(i);
  }

  return max - min > 0 ? max - min + 1 : 0;
};

// Time O(N^2)
// Space O(1)
const findUnsortedSubarray_II = function(nums) {
  let start = nums.length;
  let end = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        start = Math.min(start, i);
        end = Math.max(end, j);
      }
    }
  }

  return end - start < 0 ? 0 : end - start + 1;
};
