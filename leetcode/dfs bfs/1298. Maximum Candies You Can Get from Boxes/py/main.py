
import collections

# BFS Solution

class Solution:
    def maxCandies(self, status, candies, keys, containedBoxes, initialBoxes):
        queue = collections.deque()
        
        boxes_keys = set() # store all box keys
        closed_boxes = set() # store all closed boxes maybe later we could open them
        visited = set()
        res = 0
        
        for id in initialBoxes:
          queue.append(id)
          res += candies[id]
          visited.add(id)

          for k in keys[id]:
            boxes_keys.add(k)

        while queue:
          size = len(queue)

          for _ in range(size):
            id = queue.popleft()

            if status[id] == 0 and id not in boxes_keys:
              continue

            if id not in visited:
              res += candies[id]
              visited.add(id)

            for box_id in containedBoxes[id]:
              if status[box_id] == 0 and id not in boxes_keys:
                closed_boxes.add(box_id)
              else:
                  queue.append(box_id)

                  for k in keys[box_id]:
                    boxes_keys.add(k)

            tmp = list(closed_boxes)

            # check maybe we could open closed boxes
            for box_id in closed_boxes:
              if box_id in boxes_keys:
                queue.append(box_id)
                tmp.remove(box_id)

            closed_boxes = tmp

        return res
