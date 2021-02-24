class Solution:
    # Time O(N)
    # Space O(1)
    def maxSubArray(self, nums: List[int]) -> int:
        def crossSum(left, mid, right):
            if left == right:
                return nums[left]

            current = 0
            leftSubSum = float('-inf')

            for i in range(mid, left - 1, -1):
                current += nums[i]
                leftSubSum = max(leftSubSum, current)

            current = 0
            rightSubSum = float('inf')

            for i in range(mid + 1, right + 1):
                current += nums[i]
                rightSubSum = max(rightSubSum, current)

            return rightSubSum + leftSubSum

        def split(left, right):
            if left == right:
                return nums[left]

            mid = left + ((right - left) // 2)

            leftSum = split(left, mid)
            rightSum = split(mid + 1, right)
            cross = crossSum(left, mid, right)

            return max(leftSum, rightSum, cross)

        return split(0, len(nums) - 1)

    # Time O(NLogN)
    # Space O(LogN)
    def maxSubArray_II(self, nums: List[int]) -> int:
        def crossSum(left, mid, right):
            if left == right:
                return nums[left]

            current = 0
            leftSubSum = float('-inf')

            for i in range(mid, left - 1, -1):
                current += nums[i]
                leftSubSum = max(leftSubSum, current)

            current = 0
            rightSubSum = float('-inf')

            for i in range(mid + 1, right + 1):
                current += nums[i]
                rightSubSum = max(rightSubSum, current)

            return rightSubSum + leftSubSum

        def split(left, right):
            if left == right:
                return nums[left]

            mid = left + ((right - left) // 2)

            leftSum = split(left, mid)
            rightSum = split(mid + 1, right)
            cross = crossSum(left, mid, right)

            return max(leftSum, rightSum, cross)

        return split(0, len(nums) - 1)
