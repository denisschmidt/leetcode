/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac".

Example 2:
  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become "".

Example 3:
  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c".

Example 4:
  Input: S = "a#c", T = "b"
  Output: false
  Explanation: S becomes "c" while T becomes "b".

Note:
  1 <= S.length <= 200
  1 <= T.length <= 200
  S and T only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(N) time and O(1) space?

 */
// Time O(N)
// Space O(1)

const backspaceCompare = (S, T) => {
  let s1 = remove(S.split(''));
  let s2 = remove(T.split(''));

  return s1 == s2;

  function remove(s) {
    let cnt = 0;
    for (let i = s.length; i >= 0; i--) {
      if (s[i] == '#') {
        cnt++;
        s.splice(i, 1);
      } else {
        if (cnt > 0) {
          cnt--;
          s.splice(i, 1);
        }
      }
    }
    return s.join('');
  }
};
