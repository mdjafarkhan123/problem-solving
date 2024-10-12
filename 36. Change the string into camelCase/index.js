
/*
Using Camel Case (or camelCase) is where the first word is in lower case, and all words after it have their first letter capitalised. Note that there are no spaces in between words!

Create a function that takes a string and returns it back in camelCase.

Examples
camelCasing("Hello World") ➞ "helloWorld"

camelCasing("snake_case") ➞ "snakeCase"

camelCasing("low high_HIGH") ➞ "lowHighHigh"
Notes
You need to remove all spaces and underscores.
There will be no numbers in inputs.
*/



function camelCasing(str) {
    str = str.split(" ").join("_").split("_");
    let result = str.reduce((acc, item, index) => {
        if (index == 0) {
            acc += item.toLowerCase();
        } else {
            acc += item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
        return acc;
    }, "");
    console.log(result);
}
camelCasing("Name is up_Down_UP"); //➞ "helloWorld"

camelCasing("snake_case"); //➞ "snakeCase"

camelCasing("low high_HIGH"); //➞ "lowHighHigh"
