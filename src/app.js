const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app =express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directories
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{
    res.render('index', {
        title: "weather app",
        name: "Krishna Dubey"
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'about me',
        name: 'Krishna Dubey'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: 'help page',
        name: 'krishna dubey'
    })
})
app.get('/weather', (req,res) => {
    res.send({
        location: 'rampur',
        forecast: 'rampur mei barish',
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: '404',
        name: 'krishna dubey',
        errorMessage: "help page not found"
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title: '404 page',
        name: 'krishna dubey',
        errorMessage: 'page doesnot exist'
    })
})

const port = 3000
app.listen(port, () => {
    console.log('the server is running at port: ' + port + ".")
})
