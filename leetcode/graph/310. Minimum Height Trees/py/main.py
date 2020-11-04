import collections

# Time O(N)
# Space O(N)
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
      if not edges:
        return [0]
    
      adj_list = collections.defaultdict(list)
      queue = collections.deque()

      for u, v in edges:
        adj_list[u].append(v)
        adj_list[v].append(u)

      for i in range(n):
        if len(adj_list[i]) == 1:
          queue.append(i)

      while n > 2:
        size = len(queue)
        n -= size

        for _ in range(size):
          u = queue.popleft()

          for v in adj_list[u]:
            adj_list[v].remove(u)

            if len(adj_list[v]) == 1:
              queue.append(v)

      return queue      

