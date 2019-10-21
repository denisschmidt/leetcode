/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
 */

// Time: нужно проверить не более 27 комбинаций.
// Space: постоянное пространство для хранения решений, не более 19 действительных IP-адресов.

const restoreIpAddresses = function(s) {
  const ans = [];

  backtrack([], 1);

  return ans;

  function backtrack(comb, index, count = 1) {
    if (s.length - index > (4 - count) * 3) {
      return;
    } else if (index === s.length && count === 4) {
      ans.push(comb.join('.'));
      return;
    } else {
      for (let i = index; i < index + 3; i++) {
        comb.push(s.substring(index, i + 1));
        backtrack(comb, index + 1, count + 1);
        comb.pop();
      }
    }
  }
};
