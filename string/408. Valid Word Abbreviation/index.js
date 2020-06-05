/*

Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

A string such as "word" contains only the following valid abbreviations:

["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".

Note: Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.

Example 1:
  Given s = "internationalization", abbr = "i12iz4n":
  Return true.

Example 2:
  Given s = "apple", abbr = "a2e":
  Return false.

*/

// Time O(N)
// Space O(1)
const validWordAbbreviation = (word, abbr) => {
  let j = 0;

  for (let i = 0; i < abbr.length; i++) {
    let num = '';

    if (abbr[i] == 0 && word[i]) return false;

    while (Number.isInteger(+abbr[i])) {
      num += abbr[i];
      i++;
    }

    if (num != '') {
      j += parseInt(num);
    }

    if (abbr[i] != word[j] || i > word.length || j > word.length) {
      return false;
    }
    j++;
  }

  return true;
};
