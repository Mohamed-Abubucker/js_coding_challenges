const findInterSection = (arr1, arr2) => {
    const obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            obj[arr1[i]]++
        } else {
            obj[arr1[i]] = 1
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]]) {
            obj[arr2[i]]++
        } else {
            obj[arr2[i]] = 1
        }
    }

    return Object.keys(obj).filter(key => obj[key] > 1);
}

console.log(findInterSection([1, 2, 3], [1, 3, 2, 4, 5]));