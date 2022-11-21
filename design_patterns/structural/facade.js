class Pipeline {
    openVolve() {
        console.log('volve opened');
    }
    closeVolve() {
        console.log('volve closed');
    }
}

class Electicity {
    switchOn() {
        console.log('swiched on the motor line')
    }
    switchOff() {
        console.log('swiched off the motor line')
    }
}

class Tank {
    capacity = 100;
    currentValue = 0;
    checkWaterLevel() {
        if (this.currentValue >= this.capacity)
            return 'FULL';

        return 'CAN_ACCOMMADED_MORE_WATER';
    }
}

class WaterSystem {
    constructor() {
        this.pipeline = new Pipeline();
        this.electicity = new Electicity();
        this.tank = new Tank();
    }

    powerOn() {
        this.pipeline.closeVolve();
        this.electicity.switchOn();
    }

    powerOff() {
        this.electicity.switchOff();
        this.pipeline.openVolve();
    }

    autoOff() {
        this.powerOn()
        let timer = setInterval(() => {
            if (this.tank.checkWaterLevel() === 'FULL') {
                console.log('tank fill, turning off the motor');
                this.powerOff();
                clearInterval(timer);
            } else {
                console.log('keeping fill the tank')
            }
        }, 100);
    }
}

const watersys = new WaterSystem();
watersys.autoOff();

let timer1 = setInterval(() => {
    console.log('filling the tank');
    watersys.tank.currentValue += 10;
    if (watersys.tank.checkWaterLevel() === "FULL") clearInterval(timer1);
}, 100);
