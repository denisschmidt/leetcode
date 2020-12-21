import collections

# Time: O(E^D) where |E| is the number of total flights and |D| is the maximum number of flights from an airport.
# Space: O(|V| + |E|) where |V| is the number of airports and |E| is the number of flights.
class Solution:
    def findItinerary(self, tickets):
        adList = collections.defaultdict(list)

        for f, t in tickets:
          adList[f].append(t)

        ans, visitBitmap = [], {}
        
        for k in adList:
          adList[k].sort()
          visitBitmap[k] = [False] * len(adList[k])

        def dfs(u, comb): 
          nonlocal ans
          
          if len(comb) == len(tickets) + 1:
            ans = list(comb)
            return True

          for i, v in enumerate(adList[u]):
            if not visitBitmap[u][i]:
                
                visitBitmap[u][i] = True
                comb.append(v)
                
                ret = dfs(v, comb)
                  
                visitBitmap[u][i] = False
                comb.pop()
                
                if ret:
                    return True
                
          return False
            
        dfs('JFK', ['JFK'])
        
        return ans