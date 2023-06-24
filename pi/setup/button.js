import { Gpio } from "onoff";

export function initButton () {
    const button = new Gpio(process.env.BUTTON_GPIO_PIN, 'in', 'rising', { debounceTimeout: 10 });

    button.watch((err, value) => {
        console.log("Button pressed!");
    });

    process.on('SIGINT', () => {
        button.unexport();
    });
}