class SparseVector:
    def __init__(self, nums):
        self.seen = {}
        
        for i in range(len(nums)):
            if nums[i] != 0:
                self.seen[i] = nums[i]
        
    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        res = 0
        
        for i in vec.seen.items():
            if i in self.seen:
                res += self.seen[i] * vec.seen[i]
            
        return res
        
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)