/*
You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.

Examples
missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2

missing([true, true, false, false, true], [false, true, false, true]) ➞ true

missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"
Notes
Assume that the first array always contains 1 or more elements.
Elements are always lost.
An element can also have duplicates.
*/

function missing(origin, check) {
    let final = "";
    let result = origin.forEach((item, pos) => {
        let index = check.indexOf(item);
        if (index < 0) {
            final += item;
        }
        check.splice(index, 1);
    });

    console.log(final);
}

missing([1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2], [1, 3, 2, 4, 5, 6, 7, 8]); //➞ 2
missing([true, true, false, false, true], [false, true, false, true]); //➞ true
missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]); //➞ "ugly"
