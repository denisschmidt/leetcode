# Time O(N)
# Space O(N)
class Solution:
  def kthSmallest(self, root, k):
    st = [root]
    
    while True:
      while root:
        st.append(root)
        root = root.left
      
      root = st.pop()
      k -= 1
      
      if not k:
        return root.val
      
      root = root.right