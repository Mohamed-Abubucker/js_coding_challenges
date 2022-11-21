class Light {
    constructor() {
        this.state = 'off'
    }

    clickButton() {
        if (this.state === 'off') {
            console.log('turn on the light')
            this.state = 'on'
        } else if (this.state === 'on') {
            console.log('turn off the light')
            this.state = 'off'
        }
    }
}


const light = new Light();
light.clickButton();
light.clickButton();
light.clickButton();
light.clickButton();
