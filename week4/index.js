// //NPM Node Package Manager

// // const chalk = require("chalk");

// // console.log(chalk);
// function sum(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;

// }
// console.log(sum(1,2));
// // console.log(chalk.blue("Hello, world!"));
// // console.log(chalk.red.bold("This is an error message"));
// // console.log(chalk.green.underline("This is a success message"));

// const path = require("path");
// console.log(__dirname);
// console.log(path.join(__dirname, "index.js"));

const fs = require("fs");

function main(fileName){
    fs.readFile(fileName, "utf-8", function(err, data){
        ///hello world
        let total = 0;
        for(let i=0;i<data.length;i++){
            if(data[i]===" "){
                total++;
            }
        }
        console.log(total+1);
    })
}
main(process.argv[2]);