/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
  Input: [1, 2, 0]
  Output: 3

Example 2:
  Input: [3, 4, -1, 1]
  Output: 2

Example 3:
  Input: [7,8,9,11,12]
  Output: 1

 */

// Time Complexity O(N) and time space O(N)
const firstMissingPositive = nums => {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
};

const res = firstMissingPositive([7, 8, 9, 11, 12]);
console.log('===', res);

// =====================================================================================================================

//  O(N) time and don use extra space
const firstMissingPositive2 = nums => {
  console.log('---', nums);

  const size = nums.length;
  for (let i = 0; i < size; i++) {
    while (i + 1 !== nums[i] && 0 < nums[i] && nums[i] <= size) {
      // swap
      let swap = nums[i];
      nums[i] = nums[swap - 1];
      nums[swap - 1] = swap;

      if (nums[i] === nums[swap - 1]) {
        break;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }
  return size + 1;
};

const res2 = firstMissingPositive2([2, 4, 20, 1]);
console.log('===', res2);
// =====================================================================================================================

// use swap to put nums[i] to position i - 1, for example put 1 to position 0.
// using a while in case the new nums[i] is not i - 1, continue put it to right location.
// check nums[nums[i] - 1] != nums[i] in case they are same number falling to forever loop.
const firstMissingPositive3 = function(A) {
  // A[A[i] - 1] !== A[i] checks if index and value of element are in right position.
  // It's basically to deal with duplicates.
  for (let i = 0; i < A.length; i++) {
    while (A[i] > 0 && A[i] - 1 < A.length && A[i] - 1 !== i && A[A[i] - 1] !== A[i]) {
      // swap
      let j = A[i] - 1;
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
  }

  let i = 0;
  for (; i < A.length; i++) {
    if (i + 1 !== A[i]) break;
  }
  return i + 1;
};

const res3 = firstMissingPositive3([7, 8, 9, 11, 12]);
console.log('===', res3);

// =====================================================================================================================

/*

  Our lives would be easier without the linear time constraint:
  we would just sort the array, while filtering out negative numbers,
  and iterate over the sorted array and return the first number that doesn't match the index.

  However, sorting takes O(n log n), so we can't use that here.
 */
const firstMissingPositive4 = function(arr) {
  let ans = Number.MAX_VALUE;
  const nums = arr.sort((a, b) => a - b).filter(val => val > 0); // O(N Log N )

  if (!nums.includes(0)) nums.unshift(0);
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      ans = Math.min(ans, nums[i] + 1);
    }
  }
  return ans !== Number.MAX_VALUE ? ans : nums[nums.length - 1] + 1;
};
