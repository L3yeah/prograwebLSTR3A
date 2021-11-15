var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una App de Express
var port = process.env.PORT || 3000;  //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function (req, res, next){
    console.log('Request Url:' + req.url);
    next();
})
//primera ruta (está al nivel de la raiz /), Hello World!
app.get('/', function (req, res) {
    res.render('index');
});
//tercera ruta, recibe un parametro
app.get('/person/:id', function(req,res){
    res.render('person', {ID: req.params.id});
});
//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' })
});

app.listen (port); //levantar el server y ponerlo a la escucha