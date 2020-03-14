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

let a = smallestStringWithSwaps('dcab', [
  [0, 3],
  [1, 2],
  [0, 2],
]);

console.log(a);

// 854. K-Similar Strings
