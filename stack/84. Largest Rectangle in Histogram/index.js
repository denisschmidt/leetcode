/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 
find the area of largest rectangle in the histogram.

 
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:
  Input: [2,1,5,6,2,3]
  Output: 10

 */

// Time O(N)
// Space O(N)
// Монотонное увеличение стека. Каждый индекс push() и pop() один раз и обрабатывается один раз.
// PLE => Previous Less Element
const largestRectangleArea = heights => {
  let n = nums.length;
  let stack = [];
  let max = 0;

  for (let index = 0; index <= n; index++) {
    while (stack.length && (index == n || nums[stack[stack.length - 1]] > nums[index])) {
      let prevIndex = stack.pop();
      let height = nums[prevIndex];

      /* 
        Важный момент:
          1) либо width берем как интервал между значениями в стеке
          2) либо если стек пустой то это и есть самое маленькое значение в стеке
      */
      let width = stack.length == 0 ? index : index - 1 - stack[stack.length - 1];
      max = Math.max(max, height * width);
    }

    stack.push(index);
  }
  return max;
};

// Time O(N^2)
// Space O(1)
const largestRectangleArea_II = heights => {
  let size = heights.length;
  let result = 0;

  for (let i = 0; i < size; i++) {
    let height = heights[i];
    for (let j = i; j < size; j++) {
      height = Math.min(height, heights[j]);
      let width = j - i + 1;
      if (height * width > result) {
        result = height * width;
      }
    }
  }

  return result;
};
