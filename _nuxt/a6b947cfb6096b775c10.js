(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{210:function(t,e,r){"use strict";r(211)("link",function(t){return function(e){return t(this,"a","href",e)}})},211:function(t,e,r){var n=r(6),c=r(15),o=r(31),l=/"/g,d=function(t,e,r,n){var c=String(o(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(n).replace(l,"&quot;")+'"'),d+">"+c+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(d),n(n.P+n.F*c(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},230:function(t,e,r){"use strict";r(210);var n={data:function(){return{copied:!1,dialog:!1,rating:10}},methods:{copy:function(){this.$refs.link.focus(),document.execCommand("selectAll",!1,null),this.copied=document.execCommand("copy")}}},c=r(13),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-btn",{staticClass:"primary--text",attrs:{slot:"activator",left:"",flat:""},slot:"activator"},[r("v-icon",{attrs:{color:"primary"}},[t._v("\n                          mdi-share-variant\n                        ")])],1),t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"title font-weight-bold"},[t._v("\n                            Share\n                          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{large:"",icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("\n                              mdi-close-circle-outline\n                            ")])],1)],1),t._v(" "),r("v-list",[r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"indigo"}},[t._v("\n                                mdi-facebook-box\n                              ")])],1),t._v(" "),r("v-card-title",[t._v("\n                              Facebook\n                            ")])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"cyan"}},[t._v("\n                                mdi-twitter-box\n                              ")])],1),t._v(" "),r("v-card-title",[t._v("\n                              Twitter\n                            ")])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",[t._v("\n                                mdi-email\n                              ")])],1),t._v(" "),r("v-card-title",[t._v("\n                              Email\n                            ")])],1)],1),t._v(" "),r("v-text-field",{ref:"link",staticClass:"pa-3",attrs:{label:t.copied?"Link copied":"Click to copy link",readonly:"",value:"https://g.co/kgs/nkrK43"},on:{click:t.copy}})],1)],1)},[],!1,null,null,null);e.a=component.exports},232:function(t,e,r){"use strict";r(43),r(20),r(10),r(7),r(25),r(21);var n=r(16),c=r(44);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var l={props:["currentSlug"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({categories:"categories",currentCategory:"currentCategory"}),{binding:function(){var t={};return this.$vuetify.breakpoint.xsOnly&&(t.column=!0),t},breadcrumsItems:function(){return[{text:this.categoryBySlug(this.currentCategory)[0].name,disabled:!1,href:"/subcategories/"+this.currentCategory},{text:this.subcategoryBySlug()[0].name,disabled:!0,href:""}]}}),data:function(){return{}},methods:{categoryBySlug:function(t){return this.categories.filter(function(e){return e.slug===t})},subcategoryBySlug:function(){var t=this;return this.categories.filter(function(e){return e.slug==t.currentCategory})[0].children.filter(function(e){return e.slug==t.currentSlug})}}},d=r(13),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.breadcrumsItems},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports},243:function(t,e,r){"use strict";r.r(e);r(43),r(20),r(10),r(7),r(25),r(14);var n=r(2),c=r(16),o={data:function(){return{fruits:["Beko","Delfa","Digital","Elenberg","Snaige","Атлант"],selectedFruits:[]}},computed:{likesAllFruit:function(){return this.selectedFruits.length===this.fruits.length},likesSomeFruit:function(){return this.selectedFruits.length>0&&!this.likesAllFruit},icon:function(){return this.likesAllFruit?"mdi-close-box":this.likesSomeFruit?"mdi-minus-box":"mdi-checkbox-blank-outline"}},methods:{toggle:function(){var t=this;this.$nextTick(function(){t.likesAllFruit?t.selectedFruits=[]:t.selectedFruits=t.fruits.slice()})}}},l=r(13),d=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:t.fruits,label:"Отбор",multiple:""},model:{value:t.selectedFruits,callback:function(e){t.selectedFruits=e},expression:"selectedFruits"}},[r("v-list-tile",{attrs:{slot:"prepend-item",ripple:""},on:{click:t.toggle},slot:"prepend-item"},[r("v-list-tile-action",[r("v-icon",{attrs:{color:t.selectedFruits.length>0?"indigo darken-4":""}},[t._v(t._s(t.icon))])],1),t._v(" "),r("v-list-tile-title",[t._v("Выбрать все")])],1),t._v(" "),r("v-divider",{staticClass:"mt-2",attrs:{slot:"prepend-item"},slot:"prepend-item"})],1)},[],!1,null,null,null).exports,v={components:{ProductSharing:r(230).a},props:{product:{required:!0,type:Object}},computed:{link:function(){return{name:"products-slug",params:{slug:this.product.slug}}},binding:function(){var t={};return this.$vuetify.breakpoint.xsOnly&&(t.column=!0),t}}},f=Object(l.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return r("v-card",{staticClass:"mx-auto"},[r("v-card-title",[r("nuxt-link",{staticClass:"no-decoration body-1 font-weight-regular black--text mb-2",attrs:{to:t.localePath({name:"products-slug",params:{slug:t.product.slug}})}},[t._v("\n                        "+t._s(t.product.name)+"\n                      ")]),t._v(" "),r("v-chip",{attrs:{label:"",outline:"",color:t.$vuetify.theme.primary}},[t._v(t._s(t.product.price))])],1),t._v(" "),r("v-img",{staticClass:"white",attrs:{contain:"",height:"200px",src:"/productImg/"+t.product.slug+".jpg","aspect-ratio":"1"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1),t._v(" "),r("v-expand-transition",[n?r("nuxt-link",{staticClass:"no-decoration d-flex transition-fast-in-fast-out light-green darken-3 v-card--reveal  caption white--text font-weight-thin",staticStyle:{height:"100%"},attrs:{to:t.localePath({name:"products-slug",params:{slug:t.product.slug}})}},[t._v("\n                             "+t._s(t.product.description)+"\n                          ")]):t._e()],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:t.$vuetify.theme.primary}},[t._v("favorite_border")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:t.$vuetify.theme.primary}},[t._v("shopping_cart")])],1)],1)],1)}}])})},[],!1,null,null,null).exports,m=r(232),h=r(44);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var _,O={components:{ProductMultiSelect:d,ProductCard:f,Breadcrums:m.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(source,!0).forEach(function(e){Object(c.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(h.c)({categories:"categories",currentCategory:"currentCategory"}),{binding:function(){var t={};return this.$vuetify.breakpoint.xsOnly&&(t.column=!0),t}}),data:function(){return{currentSlug:null,products:[],sortItems:["По уменьшению цены","По возрастанию цены","По названию","По производителю"]}},asyncData:(_=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.app,t.next=3,n.$axios.$get("products?category=".concat(r.slug));case 3:return c=t.sent,o=r.slug,t.abrupt("return",{products:c.data,currentSlug:o});case 6:case"end":return t.stop()}},t)})),function(t){return _.apply(this,arguments)}),methods:{categoryBySlug:function(t){return this.categories.filter(function(e){return e.slug===t})},subcategoryBySlug:function(){var t=this;return this.categories.filter(function(e){return e.slug==t.currentCategory})[0].children.filter(function(t){return t.slug==params.slug})}}},k=Object(l.a)(O,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.products,function(e){return r("v-flex",{key:e.slug,class:t.$vuetify.breakpoint.mdAndUp?"ma-":"ma-0",attrs:{xs12:"",lg3:"",xl2:"",md3:"",sm12:""}},[r("ProductCard",{attrs:{product:e}})],1)}),1)],1)},[],!1,null,null,null);e.default=k.exports}}]);