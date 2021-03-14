class Solution:
    # Time O(N)
    # Space O(N)
    def exclusiveTime(self, n: int, logs):
        ans = [0] * n

        # Stores timer Ids, because we need to understand for which id we calculate the distance
        st = []
        prev_time = 0

        for log in logs:
            fn, typ, time = log.split(':')
            fn, time = int(fn), int(time)

            if typ == 'start':
                if st:
                    ans[st[-1]] += time - prev_time

                prev_time = time
                st.append(fn)
            else:
                ans[st[-1]] += time - prev_time + 1
                prev_time = time + 1
                st.pop()

        return ans