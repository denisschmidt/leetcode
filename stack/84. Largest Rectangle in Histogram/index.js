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
// Монотонное увеличение стека
// PLE => Previous Less Element
const largestRectangleArea = heights => {
  let size = heights.length;
  let stack = [];
  let result = 0;

  for (let i = 0; i <= size; i++) {
    while (stack.length && (heights[stack[stack.length - 1]] > heights[i] || i === size)) {
      let index = stack.pop();

      let height = heights[index];
      let width = stack.length ? i - 1 - stack[stack.length - 1] : i;

      result = Math.max(result, height * width);
    }

    stack.push(i);
  }

  return result;
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
