/*
Given a circular array (the next element of the last element is the first element of the array),
print the Next Greater Number for every element.

The Next Greater Number of a number x is the first greater number to its traversing-order next in the array,
which means you could search circularly to find its next greater number.

If it doesn't exist, output -1 for this number.

Example 1:
  Input: [1,2,1]
  Output: [2,-1,2]

Explanation:
  The first 1's next greater number is 2;
  The number 2 can't find next greater number;
  The second 1's next greater number needs to search circularly, which is also 2.

Note: The length of given array won't exceed 10000.

C памощью одного цикла, мы можем получить следующее большее число нормального массива.
Зациклившись дважды, мы можем получить следующее большее число кругового массива.

 */

// Time O(N)
// Space O(N)
const nextGreaterElements = nums => {
  let size = nums.length;
  let stack = [];
  let result = Array(size).fill(-1);

  for (let i = 0; i < nums.length * 2; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % size]) {
      let index = stack.pop();
      result[index] = nums[i % size];
    }

    stack.push(i % size);
  }

  return result;
};

// Time O(N) worst case O(N^2)
// Space O(N)
const nextGreaterElements_II = nums => {
  if (!nums.length) return [];

  const stack = [Number.MAX_VALUE];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (nums[stack[stack.length - 1]] < nums[i]) {
      let index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  if (!stack.length) return result;

  for (let index of stack) {
    if (index === Number.MAX_VALUE) continue;
    for (let i = 0; i < nums.length; i++) {
      if (i === index) {
        result[index] = -1;
        break;
      } else if (nums[index] < nums[i]) {
        result[index] = nums[i];
        break;
      }
    }
  }

  return result;
};
