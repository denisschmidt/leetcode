/*

In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.

Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

Example 1:
  Input: label = 14
  Output: [1,3,4,14]

Example 2:
  Input: label = 26
  Output: [1,2,6,10,26]
 

Constraints:
  1 <= label <= 10^6

*/

/*
  Нормальное отсортированное Binary Tree:
              1
            /   \
          2       3
        /  \     /  \
      4     5   6     7
    / |    /|   |\    | \
  8   9  10 11 12 13  14  15

  Можно легко определить родителя: parent = (value / 2) 

  Но это только в нормально упорядоченным (не зигзагообразным) бинарным деревом


  Zig Zag Binary Tree:
             1
           /   \
         3       2  <- 3+2-3 = 2/2 = 1
       /  \     /  \
     4     5   6     7   <- 7+4-4 = 7/2 = 3
   / |    /|   |\    | \
 15 14  13 12 11 10  9  8   <- 15+8-14 = 9/2 = 4

 Формула инверсии: (maxСurrentLevelValue + minCurrentLevelValue) - currentNumber 
 
 Например найти инверсию 14: 15 + 8 - 14 = 9 Отсюда вы просто делите 9 на 2, чтобы найти родителя 4

  
*/

// Time O(LogN)
// Space O(Log)
const pathInZigZagTree = label => {
  let ans = [];
  let node_count = 1;
  let level = 1;

  while (label >= Math.pow(2, level + 1)) {
    level += 1;
  }

  while (label != 1) {
    ans.push(label);
    let maxLevel = Math.pow(2, level + 1) - 1;
    let minLevel = Math.pow(2, level);

    let offset = maxLevel + minLevel - label;

    label = Math.floor(offset / 2);
    level--;
  }

  ans.reverse();
  ans.unshift(label);

  return ans;
};

// TLE
// Time O(N)
// Space O(N)
const pathInZigZagTree_II = label => {
  if (label == 1) return [1];

  let map = new Map();
  map.set(1, null);
  let depth = 1;
  let val = 1;
  let prev = [1];
  let found = false;

  while (found == false) {
    let nums = [];
    for (let i = 0; i < Math.pow(2, depth); i++) {
      nums.push(++val);
    }

    if (depth % 2 != 0) {
      nums.reverse();
    }

    let copy = [...nums];
    for (let i = 0; i < prev.length; i++) {
      for (let j = 0; j < 2 && nums.length > 0; j++) {
        let v = nums.shift();
        if (v == label) {
          found = true;
        }
        map.set(v, prev[i]);
      }
    }

    depth++;
    prev = copy;
  }

  let ans = [];

  while (label != null) {
    ans.push(label);
    label = map.get(label);
  }

  return ans.reverse();
};
