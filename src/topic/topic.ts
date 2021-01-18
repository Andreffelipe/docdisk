import inquirer from 'inquirer';
import menuGo from './go/menu';
import menuJavascript from './javascript/menu';
import menuGit from './git/menu';

interface Data {
  language: string;
}
const Msg = async (menu: string): Promise<Data> => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'language',
      message: menu,
      validate: (value: string) =>
        value ? true : 'Não é permitido um tópico vazio',
    },
  ]);

  return answers;
};

const getTopic = async (language: string): Promise<Data | undefined> => {
  let msg;
  switch (language) {
    case 'go':
      msg = await Msg(menuGo);
      break;
    case 'javascript':
      msg = await Msg(menuJavascript);
      break;
    case 'git':
      msg = await Msg(menuGit);
      break;
    default:
      break;
  }
  return msg;
};

export default getTopic;
