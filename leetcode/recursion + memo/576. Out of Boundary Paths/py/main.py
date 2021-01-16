class Solution:
    # Time O(4^N)  Here, N refers to the number of moves allowed.
    # Memo Time O(M*N*K)

    def findPaths(self, m: int, n: int, N: int, i: int, j: int) -> int:
        memo = {}
        
        def dfs(x, y, cnt_steps):
            if x == -1 or y == -1 or x == m or y == n:
                return 1
            
            if cnt_steps == 0:
                return 0
            
            if (x, y, cnt_steps) in memo:
                return memo[x,y,cnt_steps]
            
            res = 0
            for dir in [[0,1],[0,-1],[1,0],[-1,0]]:
                res += dfs(x + dir[0], y + dir[1], cnt_steps - 1)
                res %= 1e9 + 7
            memo[x,y,cnt_steps] = res
            return res
        
        return dfs(i, j, N)