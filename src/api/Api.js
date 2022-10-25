const api = {};
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


api.listarEmpresa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empresa', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarUsuario = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vista_usuarios', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};


api.listarRol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rol', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};
api.listarEmpresa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from empresa', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};





api.listarRoles = (req, res) => {
    var idusuario = req.params.idusuario;
    req.getConnection((err, conn) => {
        conn.query('call SOCKET_OBTENER_USUARIO_ROL(?)', [idusuario], (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

api.saveRoles = (req, res) => {
    var idUsuario = req.body.idusuario;
    var descripcionRol = req.body.rol;
    req.getConnection((err, conn) => {
        conn.query('CALL INSERTAR_ROL(?,?) ', [idUsuario, descripcionRol], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                 return;
            } else {
                res.json({ mensaje: 'Registro Exitoso' });
                return;
            }
        });
    });
}

api.saveMuestra = (req, res) => {

    var descripcion = req.body.descripcion;
    var idTipoMuestraPat=req.body.idTipoMuestraPat;

    req.getConnection((err, conn) => {
        conn.query('call INSERTAR_MUESTRA_PATOLOGIA(?,?)', [idTipoMuestraPat, descripcion], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                return;
            } else {
                res.json({ mensaje: 'Registro Exitoso' });
                return;
            }
        });
    });
}




api.saveUsers = (req, res) => {
    var user = req.body.usuario;
    var email = req.body.email;
    var pass = bcrypt.hashSync(req.body.password, saltRounds);
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
            return;
        }
        conn.query('CALL INSERTAR_USUARIO(?,?,?)', [user, email, pass], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else {
                if (result[0][0].total) {
                    var total = result[0][0].total;
                    //var io=req.app.get('socket.io');
                    //io.sockets.emit('notificacion:regUsuario',result);
                    total > 0 ? res.json({ mensaje: 'Registro Exitoso' }) : res.status(500).json({ mensaje: 'No se registro' });
                }
                return;
            }
        });
    })
};


api.deleteUser = (req, res) => {
    var id = req.body.idUsuario;
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
            return;
        }
        conn.query('CALL ELIMINAR_USUARIO(?)', [id], (err, result) => {
            if (err) {
                    res.status(500).json({
                        mensaje: 'Ocurrio un error',
                        err
                    });
                    return;
                 } else {  
                     res.json({ mensaje: 'Elimiación Exitosa' }) 
                    return 
                }
            });
       });
};

api.login = (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;

    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                mensaje: 'Ocurrio en conexión',
            });
            return;
        }

        conn.query('call LOGIN(?)', [email], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else if (!result[0].length) {
                res.status(400).json({
                    mensaje: 'Usuario no valido'
                });
                return;
            } else {

                var dato = result[0][0];
                var password = dato.pass;
                var usuario_bloqueado= dato.estado; 

             if(usuario_bloqueado==3){
                    res.status(500).json({
                        mensaje: 'Usuario Bloqueado',
                        err
                    });
                    return;
             }else{
          
                    if (!bcrypt.compareSync(pass, password)) {
                        bloqueoUsuario(email,res,conn);
                        return;
                    } else {
                        var usuario = {
                            nombre: dato.descripcion,
                            email: dato.email,
                            rol: dato.rol,
                            idUsuario:dato.idUsuario
                        }
                        //generando un token
                        let token = jwt.sign({ data: usuario }, 'SECRETO_PAMS_2021_TRAZABILIDAD_SECRETO', { expiresIn: 60 * 60 * 24 * 30 })
                        //responder con las validaciones echas anteriormente
                        res.json({
                            usuario,
                            token: token
                        });
                        return;
                    }

             }


            }
        });
    })
};


bloqueoUsuario=(email,res,conn)=>{ 
    conn.query('CALL ATTEMPTED_LOGIN(?)',[email], (err, result, fields) => {
                    if (err) {
                    res.status(400).json(err)
                    return;
                    } else {
                       
                        res.status(500).json({
                            mensaje: 'Error en sus credenciales',
                            err
                        });
                        return;
                    }
  });
}


enviarMail= (email,code,res)=>{

    const config={
        host:"smtp.gmail.com",
        port:"587",
        auth:{
            user:"juanyatacoblas@gmail.com",
            pass:"rqycfgiiwwaqcxvd"
          }
    }


    const mensaje={
        from:"juanyatacoblas@gmail.com",
        to:email,
        subject:"Aplicación de ExamenesPAMS",
        text:`Tu código es : ${code}`
    }   

    const transport= nodemailer.createTransport(config);

    transport.sendMail(mensaje,(err,info)=>{
        if(err){
            res.status(500).json({
                mensaje: 'No se pudo enviar el código',
                err
            });
            return           
        }
      
        res.json({ mensaje: 'Código Enviado' }) 
        return  
        
     })
}




api.enviarCodigo = (req, res) => {
    var email = req.body.email;

    var code =  Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;//min-max-4 digitos
     

    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio en conexión',
            });
            return;
        }

        conn.query('call GUARDAR_CODIGO(?,?)', [email,code], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else {
             
                    enviarMail(email,code,res);                    
             return;
            }
        });
    })
};


api.verificarCodigo = (req, res) => {
   
    var email = req.body.email;
    var codigo = req.body.codigo;
   
   
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
      
            return;
        }
        conn.query('CALL VERIFICAR_CODIGO(?,?)', [email, codigo], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else {
                
                if (result[0].length) {
                    var verificado = result[0][0].verificado;
                    verificado > 0 ? res.json({ mensaje: 'Verificación correcta' }) : res.status(500).json({ mensaje: 'Código Incorrecto' });
                }
                return;
            }
        });
    })
};

api.cambiarClave = (req, res) => {

    var email = req.body.email;
    var pass = bcrypt.hashSync(req.body.password, saltRounds);
    var codigo = req.body.codigo;
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
            return;
        }
        conn.query('CALL CAMBIAR_CLAVE(?,?,?)', [email, pass,codigo], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else {
                if (result[0][0].total) {
                    var total = result[0][0].total;
                    //var io=req.app.get('socket.io');
                    //io.sockets.emit('notificacion:regUsuario',result);
                    total > 0 ? res.json({ mensaje: 'Cambio de clave exitoso' }) : res.status(500).json({ mensaje: 'No se pude cambiar clave' });
                }
                return;
            }
        });
    })
};




// LISTA PARA TRAZABILIDAD DE  ADMISION 
api.listaCompletaDeAtrasadosAdmision = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query(`select * from LISTA_COMPLETA_DE_RESULTADOS_ATRASADOS_PARA_ADMISION`, 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);   
            return;
        });
    });
};

api.listaCompletaDeHoyAdmision = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query(`SELECT * from LISTA_COMPLETA_DE_RESULTADOS_DE_HOY_PARA_ADMISION`, 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listaCompletaDePendientesAdmision = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query(`SELECT * from LISTA_COMPLETA_DE_RESULTADOS_PENDIENTES_PARA_ADMISION`, 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarAdmisionExamLaboratorio = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query("select * from LISTA_PENDIENTE_PARA_ADMISION_DE_RESULTADO_LABORATORIO  l Left Join resultadoExamen res "+
        "on res.idExamen=l.idExamen where res.estado = true or res.estado is null", 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarAdmisionExamPatologia = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query("select * from LISTA_PENDIENTE_PARA_ADMISION_DE_RESULTADO_PATOLOGIA  l "+
        "Left Join resultadoExamen res on res.idExamen=l.idExamen where res.estado = true or res.estado is null ",
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarResultados = (req, res) => { 
    var fechaDesde= req.body.fechaDesde;
    var fechaHasta= req.body.fechaHasta;   
        req.getConnection((err, conn) => {
            conn.query("CALL LISTAR_RESULTADO_EXAMENES_VISIBLES_PARA_ADMISION(?,?)",[fechaDesde,fechaHasta],
            (err, result) => {
                if (err) { res.status(400).json(err) 
                    return;};
                res.json(result[0]);
                return;
            });
        });
};

api.cambiarVisibilidadResultado = (req, res) => { 
    var idExamen=req.body.idExamen;
    req.getConnection((err, conn) => {
        conn.query("update resultadoExamen set estado=false where idExamen=?",[idExamen],
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
          return;
         });
    });
};

api.getFile = (req, res) => {
    
    var idResultado=req.body.id;

    req.getConnection((err, conn) => {
        conn.query('select pdf,nombrePdf from resultadoExamen where idResultado = ?',[idResultado], (err, result) => {
            if (err){
                res.status(500).json({ mensaje: 'Error en consulta'})
                return;
            }
            else{
                res.json(result[0]);
                return;
            }
            
        })
    })

}

module.exports = api;
//esto me servira para registrar lso examenes
