class Solution:
    def arraysIntersection(self, arr1, arr2, arr3):
      p1 = p2 = p3 = 0
      ans = []

      while p1 < len(arr1) and p2 < len(arr2) and p3 < len(arr3): 
        if arr1[p1] == arr2[p2] and arr2[p2] == arr3[p3]:
          ans.append(arr1[p1])
          p1 +=1
          p2 += 1
          p3 +=1 
        else:
          if arr1[p1] > arr2[p2] or arr3[p3] > arr2[p2]:
            p2+=1
          elif arr1[p1] > arr3[p3] or arr2[p2] > arr3[p3]:
            p3+=1
          elif arr2[p2] > arr1[p1] or arr3[p3] > arr1[p1]:
            p1+=1
      return ans