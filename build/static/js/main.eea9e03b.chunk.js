(this.webpackJsonpbinge=this.webpackJsonpbinge||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),i=(a(29),a(4)),l=a(5),o=a(7),u=a(6),m=a(1),h=(a(30),function(e){var t=e.user,a=e.handleLogout,n=t?r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"#!",className:"brand-logo"},r.a.createElement("i",{className:"material-icons"},"cloud"),"Weather or Not"),r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/search",className:"nav-link"},r.a.createElement("i",{className:"material-icons left"},"search"),"Search")),r.a.createElement("li",null,r.a.createElement("a",{href:"/cities",className:"nav-link"},r.a.createElement("i",{className:"material-icons left"},"location_city"),"My Cities")),r.a.createElement("li",null,r.a.createElement("a",{href:" ",className:"nav-link"},r.a.createElement("i",{className:"material-icons left"},"person"),"Welcome, ",t.name)),r.a.createElement("li",null,r.a.createElement("a",{href:" ",className:"nav-link",onClick:a},r.a.createElement("i",{className:"material-icons left"},"power_settings_new"),"Log Out")))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/login",className:"nav-link"},"Log In")),r.a.createElement("li",null,r.a.createElement("a",{href:"/signup",className:"nav-link"},"Sign Up"))))));return r.a.createElement(r.a.Fragment,null,n)}),d=a(2),p=a.n(d),f=a(10),v=a(13),E=a(12);a(32);function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null},removeToken:function(){localStorage.removeItem("token")}};var y={signup:function(e){return fetch("/api/users/signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;w.setToken(t)}))},getUser:function(){return w.getUserFromToken()},logout:function(){w.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return w.setToken(t)}))}},b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Invalid Credentials!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("h3",null,"Log In"),r.a.createElement("form",{className:"col s12",autocomplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",autocomplete:"off",id:"email",className:"active",value:this.state.email,name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"password",autocomplete:"off",className:"active",id:"password",value:this.state.pw,name:"pw",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("button",{className:"btn green"},"Log In",r.a.createElement("i",{class:"material-icons right"},"arrow_forward")),"\xa0\xa0\xa0",r.a.createElement(E.b,{className:"btn red",to:"/"},"Cancel",r.a.createElement("i",{class:"material-icons right"},"cancel"))))))}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(t){e.props.updateMessage(""),e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.props.updateMessage(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("form",{className:"col s12",autocomplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",autocomplete:"off",className:"active",id:"name",value:this.state.name,name:"name",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"name"},"Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",autocomplete:"off",className:"active",id:"email",value:this.state.email,name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"password",autocomplete:"off",className:"active",id:"password",value:this.state.password,name:"password",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"password",autocomplete:"off",className:"active",id:"confirm",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn green",disabled:this.isFormInvalid()},"Sign Up",r.a.createElement("i",{class:"material-icons right"},"person_add")),"\xa0\xa0",r.a.createElement(E.b,{className:"btn red",to:"/"},"Cancel",r.a.createElement("i",{class:"material-icons right"},"cancel"))))))}}]),a}(n.Component),O=(a(38),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(N,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component));function k(e){return console.log(e),fetch("/api/weather",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+w.getToken()},body:JSON.stringify(e)},{mode:"cors"}).then((function(e){return e.json()}))}function D(e){return fetch("/api/cities",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+w.getToken()},body:JSON.stringify(e)},{mode:"cors"}).then((function(e){return e.json()}))}function S(e){return fetch("/api/cities/".concat(e),{method:"DELETE",headers:{"content-type":"application/json",Authorization:"Bearer "+w.getToken()}},{mode:"cors"}).then((function(e){return e.json()}))}var j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={cities:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/cities",{headers:{Authorization:"Bearer "+w.getToken()}},{mode:"cors"}).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({cities:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"row"},this.state.cities.map((function(e){return r.a.createElement("div",{key:e._id,class:"col s6 m4"},r.a.createElement(E.b,{to:{pathname:"/city/".concat(e._id),state:{city:e}}},r.a.createElement("div",{class:"card blue-grey darken-1"},r.a.createElement("div",{class:"card-content white-text"},r.a.createElement("span",{class:"card-title"},e.name," ")))),r.a.createElement("br",null))}))))}}]),a}(n.Component),C=a(19),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={invalidForm:!0,formData:{name:"",country:""}},e.formRef=r.a.createRef(),e.handleSubmit=function(t){t.preventDefault(),e.props.handleGetWeatherData(e.state.formData)},e.handleChange=function(t){var a=Object(C.a)(Object(C.a)({},e.state.formData),{},Object(v.a)({},t.target.name,t.target.value));e.setState({formData:a,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"col ",ref:this.formRef,onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row form-row"},r.a.createElement("div",{className:"input-field col"},r.a.createElement("input",{name:"name",id:"name",type:"text",className:"active",value:this.state.formData.city,onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"name"},"City")),r.a.createElement("div",{className:"input-field col"},r.a.createElement("input",{name:"country",id:"country",type:"text",className:"active",value:this.state.formData.country,onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"country"},"Country")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn green",disabled:this.state.invalidForm},r.a.createElement("i",{className:"material-icons left"},"search"),"Get Weather"))))}}]),a}(n.Component);function F(e){return e>=348.75&&e<=360||e>=0&&e<11.25?"N":e>=11.25&&e<33.75?"NNE":e>=33.75&&e<56.25?"NE":e>=56.25&&e<78.75?"ENE":e>=78.75&&e<101.25?"E":e>=101.25&&e<123.75?"ESE":e>=123.75&&e<146.25?"SE":e>=146.25&&e<168.75?"SSE":e>=168.75&&e<191.25?"S":e>=191.25&&e<213.75?"SSW":e>=213.75&&e<236.25?"SW":e>=236.25&&e<258.75?"WSW":e>=258.75&&e<281.25?"W":e>=281.25&&e<303.75?"WNW":e>=303.75&&e<326.25?"NW":e>=326.25&&e<348.75?"NNW":void 0}function W(e){var t=new Date(1e3*e),a=t.getHours(),n="0"+t.getMinutes(),r="0"+t.getSeconds();return a+":"+n.substr(-2)+":"+r.substr(-2)}var T=function(e){return console.log(e.weatherData),r.a.createElement(r.a.Fragment,null,e.weatherData.name?r.a.createElement(r.a.Fragment,null,e.weatherData.message?r.a.createElement("h4",null,e.weatherData.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col s12 m7"},r.a.createElement("h4",{className:"header"},"Current Weather for ",e.weatherData.name,","," ",e.weatherData.sys.country),r.a.createElement("div",{className:"card horizontal"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:"/images/".concat(e.weatherData.weather[0].icon,".gif"),alt:""})),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,"Conditions: ",e.weatherData.weather[0].main," "),r.a.createElement("p",null,"Temperature: ",e.weatherData.main.temp," \xb0F "),r.a.createElement("p",null,"Feels Like: ",e.weatherData.main.feels_like," \xb0F"," "),r.a.createElement("p",null,"Humidity: ",e.weatherData.main.humidity,"% "),r.a.createElement("p",null,"Visibility:"," ",(e.weatherData.visibility/1609).toFixed(1)," miles"),r.a.createElement("p",null,"Wind: ",e.weatherData.wind.speed.toFixed(1)," mph"),r.a.createElement("p",null,"Dewpoint: ".concat((1.8*((e.weatherData.main.temp-32)/1.8-(100-e.weatherData.main.humidity)/5)+32).toFixed(2),"\xb0F")),r.a.createElement("p",null,"Wind Gusts:"," ",e.weatherData.wind.gust?"".concat(e.weatherData.wind.gust," mph"):"0 mph"),r.a.createElement("p",null,"Wind Direction: ",e.windDirection),r.a.createElement("p",null,"Cloud Cover: ",e.weatherData.clouds.all," %"),r.a.createElement("p",null,"Sunrise: ",e.sunrise," AM"),r.a.createElement("p",null,"Sunset: ",e.sunset," PM"))))))):r.a.createElement(r.a.Fragment,null))},A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={weatherData:[],windDirection:"",sunrise:"",sunset:""},e.handleGetWeatherData=function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r,s,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:return n=t.sent,t.next=5,F(n.wind.deg);case 5:return r=t.sent,t.next=8,W(n.sys.sunrise);case 8:return s=t.sent,t.next=11,W(n.sys.sunset);case 11:c=t.sent,e.props.history.push("/search"),e.setState({weatherData:n,windDirection:r,sunrise:s,sunset:c});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleAddCity=Object(f.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).name=e.state.weatherData.name,a.country=e.state.weatherData.sys.country,t.next=5,D(a);case 5:e.props.history.push("/cities");case 6:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{handleGetWeatherData:this.handleGetWeatherData}),this.state.weatherData.base?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{weatherData:this.state.weatherData,windDirection:this.state.windDirection,sunrise:this.state.sunrise,sunset:this.state.sunset,handleAddCity:this.handleAddCity}),r.a.createElement("button",{className:"btn green",onClick:function(){return e.handleAddCity()}},"Save this Town!")):r.a.createElement(r.a.Fragment,null))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.location.state.city.name,country:e.props.location.state.city.country,weatherData:[],windDirection:"",sunrise:"",sunset:""},e.handleDeleteCity=function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:e.props.history.push("/cities");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.state);case 2:return t=e.sent,e.next=5,F(t.wind.deg);case 5:return a=e.sent,e.next=8,W(t.sys.sunrise);case 8:return n=e.sent,e.next=11,W(t.sys.sunset);case 11:r=e.sent,this.setState({weatherData:t,windDirection:a,sunset:r,sunrise:n});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.weatherData.base?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{weatherData:this.state.weatherData,windDirection:this.state.windDirection,sunrise:this.state.sunrise,sunset:this.state.sunset,handleAddCity:this.handleAddCity}),r.a.createElement("button",{className:"btn red",onClick:function(){return e.handleDeleteCity(e.props.match.params.id)}},"Remove From Favorites")):r.a.createElement(r.a.Fragment,null))}}]),a}(n.Component),I=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/images/logo.gif"}))},M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:y.getUser()},e.handleLogout=function(){y.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:y.getUser()})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{user:this.state.user,handleLogout:this.handleLogout}),this.state.user?"":r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(m.a,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(O,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(m.a,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(b,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(m.a,{exact:!0,path:"/cities",render:function(t){var a=t.history;return r.a.createElement(j,{history:a,user:e.state.user})}}),r.a.createElement(m.a,{exact:!0,path:"/search",render:function(t){var a=t.history;return r.a.createElement(A,{history:a,user:e.state.user})}}),r.a.createElement(m.a,{exact:!0,path:"/city/:id",render:function(t){var a=t.history,n=t.location,s=t.match;return r.a.createElement(L,{match:s,history:a,user:e.state.user,location:n})}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{render:function(e){var t=e.history;return r.a.createElement(M,{history:t})}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.eea9e03b.chunk.js.map