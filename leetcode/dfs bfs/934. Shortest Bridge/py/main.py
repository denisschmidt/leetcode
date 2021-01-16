import collections

class Solution:
    # Time O(M*N)
    # DFS + BFS
    def shortestBridge(self, A):
        n, m = len(A), len(A[0])
        seen = set()
        queue = collections.deque()
        
        def neighbors(i, j):
            for x, y in ((i-1,j),(i+1,j),(i,j-1),(i,j+1)):
                if 0 <= x < n and 0 <= y < m:
                    yield x, y
        
        def dfs(i, j):
            if A[i][j] == 0:
                return
            
            queue.append((i,j,0))
            seen.add((i,j))
            A[i][j] = 0
                    
            for x, y in neighbors(i, j):
                dfs(x, y)
        
        for i in range(n):
                for j in range(m):
                    if A[i][j] == 1:
                        dfs(i, j)
                        break
                if len(queue):
                    break
                
        while queue:
            i, j, dist = queue.popleft()

            if A[i][j] == 1:
                return dist - 1
            
            for x, y in neighbors(i, j):
                if (x,y) not in seen:
                    queue.append((x, y, dist + 1))
                    seen.add((x, y))

        return -1


