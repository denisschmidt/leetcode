/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



Kadane’s Algo with O(n) linear complexity

The time complexity this solution is O(n) and space used by the program is O(1)


Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this).
And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this).
Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far

 */
const INPUT = [-2, -1, -3, -4, -1, -2, -1, -5, -4];
const allPositives = arr => arr.every(n => n > 0);
const allNegatives = arr => arr.every(n => n < 0);
const calcSum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0);

// Time O(n)
const maxSequence = arr => {
  if (nums.length === 0) return null;

  if (allNegatives(nums)) return Math.max(...nums);
  if (allPositives(nums)) return calcSum(nums);

  let sum = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(0, sum + nums[i]);
    ans = Math.max(ans, sum);
  }
  return ans;
};

const res = maxSequence(INPUT); // 0
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(n)
const maxSequence2 = arr => {
  if (arr.length === 0) return null;
  if (allNegatives(arr)) return 0;
  if (allPositives(arr)) return calcSum(arr);

  let temp = { start: 0, end: 0, sum: 0 };
  let ans = { start: 0, end: 0, sum: 0 };

  for (let i = 0; i < arr.length; i++) {
    temp.sum += arr[i];

    if (temp.sum > ans.sum) {
      ans = { start: temp.start, end: i, sum: temp.sum };
    }

    if (temp.sum < 0) {
      temp.sum = 0;
      temp.start = i + 1;
    }
  }

  return ans;
};

const res2 = maxSequence2(INPUT);
console.log('---', res2);
