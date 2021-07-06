import { eventEmmiter } from "./listener.js";

let strColor = "red"

const func = color => {
    switch (color) {
        case "red":
            eventEmmiter.emit("onRed")
            break;
        case "yellow":
            eventEmmiter.emit("onYellow")
            break;
        case "green":
            eventEmmiter.emit("onGreen")
            break;
        default:
            break;
    }
    
}

func(strColor);

