/*
Algorithms and Data Structures


What are algorithms?
  An algorithm is some sequence of actions.


What are data structures ?
  This is some way to present and store data.

  There are different data structures tree heap array hashmap


Data structures are created using algorithms and algorithms are created using data structures.

Data structures and algorithms are very related things.

To solve one problem, you can use different time complexity and our task select the more effective algoritms for it.


How to get Algorithm evaluation ?
  1) Efficiency
  2) Understandability


 For Efficiency we can use two parameters 
  1) Time complexity
  2) Space complexity

What are big O ?

  This is the dependence of the volume of work that is performed by algorithms on the input data.

  Asymptotic complexity of algorithms whitch equal as a Big O

https://www.bigocheatsheet.com/  


Go to practice lets try solve one easy problem

  1) 125. Valid Palindrome


Binary Search it is very effective algoritm for finding something

There are two methods 
  1) finding by value if array is sorted and 
  2) finding in range

Go to practice lets try solve one easy problem

  1) Find element in array
  2) Find element in matrix 


https://visualgo.net/ru


When developing, you should always remember about time complexity and if you can make better.
You must write better. And if your solution have a time complexity O(N^2) worth rewriting the code


But there are some tasks whitch have not optimal solution 

For examplt the problem of the sum of the subsets.

Task: From some number array get all combinations subsets whitch sum this subset equal some input value

[1, 4, 19, 20, 8, 120, 23, 23] k = 8

O(N!)

Solution this task is just generation all subsets and as result this solution have exponential time complexity

Js Data Structures 

1) Array -> 
  get - O(1), 
  push - O(1), 
  pop - O(1), 
  shift/unshift - O(N), 
  sort - O(NLogN), Time O(N)
  find/includes - O(N)

2) Object -> 
  get - O(1), 
  set - O(1), 
  delete - O(1), 
  Object.keys - O(N)

3) Map -> 
  get - O(1) или O(logN), 
  set O(1) или O(logN),
  delete -> O(1) или O(logN),
  Object.entries - O(N)

4) Set -> equal Map

5) DOM 
  appendChild - O(1) not equal Array.push()
  removeChild - O(1)
  getElementById - O(1)
  getElementByClassName - O(N)
  querySelector/ querySelectorAll - O(N)

  */
