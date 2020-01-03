/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. 
Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
  Input: nums is [1, 1, 1, 1, 1], S is 3. 
  Output: 5
  Explanation: 
  -1+1+1+1+1 = 3
  +1-1+1+1+1 = 3
  +1+1-1+1+1 = 3
  +1+1+1-1+1 = 3
  +1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.

Note:
  The length of the given array is positive and will not exceed 20.
  The sum of elements in the given array will not exceed 1000.
  Your output answer is guaranteed to be fitted in a 32-bit integer.

*/

/*
  Рекурсивная функция helper(), возвращает назначения, ведущие к сумме target, начиная с i-го индекса, 
  Эта функция добавляет знак + и знак - к элементу в текущем индексе и вызывает себя с обновленной суммой 
  как sum + nums [i] и sum - nums [i] соответственно. 
  Всякий раз, когда мы достигаем конца массива, мы сравниваем полученную сумму с target. 
  Если они равны, мы увеличиваем значение count, которое будет возвращено.
*/

// Time O(2^N) - N относится к размеру массива nu
// Space O(N)
const findTargetSumWays = (nums, target) => {
  if (nums == null || nums.length === 0) return 0;
  let cnt = 0;

  helper();

  return cnt;

  function helper(s = 0, index = 0) {
    if (index === nums.length) {
      if (s === target) {
        cnt++;
      }
    } else {
      helper(s + nums[index], index + 1);
      helper(s - nums[index], index + 1);
    }
  }
};

const findTargetSumWays_II = (nums, target) => {
  // dp[i][j] означает количество способов получить сумму j из первых i элементов.
  let len = nums.length;
  let sum = nums.reduce((acc, v) => acc + v, 0);

  if (sum < target || (sum + target) % 2 > 0) {
    return 0;
  }

  return subsetSum(nums, (s + sum) / 2);

  function subsetSum(nums, target) {
    let dp = Array(target + 1);
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
      for (let j = s; j >= nums[i]; j--) {
        dp[j] = dp[j] + dp[j - nums[i]];
      }
    }

    return dp[target];
  }
};

// MEMO
// Time O(N * L)
// Space O(N)
const findTargetSumWays_III = (nums, target) => {
  let cnt = 0;
  let dp = new Array(nums.length).map(() => Array(2001).fill(Number.MIN_VALUE));

  helper();

  return cnt;

  function helper(sum = 0, index = 0) {
    if (index === nums.length) {
      if (sum === target) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (dp[index][sum + 1000] !== Number.MIN_VALUE) {
        return dp[index][sum + 1000];
      }
      let add = helper(sum + nums[index], index + 1);
      let subtract = helper(sum - nums[index], index + 1);

      dp[i][sum + 1000] = add + subtract;

      return dp[i][sum + 1000];
    }
  }
};
