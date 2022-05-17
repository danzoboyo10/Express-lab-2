const express = require('express');
const app = express();

app.listen(3000, ()=> {
    console.log("Hello, listen here")
})
// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger"
app.get('/greeting', (req, res)=>{
    res.send("Hello, stranger")
})

// Give the greeting route a param /:name

app.get('/greeting/:name', (req, res)=>{
    console.log(req.params.name)
    // res.send("What's up" + " " + req.params.name)
    
    res.send(`what's up ${req.params.name}`)
})
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    console.log(req.params.total * (req.params.tipPercentage * .01))
 
     res.send(`${req.params.total * (req.params.tipPercentage * .01)}`)
})
   
