/*
Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, determine 
if two sentences are similar.

For example, "great acting skills" and "fine drama talent" are similar, 
if the similar word pairs are pairs = [["great", "fine"], ["acting","drama"], ["skills","talent"]].

Note that the similarity relation is not transitive. 
For example, if "great" and "fine" are similar, and "fine" and "good" are similar, "great" and "good" are not necessarily similar.

However, similarity is symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.

Also, a word is always similar with itself. 
For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. 
So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].

Note: 
  The length of words1 and words2 will not exceed 1000.
  The length of pairs will not exceed 2000.
  The length of each pairs[i] will be 2.
  The length of each words[i] and pairs[i][j] will be in the range [1, 20].
 
 */

// Time O(N)
// Space O(N)
const areSentencesSimilar = function (words1, words2, pairs) {
  const map = new Map();

  if (words1.length !== words2.length) return false;

  for (let [s1, s2] of pairs) {
    if (map.has(s1)) {
      let x = map.get(s1);
      map.set(s1, [...x, s2]);
    } else {
      map.set(s1, [s2]);
    }

    if (map.has(s2)) {
      let x = map.get(s2);
      map.set(s2, [...x, s1]);
    } else {
      map.set(s2, [s1]);
    }
  }

  let str = '';
  for (let i = 0; i < words1.length; i++) {
    let w1 = words1[i];
    let w2 = words2[i];
    if (w1 === w2) str += w1;

    if (map.has(w1)) {
      const results = map.get(w1);
      if (results.includes(w2)) str += w2;
    }
  }

  return str === words2.join('');
};
