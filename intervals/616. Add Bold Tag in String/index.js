/*

Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. 

If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. 

Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.

Example 1:

  Input: s = "abcxyz123" dict = ["abc","123"]
  Output: "<b>abc</b>xyz<b>123</b>"
  
Example 2:
  Input: s = "aaabbcc" dict = ["aaa","aab","bc"]
  Output: "<b>aaabbc</b>c"
  

Constraints:
  The given dict won't contain duplicates, and its length won't exceed 100.
  All the strings in input have length in range [1, 1000].
  Note: This question is the same as 758: https://leetcode.com/problems/bold-words-in-string/

*/

// Time O(S.length * Dict.Length +  NLogN)
// Space O(N)
const addBoldTag = (s, dict) => {
  let intervals = [];

  for (let word of dict) {
    let index = -1;
    index = s.indexOf(word, index);

    while (index != -1) {
      intervals.push([index, index + word.length]);
      index++;
      index = s.indexOf(word, index);
    }
  }

  if (intervals.length == 0) {
    return s;
  }

  intervals = merge(intervals);

  let res = '';
  let prev = 0;

  for (let interval of intervals) {
    res += s.substring(prev, interval[0]);

    res += '<b>' + s.substring(interval[0], interval[1]) + '</b>';

    prev = interval[1];
  }

  if (prev < s.length) {
    res += s.substring(prev);
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
