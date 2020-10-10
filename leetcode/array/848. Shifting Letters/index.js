/*

We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

Example 1:
  Input: S = "abc", shifts = [3,5,9]
  Output: "rpl"
  Explanation: 
  We start with "abc".
  After shifting the first 1 letters of S by 3, we have "dbc".
  After shifting the first 2 letters of S by 5, we have "igc".
  After shifting the first 3 letters of S by 9, we have "rpl", the answer.

Note:
  1 <= S.length = shifts.length <= 20000
  0 <= shifts[i] <= 10 ^ 9

*/

// Time O(N)
// Space O(N)
const shiftingLetters = (S, shifts) => {
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  let res = '';

  for (let i = 0; i < S.length; i++) {
    let code = S[i].charCodeAt(0) + shifts[i];
    if (code > 122) {
      // как найти значение символа по его коду (только для a-z)
      res += String.fromCharCode(((code - 97) % 26) + 97);
    } else {
      res += String.fromCharCode(code);
    }
  }

  return res;
};
