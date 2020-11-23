# Time O(N)
# Space O(N)
class Solution:
    def waysToMakeFair(self, nums):
        N = len(nums)
        res = 0
       
        odd_prefix, even_prefix = [0] * (N + 1), [0] * (N + 1)
        
        for i, num in enumerate(nums):
            odd_prefix[i] += odd_prefix[i-1]
            even_prefix[i] += even_prefix[i-1]
            if i % 2 == 0:
                even_prefix[i] += num
            else:
                odd_prefix[i] += num
                
        for i in range(N):
          even = even_prefix[i-1] + odd_prefix[N - 1] - odd_prefix[i]
          odd = odd_prefix[i-1] + even_prefix[N - 1] - even_prefix[i]  
        
          if even == odd:
                res += 1
        
        return res
