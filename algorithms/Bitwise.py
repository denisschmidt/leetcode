"""
  Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

  a = 1;  // 00000000000000000000000000000001
  a = 2;  // 00000000000000000000000000000010
  a = 3;  // 00000000000000000000000000000011
  a = 4;  // 00000000000000000000000000000100
  a = 5;  // 00000000000000000000000000000101
  a = 5;  // 00000000000000000000000000000110
  ...
  a = 255;// 00000000000000000000000011111111


  This technique combines different tricks involving play with number bits

  Bitwise operations: 
    NOT (~)
    AND(&)
    OR(|) 
    XOR(^)
    Left shift (<< k == * 2^k) -> add k zeros to the right  
    Right shift (>> k == / 2^k) 


  Good to know: x^x = 0, x^0 = x


  How get the value of i-th bit ? 
    1) (x >> i) & 1
    2) x & (1 << i)


  How set the value of the i-th bit ?
    1) x |= (1 << i) where (1 << i) = x000000


  How find number of ones in the binary representation ? 
    1) Operation x = x & (x-1) removes the least significant bit. Run it until the value is 0.

  
  Every element in the array except of one is duplicated, find the one which is not
    1) x = a[0] ^ a[1] ^ … ^ a[n - 1] because z^z = 0.


  Reverse binary representation of the number in O(1)
    1) Use precalculation: for every 16-bit number calculate reversed binary representation
      rev(x) = (rev[x & ((1 << 16) - 1)] << 16) + rev[x >> 16]


"""

import math

# Get the number of bits in the num


def getCountBits(num):
    return math.log2(num)


# Clear bit

# Этот метод может рассматриваться как противоположность методу setKthBit.
# Сначала создается число вида 11101111 (инверсия числа 00010000).
# Затем производится операция AND с числом num.
# Таким образом, сбрасывается только i-й бит, а все остальные биты не изменяются.


def clearBit(num, i):
    mask = ~(1 << i)
    return num & mask


# Обновление бита


# Чтобы присвоить i-му биту значение v, мы сначала с помощью маски (например, 11101111) сбрасываем бит в позиции i.
# Затем нужное значение v сдвигается влево на i битов.
# В результате создается число, у которого i-й бит равен v, а все остальные биты нулевые.
# Операция OR для двух чисел обновляет i-й бит, если бит v равен 1, и оставляет его нулевым в противном случае.
def updateBit(num, i, bitlsl):
    value = 1 if bitlsl else 0
    mask = ~(1 << i)

    return (num & mask) | (value << i)


"""
  Как инвертировать все биты у числа ???

  Invert actual bits of a number

  Given a non-negative integer n. 
  The problem is to invert the bits of n and print the number obtained after inverting the bits. 
  Note that the actual binary representation of the number is being considered for inverting the bits, no leading 0’s are being considered.
  
  Examples :
    Input : 11
    Output : 4
      (11)10 = (1011)[2]
      After inverting the bits, we get:
      (0100)2 = (4)10.

    Input : 10
    Output : 5
      (10)10 = (1010)2.
      After reversing the bits we get:
      (0101)2 = (101)2 = (5)10.
"""


# Time O(log n)
# Space O(1)
def invertBits(num):
    # вычисляем количество бит в числе Math.log2(num) или Math.floor(Math.log(num) / Math.log(2) + 1)

    for i in range(math.log2(num)):
        num = num ^ (1 << i)

    return num


# Time O(log2n)
# Space O(1)
def invertBits_II(num):
    x = math.log2(num)

    m = 1 << x

    m = m | (m - 1)

    num = num ^ m

    return num


"""

  Инвертировать по одному биту числа и получить новое числа ???

  2 = 0010 
  Тогда 3 = 0011 и 0 = 0000

"""


def invertByOneBits(num):
    if num == 0:
        return 1

    x = math.log2(num)

    for i in range(x + 1):
        mask = 1 << i
        bit = num ^ mask

        x = (num & ~mask) | ((bit << i) & mask)


"""

  Конвертировать значение из любой базы в число и наоборот ??? 


  Input number is given as string and output is an integer.

  Input: str = "1100", base = 2 
  Output: 12

  Input: str = "11A", base = 16
  Output: 282

  Input: str = "123",  base = 8
  Output: 83 

"""


def toDeci(s, base):
    def getValue(ch):
        if ch.isdigit():
            return int(ch)
        return ord(ch) - ord('A') + 10

    power = 1
    num = 0

    i = len(s) - 1

    while i >= 0:
        if getValue(s[i]) >= base:
            return -1

        num += getValue(s[i]) * power
        power = power * base
        i -= 1

    return num


# Функция для преобразования заданного десятичного числа к базе


def fromDeci(num, base):
    def getVal(num):
        if num >= 0 and num <= 9:
            return str(num + 48)

        return str(num - 10 + 65)

    res = ''

    while num > 0:
        res += getVal(num % base)

        num = num / base

    return "".join(res.split()[::-1])


"""
  Как получить значение XOR в интервале ???

  Поскольку XOR является коммутативной операцией тогда

  Допустим у нас есть префиксы XOR от 0-i, где i находится в диапазоне от 0..arr.length-1
  
  Например нам нужен результат: диапазона = [4,10]
  Тогда мы можем использовать XOR диапазона 0-10 и сделать XOR его с результатом диапазона 0-3
  
  В итоге получим требуемый диапазон, так как XOR 0-10 будет иметь значения XOR в диапазоне 0-3
  Тогда XOR диапазаона 0-10 с диапазоном 0-3 даст нам результат для [4-10]
"""
