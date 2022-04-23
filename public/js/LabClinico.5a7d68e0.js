(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LabClinico"],{"431a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:!0}},[a("div",{staticClass:"text-center"},[a("h2",[e._v("Fecha de Registro Laboratorio")]),a("h3",[e._v("Fecha: "+e._s(e.FechaActual()))])]),a("v-form",{ref:"formularioLaboratorio",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.Guardar(t)}}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"10"}},[a("v-text-field",{attrs:{autofocus:!0,rules:e.dniRules,type:"number",color:e.color_salud,label:"DNI",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.dni,callback:function(t){e.dni=t},expression:"dni"}})],1),a("v-col",{class:{"disable-events":e.btnObtenerPaciente},attrs:{cols:"2"}},[a("v-btn",{staticClass:"py-1",attrs:{disabled:8!==e.dni.length,block:"",dark:"",color:e.color_salud},on:{click:e.obtenerPacienteLabClinico}},[a("v-icon",[e._v(" search ")])],1)],1)],1),a("v-text-field",{attrs:{rules:e.requeridoRules,color:e.color_salud,label:"Nombres",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.nombres,callback:function(t){e.nombres=t},expression:"nombres"}}),a("v-text-field",{attrs:{rules:e.requeridoRules,color:e.color_salud,label:"Apellidos",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{rules:e.requeridoRules,type:"date",color:e.color_salud,label:"Fecha Nacimiento",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.fechaNacimiento,callback:function(t){e.fechaNacimiento=t},expression:"fechaNacimiento"}}),a("v-text-field",{attrs:{rules:e.telefonoRules,type:"number",color:e.color_salud,label:"Teléfono",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.telefono,callback:function(t){e.telefono=t},expression:"telefono"}}),a("v-select",{class:e.color_text_salud,attrs:{items:e.itemsEmpresa,"item-text":"descripcion","item-value":"descripcion","item-color":e.color_salud,label:"Empresa",color:e.color_salud,"background-color":e.color_lighten_salud,dense:"",outlined:""},model:{value:e.empresa,callback:function(t){e.empresa=t},expression:"empresa"}}),"OTROS"===e.empresa?a("v-text-field",{attrs:{rules:e.empresaRules,autofocus:!0,type:"text",color:e.color_salud,label:"Nueva Empresa",dense:"","background-color":e.color_lighten_salud},model:{value:e.nuevaEmpresa,callback:function(t){e.nuevaEmpresa=t},expression:"nuevaEmpresa"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{class:e.color_text_salud,attrs:{items:e.dataTipoMuestraLab,"item-color":e.color_salud,label:"Tipo de Muestra",color:e.color_salud,"background-color":e.color_lighten_salud,"item-text":"descripcion","item-value":"idTipoMuestraLab",dense:"",outlined:""},model:{value:e.dataTipoMuestraLabSelected,callback:function(t){e.dataTipoMuestraLabSelected=t},expression:"dataTipoMuestraLabSelected"}}),e.dataMuestraLab.length>0?a("div",{staticClass:"d-flex flex-row "},[a("v-select",{class:e.color_text_salud,attrs:{items:e.dataMuestraLab,"item-color":e.color_salud,label:"Tipo de Muestra",color:e.color_salud,"background-color":e.color_lighten_salud,"item-text":"descripcion","item-value":"idMuestraLab",dense:"",outlined:""},model:{value:e.examen,callback:function(t){e.examen=t},expression:"examen"}}),a("v-btn",{staticClass:"flex-row mx-2",class:e.color_salud,attrs:{disabled:""===e.examen,icon:"",color:"white"},on:{click:function(t){return e.agregarExamen(e.examen)}}},[a("v-icon",[e._v("add")])],1)],1):e._e()],1)],1),a("h5",[e._v("Examenes Realizados")]),a("p",{staticClass:"font-weight-bold red--text"},[e._v(e._s(e.mensajeExamen)+" ")]),a("v-row",{staticClass:"ma-0 pa-0"},e._l(e.examenesLab,(function(t,i){return a("v-col",{key:i,staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"6",md:"4 mb-2"}},[a("v-card",{staticClass:"pt-3 mx-1 px-1 blue lighten-3",attrs:{outlined:""}},[a("v-btn",{staticClass:"float-right red",attrs:{"x-small":!0,color:"white",icon:""},on:{click:function(a){return e.eliminarExamen(t.id)}}},[a("v-icon",[e._v("close")])],1),a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:t.muestra,value:t.id,color:e.color_salud},model:{value:e.examenesRealizadosLab,callback:function(t){e.examenesRealizadosLab=t},expression:"examenesRealizadosLab"}})],1)],1),e.verificarExamenRealizado(t.id,i)?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Enviado?",color:e.color_salud,value:!e.enviado,"hide-details":""},model:{value:e.examenesLab[i].enviado,callback:function(t){e.$set(e.examenesLab[i],"enviado",t)},expression:"examenesLab[index].enviado"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"date",color:e.color_salud,label:"Entrega del Resultado",dense:"",outlined:"","background-color":e.color_lighten_salud},model:{value:e.examenesLab[i].fechaResultado,callback:function(t){e.$set(e.examenesLab[i],"fechaResultado",t)},expression:"examenesLab[index].fechaResultado"}})],1)],1):e._e()],1)],1)})),1),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[0==e.ambienteDeModificacion?a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"px-5",class:{"disable-events":e.btnGuardarDeshabilitado},attrs:{block:"",dark:"",color:"blue darken-4 ",type:"submit"}},[e._v("Guardar")])],1):e._e(),1==e.ambienteDeModificacion?a("v-col",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:" mx-1",class:{"disable-events":e.btnGuardarDeshabilitado},attrs:{block:"",dark:"",color:"blue darken-4 "},on:{click:function(t){return e.Modificar()}}},[e._v("Modificar")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:" mx-1 ",attrs:{block:"",dark:""},on:{click:function(t){return e.Cancelar()}}},[e._v("Cancelar")])],1)],1)],1):e._e()],1),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[""!==e.mensajeResultadoTransaccion?a("v-alert",{attrs:{dense:"",outlined:"",type:e.tipoMensajeResultado?"success":"error"}},[e._v(" "+e._s(e.mensajeResultadoTransaccion))]):e._e()],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[a("Tabla",{ref:"tabla",attrs:{fechaActual:e.mensaje},on:{obtenerFechaHoy:e.FechaActual,fillDataModificarLab:e.fillDataToMod,limpiarPat:e.Limpiar}})],1)],1),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogNoData,callback:function(t){e.dialogNoData=t},expression:"dialogNoData"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.mensajeNoData)+" ")])]),a("v-list-item-content",[a("v-layout",{attrs:{"justify-center":!0}},[a("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(t){e.dialogNoData=!1}}},[e._v("Cerrar")])],1)],1)],1)],1)],1)},s=[],n=a("2909"),o=a("1da1"),l=a("5530"),r=(a("498a"),a("caad"),a("2532"),a("4de4"),a("99af"),a("96cf"),a("2f62")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"ma-0"},[a("v-col",{staticClass:" pa-1",attrs:{cols:"12",md:"5"}},[a("v-text-field",{attrs:{type:"date",color:" blue darken-2",label:"Desde",dense:"",outlined:"","background-color":"blue lighten-5"},model:{value:e.desde,callback:function(t){e.desde=t},expression:"desde"}})],1),a("v-col",{staticClass:" pa-1",attrs:{cols:"10",md:"5"}},[a("v-text-field",{attrs:{type:"date",color:" blue darken-2",label:"Hasta",dense:"",outlined:"","background-color":"blue lighten-5"},model:{value:e.hasta,callback:function(t){e.hasta=t},expression:"hasta"}})],1),a("v-col",{staticClass:"ma-0  pa-1",attrs:{cols:"2",md:"2"}},[a("v-btn",{staticClass:"py-1",attrs:{block:"",dark:"",color:" blue darken-4 "},on:{click:e.ListarMuestras}},[a("v-icon",[e._v(" search ")])],1)],1)],1),a("v-text-field",{staticClass:"mb-2",attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1 table_main font-weight-medium",attrs:{dense:"","fixed-header":"",headers:e.dataHeaders,items:e.LaboratorioData,search:e.search,loading:e.loading,"loading-text":"Cargando.. Espere porfavor"},scopedSlots:e._u([{key:"item.acciones",fn:function(t){var i=t.item;return[a("v-btn",{staticClass:"ma-1",attrs:{icon:"",outlined:"",small:""},on:{click:function(t){return e.toDataDialog(i.detalleExamen,i.paciente)}}},[a("v-icon",[e._v("view_list")])],1),a("v-btn",{staticClass:"ma-1",attrs:{icon:"",outlined:"",small:""},on:{click:function(t){return e.editarDataLab(i)}}},[a("v-icon",[e._v("edit")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(t){return e.ShowDialogDeleteLab(i.examenes,i.paciente,i.id,i.detalleExamen)}}},[a("v-icon",[e._v("delete")])],1)]}}],null,!0)}),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogDeleteExamPat,callback:function(t){e.dialogDeleteExamPat=t},expression:"dialogDeleteExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.dataDialogDeletePat.message)+" "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.examen)+" ")])]),a("div",{staticClass:"font-weight-bold"},[e._v(" de "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.nombre)+" ")])])]),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-space-between":!0}},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red darken-4"},on:{click:function(t){return e.Eliminar(e.dataDialogDeletePat.data)}}},[e._v("Si")]),a("v-btn",{attrs:{rounded:"",dark:""},on:{click:e.NotShowDialogDeletePat}},[e._v("No")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"350",persistent:""},model:{value:e.dialogDetalleExamPat,callback:function(t){e.dialogDetalleExamPat=t},expression:"dialogDetalleExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center blue darken-2"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.dataDialogDetallePat.nombre)+" ")])]),a("v-simple-table",{attrs:{dense:"","fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[e._v(" Examen ")]),a("th",[e._v(" Registrado ")]),a("th",[e._v(" Atendido ")]),a("th",[e._v(" Enviado ")]),a("th",[e._v(" Resultado ")])])]),a("tbody",e._l(e.dataDialogDetallePat.data,(function(t,i){return a("tr",{key:i},[a("td",{staticClass:" text-center"},[e._v(e._s(t.examen))]),a("td",{staticClass:" text-center",class:{red:null==t.fechaRegistroExamen}},[e._v(e._s(e.convertidorFecha(t.fechaRegistroExamen)))]),a("td",{staticClass:"text-center",class:{red:0==t.estadoEnvio}},[e._v(e._s(e.convertidorFecha(t.fechaAtencion)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaAtencion}},[e._v(e._s(t.estadoEnvio))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaEntregaResultado}},[e._v(e._s(e.convertidorFecha(t.fechaEntregaResultado)))])])})),0)]},proxy:!0}])}),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-center":!0}},[a("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(t){e.dialogDetalleExamPat=!1}}},[e._v("Cerrar")])],1)],1)],1)],1)],1)},d=[],u={name:"TablaPatologia",data:function(){return{loading:!0,dialogDetalleExamPat:!1,dialogDeleteExamPat:!1,dataDialogDeletePat:{message:"Eliminar",id:null,examen:null,nombre:null,data:null},dataDialogDetallePat:{nombre:"",data:[]},search:"",dataHeaders:[{text:"*",align:"start",sortable:!1,value:"index",class:"headerStyleLeft blue darken-2  text-center  font-weight-bold white--text "},{text:"EMPRESA",sortable:!1,value:"empresa",class:"  blue darken-2   font-weight-bold white--text"},{text:"DNI",sortable:!1,value:"dni",class:" blue darken-2 text-center  font-weight-bold white--text"},{align:"Center",sortable:!1,text:"Paciente",value:"paciente",class:" blue darken-2  text-center  font-weight-bold white--text"},{text:"Examen(Cant.)",sortable:!1,value:"examenes",class:" blue darken-2  text-center  font-weight-bold white--text"},{text:"Fech. Nac",sortable:!1,value:"fechNac",class:"headerStyleRigtht  blue darken-2 text-center  font-weight-bold white--text"},{text:"Telefono",sortable:!1,value:"telefono",class:"headerStyleRigtht  blue darken-2 text-center  font-weight-bold white--text"},{text:"",sortable:!1,value:"acciones",class:"headerStyleRigtht  blue darken-2  text-center  font-weight-bold white--text"}],LaboratorioData:[],dataDetalleExam:[],desde:"",hasta:""}},computed:Object(l["a"])({},Object(r["d"])(["token"])),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.inicializar();case 2:e.ListarMuestras();case 3:case"end":return t.stop()}}),t)})))()},methods:{inicializar:function(){this.desde=this.FechaActual(),this.hasta=this.FechaActual()},FechaActual:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var i=e.getDate();return i=i<10?"0"+i:i,t+"-"+a+"-"+i},toDataDialog:function(e,t){this.dataDialogDetallePat.data=e,this.dataDialogDetallePat.nombre=t,this.dialogDetalleExamPat=!0},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var s=t.getDate();return s=s<10?"0"+s:s,s+"/"+i+"/"+a},ShowDialogDeleteLab:function(e,t,a,i){this.dataDialogDeletePat.data=i,this.dataDialogDeletePat.examen=e,this.dataDialogDeletePat.nombre=t,this.dataDialogDeletePat.id=a,this.dialogDeleteExamPat=!0},NotShowDialogDeletePat:function(){this.dialogDeleteExamPat=!1,this.dataDialogDeletePat.data=null,this.dataDialogDeletePat.id=null,this.dataDialogDeletePat.nombre=null,this.dataDialogDeletePat.examen=null},Eliminar:function(e){var t=this,a={"Content-Type":"application/json",token:this.token};this.axios.post("/eliminarExamLaboratorio",e,{headers:a}).then((function(e){t.$emit("limpiarPat"),t.dialogDeleteExamPat=!1,t.ListarMuestras()})).catch((function(e){t.ListarMuestras(),e.response.data.sqlMessage?t.mensajeResultadoTransaccion=e.response.data.sqlMessage:t.mensajeResultadoTransaccion=e,setTimeout((function(){t.mensajeResultadoTransaccion=""}),2e3)})),this.dialogLaboratorio=!1},editarDataLab:function(e){this.$emit("fillDataModificarLab",e)},ListarMuestras:function(){var e=this,t={"Content-Type":"application/json",token:this.token};this.LaboratorioData=[],this.dataDetalleExam=[],this.dataDialogDetallePat={nombre:"",data:[]},this.axios.post("/listarExamenLaboratorio",{desde:this.desde,hasta:this.hasta},{headers:t}).then((function(t){for(var a="",i="",s=[],n=t.data,o=0;o<t.data.length;o++){i=n[0].dni;var l=n.filter((function(e){if(e.dni!=i)return e}));n=n.filter((function(e){if(e.dni==i)return e}));for(var r=0;r<n.length;r++)s.push(n[r]),a=0!=r?a+", "+n[r].examen:n[r].examen;if(e.dataDetalleExam.push({index:o+1,id:n[0].idPaciente,idExamen:n[0].idExamen,empresa:n[0].empresa,dni:i,nombres:n[0].nombres,apellidos:n[0].apellidos,paciente:n[0].nombres+" "+n[0].apellidos,estadoEnvio:n[0].estadoEnvio,fechNac:e.convertidorFecha(n[0].fechaNacimiento),telefono:n[0].telefono,examenes:a,detalleExamen:s,idMuestraPat:n[0].idMuestraLab}),n=l,console.log(e.dataDetalleExam),a="",i="",s=[],0==n.length)break}e.loading=!1,e.LaboratorioData=e.dataDetalleExam})).catch((function(e){console.log(e)}))}}},h=u,m=a("2877"),b=a("6544"),f=a.n(b),p=a("8336"),v=a("b0af"),x=a("62ad"),g=a("8fea"),D=a("169a"),k=a("132d"),_=a("a722"),L=a("5d23"),E=a("0fd9"),C=a("1f4f"),M=a("8654"),w=Object(m["a"])(h,c,d,!1,null,null,null),R=w.exports;f()(w,{VBtn:p["a"],VCard:v["a"],VCol:x["a"],VDataTable:g["a"],VDialog:D["a"],VIcon:k["a"],VLayout:_["a"],VListItemContent:L["a"],VRow:E["a"],VSimpleTable:C["a"],VTextField:M["a"]});var y={name:"LabClinico",components:{Tabla:R},data:function(){return{color_salud:"blue darken-3",color_lighten_salud:"blue lighten-5",color_text_salud:"blue--text text-lighten-4",btnGuardarDeshabilitado:!1,btnObtenerPaciente:!1,dialogNoData:!1,mensajeNoData:"",mensajeResultadoTransaccion:"",tipoMensajeResultado:!1,nuevaTipoMuestra:!1,nuevaMuestra:"",ambienteDeModificacion:!1,dniRules:[function(e){return!!e&&8==e.length||"8 Numeros"}],requeridoRules:[function(e){return!!e||"es requerido"}],empresaRules:[function(e){return!!e||"es requerido"}],telefonoRules:[function(e){return!!e&&e.length>8&&e.length<12||"cantidad min 9 y 11 max"}],examen:"",dataTempToDeleteAboutModify:[],examenesRealizadosLab:[],enviado:!0,dataTipoMuestraLab:[],dataTipoMuestraLabSelected:0,dataMuestraLab:[],itemsEmpresa:[],examenesLab:[],dni:"",nombres:"",apellidos:"",fechaNacimiento:"",telefono:"",empresa:"",nuevaEmpresa:""}},mounted:function(){this.getTipoMuestraLab(),this.listarEmpresa()},computed:Object(l["a"])({mensajeExamen:function(){return!this.examenesLab.length>0?"Se require seleccionar Examenes":""}},Object(r["d"])(["token"])),watch:{dataTipoMuestraLabSelected:function(e){e>0&&this.getMuestraLab(e)}},methods:Object(l["a"])(Object(l["a"])({},Object(r["b"])(["getPaciente"])),{},{obtenerPacienteLabClinico:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,!0;case 2:return e.btnObtenerPaciente=t.sent,e.nombres="",e.apellidos="",a=localStorage.getItem("api"),t.next=8,e.getPaciente({payload:e.dni});case 8:return i=t.sent,i.nombres?(e.nombres=i.nombres,e.apellidos=i.apellidos):"Ha superado la cantidad de consultas mensuales: 250"==i&&2!=a?(localStorage.setItem("api",2),e.obtenerPacienteLabClinico()):(e.mensajeNoData=i,e.dialogNoData=!0),t.next=12,!1;case 12:e.btnObtenerPaciente=t.sent;case 13:case"end":return t.stop()}}),t)})))()},listarEmpresa:function(){var e=this;this.axios.get("/listarEmpresa").then((function(t){t.data.push({idEmpresa:0,descripcion:"OTROS"}),e.itemsEmpresa=t.data})).catch((function(e){return console.log(e)}))},getTipoMuestraLab:function(){var e=this;this.axios.get("/listarTipoMuestraLab").then((function(t){e.dataTipoMuestraLab=t.data})).catch((function(e){console.log(e)}))},getMuestraLab:function(e){var t=this;this.axios.get("/listarMuestraLab/".concat(e)).then((function(e){t.dataMuestraLab=e.data})).catch((function(e){console.log(e)}))},FechaActual:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var i=e.getDate();return i=i<10?"0"+i:i,this.mensaje=t+"-"+a+"-"+i,t+"-"+a+"-"+i},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var s=t.getDate();return s=s<10?"0"+s:s,a+"-"+i+"-"+s},Guardar:function(){var e=this,t={"Content-Type":"application/json",token:this.token},a=this.examenesLab.length>0,i=this.$refs.formularioLaboratorio.validate();a&&i&&(this.btnGuardarDeshabilitado=!0,this.axios.post("/saveExamLaboratorio",{dni:this.dni,nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),fechaNacimiento:this.fechaNacimiento,telefono:this.telefono,empresa:""===this.nuevaEmpresa?this.empresa:this.nuevaEmpresa,fechaRegistroExamen:this.FechaActual(),examenes:this.examenesLab},{headers:t}).then((function(t){e.dni="",e.nombres="",e.apellidos="",e.fechaNacimiento="",e.telefono="",e.empresa="",e.examenesLab=[],e.examenesRealizadosLab=[],t.data.mensaje&&(e.tipoMensajeResultado=!0,e.mensajeResultadoTransaccion=t.data.mensaje,setTimeout((function(){e.mensajeResultadoTransaccion="",e.tipoMensajeResultado=!1}),2e3)),e.$refs.tabla.ListarMuestras(),e.btnGuardarDeshabilitado=!1})).catch((function(t){var a;e.$refs.tabla.ListarMuestras(),t.response.data.sqlMessage?e.mensajeResultadoTransaccion=null===(a=t.response.data)||void 0===a?void 0:a.sqlMessage:e.mensajeResultadoTransaccion=t,setTimeout((function(){e.mensajeResultadoTransaccion=""}),2e3),e.btnGuardarDeshabilitado=!1})))},verificarExamenRealizado:function(e,t){var a=this.examenesRealizadosLab.includes(e);return a?(this.examenesLab[t].atendido=!0,this.examenesLab[t].fechaResultado=this.FechaActual()):(this.examenesLab[t].atendido=!1,this.examenesLab[t].enviado=!1,this.examenesLab[t].fechaResultado=""),a},agregarExamen:function(e){var t=this;if(null!==e){var a={};this.ambienteDeModificacion?this.dataMuestraLab.filter((function(i){i.idMuestraLab===e&&(a={doExamen:"Nuevo",idPaciente:t.examenesLab[0].idPaciente,idExamen:0,id:i.idMuestraLab,muestra:i.descripcion,atendido:!1,enviado:!1,fechaResultado:""})})):this.dataMuestraLab.filter((function(t){t.idMuestraLab===e&&(a={id:t.idMuestraLab,muestra:t.descripcion,atendido:!1,enviado:!1,fechaResultado:""})}));var i=!1;this.examenesLab.filter((function(e){e.id===a.id&&(i=!0)})),i||this.examenesLab.push(a),this.examen=""}},eliminarExamen:function(e){var t=this;this.ambienteDeModificacion&&(this.examenesLab=this.examenesLab.filter((function(a){return a.id==e&&"Modificar"==a.doExamen&&(a.doExamen="Eliminar",t.dataTempToDeleteAboutModify.push(a)),a}))),this.examenesLab=this.examenesLab.filter((function(t){if(t.id!==e)return t})),this.examenesRealizadosLab=this.examenesRealizadosLab.filter((function(t){if(t!==e)return t}))},fillDataToMod:function(e){this.dataTempToDeleteAboutModify=[],this.ambienteDeModificacion=!0,this.examenesLab=[],this.examenesRealizadosLab=[],this.dni=e.dni,this.nombres=e.nombres,this.apellidos=e.apellidos,this.fechaNacimiento=this.convertidorFecha(e.fechNac),this.telefono=e.telefono,this.empresa=e.empresa;for(var t=0,a=0;a<e.detalleExamen.length;a++)null!=e.detalleExamen[a].fechaAtencion&&(this.examenesRealizadosLab[t]=e.detalleExamen[a].idMuestraLab,t++),this.examenesLab.push({doExamen:"Modificar",idPaciente:e.detalleExamen[a].idPaciente,idExamen:e.detalleExamen[a].idExamen,id:e.detalleExamen[a].idMuestraLab,muestra:e.detalleExamen[a].examen,atendido:null!=e.detalleExamen[a].fechaAtencion,enviado:e.detalleExamen[a].estadoEnvio,fechaResultado:null==e.detalleExamen[a].fechaEntregaResultado?"":this.convertidorFecha(e.detalleExamen[a].fechaEntregaResultado)});t=0},Modificar:function(){var e=this,t={"Content-Type":"application/json",token:this.token},a=this.examenesLab;this.dataTempToDeleteAboutModify.length>0&&(a=[].concat(Object(n["a"])(a),Object(n["a"])(this.dataTempToDeleteAboutModify))),0==a.length&&(a=this.dataTempToDeleteAboutModify);var i=a.length>0,s=this.$refs.formularioLaboratorio.validate();i&&s&&(this.btnGuardarDeshabilitado=!0,this.axios.post("/modificarExamLaboratorio",{dni:this.dni,nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),fechaNacimiento:this.fechaNacimiento,telefono:this.telefono,empresa:""===this.nuevaEmpresa?this.empresa:this.nuevaEmpresa,fechaRegistroExamen:this.FechaActual(),examenes:a},{headers:t}).then((function(t){e.$refs.tabla.ListarMuestras(),e.dni="",e.nombres="",e.apellidos="",e.fechaNacimiento="",e.telefono="",e.empresa="",e.examenesLab=[],e.examenesRealizadosLab=[],e.dataTempToDeleteAboutModify=[],e.ambienteDeModificacion=!1,t.data.mensaje&&(e.tipoMensajeResultado=!0,e.mensajeResultadoTransaccion=t.data.mensaje,setTimeout((function(){e.mensajeResultadoTransaccion="",e.tipoMensajeResultado=!1}),2e3)),e.btnGuardarDeshabilitado=!1})).catch((function(t){e.$refs.tabla.ListarMuestras(),t.response.data.sqlMessage?e.mensajeResultadoTransaccion=t.response.data.sqlMessage:e.mensajeResultadoTransaccion=t,setTimeout((function(){e.mensajeResultadoTransaccion=""}),3e3),e.btnGuardarDeshabilitado=!1})))},Cancelar:function(){this.dni="",this.nombres="",this.apellidos="",this.fechaNacimiento="",this.telefono="",this.empresa="",this.examenesLab=[],this.examenesRealizadosLab=[],this.dataTempToDeleteAboutModify=[],this.ambienteDeModificacion=!1},Limpiar:function(){this.ambienteDeModificacion&&(this.dni="",this.nombres="",this.apellidos="",this.fechaNacimiento="",this.telefono="",this.empresa="",this.examenesLab=[],this.examenesRealizadosLab=[],this.dataTempToDeleteAboutModify=[],this.ambienteDeModificacion=!1,this.btnGuardarDeshabilitado=!1)}})},T=y,j=(a("8be3"),a("0798")),P=a("ac7c"),S=a("a523"),V=a("4bd4"),A=a("b974"),N=a("b73d"),O=Object(m["a"])(T,i,s,!1,null,"566d9aff",null);t["default"]=O.exports;f()(O,{VAlert:j["a"],VBtn:p["a"],VCard:v["a"],VCheckbox:P["a"],VCol:x["a"],VContainer:S["a"],VDialog:D["a"],VForm:V["a"],VIcon:k["a"],VLayout:_["a"],VListItemContent:L["a"],VRow:E["a"],VSelect:A["a"],VSwitch:N["a"],VTextField:M["a"]})},"537c":function(e,t,a){},"6ca7":function(e,t,a){},"8be3":function(e,t,a){"use strict";a("537c")},"9d01":function(e,t,a){},ac7c:function(e,t,a){"use strict";var i=a("5530"),s=(a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),n=a("c37a"),o=a("fe09");t["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b73d:function(e,t,a){"use strict";var i=a("5530"),s=(a("0481"),a("ec29"),a("9d01"),a("fe09")),n=a("c37a"),o=a("c3f0"),l=a("0789"),r=a("490a"),c=a("80d2");t["a"]=s["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["x"].left&&this.isActive||e.keyCode===c["x"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(e,t,a){},fe09:function(e,t,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var i=a("c37a"),s=a("5607"),n=a("2b0e"),o=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),l=a("8547"),r=a("58df");function c(e){e.preventDefault()}t["a"]=Object(r["a"])(i["a"],o,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return e.valueComparator(a,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!e.valueComparator(a,t)})),a.length===i&&a.push(t)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(a,t)?null:t:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=LabClinico.5a7d68e0.js.map