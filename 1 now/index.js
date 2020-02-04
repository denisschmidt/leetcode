/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  let ans = 0;
  let vec = [[1], [0, 2], [0, 1, 3, 4], [2, 4], [0]];

  helper(n, 0);

  return ans;

  function helper(cnt, currIndex) {
    if (cnt === 0) {
      ans++;
      return;
    }

    for (let i = 0; i < vec[currIndex].length; i++) {
      helper(cnt - 1, vec[currIndex][i]);
    }
  }
};

let a = countVowelPermutation(1);
console.log(a);
