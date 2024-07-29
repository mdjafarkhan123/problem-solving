/* 
Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
*/
function combination(...args) {
    let result = args.reduce((total, num) => {
        return total * num;
    }, 1);

    console.log(result);
}

combination(1, 2);
combination(1, 2, 4, 4);
combination(1, 2, 4, 120);
