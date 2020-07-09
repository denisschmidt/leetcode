/*

Given a set of keywords words and a string S, make all appearances of all keywords in S bold. 

Any letters between <b> and </b> tags become bold.

The returned string should use the least number of tags possible, and of course the tags should form a valid combination.

For example, given that words = ["ab", "bc"] and S = "aabcd", we should return "a<b>abc</b>d". 

Note that returning "a<b>a<b>b</b>c</b>d" would use more tags, so it is incorrect.

Constraints:
  words has length in range [0, 50].
  words[i] has length in range [1, 10].
  S has length in range [0, 500].
  All characters in words[i] and S are lowercase letters.
  Note: This question is the same as 616: https://leetcode.com/problems/add-bold-tag-in-string/

*/

// Time O(S.length * Dict.Length +  NLogN)
// Space O(N)
const boldWords = (words, S) => {
  let intervals = [];

  for (let word of words) {
    let index = -1;

    index = S.indexOf(word, index);

    while (index != -1) {
      intervals.push([index, index + word.length]);
      index++;
      index = S.indexOf(word, index);
    }
  }

  if (intervals.length == 0) return S;

  intervals = merge(intervals);

  let res = '';
  let prev = 0;

  for (let interval of intervals) {
    res += S.substring(prev, interval[0]);

    res += '<b>' + S.substring(interval[0], interval[1]) + '</b>';

    prev = interval[1];
  }

  if (prev < S.length) {
    res += S.substring(prev);
  }

  return res;

  function overlap([x, y], [u, z]) {
    return x <= z && u <= y;
  }

  function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedIntervals = [];

    mergedIntervals.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
      let a = mergedIntervals[mergedIntervals.length - 1];
      let b = intervals[i];

      if (overlap(a, b)) {
        let min = Math.min(a[0], b[0]);
        let max = Math.max(a[1], b[1]);

        mergedIntervals.pop();
        mergedIntervals.push([min, max]);
      } else {
        mergedIntervals.push(b);
      }
    }
    return mergedIntervals;
  }
};
