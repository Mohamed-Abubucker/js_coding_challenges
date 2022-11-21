function userDetails(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.printDetails = function (...arg) {
        console.log(`name is ${this.name}, gender is ${this.gender}, age is ${this.age}`);
        console.log('custom arguments: ', ...arg);
    }
}

console.log('***myCall polyfill***')
Function.prototype.myCall = function (ctx, ...arg) {
    ctx.myRef = this;
    ctx.myRef(...arg);
}

let obj1 = new userDetails('abubucker', 'male', 29);
obj1.printDetails();
let obj2 = {
    name: 'rejeeya',
    gender: 'female',
    age: 26
}

obj1.printDetails.call(obj2, ['cuddalore', 'tamilnadu']);
obj1.printDetails.myCall(obj2, ['bengaluru', 'karnataka']);

console.log('*** end of myCall polyfill ***');
console.log('***myApply polyfill***');
obj1.printDetails.apply(obj2, ['chennai', 'tamilnadu'])
Function.prototype.myApply = function (ctx, argArray) {
    ctx.myRef = this;
    ctx.myRef(...argArray);
}
console.log('*** end of myApply polyfill ***');

console.log('***myBind polyfill***');
const fn = obj1.printDetails.bind(obj2, 'pondy', 'puducherry');
fn('india');

Function.prototype.myBind = function (ctx, ...arg) {
    ctx.myRef = this;
    return function (...params) {
        ctx.myRef([...arg, ...params]);
    }
}

const fn1 = obj1.printDetails.bind(obj2, 'pondy', 'puducherry');
fn1('india');

console.log('*** end of myBind polyfill ***');

