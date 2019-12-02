/*
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "".
If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:
  Input:  S = "abcde bdde", T = "bde"
  Output: "bcde"
  Explanation:
    "bcde" is the answer because it occurs before "bdde" which has the same length.
    "deb" is not a smaller window because the elements of T in the window must occur in order.

Note:
  All the strings in the input will only contain lowercase letters.
  The length of S will be in the range [1, 20000].
  The length of T will be in the range [1, 100].
 */

// Time O(N*M)
// Space O(1)
const minWindow = (S, T) => {
  let sIndex = 0;
  let tIndex = 0;
  let minLen = Number.MAX_VALUE;
  let tLen = T.length;
  let minStartIndex = 0;

  while (sIndex < S.length) {
    if (S[sIndex] === T[tIndex]) {
      tIndex++;

      if (tIndex === tLen) {
        let end = sIndex + 1;
        tIndex--;

        // ищем самый крайний левый индекс при котором у нас вхождения отсутствуют
        while (tIndex >= 0) {
          while (S[sIndex--] !== T[tIndex] && tIndex >= 0) {}
          tIndex--;
        }
        sIndex++;
        tIndex++;

        if (minLen > end - sIndex) {
          minLen = end - sIndex;
          minStartIndex = sIndex;
        }
      }
    }
    sIndex++;
  }

  return minLen === Number.MAX_VALUE ? '' : S.substr(minStartIndex, minLen);
};

const res = minWindow('abcdebdde', 'bde');
console.log(res);
