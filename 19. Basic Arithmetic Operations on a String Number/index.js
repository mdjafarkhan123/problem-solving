/*
Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").

Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.

eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

For example:

"15 / 0"  ➞ -1
Examples
arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24

arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0

arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144

arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1
Notes
All the inputs are only integers.
The operators are * - + and /.
Hint: Think about the single space that appears before and after the arithmetic operator.

*/

function arithmeticOperation(str) {
    let arr = str.split(" ");
    let a = +arr[0];
    let b = +arr[2];
    let op = arr[1];
    let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;
        case "/":
            result = Boolean(a) && Boolean(b) ? a / b : -1;
    }

    console.log(result);
}
arithmeticOperation("12 + 12"); //➞ 24 // 12 + 12 = 24

arithmeticOperation("12 - 12"); //➞ 24 // 12 - 12 = 0

arithmeticOperation("12 * 12"); //➞ 144 // 12 * 12 = 144

arithmeticOperation("12 / 0"); //➞ -1 // 12 / 0 = -1
