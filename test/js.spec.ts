import { join } from 'path';
import { exec, ExecException } from 'child_process';
import util from 'util'
import documentationJs from '../src/docs/javascript/index'
import figlet from 'figlet';
import chalk from 'chalk';

const menu = [
  "basic",
  "td",
  "objetos",
  "array",
  "operadores",
  "funcoes",
  "sd",
  "fg",
  "lf",
  "cf",
  "string",
  "er",
  "number",
  "datas",
  "DOM",
  "erros",
  "reference"
]

interface Data {
  code: number,
  error: ExecException | null,
  stdout: string,
  stderr: string
}
interface Doc {
  [string: string]: {
    title: string;
    content: string;
  };
}

const cli = util.promisify(exec)

describe('teste dos menus', () => {
  test("Documentação básico javascript", async done => {
    for await (let index of menu) {
      const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${index} javascript`);
      const expected = await formatConsole(documentationJs, index);
      expect(stdout).toContain(expected);
      done()
    }
  })
})

const formatConsole = (array: Doc, topic: string): Promise<string> => {
  return new Promise(resolve => {
    Object.entries(array).forEach(([key, value]) => {
      if (key === topic.toLowerCase()) {
        resolve(
          String(
            chalk.cyan(figlet.textSync('Doc Disk CLI'))
            + '\n' +
            value.title.toUpperCase()
            + '\n' +
            value.content
          )
        )
      }
    })

  })
};
