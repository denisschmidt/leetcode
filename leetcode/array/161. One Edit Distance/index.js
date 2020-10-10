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

// Time O(N)
// Space O(N)
const isOneEditDistance = (s, t) => {
  let l1 = s.length;
  let l2 = t.length;

  if (l1 == l2) {
    return oneEdit(s, t);
  } else if (l1 + 1 == l2) {
    return oneInsertReplace(s, t);
  } else if (l1 == l2 + 1) {
    return oneInsertReplace(t, s);
  }

  return false;

  function oneEdit(s1, s2) {
    if (s1 == s2) return false;
    let found = false;

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (found) return false;
        found = true;
      }
    }
    return true;
  }

  function oneInsertReplace(s1, s2) {
    let i = 0;
    let j = 0;
    while (i < s1.length && j < s2.length) {
      if (s1[i] !== s2[j]) {
        if (j - i == 1) return false;
        j++;
      } else {
        i++;
        j++;
      }
    }
    return true;
  }
};
