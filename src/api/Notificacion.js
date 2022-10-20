const apiNotificacion = {};

require('dotenv').config();
const client = require('twilio')('ACabf5b97106cbd885f4b01a0f53616cbf', '9065c8ce95cdd29afb4779c4b89dcc4f'); 
 
apiNotificacion.notificar= (req,res)=>{
    let nombre=req.body.nombre;
    let examen=req.body.examen;
    let telefono=req.body.telefono;
    //   client.messages 
    //     .create({ 
    //    body: `Hola *${nombre}*🙂, el resultado del examen 🧪 *${examen}* que te realizaste en el policlinico PAMS 👨‍⚕, 
    //    esta listo, puede acercarse hoy mismo.`, 
    //    from: 'whatsapp:+14155238886',       
    //    to: 'whatsapp:+51957834644' 
    //  }) 
    // .then(message =>{ 
    //     //console.log(message.sid)
    //     res.json({mensaje:"Notificacion Enviada"});
    // })
    // .catch(e =>{
    //     //  console.log(e)
    //     res.json({mensaje:"Error al Notificar"});
         
    // }); 

   // ACabf5b97106cbd885f4b01a0f53616cbf
   //L-9065c8ce95cdd29afb4779c4b89dcc4f

   //TEST- AC129140c13823db21cef216ea12f5a0f9
   //TT- 78afda1182f29b46176495c816e0bc6e

   client.messages 
   .create({ 
      body: `Hola *${nombre}*🙂, el resultado del examen 🧪 *${examen}* que te realizaste en el policlinico PAMS 👨‍⚕ esta listo, puede acercarse hoy mismo.`,   
      messagingServiceSid: 'MGe17279bcf721b757fc2713443012ce54',      
      to: `+51957834644` 
    }) 
   .then(message => {
    res.json({mensaje:"Notificacion Enviada"});
   }).catch(e =>{
        res.status(400).json({mensaje:"Error al Notificar"}) 
    }); 
}


module.exports = apiNotificacion; 