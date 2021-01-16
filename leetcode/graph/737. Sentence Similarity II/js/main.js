// Time O(NlogP + P) где N - максимальная длина слова 1 и слова 2, а P - длина пары
// Space O(P) P - размер пар
const areSentencesSimilarTwo = (words1, words2, pairs) => {
  if (words1.length != words2.length) return false;

  let parent = {};
  let n = words1.length;

  for (let [a, b] of pairs) {
    let x = find(a);
    let y = find(b);

    if (x != y) {
      parent[y] = x;
    }
  }

  for (let i = 0; i < n; i++) {
    if (words1[i] == words2[i]) continue;

    let x = find(words1[i]);
    let y = find(words2[i]);

    if (x != y) {
      return false;
    }
  }
  return true;

  function find(x) {
    if (!parent.hasOwnProperty(x)) {
      parent[x] = x;
    }
    if (x != parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
};
