/*

  Detect Cycle in a Directed Graph

  https://www.geeksforgeeks.org/detect-cycle-in-a-graph/#:~:text=There%20is%20a%20cycle%20in,edge%20present%20in%20the%20graph.&text=To%20detect%20a%20back%20edge,a%20cycle%20in%20the%20tree.
  
  DFS can be used to detect a cycle in a Graph. 
  
  DFS for a connected graph produces a tree. 
  
  There is a cycle in a graph only if there is a back edge present in the graph. 

  A back edge is an edge that is from a node to itself (self-loop) or one of its ancestors in the tree produced by DFS. 

  To detect a back edge, keep track of vertices currently in the recursion stack of function for DFS traversal. 
  
  If a vertex is reached that is already in the recursion stack, then there is a cycle in the tree. 

*/

// Time Complexity: O(V+E).
// Time Complexity of this method is same as time complexity of DFS traversal which is O(V+E).
// Space Complexity: O(V).
// To store the visited and recursion stack O(V) space is needed.

function DirectedGraph(n, graph) {
  let visited = Array(n).fill(false);
  let stack = Array(n).fill(false);

  if (hasCycle(graph)) {
    return true;
  }

  return false;

  function hasCycle(u) {
    if (visited[u]) {
      return false;
    }

    visited[u] = true;
    stack[u] = true;

    for (let v of adjList[u]) {
      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    stack[u] = false;

    return false;
  }
}

/*

  Graph theory:

  Graph can't possibly contain a cycle. If the graph is fully connected and contains exactly n - 1 edges!

  And graph must be a tree.

  Going by this definition, our algorithm needs to do the following:
    1) Check whether or not there are n - 1 edges. If there's not, then return false.
    2) Check whether or not the graph is fully connected. Return true if it is, false if otherwise.

  Detect Cycle in a UnDirected Graph

  Solutions:
    1) Union Find
    2) Recursion DFS
    3) Iterative DFS + MAP
    4) Iterative DFS + SET + Remove

*/

function UnDirectedGraph() {
  // Algos:

  // Union Find
  function hasCycle(n, graph) {
    if (edges.length != n - 1) {
      return false;
    }

    let parent = [];

    for (let i = 0; i < n; i++) {
      parent[i] = i;
    }

    for (let [u, v] of graph) {
      if (!union(u, v)) {
        return false;
      }
    }

    return true;

    function find(x) {
      if (x != parent[x]) {
        parent[x] = find(parent[x]);
      }

      return parent[x];
    }

    function union(x, y) {
      let xr = find(x);
      let yr = find(y);

      if (xr != yr) {
        parent[yr] = xr;
        return true;
      }

      return false;
    }
  }

  // DFS
  function hasCycle_II(u, parent) {
    if (seen.has(u)) {
      return true;
    }

    seen.add(u);

    for (let v of graph[u]) {
      if (parent != v) {
        if (hasCycle_II(v, u)) {
          return true;
        }
      }
    }

    return false;
  }

  function hasCycle_III(n, graph) {
    let stack = [];
    let parent = new Map();

    stack.push(0);
    parent.set(0, -1);

    while (!stack.length) {
      let u = stack.pop();

      for (let v of graph[u]) {
        // Don't look at the trivial cycle
        if (parent.get(u) == v) {
          continue;
        }

        // Check if we've already seen this node.
        if (parent.has(v)) {
          return true; // There must be a cycle.
        }

        parent.set(v, u);
        stack.pop(v);
      }
    }

    return false;
  }

  function hasCycle_IIII(n, graph) {
    let stack = [];
    let seen = new Set();

    stack.push(0);

    while (stack.length) {
      let u = stack.pop();

      for (let v of graph.get(u).values()) {
        if (seen.has(v)) {
          return true;
        }

        stack.push(v);
        seen.add(v);

        graph.get(v).delete(u);
      }
    }

    return false;
  }
}
