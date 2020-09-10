/*
  
Given an array A of non-negative integers, the array is squareful if for every pair of adjacent elements, their sum is a perfect square.

Return the number of permutations of A that are squareful.  

Two permutations A1 and A2 differ if and only if there is some index i such that A1[i] != A2[i].

Example 1:
  Input: [1,17,8]
  Output: 2
  Explanation: 
  [1,8,17] and [17,8,1] are the valid permutations.

Example 2:
  Input: [2,2,2]
  Output: 1
 

Note:
  1 <= A.length <= 12
  0 <= A[i] <= 1e9

*/

const numSquarefulPerms = A => {
  let n = A.length;
  let res = 0;
  let visited = Array(n + 1).fill(false);
  let seen = new Set();

  A.sort();

  dfs();
  
  return res;

  function dfs(comb = []) {
    if (comb.length == n) {
      if (!seen.has(comb.toString())) {
        seen.add(comb.toString());
        res++;
      }
      return;
    }

    if (comb.length > n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      if (i > 0 && A[i - 1] == A[i] && !visited[i - 1]) continue

      if (comb.length == 0 || isSquare(comb[comb.length - 1] + A[i])) {
        visited[i] = true;
        comb.push(A[i]);
        dfs(comb)
        comb.pop();
        visited[i] = false;
      }
    }
  }

  function isSquare(integer){
    let root = Math.sqrt(integer);
    return integer == Math.floor(root + 0.5) ** 2
  }
};
