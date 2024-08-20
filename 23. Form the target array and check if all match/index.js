/*

Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

Examples
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
Missing 6 from target array.

*/

function canConcatenate(combined, target) {
    combined = combined.flat();
    if (combined.length !== target.length) return false;

    function frequency(arr) {
        return arr.reduce((ob, item) => {
            ob[item] = (ob[item] || 0) + 1;
            return ob;
        }, {});
    }
    let combinedFrequency = frequency(combined);
    let targetFrequency = frequency(target);
    for (let key in combinedFrequency) {
        if (combinedFrequency[key] !== targetFrequency[key]) return false;
    }

    return true;
}
console.log(
    canConcatenate(
        [
            [1, 2, 3, 4],
            [5, 6],
            [7, 8],
        ],
        [1, 2, 3, 4, 5, 6, 7]
    )
); // Incorrectly returns true

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
