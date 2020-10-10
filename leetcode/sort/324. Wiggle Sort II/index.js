/*
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:

Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
Example 2:

Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?


 */

// Top Solution 1
// Virtual Indexes

// 1) Use Quick Select Time O(N)
// 2) Use Three Way Partitioning
// to arrange the numbers so that those larger than the median come first,
// then those equal to the median come next, and then those smaller than the median come last.

// https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode

//Let's say nums is [10,11,...,19]. Then after quick sort and ordinary partitioning, we might have this (15 is my median):

// index:     0  1  2  3   4   5  6  7  8  9
// number:   18 17 19 16  15  11 14 10 13 12

// I rewire it so that the first spot has index 5, the second spot has index 0, etc, so that I might get this instead:
//
// index:     5  0  6  1  7  2  8  3  9  4
// number:   11 18 14 17 10 19 13 16 12 15
// And 11 18 14 17 10 19 13 16 12 15 is perfectly wiggly.
// And the whole partitioning-to-wiggly-arrangement (everything after finding the median) only takes O(n) time and O(1) space.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Solution 2

// Sort and then write the smaller half of the numbers on the even indexes
// and the larger half of the numbers on the odd indexes, both from the back.

// Big nums go to 1, 3, 5, 7 but small to to 0, 2, 4, 6

// Time O(NlogN)
// Space O(N)

var wiggleSort = function (nums) {
  const size = nums.length;
  const sorted = nums.slice().sort((a, b) => a - b);
  let mid = Math.floor((size - 1) / 2);

  for (let i = 0, j = size - 1; i < size; i++) {
    if (i % 2 === 0) {
      nums[i] = sorted[mid];
      mid--;
    } else {
      nums[i] = sorted[j];
      j--;
    }
  }
};

wiggleSort([1, 3, 2, 2, 3, 1]);
