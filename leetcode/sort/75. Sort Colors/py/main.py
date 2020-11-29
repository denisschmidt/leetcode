class Solution:
    #  Dutch National Flag Problem 
    # Time O(N)
    # Space O(1)
    def sortColors(self, nums) -> None:
      n = len(nums)
      current_index = 0
      p0 = 0
      p2 = n
      
      while current_index <= p2:
        if nums[current_index] == 2:
          self.swap(nums, current_index, p2)
          p2 -= 1
        elif nums[current_index] == 0:
          self.swap(nums, current_index, p0)
          p0 += 1
          current_index += 1
        else:
          current_index += 1

      return nums

    def swap(self, nums, i, j):
        nums[i], nums[j] = nums[j], nums[i]
        return nums

    # Counting sort
    # Time O(N*K)
    # Space O(1)
    def sortColors_II(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count = [0] * 3

        for num in nums:
          count[num] += 1
        
        index = 0
                
        for num in [0,1,2]:
            while count[num] > 0:
                nums[index] = num
                index += 1
                count[num] -= 1

            
