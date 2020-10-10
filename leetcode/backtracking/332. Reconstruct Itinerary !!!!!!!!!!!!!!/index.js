/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to],
reconstruct the itinerary in order.

All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).

You may assume all tickets form at least one valid itinerary.

Example 1:

  Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
  Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

Example 2:

  Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
  Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]

Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.

For yet example, given the following list of flights:

  HNL ➔ AKL
  YUL ➔ ORD
  ORD ➔ SFO
  SFO ➔ HNL

  And starting airport YUL, you should return YUL ➔ ORD ➔ SFO ➔ HNL ➔ AKL.

https://leetcode.com/problems/reconstruct-itinerary/discuss/78799/Very-Straightforward-DFS-Solution-with-Detailed-Explanations

 */

const sort = (a, b) => a[1].localeCompare(b[1]);

const findItinerary = function (tickets) {
  if (tickets === null || tickets.length === 0) {
    return [];
  }

  const map = {};

  tickets.forEach(ticket => {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [to];
    } else {
      map[from].push(to);
      map[from].sort((a, b) => a.localeCompare(b));
    }
  });

  const backtracking = (comb, key) => {
    const routes = map[key];

    if (comb.length === tickets.length) {
      return [...comb];
    } else if (!routes || !routes.length) {
      return;
    } else {
      let result = [];
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        routes.splice(i, 1);
        comb.push(route);

        result = backtracking(comb, route);

        if (result) {
          return result;
        }

        routes.splice(i, 0, route);
        comb.pop();
      }
    }
  };

  const ans = backtracking([], 'JFK', 0);

  ans.unshift('JFK');

  return ans;
};

const res = findItinerary([
  ['JFK', 'SFO'],
  ['JFK', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'JFK'],
  ['ATL', 'SFO'],
]);
console.log(res);
