import collections

# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def solve(self, root):
        if root is None: return []

        m_vals = collections.defaultdict(list)

        def dfs(node, dir, lvl):
            if node is None: return 

            m_vals[abs(dir - lvl)].append(node.val)

            dfs(node.left, dir - 1, lvl + 1)
            dfs(node.right, dir + 1, lvl + 1)
            
        dfs(root, 0, 0)
        
        res = []
        
        for k in m_vals.keys():
            res.append(sum(m_vals[k]))
            
        return res
        