/*

Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

Examples
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
Notes
If given an empty array, return an empty object (see example #4).
The object should be in the same order as in the input array.
*/

function getFrequencies(arr) {
    let ob = {};
    let arrayItem = [...new Set(arr)];
    for (let value of arrayItem) {
        let occurance = arr.filter(function (item) {
            return item == value;
        });

        ob[value] = occurance.length;
    }

    console.log(ob);
}

getFrequencies(["A", "B", "A", "A", "A"]); //➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]); // ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]); //➞ { true: 2, false: 3 }

getFrequencies([]); //➞ {}



// ========= Another way ========
function getFrequencies(arr) {
    let ob = {};
    for (let value of arr) {
        if (ob[value]) {
            ob[value]++;
        } else {
            ob[value] = 1;
        }
    }

    console.log(ob);
}
