const express = require('express')
let port = 3001;
let app = express();
const db = require('../database/index.js')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(__dirname+ '/../client/dist'));

app.get('/rooms/:id', (req, res) => {
 // console.log(req.url, 'this is req')
  var room = req.url.slice(7)
  room = Number(room)

  db.getAll(room, (err, data)=>{
    res.send(data);
  })
})

app.listen(port, function(){console.log( `listening on port ${port}`)});