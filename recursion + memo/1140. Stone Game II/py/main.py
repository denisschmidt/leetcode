def stoneGameII(self, a: List[int]) -> int:
        @lru_cache(maxsize=None)
        def minimax(st, m, player):
            if st >= len(a): return 0
        
            if player:
                return max([sum(a[st:st+x]) + minimax(st+x, max(m,x), player^1) for x in range(1, 2*m+1)])
            else:
                return min([minimax(st+x, max(m,x), player^1) for x in range(1, 2*m+1)])
        
        return minimax(0, 1, 1)        