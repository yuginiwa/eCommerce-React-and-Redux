var express = require("express");
var path = require('path');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if(req.headers['x-forwarded-proto'] === "https"){
        res.redirect('http://' + req.hostname + req.url);
    }else {
        next();
    }
});

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, process.env.IP, function(){
   console.log("Server Started");
});
