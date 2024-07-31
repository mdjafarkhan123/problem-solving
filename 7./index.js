function zeroesToEnd(arr) {
    let zeros = [];
    while (arr.includes(0)) {
        zeros.push(0);
        let index = arr.indexOf(0);
        arr.splice(index, 1);
    }

    arr.push(...zeros);
    console.log(arr);
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]); //➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]); //➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]); //➞ [4, 4, 5]

zeroesToEnd([0, 0]); //➞ [0, 0]