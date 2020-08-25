class Solution:
  def checkInclusion(self, s1: str, s2: str) -> bool:
    hMap = {}

    for ch in s1:
      hMap[ch] = hMap.get(ch, 0) + 1

    start, end, k = 0, 0, len(hMap.keys())
        
    while end < len(s2):
      if s2[end] in hMap:
        hMap[s2[end]] -= 1

        if hMap[s2[end]] == 0:
          k -= 1
      end += 1

      while k == 0:
        if end - start == len(s1):
          return True

        if s2[start] in hMap:
          hMap[s2[start]] += 1

          if hMap[s2[start]] > 0:
            k += 1

        start += 1        

    return False    