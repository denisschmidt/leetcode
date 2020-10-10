/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
 
Example 1:
  Input: text = "nlaebolko"
  Output: 1

Example 2:
  Input: text = "loonbalxballpoon"
  Output: 2

Example 3:
  Input: text = "leetcode"
  Output: 0
 

Constraints:
  1 <= text.length <= 10^4
  text consists of lower case English letters only.

*/

// Time O(K*N) где K - кол-во инстенсов слова balloon
// Space O(N)
const maxNumberOfBalloons = text => {
  let str = 'balloon';
  let set = new Set();
  let ans = 0;

  while (true) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let found = false;

      for (let i = 0; i < text.length; i++) {
        if (set.has(i)) continue;

        if (text[i] == char) {
          found = true;
          set.add(i);
          break;
        }
      }

      if (found) {
        cnt++;
      } else {
        return ans;
      }
    }

    if (cnt === str.length) {
      ans++;
    }
  }
};
