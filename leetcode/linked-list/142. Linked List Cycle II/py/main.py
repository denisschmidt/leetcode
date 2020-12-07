# 1) Determines whether a cycle is present in the list
# 2) If no cycle is present, it returns null
# 3) If it uses the located "intersection node" to find the entrance to the cycle

# Time O(N)
# Space O(N)
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        def getIntersect(head):
          fast = head
          slow = head 

          # A fast pointer will either loop around a cycle and meet the slow pointer 
          # or reach the `null` at the end of a non-cyclic list.
          while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
              return slow

          return None

        # If there is a cycle, the fast/slow pointers will intersect at some node. 
        # Otherwise, there is no cycle, so we cannot find an entrance to a cycle.
        intersect = getIntersect(head)

        if not intersect:
          return None

        ptr1 = head
        ptr2 = intersect

        # To find the entrance to the cycle, we have two pointers traverse at the same speed 
        # One from the front of the list, and the other from the point of intersection.
        while ptr1 != ptr2:
          ptr1 = ptr1.next
          ptr2 = ptr2.next

        return ptr1
        