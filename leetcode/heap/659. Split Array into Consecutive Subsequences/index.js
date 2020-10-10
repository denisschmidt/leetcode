/*

Given an array nums sorted in ascending order, 
return true if and only if you can split it into 1 or more subsequences such that each subsequence consists of consecutive integers and has length at least 3.

Example 1:
  Input: [1,2,3,3,4,5]
  Output: True
  Explanation:
    You can split them into two consecutive subsequences : 
    1, 2, 3
    3, 4, 5

Example 2:
  Input: [1,2,3,3,4,4,5,5]
  Output: True
  Explanation:
    You can split them into two consecutive subsequences : 
    1, 2, 3, 4, 5
    3, 4, 5

Example 3:
  Input: [1,2,3,4,4,5]
  Output: False
 

Constraints: 1 <= nums.length <= 10000

*/

// Time O(N * LogN)
// Space O(N)
const isPossible = nums => {
  let pq = new PriorityQueue({
    comparator: (a, b) => {
      if (last(a) == last(b)) {
        return a.length - b.length;
      }
      return last(a) - last(b);
    },
  });

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // удаляем из очереди все подмассивы, у которых last(pq.peek()) + 1 < nums[i]
    // так как они больше не нужны, потому что в эти подмассивы больше нельзя добавлять новые значения
    while (!pq.isEmpty() && last(pq.peek()) + 1 < nums[i]) {
      // если какой-либо подмассив был меньше 3 тогда последовательность уже нарушена и дальше нет смысла итерироваться
      if (pq.poll().length < 3) {
        return false;
      }
    }

    if (pq.isEmpty() || last(pq.peek()) == nums[i]) {
      pq.offer([nums[i]]);
    } else {
      let arr = pq.poll();
      arr.push(nums[i]);
      pq.offer(arr);
    }
  }

  for (let x of pq.toArray()) {
    if (x.length < 3) {
      return false;
    }
  }
  return true;
};

function last(arr) {
  return arr[arr.length - 1];
}
