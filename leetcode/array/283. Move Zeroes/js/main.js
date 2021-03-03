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
