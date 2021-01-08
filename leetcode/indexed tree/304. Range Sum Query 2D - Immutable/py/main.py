class NumMatrix:
    # Time O(N*M)
    # Space O(1)
    def __init__(self, matrix):
        if len(matrix):
            n, m = len(matrix), len(matrix[0])

            # calc prefix sum for each row
            for i in range(n):
                for j in range(1, m):
                    matrix[i][j] += matrix[i][j - 1] 

            # calc prefix sum for each col
            for j in range(m):
                for i in range(1, n):
                    matrix[i][j] += matrix[i - 1][j]

            self.matrix = matrix

    """
    Let's calculate sum for region row1=1, col1=1, row2=2, col2=2

    Take sum of the region matrix[2][2] -> 21
    
    Substract the sum of region matrix[0][2] -> 4
    Substract the sum of region matrix[2][0] -> 9

    But we've substracted twice the sum of matrix[0][0]

    So we have to add matrix[0][0] to answer

    3, 3,   4
    8, 14,  18
    9, 17 , 21

    """
    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        current = self.matrix[row2][col2]
        origin = self.matrix[row1 - 1][col1 - 1] if col1 > 0 and row1 > 0 else 0
        left = self.matrix[row2][col1 - 1] if col1 > 0 else 0
        right = self.matrix[row1 - 1][col2] if row1 > 0 else 0
        
        return current - left - right + origin