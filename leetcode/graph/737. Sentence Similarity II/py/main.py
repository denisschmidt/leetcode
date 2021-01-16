class Solution:
    def areSentencesSimilarTwo(self, words1: List[str], words2: List[str], pairs: List[List[str]]) -> bool:
        if len(words1) != len(words2):
            return False
        
        parent = {}
        n = len(words1)
        
        def find(x):
            if x not in parent:
                parent[x] = x
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        
        for pair in pairs:
            root1 = find(pair[0])
            root2 = find(pair[1])
            
            if root1 != root2:
                parent[root2] = root1
        
        for i in range(n):
            if words1[i] == words2[i]:
                continue
                
            root1 = find(words1[i])
            root2 = find(words2[i])
            
            if root1 != root2:
                return False
            
        return True
            
            
            
        
       