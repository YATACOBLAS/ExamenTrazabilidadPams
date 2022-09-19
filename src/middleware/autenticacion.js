const jwt = require('jsonwebtoken');


const verificarAuth= (req,res,next)=>{

let token=req.get('token');
jwt.verify(token,'SECRETO_PAMS_2021_TRAZABILIDAD_SECRETO',(err,decode)=>{

        if(err){
            res.status(401).json({
                mensaje: 'Unthorize request',
                err
            });
        }       
         req.usuario =decode.data
    next();

})
    
}

const verificarRolAdmin=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='Administrador'){
        next();
    }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            });
    }    
}

const verificarRolPatologia=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='Administrador' || rol=='Patologia' ){
       
        next();
      }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            }); 
    }
}

const verificarRolLaboratorioPams=(req,res,next)=>{

    const rol =req.usuario.rol
    if(rol=='Administrador' || rol=='Laboratorio Pams' ){      
        next();
      }else{    
            res.status(401).json({ mensaje: 'Usuario no valido'});
     
    }
    
}

const verificarRolLaboratorioTercerizado=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='Administrador' || rol=='Laboratorio Chincha' || rol=='Laboratorio Lima' ){
       
        next();
      }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            });
     
    }
    
}

const verificarRolImagenes=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='Administrador' || rol=='Imagen' ){
       
        next();
      }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            });
     
    }
    
}


const verificarRolAdmision=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='Administrador'  || rol=='Admision'){
       
        next();
      }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            });
     
    }
    
}


module.exports ={verificarAuth,verificarRolAdmin,verificarRolPatologia,verificarRolLaboratorioPams,
    verificarRolLaboratorioTercerizado,verificarRolAdmision,verificarRolImagenes};