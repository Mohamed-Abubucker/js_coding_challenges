function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`user ${this.name} says: Hi!`);
    }
}

const user = new User('abu', 29);
console.log(user);
user.sayHi();

decorateUserWithHello = (obj) => {
    obj.sayHello = function () {
        console.log(`user ${obj.name} says: Hello!`)
    }
}

decorateUserWithHello(user);
console.log(user);
user.sayHi();
user.sayHello();

