const quickSort = unsortedArray => {

    if (unsortedArray.length < 2) return unsortedArray;

    const pivot = unsortedArray[0];
    const left = [];
    const right = [];

    for (let i = 1; l < unsortedArray.length; i++) {

        if (unsortedArray[i] < pivot)
            left.push(unsortedArray[i])
        else
            right.push(unsortedArray[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}

const arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(quickSort(arr));