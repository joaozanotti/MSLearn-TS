"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
// Returns the value of a parameter and the parameter length to the console.
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
