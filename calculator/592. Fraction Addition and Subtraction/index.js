/*

Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. 

The final result should be irreducible fraction. 

If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:
  Input:"-1/2+1/2"
  Output: "0/1"

Example 2:
  Input:"-1/2+1/2+1/3"
  Output: "1/3"

Example 3:
  Input:"1/3-1/2"
  Output: "-1/6"

Example 4:
  Input:"5/3+1/3"
  Output: "2/1"

Note:
  The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
  Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
  The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
  The number of given fractions will be in the range [1,10].
  The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

*/

const fractionAddition = expression => {
  let numerator = 0;
  let denominator = 1;

  let negative = false;

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '-') {
      negative = true;
    } else if (expression[i] === '+') {
      negative = false;
    } else {
      let a = 0;
      let b = 0;
      while (!isNaN(expression[i])) a = a * 10 + parseInt(expression[i++]);
      while (!isNaN(expression[++i])) b = b * 10 + parseInt(expression[i]);
      i--;

      numerator = (negative ? -1 : 1) * denominator * a + b * numerator;
      denominator *= b;

      if (!numerator) denominator = 1;
      negative = false;
    }
  }

  let g = gcd(Math.abs(numerator), denominator);

  return `${numerator / g}/${denominator / g}`;

  function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }
};
