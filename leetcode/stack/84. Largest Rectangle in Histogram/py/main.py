class Solution:
    def largestRectangleArea(self, heights):
        if not heights: return 0
        
        st = []
        res = 0
        N = len(heights)

        for i in range(N):
          while st and heights[st[-1]] > heights[i]:
            j = st.pop()
            
            height = heights[j] 
            width = 0
            
            if not st:
                # Если стек пуст то текущий height является самым минимальным значением на интервале до i
                # И следовательно его ширина равна i
                width = i
            else:
                 width = i - st[-1] - 1
                       
            res = max(res, height * width)
            
          st.append(i)
                
        while st:
            j = st.pop()
            
            height = heights[j]
            width = 0
            
            if not st:
                width = N
            else:
                width = N - st[-1] - 1 
            
            print(height, width)

            res = max(res, height * width)
        
        return res