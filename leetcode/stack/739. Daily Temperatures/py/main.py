
class Solution:
    # Time O(N)
    # Space O(N)
    def dailyTemperatures(self, T):
        st, N = [], len(T)
        ans = [0] * N

        for i in reversed(range(N)):
          while st and T[st[-1]] <= T[i]:
            st.pop()

          if st:
            ans[i] = st[-1] - i
          
          st.append(i)

        return ans

    # Time O(N * W)
    # Space O(N + W)
    def dailyTemperatures_II(self, T):
        n, inf = len(T), float('inf')
        ans, temp_indexes= [0] * n, [inf] * 101

        for i in reversed(range(n)):
          warmer_index = inf

          for j in range(T[i] + 1, 101):
            # find min index
            warmer_index = min(warmer_index, temp_indexes[j])    
            
          if warmer_index < inf:
            ans[i] = warmer_index - i

          # store index
          temp_indexes[T[i]] = i

        return ans