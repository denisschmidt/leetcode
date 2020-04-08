// Time O(N^3)
// Space O(1)
const numTeams = nums => {
  let n = nums.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        for (let k = j + 1; k < n; k++) {
          if (nums[j] < nums[k]) {
            cnt++;
          }
        }
      } else if (nums[i] > nums[j]) {
        for (let k = j + 1; k < n; k++) {
          if (nums[j] > nums[k]) {
            cnt++;
          }
        }
      }
    }
  }

  return cnt;
};

// Time O(N!)
// Space O(N)
const numTeams_II = rating => {
  let n = rating.length;
  let cnt = 0;

  helper();

  return cnt;

  function helper(index = 0, nums = []) {
    if (nums.length == 3 && ((nums[0] > nums[1] && nums[1] > nums[2]) || (nums[0] < nums[1] && nums[1] < nums[2]))) {
      cnt++;
      return;
    }
    if (nums.length <= 2) {
      for (let i = index; i < n; i++) {
        nums.push(rating[i]);
        helper(i + 1, nums);
        nums.pop();
      }
    }
  }
};
