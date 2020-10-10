/*

Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  

After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:
  Input: A = [[1,1,0],
              [0,1,0],
              [0,1,0]]
        B = [[0,0,0],
              [0,1,1],
              [0,0,1]]
  Output: 3
  Explanation: We slide A to right by 1 unit and down by 1 unit.

Notes: 
  1 <= A.length = A[0].length = B.length = B[0].length <= 30
  0 <= A[i][j], B[i][j] <= 1

*/

// Time O(N^2)
// Space O(N^2)
const largestOverlap = (A, B) => {
  let pointsA = [];
  let pointsB = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i][j] == 1) pointsA.push([i, j]);
      if (B[i][j] == 1) pointsB.push([i, j]);
    }
  }

  let map = [];
  let max = 0;

  for (let [x, y] of pointsA) {
    for (let [u, z] of pointsB) {
      let deltaX = x - u;
      let deltaY = y - z;

      // получаем вектор от пикселя в A до пикселя в B
      let key = deltaX + ' ' + deltaY;

      map[key] = ~~map[key] + 1;

      max = Math.max(max, map[key]);
    }
  }

  return max;
};

/*

  https://leetcode.com/problems/image-overlap/discuss/523482/Java%3A-No-extra-space%3A-O(N4)-time-O(1)-space.-Visually-explained!


  1) Мы перемещаем второе изображение, начиная с нижнего правого угла в верхний левый угол

  2) Для каждого хода проверяем кол-во совпадений

*/

// Time O(N^4)
// Space O(1)
const largestOverlap_II = (A, B) => {
  let ans = 0;

  for (let row = -A.length; row < A.length; row++) {
    for (let col = -A[0].length; col < A[0].length; col++) {
      ans = Math.max(ans, overlap(A, B, row, col));
    }
  }

  return ans;

  function overlap(A, B, rowOffset, colOffset) {
    let cnt = 0;
    for (let row = 0; row < A.length; row++) {
      for (let col = 0; col < A[0].length; col++) {
        if (col + colOffset < 0 || row + rowOffset < 0 || col + colOffset >= A[0].length || row + rowOffset >= A.length) {
          continue;
        }

        if (A[row][col] == 1 && B[row + rowOffset][col + colOffset] == 1) {
          cnt++;
        }
      }
    }
    return cnt;
  }
};
