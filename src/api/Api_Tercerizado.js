const apiLabTercerizado = {};

apiLabTercerizado.listarExamPendientesLabChincha = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_DE_RESULTADO_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err)   
                return;};
            res.json(result);
            return;
        });
    });
};

apiLabTercerizado.listarExamEditarLabChincha = (req, res) => { 


    var desde=req.body.desde;
    var hasta=req.body.hasta; 

    req.getConnection((err, conn) => {
        conn.query('CALL LISTA_PARA_EDITAR_RESULTADOS_LABORATORIO_PAMS(?,?)', [desde,hasta], (err, result) => {
            if (err) {
             res.status(400).json(err)
             return;
            };
            res.json(result[0]);
            return;
        });
    });
  
};




apiLabTercerizado.listarExamPendientesLabLima = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_DE_RESULTADO_PATOLOGIA_PAMS', (err, result) => {
            if (err) {
             res.status(400).json(err)
             return;
            };
            res.json(result);
            return;
        });
    });
};
apiLabTercerizado.listarExamEditarLabLima = (req, res) => { 

    var desde=req.body.desde;
    var hasta=req.body.hasta; 
    req.getConnection((err, conn) => {
        conn.query('CALL LISTA_PARA_EDITAR_RESULTADOS_PATOLOGIA_PAMS(?,?)', [desde,hasta], (err, result) => {
            if (err) {
             res.status(400).json(err)
             return;
            };
            res.json(result[0]);
            return;
        });
    });
  
};


//PDF CHINCHA
apiLabTercerizado.guardarResultadoPDFLaboratorio = (req, res) => {    

    //el primero es el original
    //  console.log("descripcion: ",req.file);
    // console.log("buffer:", req.file.buffer);
    // console.log("buffer-Length:", (req.file.buffer).length);
    var idExamen=req.body.idExamen;
    var fechaInforme=req.body.fechaInforme; 
    var horaInforme=req.body.horaInforme; 
    var descripcion = req.body.descripcion;
    var nivelUrgencia=req.body.nivelUrgencia;
    var pdf=req.file.buffer;
    var nombrePdf=req.file.originalname;
    var idUsuario=req.usuario.idUsuario;  
    req.getConnection((err, conn) => {
        conn.query('CALL INSERTAR_RESULTADO_EXAMEN_LABORATORIO(?,?,?,?,?,?,?,?)',
        [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,nombrePdf,idUsuario,idExamen], (err, result) => {
            if(err){ 
                res.status(400).json(err)
               
                return;
            };
            res.json(result);
            return;
        });
    });
    };

    apiLabTercerizado.modificarResultadoPDFLaboratorio = (req, res) => {    

        var fechaInforme=req.body.fechaInforme; 
        var horaInforme=req.body.horaInforme; 
        var descripcion = req.body.descripcion;
        var nivelUrgencia=req.body.nivelUrgencia;
        var pdf=req.file.buffer;
        var nombrePdf=req.file.originalname;
        var idResultado=req.body.idResultado;
        req.getConnection((err, conn) => {
            conn.query('CALL MODIFICAR_RESULTADO_EXAMEN_LABORATORIO(?,?,?,?,?,?,?)',
            [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,nombrePdf,idResultado], (err, result) => {
                if(err){ 
                    res.status(400).json(err)
                    return;
                };
                res.json(result);
                return;
            });
        });
        };

//PDF LIMA
apiLabTercerizado.guardarResultadoPDFPatologia = (req, res) => {    

    var idExamen=req.body.idExamen;
    var fechaInforme=req.body.fechaInforme; 
    var horaInforme=req.body.horaInforme; 
    var descripcion = req.body.descripcion;
    var nivelUrgencia=req.body.nivelUrgencia;
    var pdf=req.file.buffer;
    var nombrePdf=req.file.originalname;
    var idUsuario=req.usuario.idUsuario;  
    req.getConnection((err, conn) => {
        conn.query('CALL INSERTAR_RESULTADO_EXAMEN_PATOLOGIA(?,?,?,?,?,?,?,?)',
        [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,nombrePdf,idUsuario,idExamen], (err, result) => {
            if(err){ 
                res.status(400).json(err)
                return;
            };
            res.json(result);
            return;
        });
    });
    };

    

apiLabTercerizado.modificarResultadoPDFPatologia = (req, res) => {    

        var fechaInforme=req.body.fechaInforme; 
        var horaInforme=req.body.horaInforme; 
        var descripcion = req.body.descripcion;
        var nivelUrgencia=req.body.nivelUrgencia;
        var pdf=req.file.buffer;
        var nombrePdf=req.file.originalname;
        var idResultado=req.body.idResultado;  
        req.getConnection((err, conn) => {
            conn.query('CALL MODIFICAR_RESULTADO_EXAMEN_PATOLOGIA(?,?,?,?,?,?,?)',
            [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,nombrePdf,idResultado], (err, result) => {
                if(err){ 
                    res.status(400).json(err)
                    return;
                };
                res.json(result);
                return;
            });
        });
        };


module.exports =apiLabTercerizado;