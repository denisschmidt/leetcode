import collections

# Countion sort
# Time O(1)
# Space O(1)
class Solution:
    def relativeSortArray(self, arr1, arr2):
        count = [0] * 1001 
        
        for x in arr1:
            count[x] += 1
        
        index = 0

        for num in arr2:
          while count[num] > 0:
            arr1[index] = num
            index += 1
            count[num] -= 1
        
        for num in range(1001):
            while count[num] > 0:
                arr1[index] = num
                index += 1
                count[num] -= 1
        
        return arr1