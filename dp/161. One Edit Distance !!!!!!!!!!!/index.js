/*
161. One Edit Distance

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
const oneEditReplace = (s, t) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      if (count > 0) {
        return false;
      }
      count++;
    }
  }
  return true;
};

const oneEditInsert = (s, t) => {
  let index1 = 0;
  let index2 = 0;

  while (index1 < s.length && index2 < t.length) {
    if (s[index1] !== t[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }

  return true;
};

const isOneEditDistance = function(s, t) {
  if (s === t) {
    return false;
  }

  if (s.length === t.length) {
    return oneEditReplace(s, t);
  } else if (s.length + 1 === t.length) {
    return oneEditInsert(s, t);
  } else if (s.length - 1 === t.length) {
    return oneEditInsert(t, s);
  }

  return false;
};
