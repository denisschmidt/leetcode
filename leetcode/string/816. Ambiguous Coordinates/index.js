/*

We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  

Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  

Return a list of strings representing all possibilities for what our original coordinates could have been.

Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  

Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

The final answer list can be returned in any order.  

Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

Example 1:
  Input: "(123)"
  Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]

Example 2:
  Input: "(00011)"
  Output:  ["(0.001, 1)", "(0, 0.011)"]
  Explanation: 
  0.0, 00, 0001 or 00.01 are not allowed.

Example 3:
  Input: "(0123)"
  Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]

Example 4:
  Input: "(100)"
  Output: [(10, 0)]
  Explanation: 
  1.0 is not allowed.
 

Note:
  4 <= S.length <= 12.
  S[0] = "(", S[S.length - 1] = ")", and the other elements in S are digits.

*/

// Time O(N^3)
// Space O(N)
const ambiguousCoordinates = str => {
  let res = [];
  let n = str.length;

  for (let i = 1; i < n - 2; i++) {
    let left = str.substr(1, i);
    let right = str.substr(i + 1, n - 2 - i);

    let leftPrefix = gen_prefixes(left);
    let rightPrefix = gen_prefixes(right);

    for (let p1 of leftPrefix) {
      for (let p2 of rightPrefix) {
        if (!p1.length || !p2.length) continue;
        res.push('(' + p1 + ', ' + p2 + ')');
      }
    }
  }

  return res;

  function gen_prefixes(S = '') {
    let n = S.length;
    if (n == 0 || (n > 1 && S[0] == '0' && S[n - 1] == '0')) return [];
    if (n > 1 && S[0] == '0') return ['0.' + S.substr(1)];
    if (n == 1 || S[n - 1] == '0') return [S];
    let res = [S];
    for (let i = 1; i < n; ++i) res.push(S.substr(0, i) + '.' + S.substr(i));
    return res;
  }
};
