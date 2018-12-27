/*
A string S of lowercase letters is given.  Then, we may make any number of moves.

In each move, we choose one of the first K letters (starting from the left),
remove it, and place it at the end of the string.

Return the lexicographically smallest string we could have after any number of moves.
 */

/**
 * @param {string} str
 * @param {number} len
 * @return {string}
 */
const orderlyQueue = function(str, k) {
  if ( k === 1) {
    let res = str, cur = str;
    for (let i = 0; i < str.length; i++) {
      cur = cur.substring(1) + cur[0];
      if (res > cur) {
        res = cur;
      }
    }
    return res;
  } else {
    return str.split('').sort().join('');
  }
};

const res = orderlyQueue('cba', 1);

console.log('---', res);
