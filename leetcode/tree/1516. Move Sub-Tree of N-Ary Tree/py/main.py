
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []


# Получаем родителя p ноды -> parent_p
# Удаляем p из -> parent_p
# Если q ребенок p -> удаляем его p
# Если q ребенок p -> добавляем q в parent_p 
# Делаем p ребенком q
class Solution:
    def moveSubTree(self, root: 'Node', p: 'Node', q: 'Node') -> 'Node':
      if p in q.children:
        return root

      dummy = Node()

      dummy.children.append(root)  

      p_parent = self.dfs(root, p) # Find p's parent (guaranteed to exist now because of the dummy node)
      
      q_in_p = self.dfs(p, q)

      p_index = p_parent.children.index(p)
      p_parent.children.pop(p_index)

      q.children.append(p)

      if q_in_p:
        q_in_p.children.remove(q)
        p_parent.children.insert(p_index, q)

      return dummy.children[0]
      

    def dfs(self, node, target):
      if target in node.children:
        return node

      for x in node.children:
        ans = self.dfs(x, target)

        if ans:
          return ans

      return None
      
