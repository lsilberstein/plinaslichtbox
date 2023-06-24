import { Gpio } from "onoff";
import { switchState } from "../state";

export function initButton () {
    const button = new Gpio(process.env.BUTTON_GPIO_PIN, 'in', 'rising', { debounceTimeout: 10 });

    button.watch((err, value) => {
        switchState("button");
    });

    process.on('SIGINT', () => {
        button.unexport();
    });
}