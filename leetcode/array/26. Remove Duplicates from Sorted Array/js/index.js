// Time O(N)
// Space O(1)
const removeDuplicates = nums => {
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0 || nums[i - 1] != nums[i]) {
      nums[currentLength++] = nums[i];
    }
  }

  return currentLength;
};
