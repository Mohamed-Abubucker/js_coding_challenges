Array.prototype.myFindIndex = function (cb) {
    let n = this.length;

    for (let i = 0; i < n; i++) {
        if (cb(this[i], i, this)) return i;

    }

    return -1;
}

let arr = ['mohamed', 'abubucker', 'rejeeya', 'abdullah'];
console.log(arr.myFindIndex(item => item === 'rejeeya'));