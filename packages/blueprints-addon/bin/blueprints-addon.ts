#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { runCodemod } from '../src/index.js';
import type { CodemodOptions } from '../src/types/index.js';

// Provide a title to the process in `ps`
process.title = 'blueprints-addon';

// Set codemod options
yargs(hideBin(process.argv))
  .command({
    builder: (yargs) => {
      return yargs
        .option('location', {
          demandOption: true,
          describe: "Location of the addon (e.g. 'ui/button')",
          type: 'string',
        })
        .option('name', {
          demandOption: true,
          describe: "Name of the addon (e.g. '@my-org-ui/button')",
          type: 'string',
        })
        .option('root', {
          describe: 'Where to run the codemod',
          type: 'string',
        });
    },
    command: 'new',
    describe: 'Create a v2 addon',
    handler: (argv) => {
      const codemodOptions: CodemodOptions = {
        location: argv['location'],
        name: argv['name'],
        projectRoot: argv['root'] ?? process.cwd(),
      };

      runCodemod(codemodOptions);
    },
  })
  .demandCommand()
  .parseSync();
