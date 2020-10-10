/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

 */

// Time O(N)
// Space O(1)
const moveZeroes = nums => {
  let n = nums.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      cnt++;
    }

    let j = i;
    while (cnt > 0 && j < n) {
      if (nums[j] != 0) {
        swap(nums, i, j);
        cnt--;
      }
      j++;
    }

    if (j == n) {
      break;
    }
  }
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

// Time O(N)
// Space O(1)
const moveZeroes_II = nums => {
  let n = nums.length;
  let nxt = 0;

  for (let num of nums) {
    if (num != 0) {
      nums[nxt] = num;
      nxt++;
    }
  }

  for (let i = nxt; i < n; i++) {
    nums[i] = 0;
  }
};
