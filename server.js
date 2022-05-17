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
    res.send("What's up, <name>")
})