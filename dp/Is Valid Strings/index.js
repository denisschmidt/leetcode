////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function checking that the given string is valid. We consider a string
// to be valid if all the characters of the string have exactly the same frequency.

// Examples:
// "aabbcc" is a valid string
// "aabbccc" is an invalid string

// Only check valid or can delete one char

// Time complexity : O(n) two loops of n are there.
// Space complexity : O(n). dp array of size nn is used.

function isValidString3(str) {
  const size = str.length;
  const map = new Map();

  for (let i = 0; i < size; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }

  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let val of map.values()) {
    min = Math.min(min, val);
    max = Math.max(max, val);
  }

  return max === min;
}

isValidString3('aabbaacc');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

isValidString2('aabbaacc');
