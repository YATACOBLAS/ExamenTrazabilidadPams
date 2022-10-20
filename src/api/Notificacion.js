const apiNotificacion = {};

require('dotenv').config();
const client = require('twilio')('', ''); 
 
apiNotificacion.notificar= (req,res)=>{
    let nombre=req.body.nombre;
    let examen=req.body.examen;
    let telefono=req.body.telefono;
   

   client.messages 
   .create({ 
      body: `Hola *${nombre}*🙂, el resultado del examen 🧪 *${examen}* que te realizaste en el policlinico PAMS 👨‍⚕ esta listo, puede acercarse hoy mismo.`,   
      messagingServiceSid: '',      
      to: `+51957834644` 
    }) 
   .then(message => {
    res.json({mensaje:"Notificacion Enviada"});
   }).catch(e =>{
        res.status(400).json({mensaje:"Error al Notificar"}) 
    }); 
}


module.exports = apiNotificacion; 