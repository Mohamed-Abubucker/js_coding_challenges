const firstNonRepeatedElement = arr => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]]++
        else obj[arr[i]] = 1
    }

    return Object.keys(obj).find(key => obj[key] === 1);

}

const arr = [3, 2, 5, 1, 3, 1, 2, 3, 4];
console.log(firstNonRepeatedElement(arr));