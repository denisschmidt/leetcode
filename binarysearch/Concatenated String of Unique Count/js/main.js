class Solution {
  solve(input = []) {
    let words = input.filter(x => x && isUnique(x));
    let queue = [];

    for (let w of words) {
      queue.push(w);
    }

    if (queue.length == 0) {
      return 0;
    }

    let max = 0;

    while (queue.length) {
      let current = queue.shift();

      max = Math.max(max, current.length);

      for (let word of words) {
        let newWord = current + word;

        if (isUnique(newWord)) {
          queue.push(newWord);
        }
      }
    }

    return max;

    function isUnique(s) {
      return new Set(s).size == s.length;
    }
  }
}
