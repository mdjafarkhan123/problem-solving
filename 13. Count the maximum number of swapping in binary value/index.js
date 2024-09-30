/*
Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4
Notes
Both binary strings will be of equal length.
Both binary strings will have an equal number of zeroes and ones.
A swap is switching two elements in a string (swaps do not have to be adjacent
*/

"use strict";
function minSwaps(a, b) {
    let minSwap = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1 && a[i] != b[i]) {
            minSwap++;
        }
    }

    console.log(minSwap);
}

minSwaps("1100", "1001"); //➞ 1

minSwaps("110011", "010111"); //➞ 1

minSwaps("10011001", "01100110"); //➞ 4

//=========== Using recursion =========
function minSwaps(a, b) {
    if (a.length == 0) {
        return 0;
    } else {
        let maxSwap = 0;
        if (a[0] == 1 && a[0] != b[0]) {
            maxSwap++;
        }
        return maxSwap + minSwaps(a.slice(1), b.slice(1));
    }
}
