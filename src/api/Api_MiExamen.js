const apiMiExamen={};
apiMiExamen.consultaExamen =(req,res)=>{
    var dni = req.body.dni;
req.getConnection((err,conn)=>{
        conn.query("call CONSULTA_DE_MIS_EXAMENES_AUXILIARES(?)",[dni],(err,result)=>{
            if(err){  
                res.status(500).json(err);
            }
            else{
                res.json(result[0]);
            }
            
            return;
        })
})

}


module.exports = apiMiExamen;