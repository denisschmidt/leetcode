class Solution:
    # Time O(N)
    # Space O(1)
    def isNumber(self, s: str) -> bool:
        if not s:
            return False

        n = len(s)

        # flags
        has_e = False
        has_num = False
        has_point = False
        sign_cnt = 0

        for i in range(n):
            if not self.isValid(s[i]):
                return False

            # digis is always fine
            if s[i].isdigit():
                has_num = True

            if s[i] in ['e', 'E']:
                # e cannot appear twice and digits must be in front of it
                if has_e or not has_num:
                    return False
                # e cannot be the last one
                if i == n - 1:
                    return False
                
                has_e = True

            if s[i] == '.':
                # . cannot appear twice and it cannot appear after e
                if has_point or has_e:
                    return False
                
                # if . is the last one, digits must be in front of it, e.g. "7."
                if i == n - 1 and not has_num:
                    return False

                has_point = True

            if s[i] in ['+', '-']:
                # max signs limit 
                if sign_cnt == 2:
                    return False
                
                # sign can appear in the middle only when prev char equal e or E 
                if i > 0 and s[i - 1] not in ['e', 'E']:
                    return False

                # can't be the last one     
                if i == n - 1:
                    return False

                sign_cnt += 1

        return True

    def isValid(self, s):
        return s in ['+','-','e','E','0','1','2','3','4','5','6','7','8','9']
