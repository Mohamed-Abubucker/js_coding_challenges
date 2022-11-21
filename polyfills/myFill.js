Array.prototype.myFill = function (val) {
    let n = this.length;
    for (let i = 0; i < n; i++) {
        arr[i] = val;
    }
}

let arr = new Array(5);
arr.myFill('abubucker');
console.log(arr);
