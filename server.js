var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var data = require('./products')
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
var handlebars = require('express3-handlebars').create({
    defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
// Ofrecer archivos estáticos si es necesario definir servidor
app.use(express.static(__dirname + '/public'));
var hostname = 'localhost';
var port = 3000;
app.listen(port, hostname, function () {
    console.log('Server Running at http://' + hostname + ':' + port + '/');
});
/* 
 * Definir los recursos que vamos a poner disponibles
 * y la lógica a ejecutar en cada uno de ellos.
 */
//Default Behavior
app.all('/', function (req, res, next) {
    console.log('Accesing Catalog');
    res.render('home', {
        data: data.showAll()
    });
});
//Show Caribean List
app.get('/caribean', function (req, res) {
    console.log('Caribean Fish');
    res.render('home', {
        data: data.filter('tropical')
    });
    console.log(data.filter('tropical'));
});
//Show Reef List
app.get('/reef', function (req, res) {
    console.log('Reef Fish');
    res.render('home', {
        data: data.filter('reef')
    });
    console.log(data.filter('reef'));
});
//Show Pacific List
app.get('/pacific', function (req, res) {
    console.log('Pacific Fish');
    res.render('home', {
        data: data.filter('pacific')
    });
    console.log(data.filter('pacific'));
});
//Show Asian List
app.get('/asian', function (req, res) {
    console.log('Asian Fish');
    res.render('home', {
        data: data.filter('asian')
    });
    console.log(data.filter('asian'));
});
//Show African List
app.get('/african', function (req, res) {
    console.log('African Fish');
    res.render('home', {
        data: data.filter('african')
    });
    console.log(data.filter('african'));
});