(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n.n(a),s=n(17),u=n.n(s),o=n(8),i=n(1),p=n.n(i),l=n(4),d=n(5);var b=function(e){var t=e.searched,n=e.setSearch;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:["Filter shown with :"," ",Object(r.jsx)("input",{type:"search",onChange:function(e){n(e.target.value)},value:t})]})})},f=n(6),j=n.n(f),h="http://localhost:3001/api/persons",v=function(){var e=Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(h);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("".concat(h,"/add"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.put("".concat(h,"/").concat(t,"/edit"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),O={getAll:v,addPerson:m,deletePerson:function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete("".concat(h,"/").concat(t,"/delete"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",e.t0.response),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),updatePerson:x};var w=function(e){var t=e.setPersons,n=e.persons,c=e.updateNumber,s=e.setMessage,u=Object(a.useState)(""),o=Object(d.a)(u,2),i=o[0],b=o[1],f=Object(a.useState)(""),j=Object(d.a)(f,2),h=j[0],v=j[1],m=function(){var e=Object(l.a)(p.a.mark((function e(r){var a,u,o,l,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a={name:i,number:h},u=n.find((function(e){return e.name===a.name})),o=!1,u&&u.name===a.name&&(l=window.confirm("".concat(u.name," is already added to the phonebook, replace the old number with new a number")),o=l),!o){e.next=9;break}c(a),e.next=14;break;case 9:return e.next=11,O.addPerson(a);case 11:d=e.sent,console.log("DATA",d),200===d.status?(t(n.concat(d.data)),s({alert:"success",msg:"Added ".concat(a.name)})):s({alert:"error",msg:d.data.error});case 14:b(""),v("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:m,children:[Object(r.jsxs)("div",{children:["name:"," ",Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){b(e.target.value)}}),Object(r.jsxs)("div",{children:["number:"," ",Object(r.jsx)("input",{type:"text",value:h,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})};var g=function(e){var t=e.filterSearch,n=e.handleDelete;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsxs)("p",{children:[e.name," ",e.number," ",Object(r.jsx)("button",{onClick:function(){return n(e)},children:"delete"})]},t)}))})};n(41);var k=function(e){var t=e.message,n=e.setMessage;return setTimeout((function(){n("")}),2e3),Object(r.jsx)("div",{children:Object(r.jsx)("h2",{className:"alert ".concat(t.alert),children:t.msg})})},y=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),i=u[0],f=u[1],j=Object(a.useState)({msg:"",alert:""}),h=Object(d.a)(j,2),v=h[0],m=h[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=n.filter((function(e){return-1!==e.name.indexOf(i)})),y=function(){var e=Object(l.a)(p.a.mark((function e(t){var r,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.find((function(e){return e.name===t.name})),a=Object(o.a)(Object(o.a)({},r),{},{number:t.number}),e.next=4,O.updatePerson(r.id,a);case 4:return e.next=6,O.getAll();case 6:s=e.sent,c(s),m({alert:"warning",msg:"".concat(a.name," number is replaced with the new number")});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete ".concat(t.name," ?"))){e.next=7;break}return e.next=4,O.deletePerson(t.id);case 4:r=n.filter((function(e){return e.id!==t.id})),c(r),m({alert:"error",msg:"".concat(t.name," is deleted")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(k,{message:v,setMessage:m}),Object(r.jsx)(b,{searched:i,setSearch:f}),Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsx)(w,{setPersons:c,updateNumber:y,persons:n,setMessage:m}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(g,{filterSearch:x,handleDelete:S})]})};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fc049836.chunk.js.map