import collections

class Solution:
    def isTransformable(self, s, t):
      countMap = collections.defaultdict(list)

      for i in reversed(range(len(s))):
        key = int(s[i])
        countMap[key].append(i)

      for i in range(len(t)):
        num = int(t[i])

        if num not in countMap:
          return False

        for prevNum in reversed(range(num)):
          if prevNum not in countMap:
            continue
          
          if len(countMap[prevNum]) and countMap[prevNum][-1] < countMap[num][-1]:
            return False

        countMap[num].pop()
      return True
