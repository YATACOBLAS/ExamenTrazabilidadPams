const express =require('express');
const router= express.Router();
const apiNotificacion= require('../api/Notificacion.js');
const api= require('../api/Api.js');
const apiLaboratorio =require('../api/Api_Laboratorio.js');
const apiPatologia = require('../api/Api_Patologia.js');
const apiImagenes = require('../api/Api_Imagenes.js');
const apiTercerizado=require('../api/Api_Tercerizado');
const apiMiExamen = require('../api/Api_MiExamen.js');
const multer = require('multer');
const path=require('path');
const { v4:uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination:path.join(__dirname,'../imagenes'),
    filename:(req,file,cb)=>{
     cb(null, uuidv4()+path.extname(file.originalname).toLocaleLowerCase());
    }
})

const upload = multer({
    storage,
    dest:path.join(__dirname,'../imagenes'),
    fileFilter:(req,file,cb)=>{
        console.log(file)
        console.log('entre');
        const filetypes=/jpg|jpeg|png/;
        //testear siel mimetype es valido
        const mimetype= filetypes.test(file.mimetype);
        //textraer la etension del archivo para guardarlo
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname) 
            return cb(null,true);
        cb('Error en extension de archivo')
    },
}).array('images')


const {verificarAuth,verificarRolAdmin,verificarRolPatologia,verificarRolLaboratorioPams,
    verificarRolLaboratorioTercerizado,verificarRolAdmision,verificarRolImagenes}= require('../middleware/autenticacion');




router.get('/listarEmpresa', api.listarEmpresa);
//por el momento nadie lo usa se3ra quitado si no tiene uso
router.get('/obtenerRol/:idusuario', api.listarRoles);

router.post('/saveUsers',api.saveUsers);
router.post('/Login', api.login);

//LsitarEmpresa
router.get('/listarEmpresa', api.listarEmpresa);
//Administrador
router.get('/listarUsuario', api.listarUsuario);
router.get('/listarRol', api.listarRol);
router.post('/saveRoles',[verificarAuth,verificarRolAdmin], api.saveRoles);
router.post('/deleteUser',[verificarAuth,verificarRolAdmin], api.deleteUser);


//MUESTRA
router.post('/saveMuestra', api.saveMuestra);

//Patologia
router.get('/listarTipoMuestraPat', apiPatologia.listarTipoMuestraPat);
router.get('/listarMuestraPat/:idMuestra', apiPatologia.listarMuestraPat);
router.post('/listarExamenPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.listarExamenPatologia);
                    
router.get('/listarExamPendientesPatologia', apiPatologia.listarExamPendientesPatologia);
router.post('/saveExamPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.saveExamPatologia);
router.post('/modificarExamPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.modificarExamPatologia);
router.post('/modificarUnSoloExamPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.modificarUnSoloExamPatologia);
router.post('/eliminarExamPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.eliminarExamPatologia);
router.post('/eliminarExamIndividualPatologia',[verificarAuth,verificarRolPatologia], apiPatologia.eliminarExamIndividualPatologia);

//LaboratorioClinicoPams
router.get('/listarTipoMuestraLab', apiLaboratorio.listarTipoMuestraLab);
router.get('/listarMuestraLab/:idMuestra', apiLaboratorio.listarMuestraLab);
router.post('/listarExamenLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.listarExamenLaboratorio);
router.get('/listarExamPendientesLaboratorio', apiLaboratorio.listarExamPendientesLaboratorio);

router.post('/saveExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.saveExamLaboratorio);
router.post('/modificarExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.modificarExamLaboratorio);
router.post('/modificarUnSoloExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.modificarUnSoloExamLaboratorio);
router.post('/eliminarExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.eliminarExamLaboratorio);
router.post('/eliminarExamIndividualLaboratorio',[verificarAuth,verificarRolLaboratorioPams], apiLaboratorio.eliminarExamIndividualLaboratorio);
//LaboratorioTercerizadoAmbos
router.post('/guardarResultadoPDFLaboratorio',[verificarAuth,verificarRolLaboratorioTercerizado],(multer().single("file")), apiTercerizado.guardarResultadoPDFLaboratorio);
router.post('/guardarResultadoPDFPatologia',[verificarAuth,verificarRolLaboratorioTercerizado],(multer().single("file")), apiTercerizado.guardarResultadoPDFPatologia);


//LaboratorioTercerizadoLima
router.get('/listarExamPendientesLabLima',[verificarAuth,verificarRolLaboratorioTercerizado], apiTercerizado.listarExamPendientesLabLima);
//LaboratorioTercerizadoChincha
router.get('/listarExamPendientesLabChincha',[verificarAuth,verificarRolLaboratorioTercerizado], apiTercerizado.listarExamPendientesLabChincha);

//Imagenes
router.get('/listarEspecialidad',apiImagenes.listarEspecialidad);
router.get('/listarTipoMuestraImagen',apiImagenes.listarTipoMuestraImagen);
router.post('/listarMuestraImagen',apiImagenes.listarMuestraImagen);
router.get('/listarTipoPlaca',apiImagenes.listarTipoPlaca);
router.get('/listarTipoAtencion',apiImagenes.listarTipoAtencion);
router.get('/listarRolMedico',apiImagenes.listarRolMedico);
router.get('/listarMedico',apiImagenes.listarMedico);
router.get('/listarEspecialidad',apiImagenes.listarEspecialidad);

router.post('/guardarExamImagenes',[verificarAuth,verificarRolImagenes],upload, apiImagenes.guardarExamImagenes);
router.post('/modificarExamImagenes',[verificarAuth,verificarRolImagenes], apiImagenes.modificarExamImagenes);
router.post('/eliminarExamImagen',[verificarAuth,verificarRolImagenes], apiImagenes.eliminarExamImagen);
router.post('/cambiarEstadoImagen',[verificarAuth,verificarRolImagenes], apiImagenes.cambiarEstadoImagen);
router.post('/listarExamenesImagenes',[verificarAuth,verificarRolImagenes],apiImagenes.listarExamenesImagenes)

router.post('/insertarMedico',[verificarAuth,verificarRolImagenes],apiImagenes.insertarMedico)

//Admision
router.get('/listaCompletaDeAtrasadosAdmision',[verificarAuth,verificarRolAdmision], api.listaCompletaDeAtrasadosAdmision);
router.get('/listaCompletaDeHoyAdmision',[verificarAuth,verificarRolAdmision], api.listaCompletaDeHoyAdmision);
router.get('/listaCompletaDePendientesAdmision',[verificarAuth,verificarRolAdmision], api.listaCompletaDePendientesAdmision);
router.get('/listarAdmisionExamLaboratorio',[verificarAuth,verificarRolAdmision], api.listarAdmisionExamLaboratorio);
router.get('/listarAdmisionExamPatologia',[verificarAuth,verificarRolAdmision], api.listarAdmisionExamPatologia);
router.post('/listarResultados',[verificarAuth,verificarRolAdmision], api.listarResultados);
router.post('/cambiarVisibilidadResultado',[verificarAuth,verificarRolAdmision], api.cambiarVisibilidadResultado);
//notificar Paciente
router.post('/notificar',[verificarAuth,verificarRolAdmision], apiNotificacion.notificar);


//Solo para paciente de PAMS
router.post('/listarMiExamen',apiMiExamen.consultaExamen);

//rutas de prueba
router.post('/getFile',api.getFile);
module.exports=router;