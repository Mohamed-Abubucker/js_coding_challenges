const findSecondMaxFromArray = (arr) => {
    let max = Number.MIN_VALUE;
    let second_max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            second_max = max;
            max = arr[i];
        } else if (max > arr[i] && second_max < arr[i]) {
            second_max = arr[i]
        }
    }


    return {
        max,
        second_max
    }

}

const arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(findSecondMaxFromArray(arr));