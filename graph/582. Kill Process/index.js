/*

Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

Each process only has one parent process, but may have one or more children processes. 
This is just like a tree structure. 
Only one process has PPID that is 0, which means this process has no parent process. 
All the PIDs will be distinct positive integers.

We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. 
You should assume that when a process is killed, all its children processes will be killed. 
No order is required for the final answer.

Example 1:
  Input:  pid =  [1, 3, 10, 5] ppid = [3, 0, 5, 3] kill = 5
  Output: [5,10]
  Explanation: 
           3
         /   \
        1     5
             /
            10
  
  Kill 5 will also kill 10.

Note:
  The given kill id is guaranteed to be one of the given PIDs.
  n >= 1.

*/

// Time O(N)
// Space O(N)
const killProcess = function (pid, ppid, kill) {
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
      let size = graph.get(u).length;
      for (let i = 0; i < size; i++) {
        let v = graph.get(u).pop();
        queue.push(v);
      }
    }
  }

  return res;
};
