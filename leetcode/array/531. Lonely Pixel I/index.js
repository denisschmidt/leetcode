/*

Given a picture consisting of black and white pixels, find the number of black lonely pixels.

The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

Example:
  Input: 
  [['W', 'W', 'B'],
  ['W', 'B', 'W'],
  ['B', 'W', 'W']]

  Output: 3
  Explanation: All the three 'B's are black lonely pixels.

Note: The range of width and height of the input 2D array is [1,500].

*/

// Time O(N*M)
// Space O(1);
const findLonelyPixel = picture => {
  let n = picture.length;
  let m = picture[0].length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let coord = null;
    for (let j = 0; j < m; j++) {
      if (picture[i][j] == 'B') {
        if (coord != null) {
          coord = [];
          break;
        }
        coord = [i, j];
      }
    }

    if (coord) {
      let cnt = 0;
      for (let k = 0; k < n; k++) {
        if (picture[k][coord[1]] == 'B') {
          cnt++;
        }
      }

      if (cnt == 1) {
        ans++;
      }
    }
  }

  return ans;
};
