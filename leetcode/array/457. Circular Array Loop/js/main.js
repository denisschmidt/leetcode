// Time O(N)
// Space O(1)
const circularArrayLoop = nums => {
  for (let i = 0; i < nums.length; ++i) {
    let cur = i;
    let dir = 0;
    let prev = i;

    while (nums[cur] <= 1000) {
      prev = cur;

      let t = (cur + nums[cur]) % nums.length;

      if (nums[cur] < 0) {
        cur = t < 0 ? nums.length + t : t;
        dir = dir === 0 || dir === 1 ? 1 : 3;
      } else {
        cur = t;
        dir = dir === 0 || dir === 2 ? 2 : 3;
      }

      if (dir === 3) break;

      nums[prev] = 1001 + i;

      if (cur === prev) break;
    }

    if (prev !== cur && nums[cur] === 1001 + i && dir !== 3) return true;
  }
  return false;
};
