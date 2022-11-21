const chunk = (arr, n) => {

    let chunked = [];

    for (let i = 0; i < arr.length; i++) {
        const last = chunked[chunked.length - 1];
        const elem = arr[i];
        if (!last || last.length == n)
            chunked.push([elem]);
        else last.push(elem)
    }

    return chunked;

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

console.log(chunk(arr, 2));
console.log(chunk(arr, 3));
console.log(chunk(arr, 4));
console.log(chunk(arr, 5));
