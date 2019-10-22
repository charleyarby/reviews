const express = require('express')
let port = 3001;
let app = express();
const db = require('../database/index.js')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(__dirname+ '/../client/dist'))

app.use('/rooms/:id', express.static(__dirname+ '/../client/dist'))



app.get('/roomID/:id', (req, res) => {
  console.log(req.route.path, 'this is req')
  var room = req.url.slice(8,9)
  console.log(room, 'this is room')
  room = Number(room)
  console.log(room)

  db.getAll(room, (err, data)=>{
    res.send(data);
  })
})

app.listen(port, function(){console.log( `listening on port ${port}`)});