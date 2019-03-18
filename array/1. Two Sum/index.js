/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
 */

// Brute Force Solution

// Time complexity : O(n^2)
// For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
// Therefore, the time complexity is O(n^2)
// Space complexity : O(1).
const twoSum = function(nums, target) {
  const ans = [];
  const size = nums.length;

  for (let i = 0; i < size; i++) {
    let j = i + 1;
    while (j < size) {
      if (nums[j] === target - nums[i]) {
        ans.push(i, j);
        break;
      } else {
        j++;
      }
    }
  }
  return ans;
};

const res = twoSum([0, 4, 3, 0], 0);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hash Table Solution

// Time complexity : O(n).
// We traverse the list containing n elements exactly twice.
// Since the hash table reduces the look up time to O(1), the time complexity is O(n).

// Space complexity : O(n).
// The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
const twoSumHash = function(nums, target) {
  let map = new Map();
  const size = nums.length;
  const ans = [];

  for (let i = 0; i < size; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < size; i++) {
    let prev = target - nums[i];
    if (map.has(prev) && map.get(prev) !== i) {
      ans.push(i, map.get(prev));
      break;
    }
  }
  return ans;
};

const res2 = twoSumHash([3, 2, 4], 6);
console.log('---', res2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time complexity : O(n).
// Space complexity : O(n).
const findSum = (arr, val) => {
  let searchValues = [val - arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let searchVal = val - arr[i];
    if (searchValues.includes(arr[i])) {
      return true;
    } else {
      searchValues.push(searchVal);
    }
  }
  return false;
};

const res3 = findSum([3, 2, 4], 6);
console.log('---', res3);
