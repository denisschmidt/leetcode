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
    # Time O(N)
    # Space O(N)
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        levels = []

        def dfs(node, lvl):
            # start the current level
            if len(levels) == lvl:
                levels.append([])

            # append the current node value
            levels[lvl].append(node.val)

            if node.left:
                dfs(node.left, lvl + 1)

            if node.right:
                dfs(node.right, lvl + 1)

        dfs(root, 0)

        return levels

    # Time O(N)
    # Space O(N)
    def levelOrder_II(self, root: TreeNode) -> List[List[int]]:
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
