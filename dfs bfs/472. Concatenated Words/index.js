/*

Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
  Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
  Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: 
  "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
  "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
  "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

Note:
  The number of elements of the given array will not exceed 10,000
  The length sum of elements in the given array will not exceed 600,000.
  All the input string will only include lower case letters.
  The returned elements order does not matter.

*/

// Time (N * (S ^ 2))
// Space O(N)
const findAllConcatenatedWordsInADict = words => {
  let set = new Set(words);
  let ans = [];

  for (let word of words) {
    if (getCnt(word) >= 2) {
      ans.push(word);
    }
  }

  return ans;

  function getCnt(str) {
    let queue = [0];
    let visited = Array(str.length).fill(null);
    let cnt = 0;

    while (queue.length) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let start = queue.shift();

        for (let end = start + 1; end <= str.length; end++) {
          if (visited[end]) continue;
          let s = str.substring(start, end);

          if (str !== s && set.has(s)) {
            if (end == str.length) {
              return cnt + 1;
            }
            queue.push(end);
            visited[start] = true;
          }
        }
      }
      cnt++;
    }
    return 0;
  }
};
