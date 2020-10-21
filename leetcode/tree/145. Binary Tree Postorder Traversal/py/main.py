# Approach 3: Iterative Postorder Traversal
# left - right - root

# Time O(N)
# Space O(N)
class Solution:
    def postorderTraversal(self, root):
        stack = []
        ans = []
        
        while root or stack:
            # push nodes: right -> node -> left 
            while root:
                if root.right:
                    stack.append(root.right)
                stack.append(root)
                root = root.left
                
            root = stack.pop()
            
            # Мы максимально уходим по левой ветке 
            # Если у нас нету левой ветки поднимается по стеку  пытаемся уйти в правую ветку
            # Если нету ни левой ни правой ветки то добавляем знаение в ответ
            
            # If the right subtree is not yet processed
            # Push root node to stack and go to right subtree 
            if stack and root.right == stack[-1]:
                stack[-1] = root
                root = root.right
            
            # if we're on the leftmost leaf
            else:
                ans.append(root.val)
                root = None
                
        return ans
                