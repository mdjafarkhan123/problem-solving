/*
Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
*/


function commonElements(arr1, arr2) {
    if (arr2.length > arr1.length) {
        [arr1, arr2] = [arr2, arr1];
    }

    let set = new Set(arr1);
    let commonArray = arr2.filter((value) => set.has(value));
    console.log(commonArray);
}
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]);