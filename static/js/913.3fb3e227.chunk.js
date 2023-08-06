"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[913],{5913:function(e,s,r){r.r(s),r.d(s,{default:function(){return f}});var a=r(1413),n=r(9439),o=r(5705),i=r(6727),d=r(1352),c=r(9273),l=r(2791),t=r(3439),h=r(9434),u=r(2483),w=r(1014),p=r(184),m=(0,i.Ry)({name:(0,i.Z_)().required("Name is a required field").min(2,"Your name is too short.").max(16,"Your name is too long."),email:(0,i.Z_)().required("Email is a required field").email("Please enter a valid email"),password:(0,i.Z_)().min(6,"Your password is too short.").max(16,"Your password is too long.").required("Password is a required field").matches(/[0-9]/,"Your password must have at least 1 number").matches(/[a-z]/,"Your password must have at least 1 lowercase letter").matches(/[A-Z]/,"Your password must have at least 1 uppercase letter"),confirmPassword:(0,i.Z_)().required("Please retype your password.").oneOf([(0,i.iH)("password")],"Your passwords do not match.")}),x={name:"",email:"",password:"",confirmPassword:""},j=function(e){var s=(0,h.I0)(),r=(0,l.useState)(!1),i=(0,n.Z)(r,2),j=i[0],f=i[1],v=(0,l.useState)(!1),g=(0,n.Z)(v,2),Z=g[0],y=g[1],P=(0,h.v9)(w.Z.loadingSelector);return(0,p.jsxs)(p.Fragment,{children:[" ",P?(0,p.jsx)(u.Z,{}):(0,p.jsxs)(d.ER,{children:[(0,p.jsx)(d.l3,{children:"Registration"}),(0,p.jsx)(o.J9,{initialValues:x,validationSchema:m,onSubmit:function(e){var r=e.name,a=e.email,n=e.password;s(c.Z.registrationUser({name:r,email:a,password:n}))},children:function(s){var r=s.errors,n=s.touched,i=s.handleChange,c=s.handleBlur,l=s.values,h=s.handleSubmit;return(0,p.jsxs)(d.Bt,{onSubmit:h,children:[(0,p.jsxs)(d.sI,{children:[(0,p.jsx)(d.Ye,(0,a.Z)((0,a.Z)({},e),{},{type:"text",name:"name",placeholder:"Name",onChange:i,onBlur:c,value:l.name,valid:n.name&&!r.name,error:n.name&&r.name})),r.name&&n.name&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.xp,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-cross-small")})})}),!r.name&&n.name&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.OP,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-check")})})})]}),(0,p.jsx)(o.Bc,{name:"name",render:function(e){return(0,p.jsx)(d.y,{children:e})}}),(0,p.jsxs)(d.sI,{children:[(0,p.jsx)(d.Ye,{type:"email",name:"email",placeholder:"Email",onChange:i,onBlur:c,value:l.email,valid:n.email&&!r.email,error:n.email&&r.email}),r.email&&n.email&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.xp,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-cross-small")})})}),!r.email&&n.email&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.OP,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-check")})})})]}),(0,p.jsx)(o.Bc,{name:"email",render:function(e){return(0,p.jsx)(d.y,{children:e})}}),(0,p.jsxs)(d.sI,{children:[(0,p.jsx)(d.Ye,{type:j?"text":"password",name:"password",placeholder:"Password",onChange:i,onBlur:c,value:l.password,valid:n.password&&!r.password,error:n.password&&r.password}),r.password&&n.password&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.xp,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-cross-small")})})}),!r.password&&n.password&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.OP,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-check")})})}),j?(0,p.jsx)(d.xH,{type:"button",onClick:function(){return f(!j)},onChange:i,onBlur:c,value:l.password,valid:n.password&&!r.password,error:n.password&&r.password,children:(0,p.jsx)(d.ln,{width:24,height:24,valid:n.password&&!r.password,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-eye-open")})})}):(0,p.jsx)(d.xH,{type:"button",onClick:function(){return f(!j)},valid:n.password&&!r.password,error:n.password&&r.password,children:(0,p.jsx)(d.ln,{width:24,height:24,valid:n.password&&!r.password,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-eye-closed")})})})]}),n.password&&!r.password&&!j&&(0,p.jsx)(d.N0,{children:"Password is secure"}),(0,p.jsx)(o.Bc,{name:"password",render:function(e){return(0,p.jsx)(d.y,{children:e})}}),(0,p.jsxs)(d.sI,{children:[(0,p.jsx)(d.Ye,{type:Z?"text":"password",name:"confirmPassword",placeholder:"Confirm password",onChange:i,onBlur:c,value:l.confirmPassword,valid:n.confirmPassword&&!r.confirmPassword,error:n.confirmPassword&&r.confirmPassword}),r.confirmPassword&&n.password&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.xp,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-cross-small")})})}),!r.confirmPassword&&n.password&&(0,p.jsx)(d._e,{children:(0,p.jsx)(d.OP,{width:24,height:24,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-check")})})}),Z?(0,p.jsx)(d.a8,{type:"button",onClick:function(){return y(!Z)},valid:n.password&&!r.password,error:n.password&&r.password,children:(0,p.jsx)(d.ln,{width:24,height:24,valid:n.password&&!r.password,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-eye-open")})})}):(0,p.jsx)(d.a8,{type:"button",onClick:function(){return y(!Z)},valid:n.password&&!r.password,error:n.password&&r.password,children:(0,p.jsx)(d.ln,{width:24,height:24,valid:n.password&&!r.password,children:(0,p.jsx)("use",{href:"".concat(t.Z,"#icon-eye-closed")})})})]}),(0,p.jsx)(o.Bc,{name:"confirmPassword",render:function(e){return(0,p.jsx)(d.y,{children:e})}}),(0,p.jsx)(d.p9,{type:"submit",children:"Registration"}),(0,p.jsxs)(d.fV,{children:["Already have an account? ",(0,p.jsx)(d.ZA,{to:"/login",children:"Login"})]})]})}})]})]})};var f=function(){return(0,p.jsx)(j,{})}}}]);
//# sourceMappingURL=913.3fb3e227.chunk.js.map