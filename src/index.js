const express= require('express');
const path= require('path');
const mysql =require('mysql');
const cors =require('cors');
const myConnection = require('express-myconnection'); 
//Los atacantes pueden utilizar esta cabecera (que está habilitada de forma predeterminada) 
//para detectar las aplicaciones que ejecutan Express e iniciar ataques con destinos específicos.

const app = express();
//url de la base de datos
///settings
app.set('port', process.env.PORT || 80);

app.use(myConnection(mysql, {
    host:'pamsserver.mysql.database.azure.com',
    user:'pams@pamsserver',
    password:'@$server_2022',
    port:3306 ,
    database:'dbpams'
},'single'));

app.use(cors());
app.use(express.json());

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
//static files
app.use(express.static(path.join(__dirname +'/../public')));

const server= app.listen(app.get('port'),()=>{
   console.log('listening port 3000'); 
});


//RUTAS
app.use('/api/', require('./routes/ListRoutes.js'));
