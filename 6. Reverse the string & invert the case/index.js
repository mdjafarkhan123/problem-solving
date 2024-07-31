/*
Write a function that takes a string input and returns the string in a reversed case and order.

Examples
invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

invert("step on NO PETS") ➞ "step on NO PETS"

invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
*/


function invert(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str[i].toLocaleLowerCase() == str[i]
            ? (result += str[i].toLocaleUpperCase())
            : (result += str[i].toLocaleLowerCase());
    }

    return result;
}

console.log(invert("dLROW YM sI HsEt"));



/*============== Using Recursion =============*/

function invert(str) {
    if (str.length == 1) {
        return str.toLowerCase() == str ? str.toUpperCase() : str.toLowerCase();
    } else {
        let char =
            str.slice(-1).toLowerCase() == str.slice(-1)
                ? str.slice(-1).toUpperCase()
                : str.slice(-1).toLowerCase();
        return char + invert(str.substr(0, str.length - 1));
    }
}

console.log(invert("HitHeRe"));
