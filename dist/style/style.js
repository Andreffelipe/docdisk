"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgGray = exports.gray = exports.blueBright = exports.green = exports.blue = exports.purple = exports.orange = void 0;
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var orange = function (text) {
    return chalk_1.default.hex('#ff9b05')(text);
};
exports.orange = orange;
var purple = function (text) {
    return chalk_1.default.hex('#8f34eb')(text);
};
exports.purple = purple;
var blue = function (text) {
    return chalk_1.default.hex('#7dfff2')(text);
};
exports.blue = blue;
var green = function (text) {
    return chalk_1.default.hex('#00bd16')(text);
};
exports.green = green;
var blueBright = function (text) {
    return chalk_1.default.hex('#3853ff')(text);
};
exports.blueBright = blueBright;
var gray = function (text) {
    return chalk_1.default.hex('#969696')(text);
};
exports.gray = gray;
var bgGray = function (text) {
    return chalk_1.default.bgGray(text);
};
exports.bgGray = bgGray;
var meutexto = "\n" + exports.orange('JAVASCRIPT BÁSICO') + "\n\n=> " + exports.blue('Incluindo JavaScript em uma página HTML') + "\n\n- Para incluir JavaScript dentro de uma p\u00E1gina, voc\u00EA precisa envolv\u00EA-lo em " + exports.bgGray('<script>') + " tags:\n\n    <" + exports.green('script') + " " + exports.purple('type') + " = " + exports.blueBright('"text/javascript"') + " >\n\n    </" + exports.green('script') + ">\n\n- Chame um arquivo JavaScript externo\n\n    <" + exports.green('script') + " src =" + exports.blueBright('"myscript.js"') + ">   </" + exports.green('script') + ">\n\n=> " + exports.blue('Incluindo comentários') + "\n\nEm JavaScript, voc\u00EA tem duas op\u00E7\u00F5es diferentes:\n\n- Coment\u00E1rios de linha \u00FAnica\n\n    " + exports.gray('// meu comentário') + "\n\n- Coment\u00E1rios multi-linha\n\n    /*\n      " + exports.gray('meu comentário') + "\n    */\n";
