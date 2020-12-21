// Time: O(E^D)
// Space: O(∣V∣+∣E∣) where |V| is the number of airports and |E| is the number of flights.
const findItinerary = function (tickets) {
  if (tickets === null || tickets.length === 0) {
    return [];
  }

  let map = {};

  tickets.forEach(ticket => {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [to];
    } else {
      map[from].push(to);
      map[from].sort((a, b) => a.localeCompare(b));
    }
  });

  function dfs(comb, key) {
    let routes = map[key];

    if (comb.length === tickets.length) {
      return [...comb];
    }

    if (!routes || !routes.length) {
      return;
    }

    let result = [];

    for (let i = 0; i < routes.length; i++) {
      let route = routes[i];

      routes.splice(i, 1);
      comb.push(route);

      result = dfs(comb, route);

      routes.splice(i, 0, route);
      comb.pop();

      if (result) {
        return result;
      }
    }
  }

  let ans = dfs([], 'JFK', 0);

  ans.unshift('JFK');

  return ans;
};
