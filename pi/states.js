import { turnLightOff, turnLightOn } from "./lights.js";

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
                    turnLightOn();
                    setState("lighton");
                    break;
                case "api":
                    turnLightOn();
                    setState("lighton");
                    break;
            }
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
    }

}