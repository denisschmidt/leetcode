class Solution:
    # Time O(M*N*LogN)
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        n, m = len(matrix), len(matrix[0])
        ans = 0

        for j in range(m):
            for i in range(1, n):
                if matrix[i][j] == 1:
                    matrix[i][j] = matrix[i - 1][j] + 1

        for i in range(n):
            nums = matrix[i]
            nums.sort()
            width = 1
            for j in reversed(range(len(nums))):
                ans = max(ans, nums[j] * width)
                width += 1

        return ans

    # Time O(N^4)
    def largestSubmatrix_II(self, matrix):
        n, m = len(matrix), len(matrix[0])
        ans = 0

        for i in range(n):
            for j in range(m):
                if matrix[i][j] == 1:

                    length = 0

                    while i + length < n and matrix[i + length][j] == 1:
                        found = False

                        local = 0

                        for k in range(0, m):
                            z = i

                            while z < n and z <= i + length and matrix[z][
                                    k] == 1:
                                z += 1

                            if z - 1 == i + length:
                                found = True
                                local += length + 1

                        if not found:
                            break

                        ans = max(ans, local)

                        length += 1

        return ans
