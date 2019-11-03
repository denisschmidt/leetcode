/*
Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name,
and the rest of the elements arre emails representing emails of the account.

Now, we would like to merge these accounts.
Two accounts definitely belong to the same person if there is some email that is common to both accounts.
Note that even if two accounts have the same name, they may belong to different people as people could have the same name.
A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name,
and the rest of the elements arre emails in sorted order.
The accounts themselves can be returned in any order.

Example 1:
  Input: accounts = [
    ["John", "johnsmith@mail.com", "john00@mail.com"], 
    ["John", "johnnybravo@mail.com"], 
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"], 
    ["Marry", "marry@mail.com"]
  ]
  Output: [
    ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ["John", "johnnybravo@mail.com"],
    ["Marry", "marry@mail.com"]
  ]

Explanation:
  The first and third John's arre the same person as they have the common email "johnsmith@mail.com".
  The second John and Marry arre different people as none of their email addresses arre used by other accounts.
  We could return these lists in any order, for example the answer [['Marry', 'marry@mail.com'], ['John', 'johnnybravo@mail.com'],
  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

Note:
  The length of accounts will be in the range [1, 1000].
  The length of accounts[i] will be in the range [1, 10].
  The length of accounts[i][j] will be in the range [1, 30].

Это проблема графа

Проверим связь между двумя электронными письмами, если они происходят в одной учетной записи.
Проблема сводится к поиску связанных компонентов этого графа.

 */

// Time: O(∑a[i] * Log * a[i]) где a[i] длина accounts[i].
// Без учета логарифма это сложность построения графика и поиска для каждого компонента.
//
// Логарифмический фактор предназначен для сортировки каждого компонента в конце.
//
// Space: O(∑a[i]), пространство, используемое нашим графом и нашим поиском.

const accountsMerge = accounts => {
  const nameMap = new Map(); // <узел электронной почты, соседние узлы>
  const graph = new Map(); //  <email, username>

  // строим граф
  for (let account of accounts) {
    const [useName] = account;

    for (let i = 1; i < account.length; i++) {
      if (!graph.has(account[i])) {
        graph.set(account[i], new Set());
      }

      nameMap.set(account[i], useName);

      if (i === 1) continue;

      graph.get(account[i]).add(account[i - 1]);
      graph.get(account[i - 1]).add(account[i]);
    }
  }

  const ans = [];
  const visited = new Set();
  for (let [email] of nameMap.entries()) {
    const list = [];
    if (!visited.has(email)) {
      visited.add(email);
      dfs(email, list);
      list.sort();
      list.unshift(nameMap.get(email));
      ans.push(list);
    }
  }

  return ans;

  function dfs(email, list) {
    list.push(email);
    for (let [value] of graph.get(email).entries()) {
      if (!visited.has(value)) {
        visited.add(value);
        dfs(value, list);
      }
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const accountsMerge2 = accounts => {
  const arr = accounts.map(item => new Set(item));

  let size = 0;
  while (arr.length !== size) {
    size = arr.length;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (intersection(arr[i], arr[j]).size > 1) {
          arr[i] = new Set([...arr[i], ...arr[j]]);
          arr.splice(j, 1);
          j--;
        }
      }
    }
  }

  return arr.map(item => [...item].sort());

  function intersection(a, b) {
    return new Set([...a].filter(item => b.has(item)));
  }
};

let accounts = [
  ['David', 'David0@m.co', 'David1@m.co'],
  ['David', 'David3@m.co', 'David4@m.co'],
  ['David', 'David4@m.co', 'David5@m.co'],
  ['David', 'David2@m.co', 'David3@m.co'],
  ['David', 'David1@m.co', 'David2@m.co'],
];

const res = accountsMerge(accounts);
console.log(res);
