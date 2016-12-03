/* The Invoker function */
"use strict";

class Switch {
    private _commands;
    constructor() {
        this._commands = [];
    }

    storeAndExecute(command) {
        this._commands.push(command);
        command.execute();
    }
}

class Light {
    turnOn() { console.log('turn on') }
    turnOff() { console.log('turn off') }
}

class FlipDownCommand {
    private _light;
    
    constructor(light) {
        this._light = light;
    }

    execute() {
        this._light.turnOff();
    }
}

class FlipUpCommand {
    private  _light;
    
    constructor(light) {
        this._light = light;
    }

    execute() {
        this._light.turnOn();
    }
}

var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();

s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);

console.log('kuw');