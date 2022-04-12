(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["labClinicoPendiente"],{"1f4f":function(t,e,a){"use strict";var i=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),o=a("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"6ca7":function(t,e,a){},8547:function(t,e,a){"use strict";var i=a("2b0e"),n=a("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"8b37":function(t,e,a){},"9d01":function(t,e,a){},"9d50":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"text-center"},[a("h2",[t._v("Examenes de Laboratorio con Info Pendiente")])]),a("v-form",[a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"6",md:"4 mb-2"}},[1==t.ambienteDeModificacion?a("v-card",{staticClass:"pt-3 mx-1 px-1 red lighten-3",attrs:{outlined:""}},[a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:t.examenesLab.muestra,value:t.examenesLab.id,color:"red darken-4"},model:{value:t.examenesRealizadosLab,callback:function(e){t.examenesRealizadosLab=e},expression:"examenesRealizadosLab"}})],1)],1),t.verificarExamenRealizado(t.examenesLab.id)?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Enviado?",color:"red darken-4",value:!t.enviado,"hide-details":""},model:{value:t.examenesLab.enviado,callback:function(e){t.$set(t.examenesLab,"enviado",e)},expression:"examenesLab.enviado"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"date",color:"red darken-4",label:"Entrega del Resultado",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:t.examenesLab.fechaResultado,callback:function(e){t.$set(t.examenesLab,"fechaResultado",e)},expression:"examenesLab.fechaResultado"}})],1)],1):t._e()],1):t._e()],1)],1),1==t.ambienteDeModificacion?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"11",md:"4"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",color:"red darken-4"},on:{click:function(e){return t.Modificar(t.examenesLab)}}},[t._v("Modificar")])],1),a("v-col",{attrs:{cols:"11",md:"4"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",type:"submit"},on:{click:function(e){t.ambienteDeModificacion=!1}}},[t._v("Cancelar")])],1)],1):t._e(),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[""!==t.mensajeError?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.mensajeError))]):t._e(),t.modificacionHecha?a("v-alert",{staticClass:"text-center",attrs:{dense:"",type:"success"}},[t._v(" Registro Exitoso")]):t._e()],1)],1),a("v-col",{staticClass:"mx-auto"},[a("tabla-pendiente",{ref:"tabla",on:{DatosParaModificarExamenesPendiente:t.LlenaDatosParaModificacion,CancelarEditar:t.CancelarEdicion}})],1)],1)},n=[],s=a("5530"),o=(a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-simple-table",{staticClass:"my-2",attrs:{dark:"",dense:"","fixed-header":"",height:"450px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text",staticStyle:{"border-top-left-radius":"5px","border-bottom-left-radius":"5px"}},[t._v(" * ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Dni ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Paciente ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Examen ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" fechaRegistroExamen ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" FechaAtencion ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" EstadoEnvio ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" fechaResultado ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"})])]),a("tbody",t._l(t.LaboratorioData,(function(e,i){return a("tr",{key:i},[a("td",{staticClass:"text-center"},[t._v(t._s(i+1))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.dni))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.nombres)+" "+t._s(e.apellidos))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.examen))]),a("td",{staticClass:"text-center",class:{red:null==e.fechaRegistroExamen}},[t._v(t._s(t.convertidorFecha(e.fechaRegistroExamen)))]),a("td",{staticClass:"text-center",class:{red:null==e.fechaAtencion}},[t._v(t._s(t.convertidorFecha(e.fechaAtencion)))]),a("td",{staticClass:"text-center",class:{red:0==e.estadoEnvio}},[t._v(t._s(0==e.estadoEnvio?"NO":"SI"))]),a("td",{staticClass:"text-center",class:{red:null==e.fechaEntregaResultado}},[t._v(t._s(t.convertidorFecha(e.fechaEntregaResultado)))]),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return t.editarDataLab(e)}}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return t.ShowDialogDeletePat(e.examenes,e.nombres+" "+e.apellidos,e.idExamen)}}},[a("v-icon",[t._v("delete")])],1)],1)])})),0)]},proxy:!0}])}),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:t.dialogDeleteExamPat,callback:function(e){t.dialogDeleteExamPat=e},expression:"dialogDeleteExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.dataDialogDeletePat.message)+" "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[t._v(" "+t._s(t.dataDialogDeletePat.examen)+" ")])]),a("div",{staticClass:"font-weight-bold"},[t._v(" de "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[t._v(" "+t._s(t.dataDialogDeletePat.nombre)+" ")])])]),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-space-between":!0}},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red darken-4"},on:{click:function(e){return t.Eliminar(t.dataDialogDeletePat.id)}}},[t._v("Si")]),a("v-btn",{attrs:{rounded:"",dark:""},on:{click:t.NotShowDialogDeletePat}},[t._v("No")])],1)],1)],1)],1)],1)}),r=[],l=a("2f62"),c={name:"TablaPatologiaPendiente",data:function(){return{dialogDeleteExamPat:!1,dataDialogDeletePat:{message:"Eliminar",id:null,examen:null,nombre:null},LaboratorioData:[],dataDetalleExam:[]}},mounted:function(){this.ListarMuestras()},computed:Object(s["a"])({},Object(l["d"])(["token"])),methods:{convertidorFecha:function(t){if(null==t)return"Sin Data";var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var n=e.getDate();return n=n<10?"0"+n:n,n+"/"+i+"/"+a},ShowDialogDeletePat:function(t,e,a){this.dataDialogDeletePat.examen=t,this.dataDialogDeletePat.nombre=e,this.dataDialogDeletePat.id=a,this.dialogDeleteExamPat=!0},NotShowDialogDeletePat:function(){this.dialogDeleteExamPat=!1,this.dataDialogDeletePat.data=null,this.dataDialogDeletePat.id=null},Eliminar:function(t){var e=this;console.log("Eliminando.."+t);var a={"Content-Type":"application/json",token:this.token};this.axios.post("/eliminarExamIndividualLaboratorio",{id:t},{headers:a}).then((function(t){e.ListarMuestras(),e.$emit("CancelarEditar"),e.NotShowDialogDeletePat()})).catch((function(t){e.ListarMuestras(),e.dialogLaboratorio=!1}))},editarDataLab:function(t){this.$emit("DatosParaModificarExamenesPendiente",t)},ListarMuestras:function(){var t=this;this.LaboratorioData=[],this.dataDetalleExam=[],this.axios.get("/listarExamPendientesLaboratorio").then((function(e){t.LaboratorioData=e.data})).catch((function(t){console.log(t)}))}}},d=c,u=a("2877"),h=a("6544"),f=a.n(h),m=a("8336"),v=a("b0af"),p=a("169a"),b=a("132d"),x=a("a722"),g=a("5d23"),C=a("1f4f"),D=Object(u["a"])(d,o,r,!1,null,null,null),k=D.exports;f()(D,{VBtn:m["a"],VCard:v["a"],VDialog:p["a"],VIcon:b["a"],VLayout:x["a"],VListItemContent:g["a"],VSimpleTable:C["a"]});var w={name:"LabClinicoPendiente",components:{tablaPendiente:k},data:function(){return{modificacionHecha:!1,mensajeError:"",ambienteDeModificacion:!1,examen:"",examenesRealizadosLab:[],enviado:!0,dataTipoMuestraLab:[],dataMuestraLab:[],examenesLab:[]}},computed:Object(s["a"])({},Object(l["d"])(["token"])),methods:{CancelarEdicion:function(){this.ambienteDeModificacion=!1},FechaActual:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var i=t.getDate();return i=i<10?"0"+i:i,e+"-"+a+"-"+i},convertidorFecha:function(t){if(null==t)return"Sin Data";var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var n=e.getDate()+1;return n=n<10?"0"+n:n,a+"-"+i+"-"+n},LlenaDatosParaModificacion:function(t){this.ambienteDeModificacion=!0,this.examenesRealizadosLab=[],null!=t.fechaAtencion&&(this.examenesRealizadosLab[0]=t.idMuestraLab),this.examenesLab={idExamen:t.idExamen,id:t.idMuestraLab,muestra:t.examen,enviado:t.estadoEnvio,atendido:null!=t.fechaAtencion,fechaResultado:null==t.fechaEntregaResultado?"":this.convertidorFecha(t.fechaEntregaResultado)}},verificarExamenRealizado:function(t){var e=this.examenesRealizadosLab.includes(t);return e?this.examenesLab.atendido=!0:(this.examenesLab.atendido=!1,this.examenesLab.fechaResultado=""),e},Modificar:function(t){var e=this,a={"Content-Type":"application/json",token:this.token};this.axios.post("/modificarUnSoloExamLaboratorio",{idExamen:t.idExamen,atendido:t.atendido?this.FechaActual():null,fechaResultado:t.fechaResultado,enviado:t.enviado,id:t.id},{headers:a}).then((function(t){e.modificacionHecha=!0,e.$refs.tabla.ListarMuestras(),e.ambienteDeModificacion=!1,e.examenesLab={},e.examenesRealizadosLab=[],setTimeout((function(){e.modificacionHecha=!1}),2e3)})).catch((function(t){e.mensajeError=t,setTimeout((function(){e.mensajeError=""}),2e3),console.log(t)}))}}},E=w,_=a("0798"),y=a("ac7c"),L=a("62ad"),S=a("a523"),P=a("4bd4"),j=a("0fd9"),V=a("b73d"),R=a("8654"),$=Object(u["a"])(E,i,n,!1,null,null,null);e["default"]=$.exports;f()($,{VAlert:_["a"],VBtn:m["a"],VCard:v["a"],VCheckbox:y["a"],VCol:L["a"],VContainer:S["a"],VForm:P["a"],VRow:j["a"],VSwitch:V["a"],VTextField:R["a"]})},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85");var i=a("e8f2"),n=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,s=e.data,o=e.children,r=s.attrs;return r&&(s.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),o)}})},a722:function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("layout")},ac7c:function(t,e,a){"use strict";var i=a("5530"),n=(a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),s=a("c37a"),o=a("fe09");e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b73d:function(t,e,a){"use strict";var i=a("5530"),n=(a("0481"),a("ec29"),a("9d01"),a("fe09")),s=a("c37a"),o=a("c3f0"),r=a("0789"),l=a("490a"),c=a("80d2");e["a"]=n["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===c["x"].left&&this.isActive||t.keyCode===c["x"].right&&!this.isActive)&&this.onChange()}}})},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("498a"),a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("a15b");var i=a("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,s=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var i=a("c37a"),n=a("5607"),s=a("2b0e"),o=s["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),r=a("8547"),l=a("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(i["a"],o,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=labClinicoPendiente.7b115bee.js.map