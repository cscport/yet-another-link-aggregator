var express = require('express');
var app = express();
var path = require('path');
var publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(3000, function(req, res) {
  console.log('The client app is listening at port 3000');
});