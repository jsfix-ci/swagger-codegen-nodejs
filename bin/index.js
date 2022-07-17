#!/usr/bin/env node
const generator = require('../lib/index');
const program = require('commander');

program
    .command('generate')
    .version('1.0.0')
    .description('generate code using a given modelFile')
    .option('-y, --yaml [string]','yaml file path').preset('')
    .option('-d, --codeDir [string]','code dir path').preset('')
    .option('-m, --modelPath [string]','model file path').preset('')
    .action(function (options) {
        console.log(options);
        generator.generateCode(options.yaml,options.codeDir,options.modelPath).then(val => {
            console.log(`code >> ${options.codeDir} done`);
        });
    });

program.parse(process.argv);