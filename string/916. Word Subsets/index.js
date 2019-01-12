/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.

For example, "wrr" is a subset of "warrior", but is not a subset of "world".


Now say a word a from A is universal if for every b in B, b is a subset of a.

Return a list of all universal words in A.  You can return the words in any order.


Example 1:

  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
  Output: ["facebook","google","leetcode"]

Example 2:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
  Output: ["apple","google","leetcode"]

Example 3:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
  Output: ["facebook","google"]

Example 4:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
  Output: ["google","leetcode"]

Example 5:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
  Output: ["facebook","leetcode"]


Note:
  1 <= A.length, B.length <= 10000
  1 <= A[i].length, B[i].length <= 10

  A[i] and B[i] consist only of lowercase letters.
  All words in A[i] are unique: there isn't i != j with A[i] == A[j].
 */

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */

const { a, b } = require('./mocks');

let A = ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
  B = ['e', 'o'];

// ======================================TIME LIMIT==================================================

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const wordSubsets = function(A, B) {
  let res = [],
    count = null;
  B = B.filter(onlyUnique);
  for (let i = 0; i < A.length; i++) {
    count = 0;
    outer: for (let j = 0; j < B.length; j++) {
      let A_Arr = A[i];
      let B_Arr = B[j];
      if (A_Arr.search(B_Arr) > -1) {
        count++;
      } else {
        for (let k = 0; k < B_Arr.length; k++) {
          let index = A_Arr.search(B_Arr[k]);
          if (index > -1) {
            A_Arr = A_Arr.substring(0, index) + A_Arr.substring(index + 1);
          } else {
            break outer;
          }
        }
        if (A_Arr.length === A[i].length - B[j].length) {
          count++;
        }
      }
    }
    if (count === B.length) {
      res.push(A[i]);
    }
  }
  return res;
};

// wordSubsets(a, b);

// ============================================================================================

const wordSubsets2 = (A, B) => {
  let tmp;

  for (let b of B) {
    let t = [],
      v = [];
    for (let c of b) {
      let dif = c.charCodeAt(0) - 'a'.charCodeAt(0);
      t[dif] = dif++;
    }

    for (let i = 0; i < 26; i++) {
      v[i] = Math.max(0, t[i]);
    }
    console.log('---', v);
  }
};

const res2 = wordSubsets2(A, B);
console.log('---', res2);
