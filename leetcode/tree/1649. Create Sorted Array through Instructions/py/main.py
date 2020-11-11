import collections
import bisect

# Time O(N^2)
# Space O(N)
class Solution:
    def createSortedArray(self, instructions):
      MOD = 10**9+7
      current = []
      res = 0

      for i in range(len(instructions)):
        left_cost = bisect.bisect_left(current, instructions[i])
        right_cost = i - bisect.bisect_right(current, instructions[i])

        res += min(left_cost, right_cost)
        res %= MOD
        bisect.insort(current, instructions[i])

      return res

"""
Algorithm

Step 1: Implement the Binary Indexed Tree. Since the tree is initialized to all zeros, only update and query is needed to implement.

Step 2: Iterate over instructions. For each element:
  Calculate the left cost (smaller cost) and right cost (larger cost).
  Add the minimal one to the total cost.
  Update the element into the Binary Indexed Tree.

Step 3: Return the total cost after iteration.

"""    

# Time O(Nlog(M))
# Space O(M)
class Solution_II:
    def createSortedArray(self, instructions):
        n = max(instructions) + 2
        
        tree = IndexedTree(n)
        res = 0
        MOD = 10**9 + 7
        
        for i in range(len(instructions)):
            cost_left = tree.query(instructions[i] - 1)
            cost_right = i - tree.query(instructions[i])
            
            res += min(cost_left, cost_right)
            res %= MOD
            
            tree.update(instructions[i], 1)
            
        return res
            
# Implement Binary Index Tree
class IndexedTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * size
        
    def query(self, index):
        index += 1
        res = 0
        
        while index > 0:
            res += self.tree[index]
            index = self.get_parent(index)
            
        return res
    
    def update(self, index, val):
        index += 1
        
        while index < self.size:
            self.tree[index] += val
            index = self.get_child(index)
            
    def get_parent(self, index):
        return index - (index & -index)
    
    def get_child(self, index):
        return index + (index & -index)
        
# TLE
class Solution_III:
    def createSortedArray(self, instructions):
      less = [0] * len(instructions)

      def insert(node, value, index, cnt):
        if node is None:
          node = Node(value, 0)
          less[index] = cnt
          return node

        if value >= node.val:
          if value > node.val:
            cnt += 1

          node.right = insert(node.right, value, index, cnt + node.small)
        else:
          node.small += 1
          node.left = insert(node.left, value, index, cnt)

        return node

      root = None
      ans = 0

      freq = collections.Counter()

      for i in range(len(instructions)):
        root = insert(root, instructions[i], i, 0)
        ans += min(less[i], i - less[i] - freq[instructions[i]])
        freq[instructions[i]] += 1

      return ans

class Node:
  def __init__(self, val, cnt):
    self.val = val
    self.small = cnt
    self.left = self.right = None
