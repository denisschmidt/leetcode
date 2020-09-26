// Time O(N)
// Space O(N)
const canConvert = (str1, str2) => {
  if (str1 == str2) return true;

  let adjList = [];
  let set = new Set();

  for (let i = 0; i < 26; i++) {
    adjList[i] = new Set();
  }

  for (let i = 0; i < str1.length; i++) {
    let code1 = str1[i].charCodeAt(0) - 97;
    let code2 = str2[i].charCodeAt(0) - 97;

    set.add(code2);
    adjList[code1].add(code2);

    if (adjList[code1].size > 1) {
      return false;
    }
  }

  let visited = Array(26).fill(false);
  let stack = Array(26).fill(false);
  let list = [];

  for (let i = 0; i < 26; i++) {
    if (hasCycle(i)) {
      return set.size < 26;
    }
  }

  return true;

  function hasCycle(u) {
    if (visited[u]) {
      return false;
    }

    visited[u] = true;
    stack[u] = true;

    for (let v of adjList[u].values()) {
      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    list.push(u);
    stack[u] = false;

    return false;
  }
};
