/* The Invoker function */
"use strict";
var Switch = (function () {
    function Switch() {
        this._commands = [];
    }
    Switch.prototype.storeAndExecute = function (command) {
        this._commands.push(command);
        command.execute();
    };
    return Switch;
}());
var Light = (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () { console.log('turn on'); };
    Light.prototype.turnOff = function () { console.log('turn off'); };
    return Light;
}());
var FlipDownCommand = (function () {
    function FlipDownCommand(light) {
        this._light = light;
    }
    FlipDownCommand.prototype.execute = function () {
        this._light.turnOff();
    };
    return FlipDownCommand;
}());
var FlipUpCommand = (function () {
    function FlipUpCommand(light) {
        this._light = light;
    }
    FlipUpCommand.prototype.execute = function () {
        this._light.turnOn();
    };
    return FlipUpCommand;
}());
var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();
s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);
