import math

class Solution:
    def minNumberOperations(self, target):
        N = len(target)
        diff = [0] * N
        
        diff[0] = target[0]
        
        for i in range(1, N):
            diff[i] = max(target[i] - target[i - 1], 0)
                                
        return sum(diff)
        
# Segment Tree
# For each sub array, find the minimum value from target array in that range
# Update all values of return array in this given range with that minimum value
# Now Solve this problem for the left and right sub problems
class Solution_II:
    def minNumberOperations(self, target):
        N = len(target)
        tree = SegmentTree(target)

        def find(sub_arr_val, lo, hi):
            if lo > hi:
                return 0

            index = tree.query(lo, hi, 0, N - 1, 0)
            val = target[index] - sub_arr_val

            return val + find(target[index], lo, index - 1) + find(target[index], index + 1, hi)

        return find(0, 0, N - 1)


class SegmentTree:
    def __init__(self, nums):
        N = len(nums)
        x = math.ceil(math.log2(N))
        max_size = int(2 * math.pow(2, x) - 1)

        # Max size of tree
        self.tree = [0] * max_size
        self.nums = nums

        self.build(nums, 0, N - 1, 0)

    def build(self, nums, lo, hi, tree_index):
        if lo == hi:
            self.tree[tree_index] = lo
            return

        mid = lo + ((hi - lo) // 2)

        self.build(nums, lo, mid, tree_index * 2 + 1)
        self.build(nums, mid + 1, hi, tree_index * 2 + 2)

        left_index = self.tree[tree_index * 2 + 1]
        right_index = self.tree[tree_index * 2 + 2]

        self.tree[tree_index] = left_index if nums[left_index] < nums[right_index] else right_index

    def query(self, start, end, lo, hi, tree_index):

        if start <= lo and hi <= end:
            return self.tree[tree_index]

        if start > hi or end < lo:
            return -1

        mid = lo + ((hi - lo) // 2)

        left_index = self.query(start, end, lo, mid, tree_index * 2 + 1)
        right_index = self.query(start, end, mid + 1, hi, tree_index * 2 + 2)

        if left_index >= 0 and right_index >= 0:
            return left_index if self.nums[left_index] <= self.nums[right_index] else right_index

        elif left_index >= 0 or right_index >= 0:
            return left_index if left_index >= 0 else right_index

        return -1
