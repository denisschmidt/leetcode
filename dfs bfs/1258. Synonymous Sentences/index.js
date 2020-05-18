/*

Given a list of pairs of equivalent words synonyms and a sentence text, 

Return all possible synonymous sentences sorted lexicographically.
 
Example 1:
  Input: 
    synonyms = [["happy","joy"],["sad","sorrow"],["joy","cheerful"]],
    text = "I am happy today but was sad yesterday"

  Output:
    ["I am cheerful today but was sad yesterday",
    ​​​​​​​"I am cheerful today but was sorrow yesterday",
    "I am happy today but was sad yesterday",
    "I am happy today but was sorrow yesterday",
    "I am joy today but was sad yesterday",
    "I am joy today but was sorrow yesterday"]
 
Constraints:
  0 <= synonyms.length <= 10
  synonyms[i].length == 2
  synonyms[0] != synonyms[1]
  All words consist of at most 10 English letters only.
  text is a single space separated sentence of at most 10 words.

*/

const generateSentences = (synonyms, t) => {
  let map = new Map();
  let queue = [t];
  let ans = [];
  let visited = new Set();

  synonyms.forEach(([a, b]) => {
    map.set(a, b);
    map.set(b, a);
  });

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let text = queue.shift();

      ans.push(text);

      let words = text.split(' ');
      let temp = [];

      for (let i = 0; i < words.length; i++) {
        if (map.has(words[i])) {
          let copy = [...words];
          copy[i] = map.get(copy[i]);
          temp.push(copy.join(' '));
        }
      }

      while (temp.length) {
        let x = temp.pop();
        if (!visited.has(x)) {
          queue.push(x);
          visited.add(x);
        }
      }
    }
  }

  ans.shift();

  if (ans.length == 0) return [t];

  ans.sort();

  return ans;
};
