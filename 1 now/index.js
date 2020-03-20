/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  let queue = [0];
  let n = arr.length;
  let cnt = 0;
  let visited = [];

  visited[0] = true;

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }

    map.get(arr[i]).push(i);
  }

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let i = queue.shift();

      if (i === n - 1) {
        return cnt;
      }

      if (i - 1 >= 0 && !visited[i - 1]) {
        visited[i - 1] = true;
        queue.push(i - 1);
      }

      if (i + 1 < n && !visited[i + 1]) {
        visited[i + 1] = true;
        queue.push(i + 1);
      }

      if (map.has(arr[i]) && map.get(arr[i]).length > 0) {
        let x = map.get(arr[i]).length;

        for (let k = 0; k < x; k++) {
          let j = map.get(arr[i]).pop();
          queue.push(j);
          visited[j] = true;
        }
      }
    }

    cnt++;
  }

  return cnt;
};
