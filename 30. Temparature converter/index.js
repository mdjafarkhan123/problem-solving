/*
Create a function that converts Celsius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".

*/

function convert(temperature) {
    let value = parseFloat(temperature);
    let unit = temperature.slice(-2);
    if (unit == "°F") {
        console.log(Math.round((((value - 32) * 5) / 9).toFixed(2)) + " °C");
    } else if (unit == "°C") {
        console.log(Math.round(((value * 9) / 5 + 32).toFixed(2)) + " °F");
    } else {
        console.warn("Error format");
    }
}
convert("35°C"); //➞ "95°F"
convert("19°F"); //➞ "-7°C"
convert("33"); //➞ "Error"
