// functional way
var singleton = function () {
    function local() {
        console.log('local');
    }
    function public() {
        console.log('public');
    }

    return {
        public
    }
}();

singleton.public();

// class way

class Singleton {
    constructor(name) {
        this.name = name;
    }
    static createInstance(name) {
        if (this.instance) return this.instance;
        this.instance = new Singleton(name);
        return this.instance;
    }
}

let ob1 = Singleton.createInstance('obj1');
let ob2 = Singleton.createInstance('obj2');
let ob3 = Singleton.createInstance('obj3');

console.log(ob1);
console.log(ob2);
console.log(ob3);
