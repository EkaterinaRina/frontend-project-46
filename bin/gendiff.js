#!/usr/bin/env node
import gendiff from '../scr/index.js';
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    //const options = program.opts().format;
    const result = gendiff(filepath1, filepath2); //options format
    console.log(result);
  })
  program.parse();