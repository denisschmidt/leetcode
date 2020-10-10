class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        
        def dfs(start, comb, remain):
            if remain < 0:
                return
            if len(comb) == k and remain == 0:
                res.append(list(comb))
                return
            
            for i in range(start, 10):
                comb.append(i)
                dfs(i + 1, comb, remain - i)
                comb.pop()
                
        dfs(1, [], n)
        
        return res