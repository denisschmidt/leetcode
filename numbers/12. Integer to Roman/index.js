/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 

Twelve is written as, XII, which is simply X + II. 

The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:
  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:
  Input: 3
  Output: "III"

Example 2:
  Input: 4
  Output: "IV"

Example 3:
  Input: 9
  Output: "IX"

Example 4:
  Input: 58
  Output: "LVIII"
  Explanation: L = 50, V = 5, III = 3.

Example 5:
  Input: 1994
  Output: "MCMXCIV"
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

// Time O(1)
// Space O(1)
const intToRoman = num => {
  let maps = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let ans = '';

  for (let i = 0; i < maps.length && num >= 0; i++) {
    while (maps[i][1] <= num) {
      num -= maps[i][1];
      ans += maps[i][0];
    }
  }

  return ans;
};

// Time O(1)
// Space O(1)
const intToRoman_II = num => {
  let map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let nums = [];
  while (num > 0) {
    let d = num % 10;
    nums.push(d);
    num = Math.floor((num - d) / 10);
  }

  return getNums(nums, '');

  function getNums(nums, str) {
    if (nums.length == 0) return str;

    let n = nums.pop();
    let max = n * Math.pow(10, nums.length);

    while (max > 0) {
      for (let k of Object.keys(map)) {
        if (max - map[k] >= 0) {
          max = max - map[k];
          str += k;
          break;
        }
      }
    }

    return getNums(nums, str);
  }
};
