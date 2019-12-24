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

const maxChunksToSorted = nums => {
  let max = [...nums];
  let s = nums.length;
  let cnt = 0;

  for (let i = 1; i < s; i++) {
    if (nums[i - 1] === nums[i] && max[i - 1] !== nums[i]) continue;
    max[i] = Math.max(max[i - 1], nums[i]);
  }

  nums.sort((a, b) => a - b);

  console.log(max, nums);

  for (let i = 0; i < s; i++) {
    if (max[i] === nums[i]) {
      cnt++;
    }
  }

  return cnt;
};

const c = maxChunksToSorted([1, 1, 0, 0, 1]);
console.log(c);
