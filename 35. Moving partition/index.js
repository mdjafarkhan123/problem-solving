/*
Create a function to partition an array from left to right.

Examples
movingPartition([-1, -1, -1, -1])
➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

movingPartition([1, 2, 3, 4, 5])
➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

movingPartition([]) ➞ []
Notes
With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
An empty array should return an empty array: []

*/

function movingPartition(arr) {
    let result = arr.reduce((acc, _, index) => {
        if (index !== arr.length - 1) {
            acc.push([arr.slice(0, index + 1), arr.slice(index + 1)]);
        }
        return acc;
    }, []);

    console.log(JSON.stringify(result));
}
movingPartition([-1, -1, -1, -1]);
