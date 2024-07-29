/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array. String may have white space also. You need to solve it without RegExp.....
*/

function findNumInStr(arr) {
    let result = arr.filter((str) => {
        for (let char of str) {
            if (char != " " && char >= 0 && char <= 9) return true;
        }
        return false;
    });

    console.log(result);
}

findNumInStr(["la", "a", "2b", "t500", " I have white spaces:)"]);