class Solution:
    # Time O(N)
    # Space O(1)
    def minCost(self, s, cost):
        if not s: return 0
        n = len(s)
        ans, i = 0, 0

        while i < n:
            # two pointers
            j = i + 1

            while j < n and s[i] == s[j]:
                ans += min(cost[i], cost[j])

                if cost[i] < cost[j]:
                    # swap because we need to remove the char with less cost
                    i = j

                j += 1

                if j < n and s[i] != s[j]:
                    i = j - 1
                    break

            if j == n:
                break

            i += 1

        return ans
