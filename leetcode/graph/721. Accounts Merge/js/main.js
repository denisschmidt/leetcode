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
// Логарифмический фактор предназначен для сортировки каждого компонента в конце.
// Space: O(∑a[i]), пространство, используемое нашим графом и нашим поиском.
const accountsMerge = accounts => {
  let graph = new Map(); //  <email, username>
  let emailsToName = new Map();

  // build emails graph
  for (let account of accounts) {
    const [useName] = account;

    for (let i = 1; i < account.length; i++) {
      if (!graph.has(account[i])) {
        graph.set(account[i], new Set());
      }

      emailsToName.set(account[i], useName);

      if (i === 1) continue;

      graph.get(account[i]).add(account[i - 1]);
      graph.get(account[i - 1]).add(account[i]);
    }
  }

  let res = [];
  let visited = new Set();

  for (let [email, name] of emailsToName) {
    let list = dfs(email, name, []);

    if (list.length) {
      list.sort();
      res.push([name, ...list]);
    }
  }

  return res;

  function dfs(currentEmail, currentName, list) {
    if (visited.has(currentEmail)) {
      return list;
    }

    visited.add(currentEmail);
    list.push(currentEmail);

    for (let email of graph.get(currentEmail).values()) {
      if (email == currentEmail) continue;
      if (currentName == emailsToName.get(email)) {
        dfs(email, currentName, list);
      }
    }
    return list;
  }
};

// BFS
const accountsMerge_II = accounts => {
  let names = new Map();
  let adjList = new Map();

  for (let [name, ...emails] of accounts) {
    for (let i = 0; i < emails.length; i++) {
      if (!adjList.has(emails[i])) {
        adjList.set(emails[i], new Set());
      }

      names.set(emails[i], name);

      if (i == 0) continue;

      adjList.get(emails[i]).add(emails[i - 1]);
      adjList.get(emails[i - 1]).add(emails[i]);
    }
  }

  let ans = [];
  let visited = new Set();

  for (let x of adjList.keys()) {
    let list = [];
    let queue = [x];

    while (queue.length) {
      let parentEmail = queue.shift();

      if (visited.has(parentEmail)) continue;

      list.push(parentEmail);
      visited.add(parentEmail);

      for (let email of adjList.get(parentEmail).values()) {
        queue.push(email);
      }
    }

    if (list.length) {
      list.sort();
      list.unshift(names.get(x));
      ans.push(list);
    }
  }

  return ans;
};
