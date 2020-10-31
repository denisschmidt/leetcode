import collections

# Time O(N * M * (M + M))
# Space O(N * M)
class Solution:
    def numSubmatrixSumTarget(self, matrix, target):
        n = len(matrix)
        m = len(matrix[0])
        ans = 0

        def subarraySum(nums, k):
            m = collections.Counter({0: 1})
            cur_sum = 0
            ans = 0

            for i in range(len(nums)):
                cur_sum += nums[i]

                if cur_sum - k in m:
                    ans += m[cur_sum - k]

                m[cur_sum] += 1

            return ans

        for i in range(m):
            nums = [0] * n

            for u in range(i, m):
                index = 0

                for v in range(n):
                    nums[index] += matrix[v][u]
                    index += 1

                ans += subarraySum(nums, target)

        return ans
