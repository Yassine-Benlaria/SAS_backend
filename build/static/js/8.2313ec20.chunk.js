(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{648:function(e,t,n){var o=n(651),r=n(650).API;n(668).config(),t.getEmployees=function(){return o.get("".concat(r,"/employee"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("jwt")).token)}}).then((function(e){return e.data})).catch((function(e){console.log("Error: ",e)}))},t.login=function(e,t){console.log("server ip: ",Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER_API:"http://localhost:5000/api"}).SERVER_IP);var n={username:e,password:t};o.post("".concat(r,"/admin/login"),n).then((function(e){return JSON.parse(e.data)})).catch((function(e){return{error:e}}))},t.authenticate=function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),o.get("".concat(r,"/employee"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e,t){if(t)console.log("error: ",t);else{var n=[];console.log("data: ",e),e.data.employees.map((function(e){n.push({id:e._id,name:"".concat(e.nom," ").concat(e.prenom),registered:"2018/01/01",role:e.poste,status:"Pending",img:"data:image/png;base64,".concat(e.image)})})),localStorage.setItem("users",JSON.stringify(n))}})),t())},t.signout=function(e){if("undefined"!=typeof window)return localStorage.removeItem("jwt"),localStorage.removeItem("users"),e(),o.get("".concat(r,"/admin/signout")).then((function(e){console.log("Signout: ",e)})).catch((function(e){console.log("Error: ",e)}))},t.isAuthenticate=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},t.isAdmin=function(){return!!localStorage.getItem("jwt")&&0==JSON.parse(localStorage.getItem("jwt")).type},t.addEmployee=function(e,t,n,c,a,i){var s=new FormData;s.append("image",i,e+" "+t),s.append("nom",e),s.append("prenom",t),s.append("email",n),s.append("telephone",c),s.append("poste",a),o.post("".concat(r,"/employee/add"),s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("response: ",e)})).catch((function(e){return console.log("err: ",e)}))},t.getCard=function(e){return o.get("".concat(r,"/employee/card/").concat(e),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("jwt")).token)}}).then((function(e){var t=function(e){for(var t=window.atob(e),n=t.length,o=new Uint8Array(n),r=0;r<n;r++)o[r]=t.charCodeAt(r);return o.buffer}(e.data.file),n=new Blob([t],{type:"application/pdf"}),o=URL.createObjectURL(n);window.open().location.href=o})).catch((function(e){console.log("Error: ",e)}))},t.getEmployee=function(e){return o.get("".concat(r,"/employee/").concat(e),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("jwt")).token)}}).then((function(e){return e})).catch((function(e){return console.log(e)}))}},649:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(s){r=!0,c=s}finally{try{o||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},650:function(e,t,n){"use strict";n.r(t),n.d(t,"API",(function(){return o}));var o="http://localhost:5000/api"},714:function(e,t,n){"use strict";n.r(t);var o=n(649),r=n(1),c=n(646),a=n(645),i=n(21),s=n(648),l=n(650),u=n(22),d=n(651);t.default=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],p=t[1],f=Object(r.useState)(""),h=Object(o.a)(f,2),j=h[0],m=h[1],g=Object(r.useState)([]),b=Object(o.a)(g,2),O=(b[0],b[1],Object(i.g)());return Object(u.jsx)("div",{children:Object(s.isAuthenticate)()?Object(u.jsx)(i.a,{to:"/"}):Object(u.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(u.jsx)(c.k,{children:Object(u.jsx)(c.G,{className:"justify-content-center",children:Object(u.jsx)(c.j,{md:"5",children:Object(u.jsx)(c.h,{children:Object(u.jsx)(c.f,{className:"p-4",children:Object(u.jsx)(c.g,{children:Object(u.jsxs)(c.s,{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(u.jsxs)(c.A,{className:"mb-3",children:[Object(u.jsx)(c.C,{children:Object(u.jsx)(c.D,{children:Object(u.jsx)(a.a,{name:"cil-user"})})}),Object(u.jsx)(c.y,{type:"text",placeholder:"Username",autoComplete:"username",value:n,onChange:function(e){p(e.target.value)}})]}),Object(u.jsxs)(c.A,{className:"mb-4",children:[Object(u.jsx)(c.C,{children:Object(u.jsx)(c.D,{children:Object(u.jsx)(a.a,{name:"cil-lock-locked"})})}),Object(u.jsx)(c.y,{type:"password",placeholder:"Password",autoComplete:"current-password",value:j,onChange:function(e){m(e.target.value)}})]}),Object(u.jsxs)(c.G,{children:[Object(u.jsx)(c.j,{xs:"6",children:Object(u.jsx)(c.e,{color:"primary",className:"px-4",onClick:function(e){console.log("api",l.API),d.post("".concat(l.API,"/admin/login"),{username:n,password:j}).then((function(e){Object(s.authenticate)(e.data,(function(){O.push({pathname:"/"})}))})).catch((function(e){d.post("".concat(l.API,"/reception/login"),{username:n,password:j}).then((function(e){Object(s.authenticate)(e.data,(function(){O.push({pathname:"/"})}))})).catch((function(e){return console.log(e)}))})),e.preventDefault()},children:"Login"})}),Object(u.jsx)(c.j,{xs:"6",className:"text-right",children:Object(u.jsx)(c.e,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})})})})})})})}}}]);
//# sourceMappingURL=8.2313ec20.chunk.js.map