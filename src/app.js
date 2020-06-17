// const geocode = require('./utils/geocode')
// const forcast = require('./utils/forcast')

const express = require('express')

console.log(__dirname)
console.log(__filename)

const app =express()

app.get('', (req,res)=>{
    res.send('hello from express baby')
})

app.get('/about', (req,res)=>{
    res.send('<div><span>hello this will be he upper nav</span><br><div ')
})

app.get('/help', (req,res) => {
    res.send('this is the help page')
})

app.get('/weather', (req,res) => {
    res.send({
        location: 'rampur',
        forecast: 'rampur mei barish',
    })
})


const port = 3000
app.listen(port, () => {
    console.log('the server is running at port: ' + port + ".")
})
