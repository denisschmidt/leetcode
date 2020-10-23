class Solution {
  solve(input) {
    let words = [];
    let queue = [];

    for (let word of input) {
      let map = {};
      let valid = true;

      for (let ch of word) {
        map[ch] = ~~map[ch] + 1;
        if (map[ch] > 1) {
          valid = false;
        }
      }

      if (valid) {
        words.push(word);
      }
    }

    for (let w of words) {
      queue.push(w);
    }

    let max = 0;
    let visited = new Set();

    while (queue.length) {
      let current = queue.shift();

      max = Math.max(max, current.length);

      for (let word of words) {
        let valid = true;

        for (let ch of word) {
          if (current.indexOf(ch) != -1) {
            valid = false;
            break;
          }
        }

        if (valid) {
          let x = current + word;
          if (!visited.has(x)) {
            queue.push(x);
            visited.add(x);
          }
        }
      }
    }

    return max;
  }
}
