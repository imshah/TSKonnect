var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var	app = express();

function compile(str, path){
    return stylus(str).set('filename',path);
}

app.set('views', __dirname + '/server/view' );
app.set('view engine', 'jade');
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on('error', function callback(){
    console.log('Connection error')
});
db.once('open', function callback(){
    console.log('DB connection established...')
});

var messageSchema = mongoose.Schema({message:String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});


app.get('/partials/:partialPath', function (req, res) {
    res.render('partials/' + req.params.partialPath);
} );

app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = 3000;
app.listen(port);
console.log('Listening port: ' + port);