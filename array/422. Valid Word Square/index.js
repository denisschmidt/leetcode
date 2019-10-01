/*
Given a sequence of words, check whether it forms a valid word square.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

Note:
The number of words given is at least 1 and does not exceed 500.
Word length will be at least 1 and does not exceed 500.
Each word contains only lowercase English alphabet a-z.

Example 1:

  Input:
  [
    "abcd",
    "bnrt",
    "crmy",
    "dtye"
  ]

  Output: true

Explanation:
  The first row and first column both read "abcd".
  The second row and second column both read "bnrt".
  The third row and third column both read "crmy".
  The fourth row and fourth column both read "dtye".


Therefore, it is a valid word square.

Example 2:

  Input:
  [
    "abcd",
    "bnrt",
    "crm",
    "dt"
  ]

  Output: true

Explanation:
  The first row and first column both read "abcd".
  The second row and second column both read "bnrt".
  The third row and third column both read "crm".
  The fourth row and fourth column both read "dt".

  Therefore, it is a valid word square.

Example 3:

  Input:
  [
    "ball",
    "area",
    "read",
    "lady"
  ]

  Output: false

  Explanation:
    The third row reads "read" while the third column reads "lead".
    Therefore, it is NOT a valid word square.

 */

// Time O(N^2)
// Space O(1)
const validWordSquare = function(words) {
  if (words === null || words.length === 0) return false;

  const n = words.length;

  for (let i = 0; i < n; i++) {
    let j = 0;
    while (j < words[i].length) {
      if (j >= n || words[j].length <= i || words[i][j] !== words[j][i]) return false;
      j++;
    }
  }

  return true;
};

validWordSquare(['abc', 'bde', 'cefg']);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const validWordSquare2 = words => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      try {
        if (words[i][j] !== words[j][i]) {
          return false;
        }
      } catch {
        // if horizontal is longer than the veritcal j > words.length
        // if horizontal is shorter than the veritcal j < words[i].length()
        return false;
      }
    }
  }
  return true;
};
