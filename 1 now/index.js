/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let p1 = [];
  let p2 = [];
  for (let i = 0; i < N; i++) {
    p1[i] = [];
    p2[i] = [];
  }

  for (let i = 0; i < trust.length; i++) {
    let [u, v] = trust[i];

    p1[u - 1].push(v - 1);
    p2[v - 1].push(u - 1);
  }

  console.log(p1, '===', p2);
  let ans = -1;
  for (let i = 0; i < N; i++) {
    if (p1[i].length === 0 && p2[i].length === N - 1) {
      ans = i + 1;
    }
  }

  return ans;
};

let a = findJudge(4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]);

console.log(a);
