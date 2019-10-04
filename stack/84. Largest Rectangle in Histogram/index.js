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
const largestRectangleArea = function(heights) {
  let ans = 0;
  const stack = [];
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    // Если мы закончили все элементы ИЛИ текущий элемент меньше верхнего
    while (stack.length && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
      let index = stack.pop();
      const height = heights[index];
      const width = !stack.length ? i : i - 1 - stack[stack.length - 1];

      ans = Math.max(ans, width * height);
    }

    stack.push(i);
  }

  return ans;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(1)
const largestRectangleArea2 = function(heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];

  const n = heights.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;

    for (let j = i; j < n; j++) {
      min = Math.min(min, heights[j]);
      ans = Math.max(ans, min * (j - i + 1));
    }
  }

  return ans;
};
