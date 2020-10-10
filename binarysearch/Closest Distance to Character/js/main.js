class Solution {
  solve(s, c) {
    let map = new Map();

    map.set(c, []);

    for (let i = 0; i < s.length; i++) {
      if (s[i] == c) {
        map.get(s[i]).push(i);
      }
    }

    let res = Array(s.length).fill(0);

    for (let i = 0; i < s.length; i++) {
      if (s[i] != c) {
        res[i] = this.search(map.get(c), i);
      }
    }

    return res;
  }

  search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    if (lo > 0 && target - nums[lo - 1] < nums[lo] - target) {
      return target - nums[lo - 1];
    }

    return Math.abs(nums[lo] - target);
  }
}
