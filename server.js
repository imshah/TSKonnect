var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    model = require('./public/models/usermodel'),
    app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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


app.get('/partials/:partialPath', function (req, res) {
    res.render('partials/' + req.params.partialPath);
});

app.get('/profile', function (req, res) {
    res.render('partials/profile');
});


app.get('/getUser', function(req,res){

    model.find({}, function(err, userModel){
        if(!err){
            console.log(userModel);
            res.send(userModel);
        }
    });
});

app.get('/getUser/:username', function(req,res){

    var username = req.params.username;

    model.find({username:username}).exec(function(err, callbackData){
        if(!err){
            res.send(callbackData);
        }
    });
});

app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening port: ' + port);