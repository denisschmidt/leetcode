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

# Time Complexity: O(V+E).
# Time Complexity of this method is same as time complexity of DFS traversal which is O(V+E).
# Space Complexity: O(V).
# To store the visited and recursion stack O(V) space is needed.


# Base solution
def hasCycle(graph, n):
    def dfs(u):
        color[u] = 1  # processed

        for v in graph[u]:
            if color[
                    v] == 1:  # если приходим в ребро которое обрабатывается в данный момент
                return True

            if color[v] == 0 and dfs(v):
                return True

        color[u] = 2

        return False

    color = [0] * n

    # Если графы несвязанны
    for v in range(n):
        if color[v] == 0 and dfs(v):
            return True

    return False


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


# Время входа и выхода из вершины
# Это просто таймер
# Задача найти ancestors in tree
"""

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

        def dfs(u):
            nonlocal timer
            color[u] = 1
            tIn[u] = timer

            timer += 1

            for v in graph[u]:
                if color[v] == 0:
                    dfs(v)

            tOut[u] = timer
            timer += 1

        def isAncerssor(v, u):
            return tIn[v] <= tIn[u] and tOut[v] >= tOut[u]
