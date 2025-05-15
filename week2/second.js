// const user = {
//     name:"Prince",
//     age:21
// }
// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }

//     paint(){
//         console.log(`Painting with color ${this.color}`);
//     }

// }

// const rect = new Rectangle(10, 20, "red");
// const rect2 = new Rectangle(10, 20, "blue");
// const area = rect.area();
// const area2 = rect2.area();
// console.log(area);
// rect.paint();


// const date = new Date();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// const date2 = new Date("2021-01-01");
// const date3 = new Date("2021-01-01T00:00:00");
// const date4 = new Date("2021-01-01T00:00:00.000");
// const date5 = new Date("2021-01-01T00:00:00.000Z");


// function getDate(){
//     const date = new Date();
//     return date;
// }

// const map = new Map();
// map.set('name', 'Prince');
// map.set('age', 20);
// console.log(map);
// console.log(map.get('name'));
// console.log(map.get('age'));

// let str = "Prince";
// console.log(str.toLocaleLowerCase());
// console.log(str);

// function logName(){
//     console.log("Prince");
// }
// setTimeout(logName,3000);

//callback based approach
//Promise based approach

// const d = new Date();
//easy to call Promises

//Difficult to make your own promise
// class Date{

//     constructor(){

//     }

//     getTime(){

//     }
// }




// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));

//     //returning the object of the promise class
// }

// function callback(){
//     console.log("3 seconds have passed");
// }
// setTimeout(callback, 1000);

// setTimeoutPromisified(10000).then(callback); //syntactically cleaner

// let p = setTimeoutPromisified(3000); //returning the object of the Promise class     returning new promise()
// console.log(p);

// function promiseCallback(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("Main is called");
// }
// promiseCallback(main);

// function random(resolve ){ // resolve is also a function
//     resolve();
// }

// let p = new Promise(random); //supposed to return u something eventually

// console.log(p);

// function callback(){
//     console.log("Promise succeded");
// }
// p.then(callback);


// const fs = require("fs");
// function readTheFile(callback){
//     fs.readFile("a.txt","utf-8", function(err,data){
//         callback(data);
//     } )
// }
// function readFile(fileName){
//     // read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = await readFile();

// function callback(contents){
//     console.log(contents);
// }

// p.then(callback);

// for(let i=0;i<10000000;i++){

// }


// console.log("-----top of the file-----");
// function readTheFile(resolve){
//     console.log("Read the file called");
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");
//         resolve();
//     },3000);

// }

// function setTimeoutPromisified(fileName){
//     console.log("setTimeoutPromisified called");
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified();
// function callback(){
//     console.log("Timer is done");
// }
// p.then(callback);
// console.log("End of the file");



// class Promise2{
//     constructor(fn){
//         this.fn=fn;
//         this.fn(()=>{
//             this.resolve();
//         })
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve){
//         console.log("Read the file called");
//         setTimeout(function(){
//             console.log("callback based setTimeout completed");
//             resolve();
//         },3000);
//     }

// function setTimeoutPromisified(){
//     return new Promise2(readTheFile);
// }

// let p = setTimeoutPromisified();
// function callback(){
//     console.log("Callback has been called");
// }
// p.then(callback);


//the real operation that we want to promisify
// function doAsyncOp(resolve){
//     setTimeout(resolve, 3000); //old, callback based, async function
// }

// const p = new Promise(doAsyncOp);
// function callback(){
//     console.log("3 seconds have passed");
// }

// p.then(callback);

// function setTimeoutPromisified(time){
//     return new Promise(function(resolve){
//         setTimeout(resolve, time);
//     })
// }

// function callback(){
//     console.log("time have passed");
// }
// const p= setTimeoutPromisified(3000);
// p.then(callback);

const p = new Promise(function(resolve){
    let c=0;
    for(let i=0;i<10000000;i++){
        c++;
    }
    resolve("hi there Prince");
})
function callback(str){
    console.log(str);
}

p.then(callback);