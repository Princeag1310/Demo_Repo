function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}
//setTimeout => Promisified setTimeout

function callback(){
    console.log("1 sec has passed");
}

// setTimeoutPromisified(5000).then(callback);


// Callback Hell

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hello There");
//         },5000)
//     },3000)
// }, 1000);

// console.log("Outside the callback Hell");


// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("Hi There");
//         })
//     })
// })

// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi");
// return setTimeoutPromisified(3000)}).then(function(){
//         console.log("Hello");
// return setTimeoutPromisified(5000)}).then(function(){
//             console.log("Hi There");
// })

// console.log("Outside the callback Hell")

let str1 = "Prince";
const sortedString = str1.split("").sort().join("");
console.log(sortedString);

//syntactic sugar
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hi There");
}
solve();

console.log("After solve function")
