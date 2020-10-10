/*

Given a picture consisting of black and white pixels, and a positive integer N, find the number of black pixels located at some specific row R and column C that align with all the following rules:

Row R and column C both contain exactly N black pixels.
For all rows that have a black pixel at column C, they should be exactly the same as row R
The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

Example:
  Input:                                            
    [['W', 'B', 'W', 'B', 'B', 'W'],    
    ['W', 'B', 'W', 'B', 'B', 'W'],    
    ['W', 'B', 'W', 'B', 'B', 'W'],    
    ['W', 'W', 'B', 'W', 'B', 'W']] 

  N = 3
  Output: 6
  Explanation: 
    All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).
            0    1    2    3    4    5         column index                                            
    0    [['W', 'B', 'W', 'B', 'B', 'W'],    
    1     ['W', 'B', 'W', 'B', 'B', 'W'],    
    2     ['W', 'B', 'W', 'B', 'B', 'W'],    
    3     ['W', 'W', 'B', 'W', 'B', 'W']]    
    row index

    Take 'B' at row R = 0 and column C = 1 as an example:
    Rule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels. 
    Rule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.

Note: The range of width and height of the input 2D array is [1,200].

*/

const findBlackPixel = (picture, N) => {
  let n = picture.length;
  let m = picture[0].length;
  let res = 0;
  let visitedY = Array(m).fill(false);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (picture[i][j] == 'B' && !visitedY[j]) {
        let cnt = 0;

        for (let z = 0; z < m; z++) {
          if (picture[i][z] == 'B') cnt++;
        }

        if (cnt != N) break;

        cnt = 0;
        for (let z = 0; z < n; z++) {
          if (picture[z][j] == 'B') cnt++;
        }

        if (cnt != N) {
          visitedY[j] = true;
          break;
        }

        if (i + N > n) break;

        cnt = 0;
        for (let g = 0; g < n; g++) {
          if (picture[g][j] != 'B') continue;

          cnt++;

          let w = 0;
          for (; w < m; w++) {
            if (picture[i][w] != picture[g][w]) break;
          }

          if (w != m) {
            cnt--;
            break;
          }

          if (cnt == N) break;
        }

        if (cnt == N) {
          res += N;
        }
        visitedY[j] = true;
      }
    }
  }

  return res;
};
