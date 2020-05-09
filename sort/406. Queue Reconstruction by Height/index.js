/*

Suppose you have a random list of people standing in a queue. 

Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. 

Write an algorithm to reconstruct the queue.

Note: The number of people is less than 1,100.
 
Example
  Input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

  Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

*/

// Time O(NLogN + N^2)
// Space O(N)
const reconstructQueue = people => {
  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  let queue = [];

  for (let p of people) {
    queue.splice(p[1], 0, p);
  }
  return people;
};

// Time O(NLogN + N^3)
// Space O(N)
const reconstructQueue_II = people => {
  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  for (let i = 1; i < people.length; i++) {
    for (let j = i; j > 0; j--) {
      let cnt = 0;
      for (let k = j - 1; k >= 0; k--) {
        if (people[j][0] <= people[k][0]) {
          cnt++;
        }
      }

      if (people[j][1] < cnt) {
        swap(people, j, j - 1);
      }
    }
  }

  return people;

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
