"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""

import collections

# Time O(N)
# Space O(N)
class Solution:
    def getImportance(self, employees, target):
        adj_list = collections.defaultdict(list)
        vals = {}
                    
        for item in employees:
          adj_list[item.id] = item.subordinates
          vals[item.id] = item.importance

        res = 0
        queue = collections.deque()
        queue.append(target)

        while queue:
          size = len(queue)

          for _ in range(size):
            u = queue.popleft()
            res += vals[u]

            for v in adj_list[u]:
                queue.append(v)

        return res

