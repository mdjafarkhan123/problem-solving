/*
There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

Examples
uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
]) ➞ 7
*/

"use strict";
function uniqueStyles(arr) {
    arr = arr.flatMap((item) => {
        return item.split(",");
    });
    let result = arr.reduce((acc, item, index) => {
        if (arr.indexOf(item) === index) {
            acc++;
            return acc;
        } else {
            return acc;
        }
    }, 0);

    console.log(result);
}

uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal",
]);

/* Can be solved using Set but I went through a complex process :)*/