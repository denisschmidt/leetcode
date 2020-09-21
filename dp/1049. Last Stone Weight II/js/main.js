/*

  This question eaquals to partition an array into 2 subsets whose difference is minimal (416. Partition Equal Subset Sum)

  One way to understand the fact that "The minimum result of cancellation = the minimum difference between the sum of two groups".
  
  Say you've already found two groups with smallest difference.
  Group A = [A1, A2, ..., An]
  Group B = [B1, B2, ..., Bm]
  
  The process we cancel two stones is to arbitrarily pick one from group A and one from Group B.
  
  If Ai > Bj, then put Ai-Bj into group A.
  If Ai < Bj, then put Ai-Bj into group B.
  If Ai = Bj, then nothing will be put into group A and B.
  
  We repeat the process until there is only one stone left. 
  
  You will find the remaining stone is |sum(Group A) - sum(Group B)|.

*/

// Time O(N)
// Space O(N)
const lastStoneWeightII = stones => {
  let sum = stones.reduce((acc, v) => acc + v, 0);

  let target = sum >> 1;

  let dp = Array(target + 1).fill(false);

  dp[0] = true;

  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = dp[j] || dp[j - stones[i]];
    }
  }

  let index = target;

  while (!dp[index]) {
    index--;
  }

  return sum - 2 * index;
};

// Top-Down Solution
// Вы можете объединить камни в 2 гигантских и нанести один удар.
// Другими словами, вы можете разбить все камни на две группы, применяя знак плюс или минус к значению каждого камня.
const lastStoneWeightII_II = stones => {
  const dp = Array(30)
    .fill(null)
    .map(() => Array(6000).fill(null));

  return helper(0, 0);

  function helper(sum, index) {
    if (index == stones.length) {
      if (sum >= 0) {
        return sum;
      }

      return Number.MAX_VALUE;
    }

    if (dp[index][sum + 3000] != null) {
      return dp[index][sum + 3000];
    }

    dp[index][sum + 3000] = 1 + Math.min(helper(sum + stones[index], index + 1), helper(sum - stones[index], index + 1));

    return dp[index][sum + 3000] - 1;
  }
};
