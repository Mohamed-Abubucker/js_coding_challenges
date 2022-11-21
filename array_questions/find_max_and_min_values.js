const findMinMax = arr => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i]
        }

    }

    return {
        max,
        min
    }
}
const arr = [-1, -5, 2, 0, 5, 6, 9, 10];
console.log(findMinMax(arr))