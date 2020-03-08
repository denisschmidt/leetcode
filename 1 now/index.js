/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  // 3 -> [1, 5] 5 -> 10

  let graph = new Map();

  for (let i = 0; i < ppid.length; i++) {
    if (!graph.has(ppid[i])) {
      graph.set(ppid[i], []);
    }

    graph.get(ppid[i]).push(pid[i]);
  }

  let queue = [kill];
  let res = [];

  while (queue.length) {
    let u = queue.shift();
    res.push(u);

    if (graph.has(u)) {
      let size = graph.get(k).length;
      for (let i = 0; i < size; i++) {
        let v = graph.get(k).pop();
        queue.push(v);
      }
    }
  }

  return res;
};

killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5);
