class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        
        def dfs(start, comb, remain):
            if remain < 0:
                return
            if remain == 0:
                res.append(list(comb))
                return
            
            for i in range(start, len(candidates)):
                comb.append(candidates[i])
                dfs(i, comb, remain - candidates[i])
                comb.pop()
                
        dfs(0, [], target)
        
        return res