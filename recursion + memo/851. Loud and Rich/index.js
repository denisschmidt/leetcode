/*

In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.

For convenience, we'll call the person with label x, simply "person x".

We'll say that richer[i] = [x, y] if person x definitely has more money than person y. 

Note that richer may only be a subset of valid observations.

Also, we'll say quiet[x] = q if person x has quietness q.

Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.

Example 1:
  Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
  Output: [5,5,2,5,4,5,6,7]
  Explanation: 
    answer[0] = 5.
    Person 5 has more money than 3, which has more money than 1, which has more money than 0.
    The only person who is quieter (has lower quiet[x]) is person 7, but
    it isn't clear if they have more money than person 0.

    answer[7] = 7.
    Among all people that definitely have equal to or more money than person 7
    (which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
    is person 7.

    The other answers can be filled out with similar reasoning.

Note:
  1 <= quiet.length = N <= 500
  0 <= quiet[i] < N, all quiet[i] are different.
  0 <= richer.length <= N * (N-1) / 2
  0 <= richer[i][j] < N
  richer[i][0] != richer[i][1]
  richer[i]'s are all different.
  The observations in richer are all logically consistent.

*/

// Time O(N*K)
// Space O(N)
const loudAndRich = (richer, quiet) => {
  let INF = Number.MAX_VALUE;
  let dp = Array(quiet.length).fill(new Node(INF, INF));
  let ans = Array(quiet.length);

  for (let i = 0; i < quiet.length; i++) {
    let node = dfs(i, quiet[i]);
    ans[i] = node.personId;
  }

  return ans;

  function dfs(personId, q) {
    if (dp[personId].quiet != INF) {
      return dp[personId];
    }

    let min = new Node(personId, q);

    for (let i = 0; i < richer.length; i++) {
      if (richer[i][1] == personId) {
        let newPersonId = richer[i][0];
        let newQ = quiet[newPersonId];

        let node = dfs(newPersonId, newQ);

        if (min.quiet > node.quiet) {
          min.quiet = node.quiet;
          min.personId = node.personId;
        }
      }
    }

    // update dp
    if (dp[personId].quiet > min.quiet) {
      dp[personId] = min;
    }

    return min;
  }
};

class Node {
  constructor(personId, quiet) {
    this.personId = personId;
    this.quiet = quiet;
  }
}
