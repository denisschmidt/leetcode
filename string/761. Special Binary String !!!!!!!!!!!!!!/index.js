/*
Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.

Given a special string S, a move consists of choosing two consecutive, non-empty, special substrings of S, and swapping them. (Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.)

At the end of any number of moves, what is the lexicographically largest resulting string possible?

Example 1:
  Input: S = "11011000"
  Output: "11100100"

Explanation:
The strings "10" [occuring at S[1]] and "1100" [at S[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.
Note:

S has length at most 50.
S is guaranteed to be a special binary string as defined above.


Solution include 4 steps

1) Split S into several special strings (as many as possible).
2) Special string starts with 1 and ends with 0. Recursion on the middle part.
3) Sort all special strings in lexicographically largest order.
4) Join and output all strings.

 */

const makeLargestSpecial = S => {
  let count = 0, i = 0;
  let res = [];
  for (let j = 0; j < S.length; ++j) {
    if (S.charAt(j) === '1') count++;
    else count--;

    if (count === 0) {
      res.push('1' + makeLargestSpecial(S.substring(i + 1, j)) + '0');
      i = j + 1;
    }
  }
  let resStr = '';
  res.sort((a, b) => a - b);
  for (let k = res.length - 1; k >= 0 ; k--) {
    resStr += res[k];
  }
  return resStr;
}

const res = makeLargestSpecial('101011001110011010001111100000'); // 111110000011101001100011001010
console.log('---', res);

// ==================================================================================================
const dfs = (arr, i) => {
  let res = '';
  let resArr = [];

  while(i < arr.length && res.length === 0) {
    if (arr[i++] === '1') {
      resArr.push(dfs(arr, i));
    } else {
      res += '1';
    }
  }
  resArr.sort((a, b) => a - b);
  for (let j = resArr.length - 1; j >= 0 ; j--) {
    res += resArr[j];
  }
  if (res.length) {
    res += '0';
  }
  return res;
};

const makeLargestSpecial2 = str => {
  let i = 0;
  const res = dfs(str.split(''), i);
  console.log('---', res);
  return res;
};

// makeLargestSpecial2('11011000');
