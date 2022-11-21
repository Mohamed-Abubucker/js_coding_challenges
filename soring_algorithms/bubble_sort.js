const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}
const arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(bubbleSort(arr));