(function(t){function e(e){for(var n,o,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},c=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"109c":function(t,e,a){"use strict";var n=a("7cca"),r=a.n(n);r.a},"1ddd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Welcome to the Adept Junior Frontend test")]),a("p",[t._v("We have set this small Vue app up for you to help you get started.")]),a("br"),a("p",[t._v("We will be looking at coding ability as well as any extras you implement beyond the scope provided. \n        This doesn't mean that you need to implement machine learning... \n        However, if you wish to use a css framework such a bootstrap, you are more than welcome to and it will count in your favour.")]),a("router-link",{attrs:{to:{name:"instructions"}}},[t._v("Get Started")])],1)},r=[],c={},o=c,s=a("2877"),i=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=i.exports},2160:function(t,e,a){"use strict";var n=a("9ce3"),r=a.n(n);r.a},4007:function(t,e,a){t.exports=a.p+"img/location-list.130170c3.jpeg"},"48c3":function(t,e,a){},"49e4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Weather App")]),a("h2",[t._v(t._s(t.todaysDate))])])},r=[],c={name:"Headings",props:["todaysDate"]},o=c,s=a("2877"),i=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=i.exports},"4cfd":function(t,e,a){"use strict";var n=a("48c3"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("a026"),r=a("8c4f"),c=a("6917");n["a"].use(r["a"]),new n["a"]({router:c["a"]}).$mount("#app")},"612c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[t._m(0),a("div",[a("router-view")],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%","text-align":"center"}},[n("img",{staticStyle:{margin:"auto auto"},attrs:{src:a("cf05")}})])}],c={name:"app",components:{},created:function(){document.title="ADEPT | Weather App"}},o=c,s=(a("9993"),a("2877")),i=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=i.exports},6917:function(t,e,a){"use strict";(function(t){var n=a("8c4f"),r=a("612c"),c=a("1ddd"),o=a("9cb4"),s=a("bb51"),i=a("b912"),u=[{path:"welcome",name:"welcome",component:c["a"]},{path:"instructions",name:"instructions",component:o["a"]},{path:"home",name:"home",component:s["a"]},{path:"forecast/:id",name:"forecast",component:i["a"]}];e["a"]=new n["a"]({mode:"history",base:t,routes:[{path:"/app",name:"app",component:r["a"],children:u},{path:"/app/home",redirect:"*"},{path:"*",redirect:"/app/home"}]})}).call(this,"/")},"7cca":function(t,e,a){},9993:function(t,e,a){"use strict";var n=a("c352"),r=a.n(n);r.a},"9cb4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.todaysDate))]),a("h3",[t._v("We have decided that we are in need for a live weather webapp")]),a("br"),t._m(0),a("br"),a("p",[t._v("We had a developers spec meeting and these are the mockups that we want you to implement:")]),t._m(1),t._m(2),t._m(3)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("We want to be able to see "),a("b",[t._v("Cape Town")]),t._v(", "),a("b",[t._v("Johannesburg")]),t._v(" and "),a("b",[t._v("Durban")]),t._v(" in a list and be able to click through to them and view a "),a("b",[t._v("5 day forecast")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[t._v("Location list:")]),n("div",[n("img",{staticClass:"spec-pic",attrs:{src:a("4007")}})])]),n("li",[n("p",[t._v("Location Forecast:")]),n("div",[n("img",{staticClass:"spec-pic",attrs:{src:a("ecf5")}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    We want you to consume the JSON data provided by the "),a("a",{attrs:{href:"https://openweathermap.org/api"}},[t._v("Openweathermap API")]),t._v(" using the following API key:"),a("strong",[t._v(" c60affe7bd71ca5cf3853f5a6fba4dbb")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Look through the documentation to find the calls you need")])])}],c=(a("cadf"),a("551c"),a("f751"),a("097d"),a("5a0c")),o=a.n(c),s={data:function(){return{todaysDate:null}},mounted:function(){var t=new Date;this.todaysDate=o()(t).format("YYYY-MM-DD hh:mm:ss")}},i=s,u=(a("4cfd"),a("2877")),l=Object(u["a"])(i,n,r,!1,null,"7705f958",null);e["a"]=l.exports},"9ce3":function(t,e,a){},b912:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forecast"},[a("div",{staticClass:"headings"},[a("Headings",{attrs:{todaysDate:t.todaysDate}})],1),a("div",{staticClass:"location"},[a("div",[a("h2",[t._v(t._s(t.forecast.city.name))])]),t._m(0)]),a("ForecastCards",{attrs:{forecast:t.forecast}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-info"},[t._v("5 Day Forecast")])])}],c=(a("cadf"),a("551c"),a("f751"),a("097d"),a("49e4")),o="c60affe7bd71ca5cf3853f5a6fba4dbb";function s(t){var e=["Cape+Town","Johannesburg","Durban"],a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e[t],"&APPID=").concat(o);return fetch(a).then(function(t){return t.json()})}var i={getForecast:s},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.forecastList,function(e,n){return a("div",{key:n,staticClass:"card bg-light mb-3",staticStyle:{width:"100%"}},[a("div",{staticClass:"card-header"},[t._v("\n            "+t._s(t.days[new Date(1e3*e.dt).getDay()])+", "+t._s(new Date(1e3*e.dt).getDate())+" "+t._s(t.month[new Date(1e3*e.dt).getMonth()])+" "+t._s(new Date(1e3*e.dt).getFullYear())+"\n        ")]),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Weather Forecast")]),a("div",{staticClass:"card-text"},[a("div",[t._v(t._s(Math.round(e.main.temp-273))+" ℃")]),a("div",[t._v(t._s(e.weather.description))]),a("div",[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Current Weather")])])])])])}),0)},l=[],d={name:"ForecastCards",props:["forecast"],computed:{forecastList:function(){return this.forecast.list.filter(function(t){return 14==new Date(1e3*t.dt).getHours()})}},data:function(){return{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],month:["Jan","Feb","Mar","May","June","July","Aug","Sept","Oct","Nov","Dec"]}}},f=d,h=(a("109c"),a("2877")),p=Object(h["a"])(f,u,l,!1,null,"20bbd777",null),v=p.exports,m={name:"forecast",components:{Headings:c["a"],ForecastCards:v},data:function(){return{todaysDate:null,forecast:{city:{},list:[]},id:this.$route.params.id}},mounted:function(){var t=this;i.getForecast(this.$route.params.id).then(function(e){t.forecast=e})}},_=m,b=(a("2160"),Object(h["a"])(_,n,r,!1,null,"61c0aa52",null));e["a"]=b.exports},bb51:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"headings"},[a("Headings",{attrs:{todaysDate:t.todaysDate}})],1),a("WeatherCards",{attrs:{weathers:t.weathers}})],1)},r=[],c=(a("cadf"),a("551c"),a("f751"),a("097d"),a("49e4")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.weathers.length>0?a("div",{staticClass:"row"},t._l(t.weathers,function(e){return a("div",{key:e.id,staticClass:"card bg-light mb-3",staticStyle:{width:"100%"}},[a("div",{staticClass:"card-header"},[t._v(t._s(e.current.name))]),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Current weather")]),a("div",{staticClass:"card-text"},[a("div",[t._v(t._s(Math.round(e.current.main.temp-273))+" ℃")]),a("div",[t._v(t._s(e.current.weather[0].description))]),a("div",[a("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"forecast/"+e.id}},[t._v("View forecast")])],1)])])])}),0):t._e()},s=[],i={name:"WeatherCards",props:["weathers"]},u=i,l=a("2877"),d=Object(l["a"])(u,o,s,!1,null,null,null),f=d.exports,h="c60affe7bd71ca5cf3853f5a6fba4dbb",p=["Cape+Town","Johannesburg","Durban"],v=["https://api.openweathermap.org/data/2.5/weather?q=".concat(p[0],"&APPID=").concat(h),"https://api.openweathermap.org/data/2.5/weather?q=".concat(p[1],"&APPID=").concat(h),"https://api.openweathermap.org/data/2.5/weather?q=".concat(p[2],"&APPID=").concat(h)];function m(){var t=[fetch(v[0]).then(function(t){return t.json()}),fetch(v[1]).then(function(t){return t.json()}),fetch(v[2]).then(function(t){return t.json()})];return t}var _={getWeather:m},b=a("5a0c"),y=a.n(b),g={name:"home",components:{Headings:c["a"],WeatherCards:f},data:function(){return{weathers:[{id:0,current:{}},{id:1,current:{}},{id:2,current:{}}],todaysDate:null}},mounted:function(){for(var t=this,e=function(e){_.getWeather()[e].then(function(a){t.weathers[e].current=a})},a=0;a<3;a++)e(a);var n=new Date;this.todaysDate=y()(n).format("YYYY-MM-DD")}},w=g,D=(a("cccb"),Object(l["a"])(w,n,r,!1,null,null,null));e["a"]=D.exports},c352:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("d563"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.5f2446a4.png"},d563:function(t,e,a){},ecf5:function(t,e,a){t.exports=a.p+"img/location-detail.81ea2002.jpeg"}});
//# sourceMappingURL=app.31067e71.js.map