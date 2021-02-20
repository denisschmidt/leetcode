import random


class Solution(object):
    def __init__(self, nums):
        self.nums = nums

    def reset(self):
        return self.nums

    def shuffle(self):
        ans = self.nums[:]  # copy list
        n = len(ans)

        for i in range(n - 1, 0, -1):  # start from end
            j = random.randrange(0, i + 1)  # generate random index
            ans[i], ans[j] = ans[j], ans[i]  # swap

        return ans
