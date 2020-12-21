# Time O(N)
# Space O(N)
class Solution:
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