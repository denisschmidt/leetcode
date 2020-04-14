/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let chars = s.split('');

  shift.forEach(([dir, len]) => {
    if (dir == 0) {
      while (len > 0) {
        chars.push(chars.shift());
        len--;
      }
    }

    if (dir == 1) {
      while (len > 0) {
        chars.unshift(chars.pop());
        len--;
      }
    }
  });

  return chars.join('');
};

let a = stringShift('abcdefg', [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
]);

console.log(a);
