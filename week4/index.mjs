//NPM Node Package Manager

import chalk from 'chalk';
import fs from 'fs';
// const fs = require("fs");

fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);
})

// console.log(chalk);
function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;

}
console.log(sum(1,2));
console.log(chalk.blue("Hello, world!"));
console.log(chalk.red.bold("This is an error message"));
console.log(chalk.green.underline("This is a success message"));

// console.log(__dirname);