class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    div(num1, num2) {
        return num1 / num2;
    }
    mult(num1, num2) {
        return num1 * num2;
    }
}


class CalculatorAdapter {
    constructor() {
        this.calculator = new Calculator();
    }
    operation(num1, num2, operation) {
        switch (operation) {
            case "add":
                return this.calculator.add(num1, num2);
            case "multiplication":
                return this.calculator.mult(num1, num2);
            case "division":
                return this.calculator.div(num1, num2);
            default:
                return NaN;
        }
    }
}

const calc = new CalculatorAdapter();
console.log(calc.operation(1, 2, 'add'));
console.log(calc.operation(6, 2, 'multiplication'));
