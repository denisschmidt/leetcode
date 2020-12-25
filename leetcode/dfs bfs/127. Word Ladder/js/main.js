// BFS
// Time O(M * N) где M - длина слова, а N - общее количество слов в списке входных слов.
// Space O(M * N)
const ladderLength = (beginWord, endWord, wordList) => {
  let queue = [beginWord];
  let visited = Array(wordList.length).fill(false);
  let cnt = 1;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let s1 = queue.shift();

      if (s1 == endWord) {
        return cnt;
      }

      for (let i = 0; i < wordList.length; i++) {
        if (visited[i] || !oneEditReplace(s1, wordList[i])) continue;

        visited[i] = true;
        queue.push(wordList[i]);
      }
    }
    cnt++;
  }

  return 0;
};

function oneEditReplace(s1, s2) {
  if (s1 === s2) {
    return false;
  }

  let foundDifference = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) {
        return false;
      }

      foundDifference = true;
    }
  }

  return true;
}
