"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var Go_json_1 = __importDefault(require("./docs/golang/Go.json"));
var Javascript_json_1 = __importDefault(require("./docs/javascript/Javascript.json"));
var git_json_1 = __importDefault(require("./docs/git/git.json"));
var getDocuments = function (language, topic) {
    switch (language) {
        case 'go':
            Object.entries(Go_json_1.default).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (key === topic.toLowerCase()) {
                    console.log(chalk_1.default.bold.magenta(value.title));
                    value.content.forEach(function (element) { return console.log(element); });
                }
            });
            break;
        case 'javascript':
            Object.entries(Javascript_json_1.default).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (key === topic.toLowerCase()) {
                    console.log(chalk_1.default.bold.magenta(value.title));
                    value.content.forEach(function (element) { return console.log(element); });
                }
            });
            break;
        case 'git':
            Object.entries(git_json_1.default).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (key === topic.toLowerCase()) {
                    console.log(chalk_1.default.bold.magenta(value.title));
                    value.content.forEach(function (element) { return console.log(element); });
                }
            });
            break;
        default:
            break;
    }
};
exports.default = getDocuments;
