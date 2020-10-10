/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"

Example 2:

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"

Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

 */

// Time O(N)
// Space O(N)
const convert = function (str, numRows) {
  if (numRows <= 1) return str;

  let i = 1;
  const map = new Map();
  let index = 0;
  const n = str.length;

  while (index < n) {
    let char = str[index];

    while (i < numRows && index < n) {
      setMap(i, char);
      index++;
      char = str[index];
      i++;
    }

    if (i === numRows) {
      char = str[index];
      setMap(i, char);
      while (i !== 1) {
        i--;
        index++;
        char = str[index];
        setMap(i, char);
      }
      index++;
      i++;
    }
  }

  let ans = '';
  for (let values of map.values()) {
    ans += values.join('');
  }

  return ans;

  function setMap(i, s) {
    if (map.has(i)) {
      let arr = map.get(i);
      map.set(i, [...arr, s]);
    } else {
      map.set(i, [s]);
    }
  }
};
