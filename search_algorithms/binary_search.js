let iterations = 0;
const binarySearch = (arr, val) => {
    iterations++;
    console.log('iterations: ' + iterations);
    if (arr.length < 2 && arr[0] != val) return false;

    const mid = Math.floor(arr.length / 2);

    if (val == arr[mid]) return true;

    return val < arr[mid] ? binarySearch(arr.splice(0, mid), val) : binarySearch(arr.splice(mid + 1, arr.length), val);
}

// O(nlogn) complexity

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 9))
console.log(binarySearch(arr, 10))

