const express = require('express')
let port = 3001;
let app = express();

app.use(express.static(__dirname+ '/../client/dist'));
app.listen(port, function(){console.log( `listening on port ${port}`)});