Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
}

console.log([1, 2, 3].myMap(item => item * item));