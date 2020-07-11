/*

Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

age[B] <= 0.5 * age[A] + 7
age[B] > age[A]
age[B] > 100 && age[A] < 100
Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

Example 1:
  Input: [16,16]
  Output: 2
  Explanation: 2 people friend request each other.

Example 2:
  Input: [16,17,18]
  Output: 2
  Explanation: Friend requests are made 17 -> 16, 18 -> 17.

Example 3:
  Input: [20,30,100,110,120]
  Output: 3
  Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.
  

Notes:
  1 <= ages.length <= 20000.
  1 <= ages[i] <= 120.

*/

// Time O(A^2 + N) where N is the number of people, and A is the number of ages.
// Space O(A)
const numFriendRequests = ages => {
  let count = Array(121).fill(0);
  let ans = 0;

  for (let age of ages) {
    count[age]++;
  }

  for (let ageA = 0; ageA <= 120; ageA++) {
    let countA = count[ageA];

    for (let ageB = 0; ageB <= 120; ageB++) {
      let countB = count[ageB];

      if (ageA * 0.5 + 7 >= ageB) continue;
      if (ageA < ageB) continue;
      if (ageA < 100 && 100 < ageB) continue;

      ans += countA * countB;

      if (ageA == ageB) ans -= countA;
    }
  }

  return ans;
};
