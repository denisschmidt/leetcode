/*
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"

Given n and k, return the kth permutation sequence.

Note:
  Given n will be between 1 and 9 inclusive.
  Given k will be between 1 and n! inclusive.

Example 1:
  Input: n = 3, k = 3
  Output: "213"

Example 2:
  Input: n = 4, k = 9
  Output: "2314"
*/

// Time O(N)
// Space O(N)
const getPermutation = function(n, k) {
  let used = Array(n + 1).fill(false);

  let ans = helper([], used);

  return !ans ? null : ans.join('');

  function helper(comb, used) {
    if (comb.length === n) {
      k--;
      if (k === 0) {
        return comb;
      }
      return null;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      comb.push(i);
      used[i] = true;
      let result = helper(comb, used);

      if (result) {
        return result;
      }

      used[i] = false;
      comb.pop();
    }
  }
};
