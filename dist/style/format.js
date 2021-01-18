"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-octal-escape */
/* eslint-disable no-useless-concat */
var chalk_1 = __importDefault(require("chalk"));
var ANSI_RESET = '\u001B[0m';
var ANSI_BLACK = '\u001B[30m';
var ANSI_RED = '\u001B[31m';
var ANSI_GREEN = '\u001B[32m';
var ANSI_YELLOW = '\u001B[33m';
var ANSI_BLUE = '\u001B[34m';
var ANSI_PURPLE = '\u001B[35m';
var ANSI_CYAN = '\u001B[36m';
var ANSI_WHITE = '\u001B[37m';
var ANSI_GREY = '\u001B[90m';
var formatConsole = function (array) {
    array.forEach(function (element) {
        console.log(element);
    });
};
var json = function (objeto) {
    Object.entries(objeto).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        console.log(chalk_1.default.bold.magenta(value.title));
        formatConsole(value.content);
    });
};
