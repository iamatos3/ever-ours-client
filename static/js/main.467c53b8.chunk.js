(this["webpackJsonpever-ours-client"]=this["webpackJsonpever-ours-client"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(25),c=a.n(r),s=(a(72),a(73),a(49)),i=a(4),o=a(7),l=a(105),u=(a(74),a(52)),j=a(1);var d=function(e){var t=e.variant,a=e.heading,r=e.message,c=Object(n.useState)(!0),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),h=b[0],O=b[1];return console.log(h),Object(n.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return O(e),function(){clearTimeout(h)}}),[]),Object(j.jsx)(u.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:r})]})})},b=a(66),h=a(40),O=a(65),m=a(11),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/events",className:"nav-link",children:"Events"}),Object(j.jsx)(m.c,{to:"/events/create",className:"nav-link",children:"Create An Event"}),Object(j.jsx)(m.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),v=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(m.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),x=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m.c,{to:"/",className:"nav-link",children:"Home"})}),g=function(e){var t=e.user;return Object(j.jsx)(h.a,{bg:"dark",variant:"dark",expand:"md",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(m.b,{to:"/",style:{color:"#fae1dd",textDecoration:"none"},children:"Ever Ours"})}),Object(j.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),x,t?p:v]})})]})})},f=a(9),w=a.n(f),y=a(13),C="https://dry-island-85955.herokuapp.com",S="http://localhost:4741",k="localhost"===window.location.hostname?S:C,N=a(23),A=a.n(N),E=function(e,t,a){return A.a.post(k+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},I=function(e,t){return A.a.post(k+"/sign-in/",{credentials:{email:e,password:t}})},L=function(e){return A.a.delete(k+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},P=function(e,t,a){return A.a.patch(k+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},F=a(10),G=a(33),U=function(e){var t=e.msgAlert,a=e.setUser,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(""),m=Object(i.a)(O,2),p=m[0],v=m[1],x=Object(n.useState)(!1),g=Object(i.a)(x,2),f=g[0],C=g[1],S=function(){var e=Object(y.a)(w.a.mark((function e(n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,E(s,b,p);case 4:return e.next=6,I(s,b);case 6:r=e.sent,a(r.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),C(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),h(""),v(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return f?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(F.a,{onSubmit:S,children:[Object(j.jsxs)(F.a.Group,{controlId:"email",children:[Object(j.jsx)(F.a.Label,{children:"Email address"}),Object(j.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"password",children:[Object(j.jsx)(F.a.Label,{children:"Password"}),Object(j.jsx)(F.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(F.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return v(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},D=function(e){var t=e.msgAlert,a=e.setUser,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(!1),m=Object(i.a)(O,2),p=m[0],v=m[1],x=function(){var e=Object(y.a)(w.a.mark((function e(n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,I(s,b);case 4:r=e.sent,a(r.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),v(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),h(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(F.a,{onSubmit:x,children:[Object(j.jsxs)(F.a.Group,{controlId:"email",children:[Object(j.jsx)(F.a.Label,{children:"Email address"}),Object(j.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"password",children:[Object(j.jsx)(F.a.Label,{children:"Password"}),Object(j.jsx)(F.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},B=function(e){var t=e.msgAlert,a=e.clearUser,r=e.user,c=Object(n.useState)(!1),s=Object(i.a)(c,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(r)}),[]),!r||l?Object(j.jsx)(o.a,{to:"/"}):""},q=function(e){var t=e.msgAlert,a=e.user,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(!1),m=Object(i.a)(O,2),p=m[0],v=m[1],x=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,P(s,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),v(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(F.a,{onSubmit:x,children:[Object(j.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(F.a.Label,{children:"Old password"}),Object(j.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:s,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(F.a.Label,{children:"New Password"}),Object(j.jsx)(F.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},z=(a(100),function(){return Object(j.jsxs)("div",{style:{backgroundColor:"#264653",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"#fae1dd"},children:[Object(j.jsx)("h1",{children:"Ever Ours"}),Object(j.jsx)("div",{style:{backgroundColor:"#d9ae94",display:"flex",justifyContent:"center",alignItems:"center",height:"auto",color:"white"},children:Object(j.jsx)("h4",{children:"Create your Dream Event and share with Family + Friends!"})})]})}),T=a(104),_=function(e){return A.a.get(k+"/events/",{headers:{Authorization:"Bearer ".concat(e.token)}})},H=function(e,t){return A.a.get("".concat(k,"/events/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},J=function(e,t){return A.a.delete("".concat(k,"/events/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},W=function(e,t,a,n,r,c){return A.a.patch("".concat(k,"/events/").concat(e),{event:{title:t,location:a,capacity:n,attire:r}},{headers:{Authorization:"Bearer ".concat(c.token)}})},R=function(e,t,a,n,r){return A.a.post("".concat(k,"/events/"),{event:{title:e,location:t,capacity:a,attire:n}},{headers:{Authorization:"Bearer ".concat(r.token)}})},Y={backgroundColor:"#d9ae94",display:"flex",justifyContent:"center",alignItems:"center",height:"auto",color:"white"},K=function(e){var t=e.user,a=e.msgAlert,r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(O,t);case 3:n=e.sent,l(n.data.event),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Event failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(O,t);case 3:h(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({heading:"Failed to delete the event",message:e.t0.message,variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return s?b?Object(j.jsx)(o.a,{to:"/events/"}):Object(j.jsx)("div",{className:"row",style:Y,children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:s.title}),Object(j.jsxs)("p",{children:["Location: ",s.location]}),Object(j.jsxs)("p",{children:["Capacity: ",s.capacity]}),Object(j.jsxs)("p",{children:["Attire: ",s.attire]}),Object(j.jsx)(G.a,{variant:"danger",onClick:p,children:"Delete Event"}),Object(j.jsx)(m.b,{to:"/events/".concat(O,"/edit"),children:Object(j.jsx)(G.a,{variant:"primary",type:"submit",children:"Update Event"})})]})}):Object(j.jsx)(T.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},M=function(e){var t=e.handleSubmit,a=e.title,n=e.location,r=e.setTitle,c=e.setLocation,s=e.capacity,i=e.setCapacity,o=e.attire,l=e.setAttire,u=e.user;return Object(j.jsxs)(F.a,{onSubmit:function(e){return t(e,u)},children:[Object(j.jsxs)(F.a.Group,{controlId:"title",children:[Object(j.jsx)(F.a.Label,{children:"Title"}),Object(j.jsx)(F.a.Control,{placeholder:"A Perfect Event",name:"title",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"location",children:[Object(j.jsx)(F.a.Label,{children:"Location"}),Object(j.jsx)(F.a.Control,{placeholder:"Location/Destination",name:"location",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"capacity",children:[Object(j.jsx)(F.a.Label,{children:"Capacity"}),Object(j.jsx)(F.a.Control,{placeholder:"Capacity",name:"capacity",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsxs)(F.a.Group,{controlId:"attire",children:[Object(j.jsx)(F.a.Label,{children:"Attire"}),Object(j.jsx)(F.a.Control,{placeholder:"Attire",name:"attire",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})},Q={backgroundColor:"#d9ae94",display:"flex",justifyContent:"center",alignItems:"center",height:"auto",color:"white"},V=function(e){var t=e.user,a=e.msgAlert,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(""),m=Object(i.a)(O,2),p=m[0],v=m[1],x=Object(n.useState)(""),g=Object(i.a)(x,2),f=g[0],C=g[1],S=Object(n.useState)(null),k=Object(i.a)(S,2),N=k[0],A=k[1],E=function(){var e=Object(y.a)(w.a.mark((function e(n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,R(s,b,p,f,t);case 4:r=e.sent,A(r.data.event._id),console.log(r.data.event._id),a({heading:"Event Created",message:"Created ".concat(s," successfully!"),variant:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a({heading:"Failed to create Event",message:e.t0.message,variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return t?N?Object(j.jsx)(o.a,{to:"/events/".concat(N)}):Object(j.jsx)("div",{className:"row",style:Q,children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Event"}),Object(j.jsx)(M,{handleSubmit:E,title:s,location:b,capacity:p,attire:f,setTitle:l,setLocation:h,setCapacity:v,setAttire:C,user:t})]})}):Object(j.jsx)(o.a,{to:"/"})},X={backgroundColor:"#d9ae94",display:"flex",justifyContent:"center",alignItems:"center",height:"auto",color:"white"},Z=function(e){var t=e.user,a=e.msgAlert,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(""),m=Object(i.a)(O,2),p=m[0],v=m[1],x=Object(n.useState)(""),g=Object(i.a)(x,2),f=g[0],C=g[1],S=Object(n.useState)(!1),k=Object(i.a)(S,2),N=k[0],A=k[1],E=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(E,t);case 3:n=e.sent,l(n.data.event.title),h(n.data.event.location),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Failed to load Event",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,W(E,s,b,p,f,t);case 4:A(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({heading:"Failed to update event",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(j.jsx)(o.a,{to:"/events/".concat(E)}):Object(j.jsx)("div",{className:"row",style:X,children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Edit Event"}),Object(j.jsx)(M,{handleSubmit:I,title:s,location:b,capacity:p,attire:f,setTitle:l,setLocation:h,setCapacity:v,setAttire:C,user:t})]})})},$={backgroundColor:"#d9ae94",display:"flex",justifyContent:"center",alignItems:"center",height:"auto",color:"white"},ee=function(e){var t=e.user,a=e.msgAlert,r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],l=c[1];if(!t)return Object(j.jsx)(o.a,{to:"/"});if(Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:n=e.sent,l(n.data.events),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Events List failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}})()(t)}),[]),s){if(0===s.length)return Object(j.jsx)("h1",{children:"No Events yet, please create one!"});var u=s.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(m.b,{to:"/events/".concat(e._id),children:e.title})},e._id)}));return Object(j.jsx)("div",{className:"row",style:$,children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Events"}),Object(j.jsx)("ul",{children:u})]})})}return Object(j.jsx)(T.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},te=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),b=u[0],h=u[1],O=function(e){var t=e.heading,a=e.message,n=e.variant,r=Object(l.a)();h((function(e){return[].concat(Object(s.a)(e),[{heading:t,message:a,variant:n,id:r}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/sign-up",element:Object(j.jsx)(U,{msgAlert:O,setUser:r})}),Object(j.jsx)(o.b,{path:"/sign-in",element:Object(j.jsx)(D,{msgAlert:O,setUser:r})}),Object(j.jsx)(o.b,{path:"/sign-out",element:Object(j.jsx)(B,{msgAlert:O,clearUser:function(){return r(null)},user:a})}),Object(j.jsx)(o.b,{path:"/change-password",element:Object(j.jsx)(q,{msgAlert:O,user:a})}),Object(j.jsx)(o.b,{path:"/",element:Object(j.jsx)(z,{})}),Object(j.jsx)(o.b,{path:"/events",element:Object(j.jsx)(ee,{msgAlert:O,user:a})}),Object(j.jsx)(o.b,{path:"/events/:id",element:Object(j.jsx)(K,{msgAlert:O,user:a})}),Object(j.jsx)(o.b,{path:"/events/create",element:Object(j.jsx)(V,{msgAlert:O,user:a})}),Object(j.jsx)(o.b,{path:"/events/:id/edit",element:Object(j.jsx)(Z,{msgAlert:O,user:a})})]})})]})},ae=Object(j.jsx)(m.a,{basename:"/ever-ours-client",children:Object(j.jsx)(te,{})});c.a.render(ae,document.getElementById("root"))},72:function(e,t,a){},74:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.467c53b8.chunk.js.map