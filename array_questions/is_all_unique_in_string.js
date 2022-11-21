const isAllUnique = str => {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    console.log(obj);

    return Object.keys(obj).every(key => {
        console.log({ [key]: obj[key] });
        return obj[key] === 1;
    });
}

console.log(isAllUnique('asdfghjkl'));
console.log(isAllUnique('aassdd'));