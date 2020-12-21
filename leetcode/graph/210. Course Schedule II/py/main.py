import collections

# Time O(N)
# Space O(N)
class Solution:
    def findOrder(self, numCourses, prerequisites):
        visited = [False] * numCourses
        stack = [False] * numCourses

        def has_cycle(u):
          if visited[u]:
            return False
        
          stack[u] = True
          visited[u] = True

          for v in adj_list[u]:
            if stack[v]:
              return True

            if not visited[v] and has_cycle(v):
              return True

          stack[u] = False

          ans.append(u)

          return False

        adj_list = collections.defaultdict(list)
        ans = []

        for u, v in prerequisites:
          adj_list[u].append(v)

        for i in range(numCourses):
          if has_cycle(i):
            return []

        return ans
