var express = require('express');
var path = requre('path');
var app = express();
var rootPath= path.normalize( dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening to port 8000...');
