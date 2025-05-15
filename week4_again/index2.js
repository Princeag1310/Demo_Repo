const fs = require('fs');

// function main(fileName){
//     fs.readFile(fileName, 'utf-8', function(err, data){
//         let total = 0;
//         for(let i=0;i<data.length;i++){
//             if(data[i] === " "){
//                 total++;
//             }
//         }
//         console.log(total+1);
//     })
// }
// main(process.argv[2]);

const {Command} = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file, 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const lines = data.split("\n").length;
                console.log(`There are ${lines} lines in ${file}`);

            }
        });
    });

program.parse();