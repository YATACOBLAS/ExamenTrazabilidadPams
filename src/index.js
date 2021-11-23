const express= require('express');
const path= require('path');
const mysql =require('mysql');
const cors =require('cors');
const myConnection = require('express-myconnection');

    
//Los atacantes pueden utilizar esta cabecera (que está habilitada de forma predeterminada) 
//para detectar las aplicaciones que ejecutan Express e iniciar ataques con destinos específicos.

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 
  }
const app = express();

app.set('port', process.env.PORT || 3000);


app.use(myConnection(mysql, {
    host:'',
    user:'',
    password:'',
    port:3306,
    database:''
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

//WebSocket
const io= require('socket.io')(server,{
    cors: { 
        origin: "http://localhost:8080" , 
        methods: [ "GET" , "POST" ], 
        allowedHeaders: [ "my-custom-header" ], 
        credentials: true
       } 
});


    io.on('connection',(socket)=>{
    console.log('new Connection');     
  
            io.sockets.emit('notificacion:estado','fulano esta conectado');
  

       
        socket.on('mensaje',(data)=>{
            //io => es la coneccion de todo , entrera la 
            //sockets, es decir todos los que estan conectados    
            io.sockets.emit('notificacion:mensaje',data);
        })
        socket.on('typing',(data)=>{
            //io => es la coneccion de todo , entrera la 
            //sockets, es decir todos los que estan conectados    
            socket.broadcast.emit('notificacion:typing',data);
        })
    });
    io.on('disconnect',(socket)=>{
        socket.broadcast.emit('notificacion:no_estado','fulano se desconectó');
    })

app.set('socket.io',io);


// const {IO}=require('./api/Api');
// IO(io);
//RUTAS
app.use('/api/', require('./routes/ListRoutes.js'));
