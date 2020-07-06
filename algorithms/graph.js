/*

  Detect Cycle in a Directed Graph

  https://www.geeksforgeeks.org/detect-cycle-in-a-graph/#:~:text=There%20is%20a%20cycle%20in,edge%20present%20in%20the%20graph.&text=To%20detect%20a%20back%20edge,a%20cycle%20in%20the%20tree.
  
  Depth First Traversal can be used to detect a cycle in a Graph. 
  
  DFS for a connected graph produces a tree. 
  
  There is a cycle in a graph only if there is a back edge present in the graph. 

  A back edge is an edge that is from a node to itself (self-loop) or one of its ancestors in the tree produced by DFS. 

  To detect a back edge, keep track of vertices currently in the recursion stack of function for DFS traversal. 
  
  If a vertex is reached that is already in the recursion stack, then there is a cycle in the tree. 

*/

//

// Time Complexity: O(V+E).
// Time Complexity of this method is same as time complexity of DFS traversal which is O(V+E).
// Space Complexity: O(V).
// To store the visited and recursion stack O(V) space is needed.

function main(n, graph) {
  let visited = Array(n).fill(false);
  let stack = Array(n).fill(false);

  if (hasCycle(graph)) {
    return true;
  }

  return false;

  function hasCycle(u) {
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
