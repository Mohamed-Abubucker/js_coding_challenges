/**
 * mergesort
 * 1. create a method to split the array into pieces using middle point
 * 2. create a method to merge the array into one using left and right cursor indexes
 */

const merge = (left, right) => {
    const resultArray = [];

    while (left.length && right.length) {
        resultArray.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    while (left.length) {
        resultArray.push(left.shift())
    }

    while (right.length) {
        resultArray.push(right.shift())
    }

    return resultArray;

}

const mergeSort = unsortedArray => {
    if (unsortedArray.length < 2) return unsortedArray;

    const mid = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, mid);
    const right = unsortedArray.slice(mid);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

const arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(mergeSort(arr));