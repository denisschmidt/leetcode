// Time O(N!)
// Space O(N!)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  let res = [];

  dfs(0, []);

  return res;

  function dfs(index, comb = []) {
    res.push([...comb]);

    for (let i = index; i < nums.length; i++) {
      comb.push(nums[i]);
      dfs(i + 1, comb);
      comb.pop();
    }
  }
};

// Time O(N* 2^N)
// Space O(N * 2^N)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  let nthNit = 1 << nums.length;
  let res = [];

  for (let i = 0; i < nthNit; i++) {
    let set = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i >> j) & 1) {
        set.push(nums[j]);
      }
    }
    res.push(set);
  }

  return res;
};
