import collections

# We need to find a minimum substring of s2 whose length equal s1
class Solution:
    # Time O(N)
    # Space O(N)
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1CountMap = collections.Counter(s1)
        start, end = 0, 0
        k = 0
        
        while end < len(s2):
            if s2[end] in s1CountMap:
                if s1CountMap[s2[end]] == 1:
                    k += 1
                s1CountMap[s2[end]] -= 1
            
            end += 1

            while k == len(s1CountMap):
              if end - start == len(s1):
                  return True
                
              if s2[start] in s1CountMap:
                  if s1CountMap[s2[start]] == 0:
                      k -= 1
                  s1CountMap[s2[start]] += 1
            
              start += 1
                
        return False
