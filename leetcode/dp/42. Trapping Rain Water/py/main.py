class Solution:
    # DP
    # Time O(N)
    # Space O(N)
    def trap(self, heights):
        if not heights: return 0

        n = len(heights)
        ans = 0
        left, right = [0] * n, [0] * n

        for i in range(n):
            left[i] = heights[0] if i == 0 else max(left[i - 1], heights[i])

        for i in range(n - 1, -1, -1):
            right[i] = heights[n - 1] if i == n - 1 else max(
                right[i + 1], heights[i])

        for i in range(n):
            ans += min(left[i], right[i]) - heights[i]

        return ans

    # Stack
    # Time O(N)
    # Space O(N)
    def trap_II(self, heights):
        st = []
        n = len(heights)
        ans = 0

        for i in range(n):
            while st and heights[st[-1]] < heights[i]:
                end_index = st.pop()

                if not st:
                    break

                width = i - st[-1] - 1
                height = min(heights[i], heights[st[-1]]) - heights[end_index]

                ans += width * height

            st.append(i)

        return ans

    # Time O(N)
    # Space O(1)
    def trap_III(self, heights):
        n = len(heights)
        left, right = 0, n - 1
        left_max, right_max = 0, 0
        ans = 0

        while left < right:
            if heights[left] < heights[right]:
                if heights[left] > left_max:
                    left_max = heights[left]
                else:
                    ans += left_max - heights[left]
                left += 1
            else:
                if heights[right] > right_max:
                    right_max = heights[right]
                else:
                    ans += right_max - heights[right]
                right -= 1
        return ans