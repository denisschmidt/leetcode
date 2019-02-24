/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 */
const btUniquePaths = (width, height, steps = [[0, 0]], uniqueSteps = 0) => {
  // Fetch current position on board.
  const currentPos = steps[steps.length - 1];

  // Check if we've reached the end.
  if (currentPos[0] === width - 1 && currentPos[1] === height - 1) {
    // In case if we've reached the end let's increase total
    // number of unique steps.
    return uniqueSteps + 1;
  }

  // Let's calculate how many unique path we will have
  // by going right and by going down.
  let rightUniqueSteps = 0;
  let downUniqueSteps = 0;

  // Do right step if possible.
  if (currentPos[0] < width - 1) {
    steps.push([currentPos[0] + 1, currentPos[1]]);

    // Calculate how many unique paths we'll get by moving right.
    rightUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Do down step if possible.
  if (currentPos[1] < height - 1) {
    steps.push([currentPos[0], currentPos[1] + 1]);

    // Calculate how many unique paths we'll get by moving down.
    downUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Total amount of unique steps will be equal to total amount of
  // unique steps by going right plus total amount of unique steps
  // by going down.
  return rightUniqueSteps + downUniqueSteps;
};

const res = btUniquePaths(3, 2);

console.log('---', res);
