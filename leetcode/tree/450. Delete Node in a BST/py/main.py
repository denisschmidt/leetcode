class Solution:
    # Time O(height of tree)
    # Space O(height of tree)
    def deleteNode(self, root, target):
            if root == None:
                return None

            if root.val > target:
                root.left = self.deleteNode(root.left, target)
            
            elif root.val < target:
                root.right = self.deleteNode(root.right, target)
            
            else:
                # if we have a right child
                if root.right:
                    root.val = self.getSuccessor(root).val
                    root.right = self.deleteNode(root.right, root.val)
                
                # if we have a left child
                elif root.left:
                    root.val = self.getPredecessor(root).val
                    root.left = self.deleteNode(root.left, root.val)

                else:
                    return None

            return root
        
    def getSuccessor(self, node):
            node = node.right
            while node and node.left:
                node = node.left
            return node

    def getPredecessor(self, node):
            node = node.left
            while node and node.right:
                node = node.right
            return node