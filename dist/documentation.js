"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./docs/javascript/index"));
var formatConsole = function (array, topic) {
    Object.entries(array).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (key === topic.toLowerCase()) {
            console.log(value.title);
            console.log(value.content);
        }
    });
};
var getDocuments = function (language, topic) {
    switch (language) {
        case 'javascript':
            formatConsole(index_1.default, topic);
            break;
        default:
            break;
    }
};
exports.default = getDocuments;
