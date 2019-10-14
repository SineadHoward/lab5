const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('welcome to data representation & Querying'))
app.get('/hello/:name',(req, res) => {
    console.log(req.params.name);
    res.send('hello ' + req.params.name)})

app.get('/test', (req, res) => {
    //res.send('send file');
    res.sendFile(path.join(__dirname + '/index.html'))

})
app.get('/api/movies',(req, res) => {
    const movies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]
        
      res.status(200).json({
          movies:movies
      })
        })
app.get('/name',(req, res) => {
    console.log('route calling');
    console.log(req.query.lastname);

    res.send('hello' + req.query.firstname + req.query.lastname);
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/name', (req, res) => {
    console.log('post called');
    console.log(req.body.firstname);
    res.send("hello from post " +
    req.body.firstname + '' + 
    req.body.lastname);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))