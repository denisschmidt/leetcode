class Solution:
    def __init__(self) -> None:
        self.parent = [i for i in range(26)]

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        xr = self.find(x)
        yr = self.find(y)

        if xr != yr:
            self.parent[yr] = xr
            return True

        return False

    def minimumOperations(self, s1, s2):
        cnt_operations = 0
        n = len(s1)
        ans = []

        for i in range(n):
            if s1[i] != s2[i]:
                # If they have differnt parents
                # Find their respective parents and merge them
                if self.union(97 - ord(s1[i]), 97 - ord(s2[i])):
                    cnt_operations += 1
                    ans.append([s1[i], s2[i]])

        print('Number of operations:', cnt_operations)

        for i in ans:
            print(i[0], "->", i[1])

        return cnt_operations


# Driver code
if __name__ == '__main__':

    # Two strings
    # S1 and S2
    s1 = "abb"
    s2 = "dad"

    # Function Call

    x = Solution()
    x.minimumOperations(s1, s2)