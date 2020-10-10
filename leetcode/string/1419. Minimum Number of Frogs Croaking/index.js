/*

Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple “croak” are mixed. 

Return the minimum number of different frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. 

The frogs have to print all five letters to finish a croak. 

If the given string is not a combination of valid "croak" return -1.


Example 1:
  Input: croakOfFrogs = "croakcroak"
  Output: 1 
  Explanation: One frog yelling "croak" twice.

Example 2:
  Input: croakOfFrogs = "crcoakroak"
  Output: 2 
  Explanation: The minimum number of frogs is two. 
  The first frog could yell "crcoakroak".
  The second frog could yell later "crcoakroak".

Example 3:
  Input: croakOfFrogs = "croakcrook"
  Output: -1
  Explanation: The given string is an invalid combination of "croak" from different frogs.

Example 4:
  Input: croakOfFrogs = "croakcroa"
  Output: -1
  
Constraints:
  1 <= croakOfFrogs.length <= 10^5
  All characters in the string are: 'c', 'r', 'o', 'a' or 'k'.

*/

// Time O(N)
// Space O(N)
const minNumberOfFrogs = croakSequence => {
  let n = croakSequence.length;
  let ans = 0;
  let numCroakingFrogs = 0;
  let frequency = { c: 0, r: 0, o: 0, a: 0, k: 0 };

  for (let i = 0; i < n; i++) {
    frequency[croakSequence[i]] = ~~frequency[croakSequence[i]] + 1;

    if (!isStateValid(frequency)) {
      return -1;
    }

    if (croakSequence[i] == 'c') {
      numCroakingFrogs++;
    } else if (croakSequence[i] == 'k') {
      numCroakingFrogs--;
    }

    ans = Math.max(ans, numCroakingFrogs);
  }

  return numCroakingFrogs == 0 ? ans : -1;

  function isStateValid(frequency) {
    return (
      frequency['c'] >= frequency['r'] &&
      frequency['r'] >= frequency['o'] &&
      frequency['o'] >= frequency['a'] &&
      frequency['a'] >= frequency['k']
    );
  }
};

// TLE
// Time O(N^2)
// Space O(N^2)
const minNumberOfFrogs_II = croakOfFrogs => {
  let n = croakOfFrogs.length;
  let comb = [];
  let matches = ['c', 'cr', 'cro', 'croa', 'croak'];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (comb.length) {
      let ch = croakOfFrogs[i];
      let isMatch = false;

      for (let j = 0; j < comb.length; j++) {
        if (comb[j] + ch == 'croak') {
          comb.splice(j, 1);
          cnt = Math.max(cnt, comb.length + 1);
          isMatch = true;
          break;
        } else if (matches.includes(comb[j] + ch)) {
          comb[j] += ch;
          isMatch = true;
          break;
        }
      }
      if (!isMatch) {
        if (ch == 'c') comb.push(ch);
        else return -1;
      }
    } else {
      comb.push(croakOfFrogs[i]);
    }
  }

  return !comb.length ? cnt : -1;
};
