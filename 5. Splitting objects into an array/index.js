/*
Title: splitting objects into an array

=> You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

Notes:
The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original.

*/

function splitBunches(arr) {
    let result = [];
    for (let item of arr) {
        if (item.quantity == 1) {
            result.push(item);
        } else {
            for (let i = 1; i <= item.quantity; i++) {
                result.push({ name: item.name, quantity: 1 });
            }
        }
    }
    console.log(result);
}

splitBunches([
  { name: "grapes", quantity: 2 }
]) 


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) 