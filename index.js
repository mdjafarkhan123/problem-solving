function returnUnique(arr) {
    let str = [];
    arr.forEach((element, index) => {
        if (
            arr.indexOf(element, index + 1) == -1 &&
            arr.indexOf(element) == index
        ) {
            str.push(element);
        }
    });

    console.log(str);
}

returnUnique([1, 9, 8, 8, 7, 6, 1, 6]);

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]);

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);
