// Time O(N)
// Space O(N)
const exclusiveTime = (n, logs) => {
  logs = logs.map(log => {
    log = log.split(':');
    return { fn: log[0], operation: log[1], time: log[2] };
  });

  let ans = Array(n).fill(0);

  let stack = [logs[0].fn];
  let prev = logs[0].time;
  let i = 1;

  while (i < logs.length) {
    if (logs[i].operation == 'start') {
      if (stack.length) {
        let fn = last(stack);
        ans[fn] += logs[i].time - prev;
      }
      stack.push(logs[i].fn);
      prev = logs[i].time;
    } else {
      let fn = stack.pop();
      ans[fn] += logs[i].time - prev + 1;
      prev = Number(logs[i].time) + 1;
    }
    i++;
  }
  return ans;
};

function last(arr) {
  return arr[arr.length - 1];
}
