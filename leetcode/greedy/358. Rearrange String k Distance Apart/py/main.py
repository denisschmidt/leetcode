import heapq


class Solution:
    # Time O(N + NLog(26))
    # Space O(26)
    def rearrangeString(self, s: str, K: int) -> str:
        if K <= 1:
            return s

        heap, temp = [], []
        mapping, visited = {}, {}
        ans = ''

        for c in s:
            mapping[c] = mapping.get(c, 0) + 1

        for char in mapping:
            heapq.heappush(heap, [mapping[char] * -1, char])

        while heap:

            for _ in range(K):
                # no available characters
                if not heap: return ''

                cnt, char = heapq.heappop(heap)
                cnt = cnt * -1

                if char not in visited or len(ans) - visited[char] >= K:
                    visited[char] = len(ans)
                    ans += char
                else:
                    break

                # get correct string
                if len(s) == len(ans):
                    return ans

                if cnt - 1 > 0:
                    temp.append([-1 * (cnt - 1), char])

            while temp:
                heapq.heappush(heap, temp.pop())

        return ''
