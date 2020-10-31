# Time O(N*LogN)
# Space O(N)
class Solution:
    def countSmaller(self, nums):
        root = None
        ans = [0] * len(nums)

        def insert(node, val, index, prev_sum):
            if node is None:
                node = Node(val, 0)
                ans[index] = prev_sum
                return node
                
            print(node.val, val, prev_sum)

            if val >= node.val:
                d = 1 if val > node.val else 0 # if val > node.val is the count of node itselft

                node.right = insert(node.right, val, index, prev_sum + node.small_cnt + d)
                
            else:
                # important! only change small_cnt when going left
                # case [2, 0, 1]  0 < 1 then => { val: 1, small_cnt: 1 }       
                node.small_cnt += 1

                node.left = insert(node.left, val, index, prev_sum)
            
            return node
        

        for i in reversed(range(len(nums))):
            root = insert(root, nums[i], i, 0) # each time return new root BST

        return ans

class Node:
    def __init__(self, val, count):
        self.val = val
        self.small_cnt = count
        self.left = self.right = None
