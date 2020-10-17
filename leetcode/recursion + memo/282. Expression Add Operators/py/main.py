# Time O(4^N)
# Space O(N)
class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        ans = []

        def dfs(index, prev_oper, cur_oper, value, string):
          if index >= len(num):
            if value == target and cur_oper == 0:
              ans.append(''.join(string)[1:])
            return

          cur_oper = cur_oper * 10 + int(num[index])
          str_oper = str(cur_oper)
        
          if cur_oper > 0:
            dfs(index + 1, prev_oper, cur_oper, value, string)


          string.append('+')
          string.append(str_oper)
          dfs(index + 1, cur_oper, 0, value + cur_oper, string)
          string.pop()
          string.pop()

          if string:        
            string.append('-')
            string.append(str_oper)
            dfs(index + 1, -cur_oper, 0, value - cur_oper, string)
            string.pop()
            string.pop()

            
            string.append('*')
            string.append(str_oper)
            dfs(index + 1, cur_oper * prev_oper, 0, value - prev_oper + (cur_oper * prev_oper), string)
            string.pop()
            string.pop()


        dfs(0, 0, 0, 0, []) 

        return ans