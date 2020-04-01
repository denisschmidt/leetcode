/*

Given a palindromic string palindrome, replace exactly one character by any lowercase English 
letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

After doing so, return the final string.  
If there is no way to do so, return the empty string.

Example 1:
  Input: palindrome = "abccba"
  Output: "aaccba"

Example 2:
  Input: palindrome = "a"
  Output: ""
  

Constraints:
  1 <= palindrome.length <= 1000
  palindrome consists of only lowercase English letters.

*/

// Time O(N)
// Space O(1)
const breakPalindrome = palindrome => {
  let n = palindrome.length;
  let lo = 0;
  let hi = n - 1;
  let cnt = 0;
  palindrome = palindrome.split('');

  while (lo < hi) {
    let code = palindrome[lo].charCodeAt(0) - 97;

    if (code > 0) {
      palindrome[lo] = 'a';
      return palindrome.join('');
    } else {
      cnt++;
    }

    lo++;
    hi--;
  }

  if ((cnt == Math.floor(n / 2) || cnt * 2 == n) && cnt != 0) {
    palindrome[n - 1] = 'b';
    return palindrome.join('');
  }

  return '';
};
