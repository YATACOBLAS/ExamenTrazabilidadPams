const apiNotificacion = {};

require('dotenv').config();
const client = require('twilio')('ACabf5b97106cbd885f4b01a0f53616cbf', 'c7fca78f628b0ecbdd39026f86f0025c'); 
 
apiNotificacion.notificar= (req,res)=>{
    let nombre=req.body.nombre;
    let examen=req.body.examen;
      client.messages 
        .create({ 
       body: `Hola *${nombre}*🙂, el resultado del examen 🧪 *${examen}* que te realizaste en el policlinico PAMS 👨‍⚕, 
       esta listo, puede acercarse hoy mismo.`, 
       from: 'whatsapp:+14155238886',       
       to: 'whatsapp:+51957834644' 
     }) 
    .then(message =>{ 
        //console.log(message.sid)
        res.json({mensaje:"Notificacion Enviada"});
    })
    .catch(e =>{
        //  console.log(e)
        res.json({mensaje:"Error al Notificar"});
         
    }); 
    return;

}


module.exports = apiNotificacion; 