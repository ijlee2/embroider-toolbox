#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { analyzeEmberProjectDependencies } from '../src/index.js';
import type { CodemodOptions } from '../src/types/index.js';

// Provide a title to the process in `ps`
process.title = 'analyze-ember-project-dependencies';

// Set codemod options
const argv = yargs(hideBin(process.argv))
  .option('root', {
    describe: 'Where to run the codemod',
    type: 'string',
  })
  .parseSync();

const codemodOptions: CodemodOptions = {
  projectRoot: argv['root'] ?? process.cwd(),
};

analyzeEmberProjectDependencies(codemodOptions);