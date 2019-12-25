/*
A string S of lowercase letters is given. 

We want to partition this string into as many parts as possible so that each letter appears in at most one part,
and return a list of integers representing the size of these parts.


Example 1:
  Input: S = "ababcbacadefegdehijhklij"
  Output: [9,7,8]

Explanation:
  The partition is "ababcbaca", "defegde", "hijhklij".
  This is a partition so that each letter appears in at most one part.
  A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:
  S will have length in range [1, 500].
  S will consist of lowercase letters ('a' to 'z') only.s

  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14  15 16 17 18  19 20  21 22 23
  a b a b c b a c a d e  f   e  g  d  e  h  i   j  h  k  l  i  j 


  ababcbaca

  0 1 2 3 4 5 6 7 8 9
  c a e d b d e d d a

  */

// Time O(N)
// Space O(K)
const partitionLabels = S => {
  let map = {};
  let size = S.length;
  let end = 0;
  let start = 0;

  for (let i = 0; i < size; i++) {
    map[S[i]] = i;
  }

  let max = 0;
  let result = [];

  while (end < size) {
    max = Math.max(max, map[S[end]]);

    while (max > end && end < size) {
      if (max === end) break;
      if (S[end] < max) {
        end++;
      } else {
        end++;
        max = Math.max(max, map[S[end]]);
      }
    }

    result.push(end - start + 1);

    end++;
    start = end;
  }

  return result;
};
