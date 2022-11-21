// prototype for construction fuction
function Employee() {
    this.name = 'abubucker';
    this.department = 'IT';
}

Employee.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
}

Employee.prototype.printDepartment = function () {
    console.log(`depart name is ${this.department}`);
}

const emp = new Employee();


const obj = Object.create(emp);

console.log('print obj data');

obj.name = 'mohamed';
obj.department = 'DevOps';

obj.sayHello();
obj.printDepartment();

console.log('print emp data');

emp.name = 'mohamed';
emp.department = 'DevOps';

emp.sayHello();
emp.printDepartment();


// Object.setPrototypeOf

const dataObj = {
    name: 'Mohamed Abubucker',
    age: 29
}

const methodObj = {
    sayHi: function () {
        console.log(`Hi ${this.name}`);
    },
    sayAge: function () {
        console.log(`your age is ${this.age}`)
    }
}

Object.setPrototypeOf(dataObj, methodObj);

dataObj.sayHi();
dataObj.sayAge();
