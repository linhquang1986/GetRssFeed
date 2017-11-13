var express = require('express');
var path = require('path');
var appConfig = require('./config');
var app = express();

let port = appConfig.server.port;
if (appConfig.env === 'test')
    port = appConfig.server_test.port;


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// router
app.use('/', require('./router'));

app.set('port', port)

let listener = app.listen(port, () => {
    console.log('Server running on localhost:' + listener.address().port);
});

module.exports = app;// for testing


