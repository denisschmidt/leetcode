# Time (N*M)
class Solution:
    def maximumWealth(self, accounts):
        n, m = len(accounts), len(accounts[0])
        ans = 0
        for i in range(n):
            acc_sum = 0
            for j in range(m):
                acc_sum += accounts[i][j]
                
            ans = max(ans, acc_sum)
            
        return ans