const express = require('express')
let port = 3001;
let app = express();
const db = require('../database/index.js')

app.use(express.static(__dirname+ '/../client/dist'));

app.get('/0', (req, res) => {
  db.getAll((err, data)=>{
    res.send(data);
  })
})

app.listen(port, function(){console.log( `listening on port ${port}`)});