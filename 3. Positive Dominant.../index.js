/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
*/

function method1(arr) {
    let pos = [];
    let neg = [];
    arr.forEach((value, index) => {
        if (value >= 0 && arr.indexOf(value) == index) pos.push(value);
        if (value < 0 && arr.indexOf(value) == index) neg.push(value);
    });

    let result = pos.length > neg.length ? true : false;
    console.log(result);
}

method1([1, 1, 1, 1, -3, -4]);
method1([5, 99, 832, -3, -4]);
method1([5, 0]);
method1([0, -4, -1]);



//------ Using set ------------//

function method2(arr) {
    let pos = new Set();
    let neg = new Set();
    arr.forEach(function (value) {
        value >= 0 ? pos.add(value) : neg.add(value);
    });

    console.log(pos.size > neg.size);
}

method2([1, 1, 1, 1, -3, -4]);
method2([5, 99, 832, -3, -4]);
method2([5, 0]);
method2([0, -4, -1]);
