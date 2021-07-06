import { EventEmitter } from "events";

export const eventEmmiter = new EventEmitter();

export const a = 2;



eventEmmiter.on("onGreen", () => {
    console.log('Зеленый');
})

eventEmmiter.on("onRed", () => {
    console.log('Красный');
})

eventEmmiter.on("onYellow", () => {
    console.log('Желтый');
})


// eventEmmiter.emit("onGreen");
// eventEmmiter.emit("onRed");
// eventEmmiter.emit("onYellow");



