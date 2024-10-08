/*
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd(str) {
    let words = str.split(" ").reduce((acc, value) => {
        if (value.length > 1 && value.length % 2 == 0) {
            acc += " " + value;
            return acc;
        } else {
            acc += " " + value.split("").reverse().join("");
            return acc;
        }
    }, "");

    return words.trim();
}

console.log(reverseOdd("Hi do you know me"));
