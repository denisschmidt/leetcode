/*
Given two strings S and T, determine if they are both one edit distance apart. Hint:

If | n – m | is greater than 1, we know immediately both are not one-edit distance apart.

It might help if you consider these cases separately, m == n and m ≠ n.
Assume that m is always ≤ n, which greatly simplifies the conditional statements. If m > n, we could just simply swap S and T.

If m == n, it becomes finding if there is exactly one modified operation.
If m ≠ n, you do not have to consider the delete operation. Just consider the insert operation in T.

S = “abcde” T = “abXde”
S = “abcde” T = “abcXde”
S = “abcde” T = “abcdeX”

 */

const oneEditReplace = (s1, s2) => {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (count > 0) {
        return false;
      }
      count++;
    }
  }
};

const oneEditInsert = (s1, s2) => {};

const isOneEditDistance = (s1, s2) => {
  if (s1.length === s2.length) {
    return oneEditReplace(s1, s2);
  } else if (s1.length + 1 === s2.length) {
    return oneEditInsert(s1, s2);
  } else if (s1.length - 1 === s2.length) {
    return oneEditInsert(s1, s2);
  }
  return false;
};

const res = isOneEditDistance('abcde', 'abXde');
console.log('---', res);
