class Solution:
    # Time O(N)
    # Space O(N)
    def largestRectangleArea(self, heights):
        st = []
        n = len(heights)
        ans = 0

        for i in range(n + 1):
            while st and (i < n and heights[st[-1]] > heights[i] or i == n):
                index = st.pop()

                if not st:
                    # If stack in empty than current height is the smallest value in the interval [0-i]
                    # Then the width will be equal to the current index
                    width = i
                else:
                    # i - right border of width
                    # st[-1] - left border of width
                    width = i - st[-1] - 1

                ans = max(ans, width * heights[index])

            st.append(i)

        return ans