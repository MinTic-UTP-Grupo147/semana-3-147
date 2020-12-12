// instancia de express en mi app
const express = require('express');
const db = require('./models');
// instancias middleware morgan para mostrarme informacion de peticion a mi servidor
const morgan = require('morgan');

// instancias del index que hay en routes
const apiRouter = require('./routes');
// importar bodyparser
const bodyParser = require('body-parser');
// importar manejador cors
const cors = require('cors');

// llamado a mi aplicacion
const app = express();

// manejador de Cors
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods: GET, POST, DELETE');
//     next();
// });

//  usar el middleware morgan
app.use(morgan('dev'));
// user el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// usar el cors
app.use(cors());

app.get('/', function(req, res) {
    db.user.findAll().then(users => res.json(users))
});


app.get('/api/users',(req,res)=>{
    db.user.findAll().then(users => res.json(users))
});

app.use('/api', apiRouter) ;

// Escoger el puerto 
app.set('PORT', process.env.PORT || 3000);
// mostrar un mensaje en la consola que si este el servidor
app.listen(app.get('PORT'), ()=>{
    console.log(`Running on http://localhost:${app.get('PORT')}`)
});

module.exports = app;