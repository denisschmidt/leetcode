/*

Given n orders, each order consist in pickup and delivery services. 

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i). 

Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:
  Input: n = 1
  Output: 1
  Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.

Example 2:
  Input: n = 2
  Output: 6
  Explanation: All possible orders: 
    (P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
    This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.

Example 3:
  Input: n = 3
  Output: 90
 

Constraints:
  1 <= n <= 500

*/

/*

  We consider the first element in all 2n elements.
  The first must be a pickup, and we have n pickups as chioce.
  It's pair can be to any position in the rest of 2*n-1 positions.
  So total number permutations (n * 2 - 1) * n.

*/

// Time O(N)
// Space O(1)
const countOrders = n => {
  let res = 1;
  let mod = 1e9 + 7;

  for (let i = 1; i <= n; i++) {
    res = (res * (2 * i - 1) * i) % mod;
  }

  return res;
};

// Time O(N!)
// Space O(N!)
const countOrders_II = n => {
  let ans = 0;
  let orders = [];
  let i = 0;
  let j = 1;
  let mod = 1e9 + 7;
  while (i < 2 * n) {
    if (i >= n) {
      orders.push(j * 10);
      j++;
    } else {
      orders.push(i + 1);
    }
    i++;
  }

  dfs([], 0);

  return ans;

  function dfs(comb = []) {
    if (comb.length == 2 * n) {
      console.log(comb);
      ans++;
      ans %= mod;
      return;
    }
    for (let i = 0; i < orders.length; i++) {
      if ((orders[i] >= 10 && !comb.includes(orders[i] / 10)) || comb.includes(orders[i])) continue;
      comb.push(orders[i]);
      dfs(comb);
      comb.pop();
    }
  }
};
