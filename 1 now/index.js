var isAdditiveNumber = function(nums) {
  let ans = false;
  helper();

  return ans;

  function helper(comb = [], index = 0) {
    if (index === nums.length && comb.length > 2) {
      ans = true;
      return;
    }
    for (let i = index; i < nums.length; i++) {
      let cur = nums.substring(index, i + 1);

      if (i > 0 && cur[0] === '0' && cur.length > 1) continue;

      if (comb.length >= 2 && Number(comb[comb.length - 1]) + Number(comb[comb.length - 2]) !== Number(cur)) {
        continue;
      }

      comb.push(cur);
      helper(comb, i + 1);
      comb.pop();
    }
  }
};
