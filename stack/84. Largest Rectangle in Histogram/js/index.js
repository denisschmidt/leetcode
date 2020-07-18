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
const largestRectangleArea = heights => {
  let stack = [];
  let n = heights.length;
  let max = 0;

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i == n || heights[stack[stack.length - 1]] > heights[i])) {
      let j = stack.pop();

      let heigth = heights[j];
      let width;

      if (stack.length == 0) {
        // если стек пуст то текущий height является самым минимальным значением на интервале до i
        // и следовательно его ширина равна i
        width = i;
      } else {
        width = i - stack[stack.length - 1] - 1;
      }

      max = Math.max(max, heigth * width);
    }

    stack.push(i);
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
