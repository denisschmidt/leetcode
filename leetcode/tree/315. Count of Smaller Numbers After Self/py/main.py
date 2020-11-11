# Hard
# Time O(N*LogN)
# Space O(N)
class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        root = None
        ans = [0] * len(nums)
        
        def insert(node, index, val, cnt):
            if node is None:
                node = Node(val, 0)
                ans[index] = cnt
                return node
            
            if val >= node.val:
                if val > node.val:
                    cnt += 1
                
                node.right = insert(node.right, index, val, cnt + node.small_cnt)
            else:
                # important! only change small_cnt when going left
                # case [2, 0, 1]  0 < 1 then => { val: 1, small_cnt: 1 }  
                node.small_cnt += 1
                node.left = insert(node.left, index, val, cnt)
                
            return node
        
        for i in reversed(range(len(nums))):
            root = insert(root, i, nums[i], 0) # each time return new root BST
        
        return ans
        
class Node:
    def __init__(self, val, count):
        self.val = val
        self.small_cnt = count
        self.left = self.right = None