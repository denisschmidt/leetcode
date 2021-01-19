import collections

class Solution:
    # Time O(N^2)
    def tupleSameProduct(self, nums):
        n = len(nums)
        ans = 0
        dict = collections.Counter()

        for i in range(n):
            for j in range(i + 1, n):
                product = nums[i] * nums[j]
                ans += dict[product]
                dict[product] += 1 
                
        return ans * 8