var express = require ('express');
var path = require ("path");

var app = express ();
app.use(express.static ("moje"));


app.get ('/', function (req, res) {
	res.send("Strona start");
});

app.get ('/user/:id', function (req, res) {
	res.send("Wartość id: " +req.params.id);
});

app.listen(3000);
