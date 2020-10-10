/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest.
 If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
  Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
  Output: ["i", "love"]

Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
  Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
  Output: ["the", "is", "sunny", "day"]

Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:
  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Input words contain only lowercase letters.

 */

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time O(N * LogK)
// Space O(N)
const topKFrequent = (words, k) => {
  let map = {};
  // Min Heap
  let pq = new PriorityQueue({
    comparator: (a, b) => {
      if (a.cnt == b.cnt) {
        return b.word.localeCompare(a.word);
      }
      return a.cnt - b.cnt;
    },
  });

  for (let word of words) {
    map[word] = ~~map[word] + 1;
  }

  // Очередь будет содержать только K максимальных элементов
  Object.keys(map).forEach(word => {
    pq.offer({ word, cnt: map[word] });
    if (pq.size() > k) pq.poll();
  });

  let ans = [];
  while (!pq.isEmpty() && k > 0) {
    let { word } = pq.poll();
    ans.push(word);
    k--;
  }

  return ans.reverse();
};

const topKFrequent_II = (words, k) => {
  const ans = [];
  const size = words.length;
  const map = new Map();
  const bucket = Array(size + 1)
    .fill()
    .map(() => []);

  for (let i = 0; i < size; i++) {
    let word = words[i];
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }

  for (let [key, value] of map) {
    bucket[value].push(key);
    bucket[value].sort((a, b) => (a > b ? 1 : -1));
  }

  for (let i = size; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    ans.push(bucket[i].shift());
  }
  return ans;
};
