/*
This question is the same as "Max Chunks to Make Sorted"
except the integers of the given numsay are not necessarily distinct,
the input numsay could be up to length 2000, and the elements could be up to 10**8.

Given an numsay nums of integers (not necessarily distinct), we split the numsay into some number of "chunks" (partitions),
and individually sort each chunk.
After concatenating them, the result equals the sorted numsay.

What is the most number of chunks we could have made?


Example 1:
  Input: nums = [5,4,3,2,1]
  Output: 1
  Explanation: Splitting into two or more chunks will not return the required result.
  For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.

Example 2:
  Input: nums = [2,1,3,4,4]
  Output: 4
  Explanation:
    We can split into two chunks, such as [2, 1], [3, 4, 4].
    However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.

Note:
  nums will have length in range [1, 2000].
  nums[i] will be an integer in range [0, 10**8].

 */

// Time O(N)
// Space O(N)
const maxChunksToSorted = nums => {
  let size = nums.length;
  let leftMax = [nums[0]];
  let rightMin = [];

  for (let i = 1; i < size; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
  }

  rightMin[size - 1] = nums[size - 1];

  for (let i = size - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let cnt = 0;

  for (let i = 0; i < size - 1; i++) {
    // когда вы находитесь в индексе i, вы должны сравнить max(0, ..., i) с min(i + 1, ..., len - 1).
    if (leftMax[i] <= rightMin[i + 1]) cnt++;
  }

  return cnt + 1;
};
