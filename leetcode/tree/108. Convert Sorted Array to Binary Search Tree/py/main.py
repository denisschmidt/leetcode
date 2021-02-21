class Solution:
    # Time O(N)
    # Space O(N)
    def sortedArrayToBST(self, nums):
        def dfs(left, right):
            if left > right:
                return None

            mid = left + ((right - left) // 2)

            newNode = TreeNode(nums[mid])

            newNode.left = dfs(left, mid - 1)
            newNode.right = dfs(mid + 1, right)

            return newNode

        return dfs(0, len(nums) - 1)
