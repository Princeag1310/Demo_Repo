const chalk = require('chalk');
// console.log(chalk.colors.blue("Hello world"));

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, 'index.js'));