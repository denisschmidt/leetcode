
# Time O(N)
# Space O(N)
class Solution:
    def smallestSubsequence(self, text: str) -> str:
      lastIndex  = { c: i for i, c in enumerate(text) }
      st = []
      
      for i, ch in enumerate(text):
        if ch in st: continue

        while len(st) and st[-1] > ch and lastIndex[st[-1]] > i:
          st.pop()
        st.append(ch)
      
      return "".join(st)