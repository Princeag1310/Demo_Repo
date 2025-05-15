// // let sum = 10+5;
// // console.log(sum);
// // let age=5;
// // let canVote = (age>18);
// // console.log(canVote);

// function greet(name){
//     return "Hello, "+name;
// }
// let ans = greet("Prince");
// console.log(ans);

// function sum(a,b){
//     let sum = a+b;
//     return sum;
// }
// let ans1 = sum("Prince ", "Agrawal");
// let ans2 = sum(7,8);
// console.log(ans1);
// console.log(ans2);
// function canVote(age){
//     if(age>=18){
//         return true;
//     }
//     return false;
// }
// let ans3 = canVote(16);
// let ans4 = canVote(19);
// let ans5 = canVote("Prince");
// console.log(ans3);
// console.log(ans4);
// console.log(ans5);

// let users = ["Prince", "Orange", "Blue", "Green"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// // initiation section
// // condition section
// // incrementation section
// for(let i = 0;i<4;i++){
//     console.log(users[i]);
// }

function greet(user){
    if(user.gender==="male"){
        console.log("Hi, Mr. "+user.name+" your age is "+user.age);
    }
    else if(user.gender==="female"){
        console.log("Hi, Mrs. "+user.name+" your age is "+user.age);
    }
    else{
        console.log("Hi, "+user.name+" your age is "+user.age);
    }
}

let user1 = {
    name : "Prince",
    age: 20,
    gender: "male"
}

console.log(user1.name);
console.log(user1["name"]);
console.log(user1["age"]);
greet(user1);

function display(arr){
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>18 && arr[i].gender==="male"){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const users1 = [{
    name:"Prince",
    age:21,
    gender:"male"
}, {
    name:"Priya",
    age:21,
    gender: "female"
},
{
    name:"raman",
    age:11,
    gender:"male"
}]
console.log(display(users1));

