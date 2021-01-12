import chalk from 'chalk';
import go from './docs/golang/Go.json';
import javascript from './docs/javascript/Javascript.json';

const getDocuments = (language: string, topic: string): void => {
  switch (language) {
    case 'go':
      Object.entries(go).forEach(([key, value]) => {
        if (key === topic.toLowerCase()) {
          console.log(chalk.bold.magenta(value.title));
          value.content.forEach(element => console.log(element));
        }
      });
      break;
    case 'javascript':
      Object.entries(javascript).forEach(([key, value]) => {
        if (key === topic.toLowerCase()) {
          console.log(chalk.bold.magenta(value.title));
          value.content.forEach(element => console.log(element));
        }
      });
      break;
    default:
      break;
  }
};

export default getDocuments;
