/*

You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

 Example 1:
  Input: s = "dcab", pairs = [[0,3],[1,2]]
  Output: "bacd"
  Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[1] and s[2], s = "bacd"

Example 2:
  Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
  Output: "abcd"
  Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[0] and s[2], s = "acbd"
    Swap s[1] and s[2], s = "abcd"

Example 3:
  Input: s = "cba", pairs = [[0,1],[1,2]]
  Output: "abc"
  Explaination: 
    Swap s[0] and s[1], s = "bca"
    Swap s[1] and s[2], s = "bac"
    Swap s[0] and s[1], s = "abc"
 

Constraints:
  1 <= s.length <= 10^5
  0 <= pairs.length <= 10^5
  0 <= pairs[i][0], pairs[i][1] < s.length
  s only contains lower case English letters.

*/

/*

  Подумать об pairs как о связанном графе

  С помощью union-find мы создаем группы, а уже внутри каждой группы мы можем свободно переставлять символы
  
  Важное уточнение - операция find возвращает родительский индекс определяющий множество(u)
  
  Мы используем этот индекс(u) для идентификации группы и помещаем все символы группы(v) в родительский индекс u
  map.get(u).push(v);

  Затем: 
    1) Мы получаем стороку для каждой группы,
    2) Сортируем ее 
    3) Затем помещаем сортированные символы обратно на их соответствующие позиции в группе
  
*/

// Time (N * NLogN)
// Space O(N)
const smallestStringWithSwaps = (str, pairs) => {
  let parent = [];

  for (let i = 0; i < str.length; i++) {
    parent[i] = i;
  }

  let map = new Map();

  for (let [u, v] of pairs) {
    union(u, v);
  }

  for (let v = 0; v < str.length; v++) {
    // получаем родителя опредяющего множество
    let u = find(v);
    if (!map.has(u)) {
      map.set(u, []);
    }
    map.get(u).push(v);
  }

  let newStr = str.split('');

  for (let nums of map.values()) {
    let s = [];

    nums.forEach(id => s.push(str[id]));

    s.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < nums.length; i++) {
      newStr[nums[i]] = s[i];
    }
  }

  return newStr.join('');

  function find(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr !== yr) {
      parent[yr] = xr;
      return true;
    }

    return false;
  }
};
