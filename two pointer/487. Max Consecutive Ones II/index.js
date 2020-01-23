/*

Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

Example 1:
  Input: [1,0,1,1,0]
  Output: 4
  Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.

Note:
  The input array will only contain 0 and 1.
  The length of input array is a positive integer and will not exceed 10,000
  
  Follow up:
  What if the input numbers come in one by one as an infinite stream? 
  In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. 
  Could you solve it efficiently?

*/

// Time O(N)
// Space O(1)
const findMaxConsecutiveOnes = nums => {
  let start = 0;
  let end = 0;
  let zero = 0;
  let maxLen = 0;
  let n = nums.length;

  while (end < n) {
    if (nums[end] === 0) {
      zero++;
    }

    while (zero > 1) {
      if (nums[start] === 0) {
        zero--;
      }
      start++;
    }

    if (maxLen < end - start + 1) {
      maxLen = end - start + 1;
    }

    end++;
  }

  return maxLen;
};
