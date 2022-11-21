const vehicle = function (name, noOfWeels) {
    return {
        name,
        noOfWeels
    }
}

const addGear = function (obj) {
    obj.gear = function () {
        console.log(`gear added to ${obj.name}`);
    }
}

const addHorn = function (obj) {
    obj.horn = function () {
        console.log(`horn added to ${obj.name}`);
    }
}

const addBreak = function (obj) {
    obj.break = function () {
        console.log(`break added to ${obj.name}`);
    }
}

const addAccelerator = function (obj) {
    obj.accelerator = function () {
        console.log(`accelerator added to ${obj.name}`);
    }
}

const car = vehicle('tata', 4);
addGear(car);
addAccelerator(car);
addBreak(car);
addHorn(car);

console.log(car.name);
console.log(car.noOfWeels);
car.horn();
car.break();
car.gear();
car.accelerator();

// jquery style
const bike = function (name) {
    return {
        name,
        gear: 0,
        incGear: function () {
            this.gear++;
            console.log(`gear incremented: ${this.gear}`);
            return this;
        },
        break: function () {
            console.log('applying break');
            return this;
        },
        clutch: function () {
            console.log('applying clutch');
            return this;
        },
        decGear: function () {
            console.log(`gear decremented: ${this.gear}`);
            return this;
        }
    }
}

const obj = bike('hero')
    .clutch()
    .incGear()
    .clutch()
    .incGear()
    .break()
    .clutch()
    .decGear()
    .break();

console.log(obj);