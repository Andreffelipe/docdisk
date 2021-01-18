import { join } from 'path';
import { exec, ExecException } from 'child_process';
import util from 'util'
import documentationGo from '../src/docs/golang/index'
import figlet from 'figlet';
import chalk from 'chalk';
import assert from 'assert';

const menu = [
  "Basico",
  "Operador",
  "Declaracao",
  "Funcoes",
  "Tipos",
  "Conversao",
  "Pacotes",
  "EC",
  "ASR",
  "Maps",
  "Structs",
  "Ponteiros",
  "Interfaces",
  "Embedding",
  "Erros",
  "Concurrency",
  "Printing",
  "Reflection",
  "Snippets",
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

describe('teste do menu go', () => {
  test("Documentação básico go", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[0]} go`);
    const expected = await formatConsole(documentationGo, menu[0]);

    expect(stdout).toContain(expected);
    done()
  
  });
  test("Documentação Operador go", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[1]} go`);
    const expected = await formatConsole(documentationGo, menu[1]);

    expect(stdout).toContain(expected);
    done();
  })
  test("Documentação Declaracao go", async done => {
    const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[2]} go`);
    const expected = await formatConsole(documentationGo, menu[2]);

    expect(stdout).toContain(expected);
    done();
  })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[2]} go`);
  //   const expected = await formatConsole(documentationGo, menu[2]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[3]} go`);
  //   const expected = await formatConsole(documentationGo, menu[3]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[4]} go`);
  //   const expected = await formatConsole(documentationGo, menu[4]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[5]} go`);
  //   const expected = await formatConsole(documentationGo, menu[5]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[6]} go`);
  //   const expected = await formatConsole(documentationGo, menu[6]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[7]} go`);
  //   const expected = await formatConsole(documentationGo, menu[7]);

  //   expect(stdout).toContain(expected);
  // })

  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[8]} go`);
  //   const expected = await formatConsole(documentationGo, menu[8]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[9]} go`);
  //   const expected = await formatConsole(documentationGo, menu[9]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[10]} go`);
  //   const expected = await formatConsole(documentationGo, menu[10]);

  //   expect(stdout).toContain(expected);
  // })

  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[11]} go`);
  //   const expected = await formatConsole(documentationGo, menu[11]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[12]} go`);
  //   const expected = await formatConsole(documentationGo, menu[12]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[13]} go`);
  //   const expected = await formatConsole(documentationGo, menu[13]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[14]} go`);
  //   const expected = await formatConsole(documentationGo, menu[14]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[15]} go`);
  //   const expected = await formatConsole(documentationGo, menu[15]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[16]} go`);
  //   const expected = await formatConsole(documentationGo, menu[16]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[17]} go`);
  //   const expected = await formatConsole(documentationGo, menu[17]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[18]} go`);
  //   const expected = await formatConsole(documentationGo, menu[18]);

  //   expect(stdout).toContain(expected);
  // })
  // test("Documentação Operador", async () => {
  //   const { stdout } = await cli(`npx ts-node src/index.ts doc -t ${menu[19]} go`);
  //   const expected = await formatConsole(documentationGo, menu[19]);

  //   expect(stdout).toContain(expected);
  // })
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
