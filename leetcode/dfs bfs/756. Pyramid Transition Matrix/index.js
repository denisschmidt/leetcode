/*
We are stacking blocks to form a pyramid. Each block has a color which is a one letter string.

We are allowed to place any color block C on top of two adjacent blocks of colors A and B, if and only if ABC is an allowed triple.

We start with a bottom row of bottom, represented as a single string. We also start with a list of allowed triples allowed.
Each allowed triple is represented as a string of length 3.

Return true if we can build the pyramid all the way to the top, otherwise false.

Example 1:
  Input: bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"]
  Output: true
  Explanation:
  We can stack the pyramid like this:
      A
     / \
    G   E
   / \ / \
  B   C   D

  We are allowed to place G on top of B and C because BCG is an allowed triple.
  Similarly, we can place E on top of C and D, then A on top of G and E.
 
Example 2:
  Input: bottom = "AABA", allowed = ["AAA", "AAB", "ABA", "ABB", "BAC"]
  Output: false
  Explanation:
  We can't stack the pyramid to the top.
  Note that there could be allowed triples (A, B, C) and (A, B, D) with C != D.

Note:
  bottom will be a string with length in range [2, 8].
  allowed will have length in range [0, 200].
  Letters in all strings will be chosen from the set {'A', 'B', 'C', 'D', 'E', 'F', 'G'}.

 */

const pyramidTransition = (bottom, allowed) => {
  let dict = new Map();

  for (let s of allowed) {
    const key = s.substring(0, 2);
    const val = s.substring(2);

    if (!dict.has(key)) {
      dict.set(key, []);
    }
    dict.get(key).push(val);
  }

  return helper(bottom, dict);

  function helper(bottom, dict) {
    if (bottom.length === 1) {
      return true;
    }

    for (let j = 0; j < bottom.length - 1; j++) {
      let key = bottom.substring(j, j + 2);

      if (dict.has(key) === false) {
        return false;
      }
    }

    const comb = [];
    getBottoms(bottom, 0, [], comb, dict);

    for (let c of comb) {
      if (helper(c, dict)) {
        return true;
      }
    }
    return false;
  }

  // получаем следующий Bottom уровень
  function getBottoms(bottom, index, solution, bottoms, dict) {
    if (index === bottom.length - 1) {
      bottoms.push(solution.join(''));
      return;
    }

    const key = bottom.substring(index, index + 2);

    for (let c of dict.get(key)) {
      solution.push(c);
      getBottoms(bottom, index + 1, solution, bottoms, dict);
      solution.pop();
    }
  }
};

const res = pyramidTransition('AABA', ['AAA', 'AAB', 'ABA', 'ABB', 'BAC']);
console.log(res);
