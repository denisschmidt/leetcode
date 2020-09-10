/*

Given a binary string S (a string consisting only of '0' and '1's) and a positive integer N, 
return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.

Example 1:
  Input: S = "0110", N = 3
  Output: true

Example 2:
  Input: S = "0110", N = 4
  Output: false
 

Note:
  1 <= S.length <= 1000
  1 <= N <= 10^9

*/

// Time N/2 * O(S) - проверка числа в стороке S
// Общая сложность по времени имеет верхнюю границу O (S^2)
// Space O(1)
const queryString = function (S, N) {
  for (let i = N; i > N / 2; --i) {
    let p = i.toString(2);
    if (S.indexOf(p) == -1) {
      return false;
    }
  }

  return true;
};
