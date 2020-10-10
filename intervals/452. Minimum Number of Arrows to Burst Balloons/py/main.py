class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        
        points.sort(key = lambda x: x[0])
        
        res = 1
        start, end = points[0]
                
        for i in range(1, len(points)):
            if self.overlap([start, end], points[i]):
                start = max(start, points[i][0])
                end = min(end, points[i][1])
            else:
                res += 1
                start, end = points[i]
        return res
            
    def overlap(self, x, y):
        return y[1] >= x[0] and x[1] >= y[0]