class Solution:
    # Time O(N^4) -> Can be easily reduced to O(n^3) by pre-calculating sum of frequencies instead of calling sum() again and again.
    # Space O(N^2)
    def constructMinBST(self, nums, freq):
        n = len(nums)

        dp = [[0] * n for _ in range(n)]

        # For a single key, cost is equal to
        # frequency of the key
        for i in range(n):
            dp[i][i] = freq[i]

        for lenght in range(n):
            for i in range(n - lenght):
                j = i + lenght

                dp[i][j] = float('inf')

                # Try making all keys in interval
                # keys[i..j] as root
                for k in range(i, j + 1):
                    # current = cost when keys[k] becomes root of this subtree
                    current = self.getSum(freq, i, j)
                    left = 0
                    right = 0

                    if k == 0:
                        right = dp[k + 1][j]
                    elif k == n - 1:
                        left = dp[i][k - 1]
                    else:
                        left = dp[i][k - 1]
                        right = dp[k + 1][j]

                    dp[i][j] = min(dp[i][j], left + current + right)

        return dp[0][n - 1]

    def getSum(self, freq, i, j):
        res = 0

        for k in range(i, j + 1):
            res += freq[k]

        return res

    # Time O(N^3)
    # Space O(N^2)
    def constructMinBST_II(self, nums, freq):
        def dfs(i, j, level):
            if i > j:
                return 0

            if i == j:
                return freq[i] * level

            res = float('inf')

            for k in range(i, j + 1):
                current = freq[k] * level

                if k == 0:
                    res = min(res, current + dfs(k + 1, j, level + 1))
                elif k == len(nums) - 1:
                    res = min(res, current + dfs(i, k - 1, level + 1))
                else:
                    left = dfs(i, k - 1, level + 1)
                    right = dfs(k + 1, j, level + 1)
                    res = min(res, left + current + right)

            return res

        return dfs(0, len(nums) - 1, 1)
