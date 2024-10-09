/*
Create a function that outputs the result of a math expression in word.

Examples
wordedMath("One plus fIVe") ➞ 'Six'

wordedMath("zErO Plus one") ➞ 'One'

wordedMath("Nine plus nine") ➞ 'Eighteen
Notes
Expect only the operations plus and minus.
Expect to only get numbers and answers from 0 to 9.
*/

function wordedMath(sentence) {
    sentence = sentence.split(" ");
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
    };

    let words = Object.keys(numbers);
    let result;
    switch (sentence[1].toLowerCase()) {
        case "plus":
            {
                result =
                    numbers[sentence[0].toLowerCase()] +
                    numbers[sentence[2].toLowerCase()];
            }
            break;
        case "minus":
            {
                result =
                    numbers[sentence[0].toLowerCase()] -
                    numbers[sentence[2].toLowerCase()];
            }

    }

    console.log(words[result][0].toLocaleUpperCase() + words[result].slice(1));
}

wordedMath("zero Plus one"); //➞ "One"
wordedMath("one minus one"); //➞ "Zero"
wordedMath("Nine plus nine"); //➞ "Eighteen"
wordedMath("seVen plus Six"); //➞ "Thirteen"
