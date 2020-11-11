import collections

# Time O(N)
# Space O(N)
class Solution:
    def minDeletions(self, s):
        count = collections.Counter(s)

        freq_counter = collections.Counter()

        for k in count.keys():
          freq_counter[count[k]] = freq_counter[count[k]] + 1

        res = 0
        
        for key in list(freq_counter):
          if freq_counter[key] > 1:
            freq = freq_counter[key]

            for _ in range(freq - 1):
              rest_cnt = key

              while rest_cnt >= 0 and rest_cnt in freq_counter:
                res += 1
                rest_cnt -= 1
              
              if rest_cnt > 0:
                freq_counter[rest_cnt] = 1

        return res