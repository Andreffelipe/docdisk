/* eslint-disable no-octal-escape */
/* eslint-disable no-useless-concat */
import chalk from 'chalk';

import js from '../docs/javascript/index';

const ANSI_RESET = '\u001B[0m';
const ANSI_BLACK = '\u001B[30m';
const ANSI_RED = '\u001B[31m';
const ANSI_GREEN = '\u001B[32m';
const ANSI_YELLOW = '\u001B[33m';
const ANSI_BLUE = '\u001B[34m';
const ANSI_PURPLE = '\u001B[35m';
const ANSI_CYAN = '\u001B[36m';
const ANSI_WHITE = '\u001B[37m';
const ANSI_GREY = '\u001B[90m';

interface Data {
  [string: string]: {
    title: string;
    content: string[];
  };
}

const formatConsole = (array: string[]) => {
  array.forEach(element => {
    console.log(element);
  });
};

const json = (objeto: Data) => {
  Object.entries(objeto).forEach(([key, value]) => {
    console.log(chalk.bold.magenta(value.title));
    formatConsole(value.content);
  });
};
