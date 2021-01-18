import assert from 'assert';
import { exec, ExecException } from 'child_process';
import util from 'util'
import documentationCcJs from '../src/docs/javascript/ccindex'
import figlet from 'figlet';
import chalk from 'chalk';

const menu = [
"Introducao",
"Variaveis",
"Funcoes",
"OED",
"Classes",
"SOLID",
"Testes",
"Concorrencia",
"TR",
"Formatacao",
"Comentarios",
"Referencia",
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

describe('teste clean code js', () => {
  it('introdução', async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[0]} javascript`);
    const expected = await formatConsole(documentationCcJs, menu[0]);
    expect(stdout).toContain(expected);
    done()
  });

  it('Variaveis', async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[1]} javascript`);
    const expected = await formatConsole(documentationCcJs, menu[1]);
    expect(stdout).toContain(expected);
    done()
  });

  it('Funcoes', async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[2]} javascript`);
    const expected = await formatConsole(documentationCcJs, menu[2]);
    expect(stdout).toContain(expected);
    done()
  });
});

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