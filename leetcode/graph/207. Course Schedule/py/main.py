import collections


# Time O(E + V) where |V| is the number of courses, and |E| is the number of dependencies.
# Space O(E + V)
class Solution:
    def canFinish(self, numCourses, prerequisites):
        def dfs(u):
            if color[u] == 2:
                return False

            color[u] = 1

            for v in adj_list[u]:
                if color[v] == 1:
                    return True

                if color[v] == 0 and dfs(v):
                    return True

            color[u] = 2

            return False

        # 0 - not used
        # 1 - processing
        # 2 - processed
        color = [0] * numCourses

        adj_list = collections.defaultdict(list)

        for u, v in prerequisites:
            adj_list[u].append(v)

        for course in range(numCourses):
            if dfs(course):
                return False

        return True
