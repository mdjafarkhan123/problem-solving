/*
Create a function that takes a string and returns the  character that repeats. If there is no repeat of a character, return "-1".

Examples
firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
Case sensitive "I" not equal to "i"
*/




function firstRepeat(word) {
    let result = "";
    for (let char of word) {
        if (word.lastIndexOf(char) !== word.indexOf(char)) {
            if (!result.includes(char)) result += char;
        }
    }

    console.log(result.length ? result : -1);
}
firstRepeat("legolas") //  ➞ "l"

firstRepeat("Gandalf")  // ➞ "a"

firstRepeat("Balrog")  // ➞ "-1"

firstRepeat("Isildur")  // ➞ "-1"