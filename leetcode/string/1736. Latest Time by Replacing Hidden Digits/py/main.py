class Solution:
    def maximumTime(self, time: str) -> str:
        ans = ''

        if time[0] == '?' and time[1] == '?':
            ans = '23'
        elif time[0] == '?':
            if int(time[1]) > 3:
                ans = '1' + time[1]
            else:
                ans = '2' + time[1]
        elif time[1] == '?':
            # 0 1 2
            if time[0] == '2':
                ans = time[0] + '3'
            else:
                ans = time[0] + '9'
        else:
            ans = time[0] + time[1]

        ans += ':'

        if time[3] == '?' and time[4] == '?':
            ans += '59'
        elif time[3] == '?':
            ans += '5' + time[4]
        elif time[4] == '?':
            ans += time[3] + '9'
        else:
            ans += time[3] + time[4]

        return ans
