class Point:
    def __init__(self, point, is_start, height) -> None:
        self.point = point
        self.is_start = is_start
        self.height = height

    def __lt__(self, other):
        if self.point != other.point:
            return self.point < other.point
        else:
            """
                Example: [0, 2, start],[0,3,start] => [0, 3, start],[0, 2, start] 

                Example: [5, 3, end],[5, 2, end] => [5, 2, end],[5, 3, end]
            """
            if self.is_start:
                h1 = -self.height
            else:
                h1 = self.height

            if other.is_start:
                h2 = -other.height
            else:
                h2 = other.height

            return h1 < h2


class Solution:
    # Time O(N^2)
    # Space O(N)
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        building_points = []

        for building in buildings:
            building_points.append(Point(building[0], True, building[2]))
            building_points.append(Point(building[1], False, building[2]))

        building_points.sort()
        ans = []
        prev_max_value = 0

        # initial value required for the bottom points [7, 0] or [12, 0] when our queue is empty
        queue = {0: 1}

        for p in building_points:

            if p.is_start:
                queue[p.height] = queue.get(p.height, 0) + 1

            else:

                if queue[p.height] == 1:
                    del queue[p.height]
                else:
                    queue[p.height] -= 1

            current_max_value = max(queue.keys())

            if current_max_value != prev_max_value:
                ans.append([p.point, current_max_value])
                prev_max_value = current_max_value

        return ans
