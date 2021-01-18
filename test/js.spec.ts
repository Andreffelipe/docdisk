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

describe('teste do menu js', () => {
  test("Documentação básico javascript", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[0]} javascript`);
    const expected = await formatConsole(documentationJs, menu[0]);

    expect(stdout).toContain(expected);
    done()
  })
  test("Documentação tipos de dados javascript", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[1]} javascript`);
    const expected = await formatConsole(documentationJs, menu[1]);

    expect(stdout).toContain(expected);
    done()
  })
  test("Documentação objetos javascript", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[2]} javascript`);
    const expected = await formatConsole(documentationJs, menu[2]);

    expect(stdout).toContain(expected);
    done()
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
