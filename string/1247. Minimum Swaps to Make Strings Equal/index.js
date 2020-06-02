/*

You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. 

Your task is to make these two strings equal to each other. 

You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

Example 1:
  Input: s1 = "xx", s2 = "yy"
  Output: 1
  Explanation: Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".

Example 2: 
  Input: s1 = "xy", s2 = "yx"
  Output: 2
  Explanation: 
    Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
    Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
    Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.

Example 3:
  Input: s1 = "xx", s2 = "xy"
  Output: -1

Example 4:
  Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
  Output: 4
 

Constraints:
  1 <= s1.length, s2.length <= 1000
  s1, s2 only contain 'x' or 'y'.

*/

// Во-первых, игнорируйте все уже согласованные позиции, они никак не влияют на ответ.
// Для несопоставленных позиций есть три основных случая (уже приведены в примерах)

// ("xx", "yy") => 1 swap, ("xy", "yx") => 2 swaps

// Time O(N)
// Space O(1)
const minimumSwap = (s1, s2) => {
  let case1 = 0;
  let case2 = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == 'x' && s2[i] == 'y') case1++;

    if (s1[i] == 'y' && s2[i] == 'x') case2++;
  }

  if (case1 % 2 != case2 % 2) return -1;

  return Math.floor(case1 / 2) + Math.floor(case2 / 2) + (case1 % 2) * 2;
};

// TLE
// BFS
const minimumSwap_II = (s1, s2) => {
  let visited = new Set();
  let queue = [[s1, s2]];
  let cnt = 0;

  let h1 = hashCode(s1);
  let h2 = hashCode(s2);

  visited.add(h1 + h2);

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let [ss1, ss2] = queue.shift();

      let hash = hashCode(ss1 + ss2);

      if (ss1 == ss2) {
        return cnt;
      }

      for (let i = 0; i < ss1.length; i++) {
        let l1 = ss1.substring(0, i);
        let r1 = ss1.substring(i + 1);
        let c1 = ss1[i];

        for (let j = 0; j < ss2.length; j++) {
          let l2 = ss2.substring(0, j);
          let r2 = ss2.substring(j + 1);
          let c2 = ss2[j];

          s1 = l1 + c2 + r1;
          s2 = l2 + c1 + r2;

          let h1 = hashCode(s1);
          let h2 = hashCode(s2);

          if (!visited.has(h1 + h2)) {
            queue.push([s1, s2]);
            visited.add(h1 + h2);
          }
        }
      }
    }

    cnt++;
  }

  return -1;

  function hashCode(s) {
    return s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
};
