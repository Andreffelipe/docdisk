import go from './docs/golang/index';
import javascript from './docs/javascript/index';

interface Data {
  [string: string]: {
    title: string;
    content: string;
  };
}

const formatConsole = (array: Data, topic: string) => {
  Object.entries(array).forEach(([key, value]) => {
    if (key === topic.toLowerCase()) {
      console.log(value.title.toUpperCase());
      console.log(value.content);
    }
  });
};

const getDocuments = (language: string, topic: string): void => {
  switch (language) {
    case 'javascript':
      formatConsole(javascript, topic);
      break;
    case 'go':
      formatConsole(go, topic);
      break;
    default:
      break;
  }
};

export default getDocuments;
