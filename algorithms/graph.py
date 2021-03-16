"""

  Detect Cycle in a Directed Graph

  https://www.geeksforgeeks.org/detect-cycle-in-a-graph/#:~:text=There%20is%20a%20cycle%20in,edge%20present%20in%20the%20graph.&text=To%20detect%20a%20back%20edge,a%20cycle%20in%20the%20tree.
  
  DFS can be used to detect a cycle in a Graph. 
  
  DFS for a connected graph produces a tree. 
  
  There is a cycle in a graph only if there is a back edge present in the graph. 

  A back edge is an edge that is from a node to itself (self-loop) or one of its ancestors in the tree produced by DFS. 

  To detect a back edge, keep track of vertices currently in the recursion stack of function for DFS traversal. 
  
  If a vertex is reached that is already in the recursion stack, then there is a cycle in the tree. 


DFS - мы всегда идем до конца пока не обойдем все вершины а потом начнем backtrack

"""

# Time Complexity: O(V + E).
# Time Complexity of this method is same as time complexity of DFS traversal which is O(V + E).

# Space Complexity: O(V).
# To store the visited and recursion stack O(V) space is needed.

import collections


# Coloring solution
def hasCycleInDirectedGraph(graph, n):
    def dfs(v):
        color[v] = 1  # processed

        for u in graph[v]:
            # если приходим в ребро которое обрабатывается в данный момент
            if color[u] == 1:
                return True

            if color[u] == 0 and dfs(u):
                return True

        color[v] = 2

        return False

    color = [0] * n

    # Если графы несвязанны
    for v in range(n):
        if color[v] == 0 and dfs(v):
            return True

    return False


# Time O(V + E)
# Space O(V)
def topologicalSort(n, graph):
    def dfs(v):
        color[v] = 1

        for u in graph[v]:
            if color[u] == 1:
                return True

            if color[u] == 0 and dfs(u):
                return True

        topological_sorted_order.append(v)
        color[v] = 2

        return False

    topological_sorted_order = []
    color = [0] * n

    for v in range(n):
        if color[v] == 0 and dfs(v):
            return []

    return topological_sorted_order


# Directed Acyclic Graph.
# It's a must condition for topological sort.
# Time O(V + E)
# Space O(V)
def topologicalSort_II(n, graph):
    indegree = [0] * n
    topological_sorted_order = []

    for v, u in graph:
        indegree[u] += 1

    queue = collections.deque([i for i in range(n) if indegree[i] == 0])

    while queue:
        v = queue.popleft()

        topological_sorted_order.append(v)

        for u in graph[v]:
            indegree[u] -= 1

            if indegree[u] == 0:
                queue.append(u)

    return topological_sorted_order if len(
        topological_sorted_order) == n else []


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


    Типы ребер:
        - Backward edge (обратное ребро) - ребро ведущее от какой-то вершины в своего одного из предков

        - Cross edge (перекрестные ребра) - две независимые вершины соедененные ребром

        - Древестные ребра

    При обходе графа DFS НЕСУЩЕСТВУЕТ перекрестных ребер !!!

"""


class UnDirectedGraph:
    def __init__(self, n, graph):
        self.graph = graph
        self.n = n
        self.parent = [0] * n
        self.seen = set()

        for i in range(n):
            self.parent[i] = i

    # Union Find
    def hasCycle(self, edges):
        if len(edges) != self.n - 1:
            return False

        for [u, v] in edges:
            if not self.union(u, v):
                return False

        return True

    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]

    def union(self, x, y):
        xr = self.find(x)
        yr = self.find(y)

        if xr != yr:
            self.parent[yr] = xr
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

                graph[v].remove(u)  # remove connection

        return False


"""
    What is mean the MST?

    A spanning tree means all vertices must be connected. 
    
    So the two disjoint subsets (discussed above) of vertices must be connected to make a Spanning Tree. 
    
    And they must be connected with the minimum weight edge to make it a Minimum Spanning Tree.

    1) Initially MST is empty. Every vertex is singe component as highlighted in blue color in below diagram.

    2) For every component, find the cheapest edge that connects it to some other component.

    3) Repeat that step, i.e., for every component, find the cheapest edge that connects it to some other component.

    4) If there is only one component left, we stop and return MST.

    Greedy algorithms for finding MST: Kruskal, Prim, Boruvkas

    https://www.geeksforgeeks.org/boruvkas-algorithm-greedy-algo-9/

"""
"""

    Answer several queries, each query asks if the first vertex in the tree is the ancestor of the second one

    Introduce in and out times for every vertex. It's just a timer.

    All ancestor have in time smaller and out time bigger than all descendants
    
    (время входа, время выхода)

              1 (1, 10)
            /   \
    (2, 7) 2     3 (8, 9)
         /  \   
(3, 4) 4    5 (5, 6) 


"""


class GraphTime:
    def setTimeInTimeOut(self, n, graph):
        color = [0] * n
        tIn = [0] * n
        tOut = [0] * n
        timer = 0

        def dfs(v):
            nonlocal timer
            color[v] = 1
            tIn[v] = timer

            timer += 1

            for u in graph[v]:
                if color[u] == 0:
                    dfs(u)

            tOut[v] = timer
            timer += 1

        # returns if v is ancestor of u
        def isAncerssor(v, u):
            return tIn[v] <= tIn[u] and tOut[v] >= tOut[u]

        return isAncerssor(0, 2)


"""

    Find MHT (Minimum Height Tree) https://leetcode.com/problems/minimum-height-trees/

    Suppose we don't know number of nodes and don't have access to nodes.

    Solution: We can use two pointers from each side and start going with equal speed.

    When they meet or locale on the 1 step distance (depends if n odd or even) it means that we found centroid nodes.
    
    For the tree-alike graph, the number of centroids is no more than 2.

    Also the main condition that there is no cycle in tree-alike graph.

    If the nodes form a chain, it is intuitive to see that the above statement holds, which can be broken into the following two cases:
	    -If the number of nodes is even, then there would be two centroids.
        - If the number of nodes is odd, then there would be only one centroid.

    We start with the first layer and remove nodes layer by layer while number of nodes more then 2.
    
"""


def findMHT(n, graph):
    queue = collections.deque()

    for v in range(n):
        if len(graph[v]) == 1:
            queue.append(v)

    remaining_nodes = n

    while remaining_nodes > 2:
        size = len(queue)
        remaining_nodes -= size

        for _ in range(size):
            v = queue.popleft()

            for u in graph[v]:
                # remove the current leaves along with the edges
                graph[u].remove(v)

                # if it's a leaf
                if len(graph[u]) == 1:
                    queue.append(u)

    return queue
