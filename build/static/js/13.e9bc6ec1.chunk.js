(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{720:function(e,t,c){"use strict";c.r(t);var n=c(649),r=c(1),a=c(646),s=c(704),j=c.n(s),d=(c(648),c(650)),i=c(651),o=c.n(i),l=c(22);t.default=function(){var e=Object(r.useState)("No result"),t=Object(n.a)(e,2),c=(t[0],t[1],Object(r.useState)({id:"no data",name:"no data",role:"no data",status:"no data",image:""})),s=Object(n.a)(c,2),i=s[0],b=s[1];return Object(l.jsx)(a.G,{children:Object(l.jsx)(a.j,{lg:12,children:Object(l.jsxs)(a.f,{children:[Object(l.jsx)(a.i,{children:"Scan Employee Card"}),Object(l.jsx)(a.g,{children:Object(l.jsxs)(a.G,{children:[Object(l.jsx)(a.j,{lg:4,children:Object(l.jsx)(j.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&(o.a.get("".concat(d.API,"/employee/").concat(e),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("jwt")).token)}}).then((function(e){b({id:e.data.employee._id,name:e.data.employee.nom+" "+e.data.employee.prenom,role:e.data.employee.poste,status:"not yet",image:e.data.employee.image})})).catch((function(e){return console.log(e)})),console.log(i.image))},style:{height:240,width:320}})}),Object(l.jsxs)(a.j,{children:[Object(l.jsx)("center",{children:Object(l.jsx)(a.x,{rounded:!0,thumbnail:!0,src:"data:image/png;base64,".concat(i.image),width:"150",height:"150"})}),Object(l.jsx)("br",{}),Object(l.jsx)("table",{className:"table table-striped table-hover",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"id:"}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:i.id})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"name"}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:i.name})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"role"}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:i.role})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"status"}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:i.status})})]})]})})]})]})})]})})})}}}]);
//# sourceMappingURL=13.e9bc6ec1.chunk.js.map