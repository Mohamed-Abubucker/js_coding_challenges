const linearSearch = (arr, val) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) return true;
    }

    return false;

}

// O(n) complexity

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 9));