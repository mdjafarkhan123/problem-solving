/*

Create a function that returns the sum of missing numbers.

Examples
sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
Notes
The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.


*/

function sumMissingNumbers(numbers) {
    let result = 0;
    for (let i = Math.min(...numbers); i < Math.max(...numbers); i++) {
        if (numbers.includes(i)) continue;

        result += i;
    }
    console.log(result);
}

sumMissingNumbers([1, 3, 5, 7, 10]); //➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]); //➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]); //➞ 1575
