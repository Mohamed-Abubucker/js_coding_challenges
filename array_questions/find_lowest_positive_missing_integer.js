const findMissingLowestPositiveInteger = (arr) => {
    const n = arr.length;
    const present = new Array(n + 1).fill(false);
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 && arr[i] < n) {
            present[arr[i]] = true;
        }
    }

    console.log(present);

    for (let j = 1; j < n + 1; j++) {
        if (!present[j]) return j;
    }

    return n + 1;
}


const arr = [-1, -3, 1, 2, 4, 5, 6, 7];
console.log(findMissingLowestPositiveInteger(arr));