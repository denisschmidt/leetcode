/*

You are given two arrays of integers a and b, which are both sorted in an ascending order and contain unique elements (i.e. no duplicates).

You can take several (possibly zero) numbers from the array b and add them to a at any positions in any order. You want the array a to be an arithmetic progression after this.

Your task is to find the maximal length of the resulting arithmetic progression represented by array a that can be achieved. If it is impossible to obtain an array forming an arithmetic progression, return -1.

Example

For a = [0, 4, 8, 16] and b = [0, 2, 6, 12, 14, 20], the output should be maxArithmeticLength(a, b) = 6.

You can add b[3] = 12 and b[5] = 20 to a and obtain array [0, 4, 8, 12, 16, 20], which is an arithmetic progression of length 6 (the sequence increases by 4 from each element to the next). It is impossible to obtain a longer arithmetic progression, so the answer is 6.

For a = [5, 7, 13, 14] and b = [9, 11, 15], the output should be maxArithmeticLength(a, b) = -1.

It is impossible to obtain an arithmetic progression with these elements, so the answer is -1.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of unique integers sorted in ascending order.

Guaranteed constraints:
2 ≤ a.length ≤ 1000,
0 ≤ a[i] ≤ 105.

[input] array.integer b

An array of unique integers sorted in ascending order.

Guaranteed constraints:
2 ≤ b.length ≤ 1000,
0 ≤ b[i] ≤ 105.

[output] integer

The maximal length of the arithmetic progression constructed by adding a certain number of elements from b to the array a.
[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function maxArithmeticLength(a, b) {}
