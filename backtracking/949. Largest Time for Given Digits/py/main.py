class Solution:
    def largestTimeFromDigits(self, A: List[int]) -> str:
        max_time = -1
        
        for h, i, j, k in itertools.permutations(A):
            hour = h * 10 + i
            minute = j * 10 + k
            
            if hour < 24 and minute < 60:
                max_time = max(max_time, hour * 60 + minute)
                
        if max_time == -1:
          return ''

        return "{:02d}:{:02d}".format(max_time // 60, max_time % 60)  