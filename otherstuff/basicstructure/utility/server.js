var express = require('express');
var app = express();

var PORT = process.env.PORT || 5500;

app.use(express.static());

app.listen(PORT, function(){
    console.log('server listening on' + PORT);
});