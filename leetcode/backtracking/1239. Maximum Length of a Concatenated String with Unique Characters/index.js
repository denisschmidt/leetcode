/*

Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

Example 1:
  Input: arr = ["un","iq","ue"]
  Output: 4
  Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
  Maximum length is 4.

Example 2:
  Input: arr = ["cha","r","act","ers"]
  Output: 6
  Explanation: Possible solutions are "chaers" and "acters".

Example 3:
  Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
  Output: 26
 

Constraints:
  1 <= arr.length <= 16
  1 <= arr[i].length <= 26
  arr[i] contains only lower case English letters.

*/

// Time O(N!)
// Space O(N)
const maxLength = arr => {
  let n = arr.length;
  let visited = Array(n).fill(false);
  let ans = 0;
  let nums = Array(26).fill(0);

  helper(0, '');

  return ans;

  function helper(start, str) {
    if (start > n || visited[start]) return;

    visited[start] = true;

    for (let i = start; i < n; i++) {
      let foundDuplicate = false;

      for (let k = 0; k < arr[i].length; k++) {
        let c = arr[i][k];
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        // если есть дубликаты то избавляемся от символов которые уже добавили в nums
        if (nums[index] == 1) {
          for (let z = 0; z < k; z++) {
            nums[arr[i][z].charCodeAt(0) - 'a'.charCodeAt(0)]--;
          }
          foundDuplicate = true;
          break;
        }
        nums[index]++;
      }

      if (!foundDuplicate) {
        helper(i + 1, str + arr[i]);

        for (let c of arr[i]) {
          nums[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
      }
    }

    visited[start] = false;

    if (str.length > ans) {
      ans = str.length;
    }
  }

  function isValid(nums, str) {
    for (let x of str) {
      if (nums[x.charCodeAt(0) - 'a'.charCodeAt(0)] == 1) {
        return false;
      }
    }

    for (let i = 0; i < 26; i++) {
      if (nums[i] > 1) {
        return false;
      }
    }

    return true;
  }
};
