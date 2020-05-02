/*

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:
  Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
  Output: 45

Note: Assume that the total area is never beyond the maximum possible value of int.

*/

// Time O(1)
// Space O(1)
const computeArea = function(A, B, C, D, E, F, G, H) {
  let a = (C - A) * (D - B);
  let b = (G - E) * (H - F);

  let c = 0;

  let minX = Math.max(A, E);
  let maxX = Math.min(G, C);

  let minY = Math.max(F, B);
  let maxY = Math.min(D, H);

  if (maxX > minX && maxY > minY) {
    c = (maxX - minX) * (maxY - minY);
  }

  return a + b - c;
};
