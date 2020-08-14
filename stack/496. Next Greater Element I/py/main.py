class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        map = {}
        st = []
        res = []

        for i in range(0, len(nums2)):
          while len(st) and st[-1] < nums2[i]:
            map[st.pop()] = nums2[i]
          st.append(nums2[i])

        for x in nums1:
          res.append(map.get(x, -1))
        
        return res     
        