/*

68. Text Justification

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters
and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible.
If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more
spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:

  Input: words = ["This", "is", "an", "example", "of", "text", "justification."] maxWidth = 16
  Output:
    [
       "This    is    an",
       "example  of text",
       "justification.  "
    ]

Example 2:

  Input: words = ["What","must","be","acknowledgment","shall","be"] maxWidth = 16
  Output:
    [
      "What   must   be",
      "acknowledgment  ",
      "shall be        "
    ]

  Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.

Example 3:

  Input: words = ["Science","is","what","we","understand","well","enough","to","explain", "to","a","computer.","Art","is","everything","else","we","do"]
  maxWidth = 20

  Output:
    [
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  "
    ]

 */

var generateFragment = (comb, letters, maxWidth, isLast) => {
  let size = comb.length;
  let rowCount = size > 1 ? size - 1 : size;
  let spaces = maxWidth - letters;
  let str = '';
  let minSpaces = ' '.repeat(Math.floor(spaces / rowCount));
  let addSpace = spaces % rowCount;

  if (size === 1 || isLast) {
    str = comb.join(' ') + ' '.repeat(spaces - size + 1);
    return str;
  } else {
    str = comb[0];
    for (let i = 1; i < size; i++) {
      str += minSpaces + (i <= addSpace ? ' ' : '') + comb[i];
    }
    return str;
  }
};

// Time O(N)
var fullJustify = function(words, maxWidth) {
  let ans = [];
  let i = 0;
  const backtrack = (comb = [], size = 0, index) => {
    if (comb.length) {
      let isLast = index + 1 === words.length;
      const str = generateFragment(comb, size, maxWidth, isLast);
      ans.push(str);
      return [];
    } else {
      for (i = index; i < words.length; i++) {
        let word = words[i];
        size += word.length;
        comb.push(word);

        while (size + comb.length - 1 < maxWidth && i + 1 < words.length) {
          i++;
          let word = words[i];
          size += word.length;
          comb.push(word);
        }

        if (size + comb.length - 1 > maxWidth) {
          let last = comb.pop();
          size -= last.length;
          i = i - 1;
        }

        if (size + comb.length - 1 <= maxWidth) {
          comb = backtrack(comb, size, i);
          size = 0;
        }
      }
    }
  };

  backtrack([], 0, 0);

  return ans;
};

const res = fullJustify(
  [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
  ],
  20,
);
console.log('---', res);
