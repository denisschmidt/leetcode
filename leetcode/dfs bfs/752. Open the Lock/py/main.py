import collections


class Solution:
    def openLock(self, deadends, target):
        res = 0
        graph = {'0': ['1', '9'],'1': ['1', '2'],'2': ['1', '3'],'3': ['2', '4'],'4': ['3', '5'],'5': ['4', '6'],'6': ['5', '7'],'7': ['6', '8'],'8': ['7', '9'],'9': ['8', '0']}
        queue = collections.deque(['0000'])
        dead = set(deadends)
        visited = set()

        while queue:
            size = len(queue)

            for _ in range(size):
                curr = queue.popleft()

                if curr == target:
                    return res

                if curr in dead:
                    continue

                for i in range(4):
                    for num in graph[curr[i]]:
                        new_str = curr[0:i] + num + curr[i + 1:]

                        if new_str not in visited:
                            queue.append(new_str)
                            visited.add(new_str)

            res += 1

        return -1