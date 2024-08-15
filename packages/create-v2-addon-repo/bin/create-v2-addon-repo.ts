#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { runCodemod } from '../src/index.js';

// Provide a title to the process in `ps`
process.title = 'create-v2-addon-repo';

// Set codemod options
yargs(hideBin(process.argv))
  .command({
    builder: (yargs) => {
      return yargs
        .positional('name', {
          describe: 'Name of your project',
          type: 'string',
        })
        .option('root', {
          describe: 'Where to run the codemod',
          type: 'string',
        })
        .demandOption(['name']);
    },
    command: '* [name]',
    describe: 'Creates a v2 addon repo',
    handler: (argv) => {
      runCodemod({
        name: argv['name'],
        projectRoot: argv['root'] ?? process.cwd(),
      });
    },
  })
  .demandCommand()
  .strict()
  .parseSync();
