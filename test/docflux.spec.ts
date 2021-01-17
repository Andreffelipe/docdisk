import { join } from 'path';
import { exec, ExecException } from 'child_process';

interface Data {
  code: number,
  error: ExecException | null,
  stdout: string,
  stderr: string
}

test('Code should be 0', async () => {
  const result = await cli('doc', ['-t', 'basico'], '.');
  expect(result.code).toBe(0);
});

function cli (topic: string, args: any[], cwd: string): Promise<Data> {
  return new Promise(resolve => {
    exec(
      `npx ts-node ${join('src', 'index.ts')} ${topic} ${args.join(' ')}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      },
    );
  });
}
