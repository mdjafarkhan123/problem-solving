/*
A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

Examples
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544) ➞ false

isDisarium(518) ➞ true

isDisarium(8) ➞ true

isDisarium(466) ➞ false
Notes
Position of the digit is 1-indexed.
*/

function isDisarium(num) {
    let arr = num.toString().split("");
    let sum = arr.reduce((total, value, index) => {
        total += Number(value) ** (index + 1);
        return total;
    }, 0);

    console.log(sum == num);
}

isDisarium(75); //➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135); //➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544); //➞ false

isDisarium(518); //➞ true

isDisarium(8); //➞ true

isDisarium(466); //➞ false
