class Solution:
    # Time O(N)
    # Space O(N)
    def countGoodRectangles(self, rectangles):
        max_val = 0
        max_cnt = 0
        for i in range(len(rectangles)):
            dimension = min(rectangles[i][0], rectangles[i][1])

            if max_val < dimension:
                max_val = dimension
                max_cnt = 1
            elif (max_val == dimension):
                max_cnt += 1

        return max_cnt