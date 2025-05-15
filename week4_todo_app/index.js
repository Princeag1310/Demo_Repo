
const express = require('express');
const app = express()

//route Handlers
// app.get('/',function(req, res){
//     res.send('Hello World!')
// } )

// app.get('/asd',function(req, res){
//     res.send('Hello from the asd endpoint')
// } )

// app.post('/',function(req, res){
//     res.send('Hello World from the post endpoint')
// } )

// app.listen(3000) //Which Port



let todos = [];
//store the data in a file, foundation for databases
// add user logic

app.post('/', function(req, res){
    //create a random id for the TODO
    // extract the TODO title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function(req, res){
    //extract the todo id
    //remove the todo from here
})

app.get('/', function(req, res){
    res.json({
        todos
    })
})