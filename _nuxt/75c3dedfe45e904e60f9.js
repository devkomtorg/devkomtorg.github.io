(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{265:function(t,e,n){"use strict";n.r(e);n(14);var r,o=n(2),l=(n(88),{layout:"simpleToHome",data:function(){return{activeTab:0,tabs:[{index:0,name:"login_form"},{index:1,name:"register_form"}],loginForm:{email:"",password:""},loading:!1,registerForm:{username:"",login:"",password:""},valid:!0,emailRules:[function(t){return!!t||"Требуется E-mail"},function(t){return/.+@.+/.test(t)||"Неверный ввод"}],show:!1,passwordRules:[function(t){return!!t||"Требуется пароль"},function(t){return t&&t.length>=6||"Пароль должен быть не менее 6 символов"}]}},methods:{login:(r=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.valid){t.next=4;break}return t.next=3,this.$auth.loginWith("local",{data:this.loginForm});case 3:this.$router.push("/");case 4:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),register:function(){var t=this;this.valid&&(this.loading=!0,setTimeout(function(){t.$router.push("signin")},1e3))}}}),c=n(13),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-tabs",{attrs:{"fixed-tabs":"","slider-color":"light-green",color:t.$vuetify.theme.bgcolor,"active-class":"light-green--text"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,function(e){return n("v-tab",{key:e.index},[t._v("\n     "+t._s(t.$t(e.name))+"\n    ")])}),1),t._v(" "),n("v-tabs-items",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[n("v-tab-item",[n("v-layout",{attrs:{"align-top":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",lg4:"",md6:"",sm8:""}},[n("v-layout",{attrs:{column:""}},[n("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[n("v-card-title"),t._v(" "),n("v-card-text",[n("v-form",{ref:"loginForm",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{name:"login",type:"text",rules:t.emailRules,label:t.$t("email"),required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.loginForm.email,callback:function(e){t.$set(t.loginForm,"email",e)},expression:"loginForm.email"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":t.show?"visibility_off":"visibility",rules:t.passwordRules,type:t.show?"text":"password",name:"input-10-1",label:t.$t("password"),counter:""},on:{"click:append":function(e){t.show=!t.show},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"white--text",attrs:{block:"",color:"light-green",disabled:!t.valid},on:{click:t.login,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{to:t.localePath("passwordreset"),flat:"",small:"",color:"light-green"}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")]),t._v(" "),n("div",{staticClass:"font-weight-thin grey--text"},[t._v("\n              "+t._s(t.$t("smile"))+"\n            ")])],1)],1),t._v(" "),n("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[n("v-card-title"),t._v(" "),n("v-card-actions",[n("div",{staticClass:"font-weight-thin grey--text"},[t._v("\n              "+t._s(t.$t("enter_with"))+"\n            ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"blue"}},[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-google")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"blue",disabled:""}},[t._v("mdi-twitter")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"red",disabled:""}},[t._v("mdi-instagram")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-tab-item",[n("v-layout",{attrs:{"align-top":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",lg4:"",md6:"",sm8:""}},[n("v-layout",{attrs:{column:""}},[n("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[n("v-card-title"),t._v(" "),n("v-card-text",[n("v-form",{ref:"registerForm",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{name:"login",label:t.$t("email"),type:"text",rules:t.emailRules,required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.registerForm.login,callback:function(e){t.$set(t.registerForm,"login",e)},expression:"registerForm.login"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":t.show?"visibility_off":"visibility",id:"password",type:t.show?"text":"password",name:"input-10-1",label:t.$t("password"),counter:"",rules:t.passwordRules},on:{"click:append":function(e){t.show=!t.show},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.registerForm.password,callback:function(e){t.$set(t.registerForm,"password",e)},expression:"registerForm.password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"white--text",attrs:{block:"",color:"light-green",loading:t.loading,disabled:!t.valid},on:{click:t.register}},[t._v("\n                  "+t._s(t.$t("register"))+"\n                ")])],1),t._v(" "),n("v-card-actions",[n("div",{staticClass:"font-weight-thin grey--text"},[t._v("\n                  "+t._s(t.$t("user_agreement_notice"))+"\n                  "),n("nuxt-link",{staticClass:"no-decoration light-green--text",attrs:{to:t.localePath("index")}},[t._v("\n                    "+t._s(t.$t("user_agreement"))+"\n                  ")]),t._v("\n                    "+t._s(t.$t("and"))+"\n                  "),n("nuxt-link",{staticClass:"no-decoration light-green--text",attrs:{to:t.localePath("index")}},[t._v("\n                    "+t._s(t.$t("privacy_policy"))+"\n                  ")])],1)])],1),t._v(" "),n("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[n("v-card-title"),t._v(" "),n("v-card-actions",[n("div",{staticClass:"font-weight-thin grey--text"},[t._v("\n                  "+t._s(t.$t("register_with"))+"\n                ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"blue"}},[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-google")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"blue",disabled:""}},[t._v("mdi-twitter")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"red",disabled:""}},[t._v("mdi-instagram")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);