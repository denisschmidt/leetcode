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
const find132pattern = nums => {
  let stack = [0];

  for (let j = 1; j < nums.length; j++) {
    if (stack.length === 3) {
      return true;
    }

    let lastIndex = stack[stack.length - 1];

    if (stack.length === 1) {
      let i = lastIndex + 1;
      while (i < nums.length) {
        if (nums[lastIndex] < nums[i]) {
          stack.push(i);
          break;
        }
        i++;
      }

      if (stack.length === 1) {
        stack = [stack[0] + 1];
        j = stack[0];
      }
    } else if (stack.length === 2) {
      let i = lastIndex + 1;

      while (i < nums.length) {
        if (nums[lastIndex] > nums[i] && nums[i] > nums[stack[0]]) {
          stack.push(i);
          break;
        }
        i++;
      }

      if (stack.length === 2) {
        stack = [stack[0] + 1];
        j = stack[0];
      }
    }
  }

  console.log(stack);

  return stack.length === 3;
};

const res = find132pattern([-2, 1, 2, -2, 1, 2]);
console.log(res);
