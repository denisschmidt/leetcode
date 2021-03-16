# Python 3 program to build Bloom Filter
# Class for Bloom filter, using murmur3 hash function

import math
import mmh3
from bitarray import bitarray


class Bloomfilter(object):
    def __init__(self, items_count, fp_prob) -> None:
        '''
        items_count : int
            Number of items expected to be stored in bloom filter
        fp_prob : float
            False Positive probability in decimal
        '''

        super().__init__()

        # False posible probability in decimal
        self.fp_prob = fp_prob

        # Size of bit array to use
        self.size = self.getSize(items_count, fp_prob)

        # Number of hash functions to use
        self.hash_count = self.getHashCount(self.size, items_count)

        # Bit array of given size
        self.bit_array = bitarray(self.size)

        # initialize all bits as 0
        self.bit_array.setall(0)

    def add(self, item):
        '''
        Add an item in the filter
        '''
        bits = []

        for i in range(self.hash_count):
            # create digest for given item i work as seed to mmh3.hash() function
            # With different seed, digest created is different

            i_bit = mmh3.hash(item, i) % self.size
            bits.append(i_bit)

            # set the bit True in bit_array
            self.bit_array[i_bit] = True

    def check(self, item):
        '''
        Check for existence of an item in filter
        '''

        for i in range(self.hash_count):
            i_bit = mmh3.hash(item, i) % self.size

            if not self.bit_array[i_bit]:
                # If any of bit is False then,its not presen in filter
                # Else there is probability that it exist
                return False

        return True

    @classmethod
    def getSize(self, n, p):
        '''
        Return the size of bit array(m) to used using
        following formula
        m = -(n * lg(p)) / (lg(2)^2)
        n : int
            number of items expected to be stored in filter
        p : float
            False Positive probability in decimal
        '''
        m = -(n * math.log(p)) / (math.log(2)**2)
        return int(m)

    def getHashCount(self, m, n):
        '''
        Return the hash function(k) to be used using
        following formula
        k = (m/n) * lg(2)
 
        m : int
            size of bit array
        n : int
            number of items expected to be stored in filter
        '''
        k = (m / n) * math.log(2)
        return int(k)
