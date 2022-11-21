const findSecondMinFromArray = arr => {

    let min = Number.MAX_VALUE;
    let second_min = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            second_min = min;
            min = arr[i];
        } else if (min < arr[i] && second_min > arr[i]) {
            second_min = arr[i]
        }
    }

    return {
        min,
        second_min
    }

}

const arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(findSecondMinFromArray(arr));