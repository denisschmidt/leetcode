# Time O(N)
# Space O(N)
class Solution:
    def bitwiseComplement(self, N: int) -> int:
        if N == 0:
            return 1
        
        bitCnt = log2(N)
        
        for i in range(int(bitCnt) + 1):
            N = N ^ (1 << i)
            
        return N