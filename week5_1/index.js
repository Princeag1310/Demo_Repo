const express = require('express');

const app = express();

//better routing, add databases, middlewares

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount =  requestCount+1;
    console.log("Total Number of Requests = "+ requestCount);
    next();
}
function realSumHandler(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
}

app.get("/sum",requestIncreaser,realSumHandler)

app.get("/multiply",requestIncreaser, function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
})

app.get("/divide",requestIncreaser, function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a/b
    })
})

app.get("/subtract",requestIncreaser, function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a-b
    })
})


app.listen(3000);