import collections 

# Time O(N)
# Space O(N)
class Solution:
    def removeKdigits(self, num, k):
        if len(num) == k: 
          return '0'

        st, N = collections.deque(), len(num)

        for i in range(N):
          x = int(num[i])
          while st and st[-1] > x and k > 0:
            st.pop()
            k -= 1
          
          st.append(x)
        
        while k > 0:
            st.pop()
            k -= 1
        
        while len(st) > 1 and st[0] == 0:
          st.popleft()

        return ''.join([str(val) for val in st]) 
        