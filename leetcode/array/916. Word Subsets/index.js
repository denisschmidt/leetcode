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

// Time O(A + B) где A и B - общее количество информации в A и B соответственно.
// Space O(A + B)
const wordSubsets = (A, B) => {
  let bMax = Array(26).fill(0);

  for (let b of B) {
    let bCount = countWord(b);
    for (let i = 0; i < 26; i++) {
      bMax[i] = Math.max(bMax[i], bCount[i]);
    }
  }

  let ans = [];
  for (let a of A) {
    let aCount = countWord(a);

    let valid = true;
    for (let i = 0; i < 26; i++) {
      if (aCount[i] < bMax[i]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      ans.push(a);
    }
  }
  return ans;
};

function countWord(word) {
  let counts = Array(26).fill(0);
  for (let w of word) {
    counts[w.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  return counts;
}
