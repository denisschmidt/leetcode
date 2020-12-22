import collections

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def levelOrder(self, root):
        if not root: return []
        
        nodeQueue = collections.deque()
        lvlQueue = collections.deque()
        prevLvl, lvlList, ans = 0, [], []
        
        nodeQueue.append(root)
        lvlQueue.append(0)

        while nodeQueue:
          currNode = nodeQueue.popleft()
          currLvl = lvlQueue.popleft()

          if currNode:
            if currLvl == prevLvl + 1:
              ans.append(lvlList)
              lvlList = []
            
            lvlList.append(currNode.val)

            nodeQueue.append(currNode.left)
            nodeQueue.append(currNode.right)
            lvlQueue.append(currLvl + 1)
            lvlQueue.append(currLvl + 1)
            prevLvl = currLvl

        ans.append(lvlList)
        
        return ans

