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
    def findFrequentTreeSum(self, root: TreeNode) -> List[int]: 
        ans = []
        max_freq = 0
        count = collections.Counter()
        
        def dfs(node):
            nonlocal max_freq
            if node is None:
                return 0
                    
            l = dfs(node.left)
            r = dfs(node.right)
            
            s = l + r + node.val

            count[s] += 1
        
            if count[s] > max_freq:
                max_freq = count[s]
                ans.clear()
                ans.append(s)
            elif count[s] == max_freq:
                ans.append(s)
            
            return s
            
        dfs(root)
        
        return ans