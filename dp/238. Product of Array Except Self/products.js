/*
This problem would be easy with division: an optimal solution could just find the product of all numbers in the array
 and then divide by each of the numbers.


Without division, another approach would be to first see that the ith element simply needs the product of numbers before i and the product of numbers after i.
 
Then we could multiply those two numbers to get our desired product.

In order to find the product of numbers before i, we can generate a list of prefix products. 
Specifically, the ith element in the list would be a product of all numbers including i. 

Similarly, we would generate the list of suffix products.

 */

const products = nums => {};
