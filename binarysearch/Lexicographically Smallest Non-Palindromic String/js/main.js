// Time O(N)
// Space O(N)
class Solution {
  solve(s) {
    let chars = s.split('');
    let n = s.length;

    for (let i = 0; i < n; i++) {
      if (chars[i] != 'a') {
        if (n % 2 != 0 && i == ~~(n / 2)) {
          continue;
        } else {
          chars[i] = 'a';
          return chars.join('');
        }
      }
    }

    chars[n - 1] = chars[n - 1] == 'a' ? 'b' : 'a';

    return chars.join('');
  }
}
