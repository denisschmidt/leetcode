class Solution:
    def minOperations(self, n: int) -> int:
      arr = [0] * n

      for i in range(n):
        arr[i] = (2 * i) + 1

      cnt = 0
      l = 0
      r = len(arr) - 1

      while l < r:
        cnt += int((arr[r] - arr[l]) / 2)
        l+=1
        r-=1

      return cnt  
