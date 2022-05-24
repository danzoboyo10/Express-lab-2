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

let eightBallArray =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:millionaireQuestion', (req, res)=>{
 let millionaireQuestion = `Will I Be A Millionaire`
       
            res.send(`${millionaireQuestion}, <h1>${Math.random(eightBallArray.floor)}</h1>`)
        })
        
 
app.get('/', (req, res)=> {
    res.send('99 Bottles of beer on the wall, <a href = "/98"> take one down, pass it around</a>')
   
})
app.get('/:number_of_bottles/', (req, res)=> {
        let numOfBottles = parseInt(req.params.number_of_bottles);
        if(numOfBottles === 0) {
            res.send(`0 bottles of beer on the wall <a href= "/"> click to drink more </a>`)
        } else {
            res.send(`<a href= "${numOfBottles - 1}">  ${numOfBottles} bottles of beer on the wall, take one down, pass it around    </a>`)




        }




});

  
           

                







   
