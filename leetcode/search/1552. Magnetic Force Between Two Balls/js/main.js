/*

In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. 

Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

Example 1:
  Input: position = [1,2,3,4,7], m = 3
  Output: 3
  Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

Example 2:
  Input: position = [5,4,3,2,1,1000000000], m = 2
  Output: 999999999
  Explanation: We can use baskets 1 and 1000000000.
  

Constraints:
  n == position.length
  2 <= n <= 10^5
  1 <= position[i] <= 10^9
  All integers in position are distinct.
  2 <= m <= position.length

*/

/*
  
  Initially:
  L                                         R
  v                                         v
  [      valid      ] [       invalid       ]

  Step 1:
                    L                       R
                    v                       v
  [      valid      ] [       invalid       ]

  Step 2:
                    R
                    L                    
                    v                    
  [      valid      ] [       invalid       ]
  

  Finally:
                  R L
                  v v
  [      valid      ] [       invalid       ]

*/

// Time O(NLogN)
// Space O(N)
const maxDistance = (position, m) => {
  position.sort((a, b) => a - b);

  let n = position.length;
  let l = 1;
  let r = position[n - 1] - position[0];

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (count(mid) >= m) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;

  function count(minDist) {
    let res = 1;
    let curr = position[0];
    for (let i = 1; i < n; i++) {
      if (position[i] - curr >= minDist) {
        res++;
        curr = position[i];
      }
    }
    return res;
  }
};
