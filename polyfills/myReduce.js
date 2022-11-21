Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }

    return acc;
}

console.log([1, 2, 3].myReduce((acc, cur) => acc += cur * 2, 0));