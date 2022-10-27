const apiNotificacion = {};

require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID , process.env.TWILIO_TOKEN); 
 
apiNotificacion.notificar= (req,res)=>{
    let nombre=req.body.nombre;
    let examen=req.body.examen;
    let telefono=req.body.telefono;
   console.log(process.env.TWILIO_ACCOUNT_SID )
   client.messages 
   .create({ 
      body: `Hola *${nombre}*🙂, el resultado del examen 🧪 *${examen}* que te realizaste en el policlinico PAMS 👨‍⚕ esta listo, puede acercarse hoy mismo.`,   
      messagingServiceSid: process.env.MESSAGIND_SERVICE_SID,      
      to: `+51957834644` 
    })
    .then(message => {
    res.json({mensaje:"Notificacion Enviada"});
   }).catch(e =>{
        res.status(400).json({mensaje:"Error al Notificar"}) 
    }); 
}


module.exports = apiNotificacion; 