"""

  Detect Cycle in a Directed Graph

  https://www.geeksforgeeks.org/detect-cycle-in-a-graph/#:~:text=There%20is%20a%20cycle%20in,edge%20present%20in%20the%20graph.&text=To%20detect%20a%20back%20edge,a%20cycle%20in%20the%20tree.
  
  DFS can be used to detect a cycle in a Graph. 
  
  DFS for a connected graph produces a tree. 
  
  There is a cycle in a graph only if there is a back edge present in the graph. 

  A back edge is an edge that is from a node to itself (self-loop) or one of its ancestors in the tree produced by DFS. 

  To detect a back edge, keep track of vertices currently in the recursion stack of function for DFS traversal. 
  
  If a vertex is reached that is already in the recursion stack, then there is a cycle in the tree. 

"""

# Time Complexity: O(V+E).
# Time Complexity of this method is same as time complexity of DFS traversal which is O(V+E).
# Space Complexity: O(V).
# To store the visited and recursion stack O(V) space is needed.

def hasCycleInDirectedGraph(n, graph):
    visited = [False] * n
    stack = [False] * n

    def hasCycle(u):
        if visited[u]:
            return False
        
        visited[u] = True
        stack[u] = True

        for v in graph[u]:
            if stack[v]:
                return True
            
            if not visited[v] and hasCycle(v):
                return True
        
        stack[u] = False

        return False

    return hasCycle(0)


"""

    Graph theory:

    Graph can't possibly contains a cycle if the graph is fully connected and contains exactly n - 1 edges!

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

    Backward edge - path from the same vertex to a parent node or other node in current path from the root to the edge
    
    Cross edge - edge from the vertex to another subtree
    
"""

class UnDirectedGraph:
    def __init__(self, n, graph):
        self.graph = graph
        self.n = n
        self.parent = [0] * n
        self.seen = set()

        for i in range(n): parent[i] = i

    # Union Find      
    def hasCycle():
        if len(edges) != self.n - 1:
            return False
        
        for [u, v] in self.graph:
            if not self.union(u, v):
                return False
      
    return True

    def find(self, x):
        if x != parent[x]:
            parent[x] = self.find(parent[x])

      return parent[x]

    def union(x, y):
        xr = find(x)
        yr = find(y)

        if xr != yr:
            parent[yr] = xr
            return True 

      return False
    
    # DFS
    def hasCycle_II(self, u, parent):
        if u in self.seen:
            return True
        
        self.seen.add(u)

        for v in self.graph[u]:
            if v != parent and self.hasCycle_II(v, u):
                return True
        
        return False

    # Remove connections
    def hasCycle_III(self, n, graph):
        stack = []
        seen = set()

        stack.append(0)

        while stack:
            u = stack.pop()

            for v in graph[u]:
                if v in seen:
                    return True
                
                stack.append(v)
                seen.add(v)

                graph[v].remove(u) # remove connection

        return False

    def hasCycle_IV(self, n, graph):
        stack = []
        parent = {}

        stack.append(0)
        parent[0] = -1

        while stack:
            u = stack.pop()

            for v in graph[u]:
                # Don't look at the trivial cycle
                if parent[u] == v:
                    continue
                
                # Check if we've already seen this node.
                if v in parent:
                    return True # There must be a cycle.

            parent[v] = u
            stack.append(v)
        
        return False
