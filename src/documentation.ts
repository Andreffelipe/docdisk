import chalk from 'chalk';
import go from './docs/golang/Go.json';
import javascript from './docs/javascript/index';
import git from './docs/git/git.json';

interface Data {
  [string: string]: {
    title: string;
    content: string;
  };
}

const formatConsole = (array: Data, topic: string) => {
  Object.entries(array).forEach(([key, value]) => {
    if (key === topic.toLowerCase()) {
      console.log(value.title);
      console.log(value.content);
    }
  });
};

const getDocuments = (language: string, topic: string): void => {
  switch (language) {
    case 'javascript':
      formatConsole(javascript, topic);
      break;
    default:
      break;
  }
};

export default getDocuments;
