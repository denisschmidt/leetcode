/*

  This question eaquals to partition an array into 2 subsets whose difference is minimal (416. Partition Equal Subset Sum)

  (1) S1 + S2  = S
  (2) S1 - S2 = diff  

  ==> diff = S - 2 * S2  ==> minimize diff equals to  maximize S2 

  Now we should find the maximum of S2 , range from 0 to S / 2, using dp can solve this

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

/*
  Вы можете объединить камни в 2 гигантских и нанести один удар.
  Другими словами, вы можете разбить все камни на две группы, применяя знак плюс или минус к значению каждого камня.

  Top-Down Solution
*/
const lastStoneWeight_II = stones => {
  const dp = Array(30)
    .fill(null)
    .map(() => Array(6000).fill(0));

  return helper();

  function helper(s = 0, index = 0) {
    if (index === stones.length) {
      return s < 0 ? 100 : s;
    }
    if (dp[index][s + 3000] === 0) {
      dp[index][s + 3000] = 1 + Math.min(helper(s + stones[index], index + 1), helper(s - stones[index], index + 1));
    }
    return dp[index][s + 3000] - 1;
  }
};
