// Time O(N)
// Space O(N)
const findFrequentTreeSum = root => {
  let map = {};
  let maxFreq = 0;
  let ans = [];

  dfs(root);

  return ans;

  function dfs(node) {
    if (node == null) {
      return 0;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    let sum = l + r + node.val;

    map[sum] = ~~map[sum] + 1;

    if (maxFreq < map[sum]) {
      maxFreq = map[sum];
      ans = [sum];
    } else if (maxFreq == map[sum]) {
      ans.push(sum);
    }

    return sum;
  }
};
