const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

//logs the method, timestamp and the url

// function loggerMiddleware(req, res, next){
//     console.log("Method is " + req.method);
//     console.log("Host is " + req.hostname);
//     console.log("Route is " + req.url);
//     console.log(new Date());
// //very long log file
// //log the status codes of the response
//     next();
// }

// app.use(loggerMiddleware);

// app.get("/sum", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         answer: a+b
//     })
// })

let middleware = express.json();
app.use(middleware);
app.post("/sum", function(req, res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a+b
    })
})

// app.get("/multiply", function(req,res){
//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         answer: a*b
//     })
// })

// app.get("/divide", function(req, res){
//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         answer: a/b
//     })
// })

// app.get("/subtract", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         answer: a-b
//     })
// })

app.listen(3000);