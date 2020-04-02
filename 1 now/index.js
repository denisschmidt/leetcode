/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let prev = null;
  let set = new Set();

  while (true) {
    let num = 0;
    while (n > 9) {
      let d = n % 10;
      num += d * d;
      n = (n - d) / 10;
    }
    n = num + n * n;

    if (n == 1) {
      return true;
    }

    if (set.has(n)) {
      return false;
    }

    set.add(n);
  }
};

isHappy(9);
