/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Note:
  S has length at most 26, and no character is repeated in S.
  T has length at most 200.
  S and T consist of lowercase letters only.


Example :

Input:
  S = "c b a"
  T = "a b c d"

Output: "c b a d"

Explanation:
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.



Example 2 :
Input:
  "k q e p"
  "p e k e q"

Output: k q e e p


 */

/**
 * @param str
 * @param subStr
 * @returns {Array}
 */
const findAllEntryIndexes = function(str, subStr) {
  const arr = [];
  for(let i=0; i < str.length; i++) {
    if(str[i] === subStr) arr.push(i)
  }
  return arr
}

const removeCharFromStr = function(str, char) {
  return str.replace(new RegExp(char, 'g'), '');
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const customSortString = function(s, t) {
  let str = '', removeStr = t;

  for(let i=0; i < s.length; i++) {
    const indexes = findAllEntryIndexes(t, s[i]);
    removeStr = removeCharFromStr(removeStr, s[i])
    if (indexes.length) {
      indexes.forEach(index => {
        str = str + t[index];
      });
    }
  }
  return str + removeStr;
};


const res = customSortString('cba', 'abcd');
console.log('===', res);
