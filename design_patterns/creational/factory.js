// need to create vehicle objects of different types
const toyotaVehicle = {
    name: 'Toyota',
    noOfWeels: 4,
    start: function () {
        console.log(`starting Toyota...`);
    },
    drive: function () {
        console.log(`driving Toyota...`);

    }
}

const tataVehicle = {
    name: 'TATA',
    noOfWeels: 4,
    start: function () {
        console.log(`starting TATA...`);
    },
    drive: function () {
        console.log(`driving TATA...`);

    }
}

// functional factory pattern
const vehicleFactory = function (name, noOfWeels) {
    return {
        name,
        noOfWeels,
        start: function () {
            console.log(`starting ${this.name}...`);
        },
        drive: function () {
            console.log(`starting ${this.name}...`);
        }
    }
}

const tata = vehicleFactory('TATA', 4);
tata.start();
tata.drive();
const toyota = vehicleFactory('Toyota', 4);
toyota.start();
toyota.drive();

// class syntax

class Car {
    constructor(name, noOfWeels) {
        this.name = name;
        this.noOfWeels = noOfWeels;
    }

    start() {
        console.log(`starting ${this.name}...`);
    }

    drive() {
        console.log(`driving ${this.name}...`);
    }
}

class Bike {
    constructor(name, noOfWeels) {
        this.name = name;
        this.noOfWeels = noOfWeels;
    }

    start() {
        console.log(`starting ${this.name}...`);
    }

    drive() {
        console.log(`riding ${this.name}...`);
    }
}

class VehicleFactory {
    static createVehicle(type, name, noOfWeels) {
        let obj;
        switch (type) {
            case 'car':
                obj = new Car(name, noOfWeels);
                break;
            case 'bike':
                obj = new Bike(name, noOfWeels);
                break;
            default: throw new Error('invalid vehicle type');
        }
        return obj;
    }
}

const car = VehicleFactory.createVehicle('car', 'tata', 4);
console.log(car);
const bike = VehicleFactory.createVehicle('bike', 'yamaha', 2);
console.log(bike);
