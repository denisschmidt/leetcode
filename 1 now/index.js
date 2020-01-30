var accountsMerge = function(accounts) {
  let map = new Map();
  let graph = new Map();

  for (let i = 0; i < accounts.length; i++) {
    let [name, ...emails] = accounts[i];

    for (let i = 0; i < emails.length; i++) {
      let email = emails[i];

      if (!map.has(email)) {
        map.set(email, []);
      }

      if (!graph.has(email)) {
        graph.set(email, new Set());
      }

      map.get(email).push(name);

      if (i === 0) continue;

      graph.get(emails[i]).add(emails[i - 1]);
      graph.get(emails[i - 1]).add(emails[i]);
    }
  }

  let visited = new Set();

  for (let [email] of map.entries()) {
    let queue = [email];
    let list = [];

    while (queue.length) {
      let current = queue.shift();

      list.push(current);

      for (let [value] of graph.get(current).entries()) {
        if (!visited.has(value)) {
          queue.push(value);
        }
      }
    }
  }

  console.log(map, graph);
};

let a = accountsMerge([
  ['Alex', 'Alex5@m.co', 'Alex4@m.co', 'Alex0@m.co'],
  ['Ethan', 'Ethan3@m.co', 'Ethan3@m.co', 'Ethan0@m.co'],
  ['Kevin', 'Kevin4@m.co', 'Kevin2@m.co', 'Kevin2@m.co'],
  ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe2@m.co'],
  ['Gabe', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe2@m.co'],
]);

console.log(a);
