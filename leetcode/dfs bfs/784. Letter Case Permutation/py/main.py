import collections

class Solution:
    def letterCasePermutation(self, S: str):
        queue = collections.deque()
        visited = set()
        ans = []

        queue.append(S)
        visited.add(S)

        while queue:
            current = queue.popleft()

            ans.append(current)

            for i in range(len(current)):
                if not current[i].isdigit():
                    for k in range(2):
                        ch = current[i].lower() if k == 0 else current[i].upper()
                        
                        newStr = current[:i] + ch + current[i + 1:]

                        if newStr not in visited:
                            visited.add(newStr)
                            queue.append(newStr)
                    
        return ans

    def letterCasePermutation_II(self, S: str):
        ans = []

        def dfs(index, comb):
            if index >= len(S) and len(comb) == len(S):
                ans.append(''.join(comb))
                return

            for i in range(index, len(S)):
              if S[i].isdigit():
                  comb.append(S[i])
                  dfs(i + 1, comb)
                  comb.pop()
              else:
                for k in range(2):
                    ch = S[i].lower() if k == 0 else S[i].upper()
                    comb.append(ch)
                    dfs(i + 1, comb)
                    comb.pop()
        dfs(0, [])

        return ans
