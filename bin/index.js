#!/usr/bin/env node
const generator = require('../lib/index');
const program = require('commander');

program
    .command('generate')
    .version('1.0.0')
    .description('generate code using a given modelFile')
  .addOption(new program.Option('-y, --yaml [string]', 'yaml file path').preset(''))
  .addOption(new program.Option('-d, --codeDir [string]', 'code dir path').preset(''))
  .addOption(new program.Option('-m, --modelPath [string]', 'model file path').preset(''))
    .action(function (options) {
        console.log(options);
        generator.generateCode(options.yaml,options.codeDir,options.modelPath).then(val => {
            console.log(`code >> ${options.codeDir} done`);
        });
    });

program.parse(process.argv);