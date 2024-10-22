/*
Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

Examples
diamondArrays(1) ➞ [[1]]

diamondArrays(2) ➞ [[1], [2, 2], [1]]

diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
*/


function diamondArrays(n) {
    let result = [];
    for (let i = 1; i <= 2 * n - 1; i++) {
        let len = i <= n ? i : 2 * n - i;
        result.push(new Array(len).fill(len));
    }

    return result;
}

console.log(diamondArrays(1)); // [[1]]
console.log(diamondArrays(2)); // [[1], [2, 2], [1]]
console.log(diamondArrays(5)); // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
