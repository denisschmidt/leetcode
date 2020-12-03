// Time O(N)
// Space O(N)
const twoSum = (nums, target) => {
  let map = new Map();
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let prev = target - nums[i];

    if (map.has(prev) && map.get(prev) !== i) {
      ans.push(i, map.get(prev));
      break;
    }
  }

  return ans;
};
