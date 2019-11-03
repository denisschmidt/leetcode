/*
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 
Example 1:
  Input: A = [2,7,11,15], B = [1,10,4,11] -> [1, 4, 10, 11]
  Output: [2,11,7,15]

Example 2:
  Input: A = [12,24,8,32], B = [13,25,32,11]
  Output: [24,32,8,12]
 

Note:
  1 <= A.length = B.length <= 10000
  0 <= A[i] <= 10^9
  0 <= B[i] <= 10^9

 */

// Time O(N LOG N)
// Space O(N)
const advantageCount = (A, B) => {
  const ids = B.map((v, i) => i).sort((a, b) => B[a] - B[b]);
  A.sort((a, b) => a - b);

  const result = Array(A.length);
  const notUsed = [];
  let j = 0;

  for (let id of ids) {
    while (j < A.length && A[j] <= B[id]) {
      notUsed.push(A[j]);
      j++;
    }

    if (j === A.length) {
      result[id] = notUsed.pop();
    } else {
      result[id] = A[j];
      j++;
    }
  }

  return result;
};

advantageCount([2, 7, 11, 15], [1, 10, 4, 11]);
