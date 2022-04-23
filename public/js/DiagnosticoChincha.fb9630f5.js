(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiagnosticoChincha"],{1681:function(e,t,a){},"18be":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"text-center"},[a("h1",[e._v("Diagnostico Laboratorio Chincha")])]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-form",{ref:"formResultadoChincha",attrs:{"lazy-validation":"",disabled:e.cancelarInputResultado},on:{submit:function(t){return t.preventDefault(),e.Enviar(t)}}},[a("h4",{staticClass:"mb-2 red--text"},[e._v("Las filas rojas son resultados atrasados pendientes")]),""!==e.pacienteSeleccionado?a("h4",{staticClass:"my-2"},[e._v(e._s(e.pacienteSeleccionado))]):e._e(),[a("v-file-input",{attrs:{label:"Subir Archivo","background-color":e.color_lighten_salud,outlined:"",dense:"",rules:e.archivoRequerido,"show-size":"",counter:"",color:e.color_salud},model:{value:e.archivo,callback:function(t){e.archivo=t},expression:"archivo"}})],a("v-select",{class:e.color_text_salud,attrs:{items:e.arrayUrgencia,"item-color":e.color_salud,label:"Nivel de Urgencia",color:e.color_salud,"background-color":e.color_lighten_salud,"item-text":"nombre","item-value":"valor",rules:e.nivelRequerido,dense:"",outlined:""},model:{value:e.nivelUrgencia,callback:function(t){e.nivelUrgencia=t},expression:"nivelUrgencia"}}),a("v-textarea",{attrs:{color:e.color_salud,label:"Descripcion",dense:"",outlined:"","background-color":"blue lighten-4","no-resize":!0},model:{value:e.descripcion,callback:function(t){e.descripcion=t},expression:"descripcion"}}),a("div",{staticClass:"d-flex justify-space-between"},[a("v-btn",{attrs:{disabled:e.cancelarInputResultado,type:"submit",dark:"",color:"red darken-4"}},[e._v(" Enviar")]),a("v-btn",{attrs:{disabled:e.cancelarInputResultado,dark:""},on:{click:function(t){return e.cancelar()}}},[e._v(" Cancelar")])],1)],2),e.modificacionHecha?a("v-alert",{staticClass:"mt-4 text-center",attrs:{dense:"",type:"success"}},[e._v(" Registro Exitoso")]):e._e()],1),a("v-col",[a("v-data-table",{staticClass:"elevation-1 table_main font-weight-medium",attrs:{dense:"","fixed-header":"",headers:e.dataHeaders,items:e.dataTable,search:e.search,loading:e.loading,"loading-text":"Cargando.. Espere porfavor","item-class":e.pintarAtrasado},scopedSlots:e._u([{key:"item.nombres",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.nombres)+" "+e._s(a.apellidos)+" ")]}},{key:"item.fechaAtencion",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.convertidorFecha(a.fechaAtencion))+" ")]}},{key:"item.fechaEntregaResultado",fn:function(t){var n=t.item;return[a("td",{class:{"red ":e.restarFecha(e.convertidorFecha(n.fechaEntregaResultado))<-1}},[e._v(" "+e._s(e.convertidorFecha(n.fechaEntregaResultado))+" ")])]}},{key:"item.accion",fn:function(t){var n=t.item;return[a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(t){return e.selectExamen(n)}}},[a("v-icon",[e._v("edit")])],1)]}}],null,!0)})],1)],1),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogSizeFile,callback:function(t){e.dialogSizeFile=t},expression:"dialogSizeFile"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" El tamaño del archivo excedio los 16 MB ")])]),a("v-list-item-content",[a("v-layout",{attrs:{"justify-center":!0}},[a("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(t){return e.cerrarDialog()}}},[e._v("Cerrar")])],1)],1)],1)],1)],1)},i=[],o=a("5530"),r=(a("b0c0"),a("d81d"),a("2f62")),s={name:"DiagnosticoChincha",data:function(){return{color_salud:"blue darken-3",color_lighten_salud:"blue lighten-4",color_lighten3_salud:"blue lighten-3",color_text_salud:"blue--text text-lighten-4",loading:!0,cancelarInputResultado:!0,modificacionHecha:!1,pacienteSeleccionado:"",mensajeError:"",descripcion:"",archivo:[],nivelUrgencia:"",nivelRequerido:[function(e){return!!e||"Se requiere Nivel"}],archivoRequerido:[function(e){return!!e&&e.size>0||"Se requiere Archivo"}],arrayUrgencia:[{nombre:"Normal",valor:"N"},{nombre:"Media",valor:"M"},{nombre:"Alta",valor:"A"}],dataTable:[],dataHeaders:[{text:"*",align:"start",sortable:!1,value:"index",class:"headerStyleLeft blue darken-2 subtitle-1 text-center  font-weight-bold white--text "},{text:"Dni",align:"center",value:"dni",sortable:!1,class:" blue darken-2  subtitle-1   font-weight-bold white--text"},{text:"Paciente",align:"center",sortable:!1,value:"nombres",class:"blue darken-2  subtitle-1  font-weight-bold white--text"},{text:"Examen",align:"center",value:"examen",class:" blue darken-2  subtitle-1   font-weight-bold white--text"},{text:"Atendido",align:"center",value:"fechaAtencion",class:" blue darken-2  subtitle-1  font-weight-bold white--text"},{text:"Entrega Resultado",align:"center",value:"fechaEntregaResultado",class:" blue darken-2 subtitle-1  font-weight-bold white--text"},{text:"",sortable:!1,value:"accion",class:"headerStyleRigtht blue darken-2  font-weight-bold white--text"}],search:"",idExamen:"",dialogSizeFile:!1}},mounted:function(){this.listarExamenes()},computed:Object(o["a"])({},Object(r["d"])(["token"])),watch:{archivo:function(e){(null===e||void 0===e?void 0:e.size)>16e5&&(this.dialogSizeFile=!0)}},methods:{pintarAtrasado:function(e){return this.restarFecha(this.convertidorFecha(e.fechaEntregaResultado))<-1?"red":""},cerrarDialog:function(){this.dialogSizeFile=!1,this.archivo=[]},Enviar:function(){var e=this,t=this.$refs.formResultadoChincha.validate();if(t){this.cancelarInputResultado=!0;var a=new FormData,n=this.archivo;a.append("file",n,n.name),a.append("idExamen",this.idExamen),a.append("fechaInforme",this.FechaActual()),a.append("horaInforme",this.HoraActual()),a.append("descripcion",this.descripcion),a.append("nivelUrgencia",this.nivelUrgencia);var i={"Content-Type":"application/json",token:this.token};this.axios.post("/guardarResultadoPDF",a,{headers:i}).then((function(t){e.descripcion="",e.archivo=[],e.nivelUrgencia="",e.modificacionHecha=!0,setTimeout((function(){e.modificacionHecha=!1}),2e3),e.pacienteSeleccionado="",e.dataTable=[],e.listarExamenes()})).catch((function(t){e.mensajeError=t,setTimeout((function(){e.mensajeError=""}),2e3),console.log(t)}))}},FechaActual:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();return n=n<10?"0"+n:n,t+"-"+a+"-"+n},HoraActual:function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return t+":"+a+":"+n},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var i=t.getDate();return i=i<10?"0"+i:i,a+"/"+n+"/"+i},restarFecha:function(e){var t=new Date(e),a=new Date,n=t.getTime()-a.getTime();return Math.round(n/864e5)},listarExamenes:function(){var e=this,t={"Content-Type":"application/json",token:this.token};this.axios.get("/listarExamPendientesLabChincha",{headers:t}).then((function(t){e.loading=!1;var a=0;e.dataTable=t.data,e.dataTable.map((function(t){return t.retraso=e.restarFecha(e.convertidorFecha(t.fechaEntregaResultado)),t})),e.dataTable.sort((function(e,t){return e.retraso>t.retraso?1:e.retraso<t.retraso?-1:0})),e.dataTable.map((function(e){return a++,e.index=a,e}))})).catch((function(t){e.loading=!1,console.log(t)}))},selectExamen:function(e){this.pacienteSeleccionado=e.nombres+" "+e.apellidos+"("+e.examen+")",this.idExamen=e.idExamen,this.cancelarInputResultado=!1},cancelar:function(){this.cancelarInputResultado=!0,this.pacienteSeleccionado="",this.idExamen="",this.descripcion="",this.archivo=[],this.nivelUrgencia=""}}},l=s,c=a("2877"),u=a("6544"),h=a.n(u),d=a("0798"),f=a("8336"),p=a("b0af"),v=a("62ad"),g=a("a523"),m=a("8fea"),b=a("169a"),x=a("23a7"),y=a("4bd4"),w=a("132d"),S=a("a722"),_=a("5d23"),k=a("0fd9"),C=a("b974"),V=a("a844"),z=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=z.exports;h()(z,{VAlert:d["a"],VBtn:f["a"],VCard:p["a"],VCol:v["a"],VContainer:g["a"],VDataTable:m["a"],VDialog:b["a"],VFileInput:x["a"],VForm:y["a"],VIcon:w["a"],VLayout:S["a"],VListItemContent:_["a"],VRow:k["a"],VSelect:C["a"],VTextarea:V["a"]})},"23a7":function(e,t,a){"use strict";var n=a("2909"),i=a("5530"),o=a("53ca"),r=(a("a9e3"),a("caad"),a("13d5"),a("d81d"),a("b0c0"),a("99af"),a("a434"),a("159b"),a("fb6a"),a("5803"),a("2677")),s=a("cc20"),l=a("80d2"),c=a("d9bd"),u=a("d9f7");t["a"]=r["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(l["F"])(e).every((function(e){return null!=e&&"object"===Object(o["a"])(e)}))}}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var a=t.size,n=void 0===a?0:a;return e+n}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(l["v"])(t,1024===this.base))},internalArrayValue:function(){return Object(l["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var e=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var a=t.name,n=void 0===a?"":a,i=t.size,o=void 0===i?0:i,r=e.truncateText(n);return e.showSize?"".concat(r," (").concat(Object(l["v"])(o,1024===e.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.isMultiple?e:e?[e]:[];Object(l["i"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,a){return e.$createElement(s["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(a,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=r["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(u["c"])(e.data.style,{display:"none"})),e},genInput:function(){var e=r["a"].options.methods.genInput.call(this);return delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,n){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[n],file:a,index:n}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=r["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=Object(i["a"])(Object(i["a"])({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(n["a"])(e.target.files||[]);this.internalValue=this.isMultiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},2677:function(e,t,a){"use strict";var n=a("8654");t["a"]=n["a"]},5803:function(e,t,a){},a844:function(e,t,a){"use strict";var n=a("5530"),i=(a("a9e3"),a("1681"),a("8654")),o=a("58df"),r=Object(o["a"])(i["a"]);t["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=i["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){i["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);
//# sourceMappingURL=DiagnosticoChincha.fb9630f5.js.map