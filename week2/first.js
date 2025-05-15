// function sum(n){
//     let ans = 0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }
// const ans = sum(100);
// console.log(ans);
// function sum2(n){
//     return (n*(n+1))/2;
// }
// const ans2 = sum2(100);
// console.log(ans2);


const fs = require("fs");
const contents = fs.readFileSync("/Users/prince_agrawal/Downloads/Web Development Cohort/week2/a.txt", "utf-8");
console.log(contents);

// const contents2 = fs.readFileSync("/Users/prince_agrawal/Downloads/Web Development Cohort/week2/b.txt", "utf-8");
// console.log(contents2);


// function print(err, data){
//     console.log(data);
// }
// const fs = require("fs");
// const contents = fs.readFile("/Users/prince_agrawal/Downloads/Web Development Cohort/week2/a.txt", "utf-8", print); //Asynchronusly


// const contents2 = fs.readFile("/Users/prince_agrawal/Downloads/Web Development Cohort/week2/b.txt", "utf-8", print); //Asynchronusly
// contents2;console.log("Done");

// console.log("Hi");
// function timeout(){
//     console.log("Click the Button");
// }
// setTimeout(timeout, 1000);


// console.log("Welcome to loupe");

// let c=0;
// for(let i=0;i<10000000000;i++){
//     c+=1;
// }
// console.log("Expensive operation done");


function setTimeoutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime()>timeout){
            break;
        }
    }
}
setTimeoutSync(1000);
console.log("Hi There");
