Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr.push(this[i])
        }

    }
    return arr;
}

console.log([1, 2, 3].myFilter(item => item > 1));