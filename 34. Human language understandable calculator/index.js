/*
Create a function that outputs the result of a math expression.

Examples
wordedMath("One plus one") ➞ 2

wordedMath("zero Plus one") ➞ 1

wordedMath("one minus one") ➞ 0
Notes
Expect only the operations plus and minus.
Expect to only get numbers and answers from 0 to 9.
*/

function wordedMath(sentence) {
    sentence = sentence.split(" ");
    const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    };

    switch (sentence[1].toLowerCase()) {
        case "plus":
            {
                console.log(
                    numbers[sentence[0].toLowerCase()] +
                        numbers[sentence[2].toLowerCase()]
                );
            }
            break;
        case "minus":
            {
                console.log(
                    numbers[sentence[0].toLowerCase()] -
                        numbers[sentence[2].toLowerCase()]
                );
            }
            break;
    }
}

wordedMath("One plus one");

wordedMath("zero Plus one");

wordedMath("one minus one");
