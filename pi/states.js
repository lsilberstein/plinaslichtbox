import { turnLightOff, turnLightOn } from "./lights";

// possible states: idle, lighton
let state = "idle";

function setState(newState) {
    state = newState;
}

function switchState(source) {
    switch (state) {
        case "idle":
            switch (source) {
                case "button":
                    turnLightOn();
                    setState("idle");
                case "api":
                    turnLightOn();
                    setState("lighton");
            }
        case "lighton":
            switch (source) {
                case "button":
                    turnLightOff();
                    setState("idle");
                case "api":
                    // do nothing
            }
    }

}