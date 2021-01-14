#!/usr/bin/env node

import program from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import getDocuments from './documentation';
import getTopic from './topic/topic';

const version = '1.0.0';

program.version(version);

console.log(chalk.cyan(figlet.textSync('Doc Disk CLI')));

program
  .command('doc [tool]')
  .option('-l, --language [language]', 'documentation language')
  .option('-t, --topic <topic>', 'returns a specific topic')
  .description('shows the documentation of topic of the chosen language')
  .action(async (linguagem: string, options) => {
    let topic;
    if (!options.topic) {
      topic = await getTopic(linguagem);
    }
    getDocuments(linguagem, options.topic || topic?.language);
  });

program.parse(process.argv);
