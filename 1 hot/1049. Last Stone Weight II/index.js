/*
We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose any two rocks and smash them together.  
Suppose the stones have weights x and y with x <= y.  
The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the smallest possible weight of this stone (the weight is 0 if there are no stones left.)


Example 1:
  Input: [2,7,4,1,8,1]
  Output: 1
  Explanation: 
    We can combine 2 and 4 to get 2 so the array converts to [2,7,1,8,1] then,
    we can combine 7 and 8 to get 1 so the array converts to [2,1,1,1] then,
    we can combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we can combine 1 and 1 to get 0 so the array converts to [1] then that's the optimal value.
 

Note:
  1 <= stones.length <= 30
  1 <= stones[i] <= 100
  
*/

/*
  Этот вопрос подходит для разбиения массива на 2 подмножества, разница которых минимальна 
  (1) S1 + S2 = S 
  (2) S1 - S2 = diff ==> -> diff = S - 2 * S2 ==> минимизировать diff, чтобы увеличить S2

*/
const lastStoneWeightII = stones => {
  let sum = stones.reduce((acc, v) => acc + v, 0);

  let target = sum >> 1;

  let dp = Array(target + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= stones.length; i++) {
    let stone = stones[i - 1];

    for (let w = target; w >= stone; w--) {
      dp[w] = dp[w] || dp[w - stone];
    }
  }

  let index = target;
  while (!dp[index]) {
    index--;
  }

  return sum - index * 2;
};

const s = lastStoneWeightII([2, 7, 4, 1, 8, 1]);
console.log(s);

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
