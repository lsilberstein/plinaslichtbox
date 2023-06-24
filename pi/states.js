import { turnLightOff, turnLightOn } from "./lights.js";
import { sendLightRequest } from "./requests.js";

// possible states: idle, lighton
let state = "idle";

function setState(newState) {
    state = newState;
}

export function switchState(source) {
    switch (state) {
        case "idle":
            switch (source) {
                case "button":
                    sendLightRequest();
                    setState("idle");
                    break;
                case "api":
                    turnLightOn();
                    setState("lighton");
                    break;
            }
            break;
        case "lighton":
            switch (source) {
                case "button":
                    turnLightOff();
                    setState("idle");
                    break;
                case "api":
                    // do nothing
                    break;
            }
            break;
    }

}