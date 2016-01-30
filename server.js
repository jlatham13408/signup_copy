var express = require('express'),
    server = express();

server.use(express.static(__dirname+’/css’));
server.get('/', function(req, res){
	res.sendFile('html/index.html', { root: __dirname });
});

server.post(‘/signup’, function(req. res){
console.log(“You Signed up!”);
console.log(req.body); // You do not have to put this.  It may confuse you
res.redirect(‘/’);
});

server.listen(8080, function(){
	console.log("Now listening on port 8080");
});
