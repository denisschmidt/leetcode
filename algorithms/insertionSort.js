// Time O(N^2)
// Space O(1)
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j - 1] > nums[j]) {
        swap(nums, j - 1, j);
      } else {
        break;
      }
    }
  }

  return nums;
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

insertionSort([100, 5, 12, 21, 312, 0, 123, 2, 1, 2, 4, 6, 1, 3, 12]);
