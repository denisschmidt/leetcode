import collections

# Time O(N + E)
# Space O(N)
class Solution:
    def canFinish(self, numCourses, prerequisites):
        def has_cycle(u):
          stack[u] = True
          visited[u] = True

          for v in adj_list[u]:
            if stack[v]:
              return True

            if not visited[v] and has_cycle(v):
              return True

          stack[u] = False

          return False
        
        adj_list = collections.defaultdict(list)

        for u, v in prerequisites:
          adj_list[u].append(v)

        visited = [False] * numCourses
        stack = [False] * numCourses

        for i in range(numCourses):
          if has_cycle(i):
            return False

        return True