# Time O(N)
# Space O(N)
class Solution:
    def getSmallestString(self, n, k):
        ans = ['a'] * n
        
        k -= n
        pos = n - 1

        while pos >= 0 and k > 0:
          add = min(k, 25)

          ans[pos] = chr(add + 97)
          
          k -= add
          pos -= 1

        return ''.join(ans)
        
# Time O(N*K)
# Space O(N)
class Solution_II:
    def getSmallestString(self, n, k):
        ans = []
        j = -1

        while n > 0:
          for i in reversed(range(1, 27)):
            if k - i < 0 or k - i < (n - 1): 
              continue
            j = i
            break

          if j > 0:  
            n -= 1
            k -= j
            ans.append(chr((j - 1) + 97))
          else:
            break
            
        ans.reverse()
        
        return ''.join(ans)