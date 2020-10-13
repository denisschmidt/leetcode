import collections

class Solution:
    def buddyStrings(self, A, B):
      if A == B:
        count = collections.Counter(A)
        
        for k in count.keys():
          if count[k] > 1:
            return True
        return False

      if len(A) != len(B):
        return False

      st = []

      for i in range(len(A)):
        if A[i] != B[i]:
          st.append(i)
        if len(st) > 2:
          return False
          
      return False if len(st) <= 1 else A[st[0]] == B[st[1]] and A[st[1]] == B[st[0]]