/*
Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

Examples
isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true
*/

function isLastCharacterN(name) {
    name = name.slice(-1);
    console.log(/n/i.test(name));
}

isLastCharacterN("Aiden"); //➞ true

isLastCharacterN("Piet"); //➞ false

isLastCharacterN("Bert"); //➞ false

isLastCharacterN("Dean"); //➞ true
