const findUnion = (arr1, arr2) => {
    const obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = arr2[i]
    }

    const res = Object.keys(obj).map(key => obj[key]);
    return res;
}

console.log(findUnion([1, 2, 3], [1, 3, 2, 4, 5]));