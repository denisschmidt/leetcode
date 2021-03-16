import sys

sys.path.append('C:/Users/paras/OneDrive/Рабочий стол/leetcode/algorithms')

from Bloomfilter import Bloomfilter
from random import shuffle

if __name__ == '__main__':
    n = 20  #no of items to add
    p = 0.05  #false positive probability

    bloomf = Bloomfilter(n, p)

    print("Size of bit array:{}".format(bloomf.size))
    print("False positive Probability:{}".format(bloomf.fp_prob))

    print("Number of hash functions:{}".format(bloomf.hash_count))

    # words to be added
    word_present = [
        'abound', 'abounds', 'abundance', 'abundant', 'accessable', 'bloom',
        'blossom', 'bolster', 'bonny', 'bonus', 'bonuses', 'coherent',
        'cohesive', 'colorful', 'comely', 'comfort', 'gems', 'generosity',
        'generous', 'generously', 'genial'
    ]

    # word not added
    word_absent = [
        'bluff', 'cheater', 'hate', 'war', 'humanity', 'racism', 'hurt',
        'nuke', 'gloomy', 'facebook', 'twitter', 'google'
    ]

    for item in word_present:
        bloomf.add(item)

    shuffle(word_present)
    shuffle(word_absent)

    test_words = word_present[:10] + word_absent

    for word in test_words:
        if bloomf.check(word):
            if word in word_absent:
                print("'{}' is a false positive!".format(word))
            else:
                print("'{}' is probably present!".format(word))
        else:
            print("'{}' is definitely not present!".format(word))