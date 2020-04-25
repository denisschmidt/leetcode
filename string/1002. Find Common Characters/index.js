/*

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  

For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]

Example 2:
  Input: ["cool","lock","cook"]
  Output: ["c","o"]
 

Note:
  1 <= A.length <= 100
  1 <= A[i].length <= 100
  A[i][j] is a lowercase letter

*/

// Time O(K * N * K) K - длина слова
// Space O(N * K)
const commonChars = A => {
  let visited = Array(A.length)
    .fill(0)
    .map(() => Array(A[0].length).fill(false));
  let ans = [];

  for (let w of A[0]) {
    let cnt = 1;

    for (let i = 1; i < A.length; i++) {
      let found = false;
      for (let j = 0; j < A[i].length; j++) {
        if (w == A[i][j] && !visited[i][j]) {
          cnt++;
          visited[i][j] = true;
          found = true;
          break;
        }
      }
      if (found == false) {
        break;
      }
    }

    if (cnt == A.length) {
      ans.push(w);
    }
  }

  return ans;
};
