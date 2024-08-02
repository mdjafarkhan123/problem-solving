/*

*/

function uncensor(str, censoredChar) {
    let censoredCharInd = 0;
    let arr = str.split("");
    arr.forEach((char, index) => {
        if (char == "*") {
            arr[index] = censoredChar[censoredCharInd];
            censoredCharInd++;
        }
    });

    let result = arr.join("");
    console.log(result);
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"); // => Where did my vowels go?
