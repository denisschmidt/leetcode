/*
Given a sequence of n integers a1, a2, ..., an,
a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj.

Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
  Input: [1, 2, 3, 4]
  Output: False
  Explanation: There is no 132 pattern in the sequence.

Example 2:
  Input: [3, 1, 4, 2]
  Output: True
  Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

Example 3:
  Input: [-1, 3, 2, 0]
  Output: True
  Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

 */

// Stack
// Time O(N)
// Space O(N)

// Очень крутая идея в стеке у нас уже будут значения в нужном нам порядке
const find132pattern = nums => {
  let s3 = -Number.MAX_VALUE;
  let stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    // Если у нас новое значения меньше s3 значит такая последовательность существуетЗ
    if (nums[i] < s3) {
      return true;
    }

    // В стеке будет максимальное значение это s2
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      s3 = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
};

// Time O(N^2)
// Space O(1)
const find132pattern2 = nums => {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length - 1; i++) {
    min = Math.min(nums[i], min);
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] < nums[i] && min < nums[k]) {
        return true;
      }
    }
  }

  return false;
};

const res = find132pattern([-2, 1, 2, -2, 1, 2]);
console.log(res);
