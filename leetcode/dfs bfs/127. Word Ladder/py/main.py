import collections

class Solution:
    # Time O(M * N) где M - длина слова, а N - общее количество слов в списке входных слов.
    # Space O(M * N)
    def ladderLength(self, beginWord, endWord, wordList):
        all_combo_dict = collections.defaultdict(list)
        queue = collections.deque([(beginWord, 1)])
        visited = set([beginWord])
        
        all_combo_dict = collections.defaultdict(list)
        
        for word in wordList:
            for i in range(len(word)):
                all_combo_dict[word[:i] + "*" + word[i+1:]].append(word)

        while queue:
          size = len(queue)

          for _ in range(size):
            current, level = queue.popleft()

            for i in range(len(current)):
              intermediate_word = current[:i] + '*' + current[i+1:]

              for word in all_combo_dict[intermediate_word]:
                if word == endWord:
                  return level + 1
                
                if word not in visited:
                  visited.add(word)
                  queue.append([word, level + 1])

              all_combo_dict[intermediate_word] = []
          
        return 0