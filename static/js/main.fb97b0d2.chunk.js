(this.webpackJsonphaydii=this.webpackJsonphaydii||[]).push([[0],{101:function(e,n,t){},102:function(e,n,t){},106:function(e,n,t){},111:function(e,n,t){},112:function(e,n,t){"use strict";t.r(n);var i,s,c,a,r,l,j,d,o,b,x=t(1),O=t.n(x),p=t(35),u=t.n(p),h=(t(101),t(12)),m=(t(102),t(7)),g=t(154),f=t(23),w=t(72),v=t.n(w),y=t(16),P=t(18),C=P.a.div(i||(i=Object(y.a)(['\nbackground: url("https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg");\nwidth: 100vw;\nheight: 100vh;\n']))),k=P.a.div(s||(s=Object(y.a)(["\nposition: relative;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%,-50%);\nbackground: white;\n/* margin-left:20px; */\nmargin-right: 150px;\ndisplay: flex;\nborder-radius:8px;\nbox-shadow: rgba(0,0,0,0.7) 5px 10px 15px;\njustify-content: center;\n\n\n@media screen and (max-width:768px){\n flex-direction   :column ;\n width: 100vw;\n \n top:0;\n left:0;\n transform:none;\n\n}\n\n"]))),S=P.a.div(c||(c=Object(y.a)(['\nbackground: url("https://www.india.com/wp-content/uploads/2021/11/Cristiano-Ronaldo.jpg") ;\n/* background-position: center; */\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\nobject-fit: cover;\nheight: 650px;\nwidth: 50%;\nborder-radius:8px 0 0 8px;\n\n/* border-radius:8px; */\n@media screen and (max-width:768px){\n width: 100%;\n min-height: 650px;\n border-radius: 0px;\n\n}\n']))),N=P.a.div(a||(a=Object(y.a)(["\n/* background:purple; */\nwidth: 50%;\nheight: 650px;\nborder-radius:8px;\n\n@media screen and (max-width:768px){\n width: 100%;\n \n}\n\n"]))),R=P.a.div(r||(r=Object(y.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 100%;\ngap: 20px;\njustify-content:center;\nalign-items: center;\n"]))),q=P.a.div(l||(l=Object(y.a)(["\n\nalign-self: flex-start;\nfont-size: 30px;\npadding: 15px;\nmargin-left: 40px;\nfont-weight: bolder;\n\n@media screen and (max-width:768px){\n align-self: center;\n margin: 0;\n \n}\n\n"]))),E=P.a.div(j||(j=Object(y.a)(["\n/* flex:1; */\ntext-align: center;\noverflow-y:scroll;\nwidth: 100%;\nheight: 60%;\nalign-content: center;\njustify-content: center;\n&::-webkit-scrollbar {display:none;}\n\n"]))),F=P.a.div(d||(d=Object(y.a)(["\npadding-bottom: 15px;\npadding-top: 10px;\n/* width: 80%; */\n\n\n&>p{\n  color: red;\n}\n"]))),A=P.a.div(o||(o=Object(y.a)(["\nwidth: 100%;\npadding-top: 10px;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n&>button{\n    width: 60%;\n    height: 40px;\n    border-radius: 20px;\n    border:none;\n    cursor: pointer;\n    background: linear-gradient(to right, #E42279 , #6C1D63);\n    color: white;\n    font-size: 16px;\n    margin-top: 15px;\n    margin-bottom: 5px;\n    padding: 5px;\n}\n\n\n"]))),T=P.a.div(b||(b=Object(y.a)(["\n\nwidth: 100%;\ntext-align: center;\npadding-top: 10px;\nfont-size: 15px;\n&>span>a{\n    text-decoration: none;\n    color:#E32279;\n}\n"]))),D=t(158),I=t(36),L=t.n(I),z=t(37),U=t.n(z),_=t(81),B=t.n(_),M=(t(105),t(106),t(4)),V=t(68),Z=function(e,n){var t=Object(x.useState)({username:"",mobilenumber:"",email:"",password:"",password2:"",supermarket:"",location:"",Otp:"",Otp1:"",file:"",file1:""}),i=Object(m.a)(t,2),s=i[0],c=i[1],a=Object(x.useState)({}),r=Object(m.a)(a,2),l=r[0],j=r[1],d=Object(x.useState)(!1),o=Object(m.a)(d,2),b=o[0],O=o[1];return Object(x.useEffect)((function(){0===Object.keys(l).length&&b&&e()}),[l]),{handleChange:function(e){var n=e.target,t=n.name,i=n.value;c(Object(V.a)(Object(V.a)({},s),{},Object(M.a)({},t,i)))},values:s,handleSubmit:function(e){e.preventDefault(),j(n(s)),O(!0),console.log(s)},errors:l}};function J(e){var n={};return e.username.trim()||(n.username="Username is Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Email Address is invalid "):n.email="Email Required",e.password?e.password.length<6&&(n.password="Password needs to be 6 characters or more"):n.password="Password is Required",e.password2?e.password2!==e.password&&(n.password2="Password do not match"):n.password2="Password is Required",e.mobilenumber||(n.mobilenumber="Mobile Number is Required"),e.Otp?(isNaN(e.Otp)||e.Otp.length<4)&&(n.Otp="Enter Valid OTP"):n.Otp="OTP is Required",e.Otp1?isNaN(e.Otp1)?n.Otp1="Enter Valid OTP":e.Otp.length<4&&(n.Otp="Enter Valid OTP"):n.Otp1="OTP is Required",e.file?e.file.size>4e4&&(n.file="File is too large"):n.file="Document is Required",e.file1||(n.file1="Document is Required"),e.location||(n.location="Location is Required"),e.supermarket||(n.supermarket="Super Market detail is required"),n}var G,H,Y,$,Q=t(0),W=function(e){var n=e.submitForm,t=Z(n,J),i=t.handleChange,s=t.values,c=t.handleSubmit,a=t.errors,r=Object(x.useState)(!1),l=Object(m.a)(r,2),j=l[0],d=l[1],o=Object(x.useState)(!1),b=Object(m.a)(o,2),O=b[0],p=b[1],u=function(){d(!j)},h=function(){p(!O)},w=Object(x.useState)(),y=Object(m.a)(w,2),P=y[0],I=y[1];s.mobilenumber=P;var z=Object(x.useState)(),_=Object(m.a)(z,2),M=_[0],V=_[1];s.file=M;var G=Object(x.useState)(),H=Object(m.a)(G,2),Y=H[0],$=H[1];return s.file1=Y,Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"Sign Up"}),Object(Q.jsxs)(E,{children:["  ",Object(Q.jsxs)("form",{onSubmit:c,children:[" ",Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",name:"username",label:"Username",variant:"outlined",value:s.username,onChange:i})," ",a.username&&Object(Q.jsx)("p",{children:a.username})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"",name:"mobilenumber",id:"outlined-basic",label:"Mobile Number",variant:"outlined",InputProps:{startAdornment:Object(Q.jsx)(D.a,{position:"start",children:Object(Q.jsx)(B.a,{value:P,onChange:I,enableSearch:!0,disableSearchIcon:!0,className:"phoneinput"})})}}),a.mobilenumber&&Object(Q.jsx)("p",{children:a.mobilenumber})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"email",id:"outlined-basic",name:"email",label:"Email",variant:"outlined",value:s.email,onChange:i})," ",a.email&&Object(Q.jsx)("p",{children:a.email})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:j?"text":"password",id:"outlined-basic",name:"password",label:"Create Password",variant:"outlined",value:s.password,onChange:i,InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:j?Object(Q.jsx)(L.a,{style:{cursor:"pointer"},onClick:u}):Object(Q.jsx)(U.a,{style:{cursor:"pointer"},onClick:u})})}})," ",a.password&&Object(Q.jsx)("p",{children:a.password})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:O?"text":"password",id:"outlined-basic",name:"password2",label:"Confirm Password",variant:"outlined",value:s.password2,onChange:i,InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:O?Object(Q.jsx)(L.a,{style:{cursor:"pointer"},onClick:h}):Object(Q.jsx)(U.a,{style:{cursor:"pointer"},onClick:h})})}}),a.password2&&Object(Q.jsx)("p",{children:a.password2})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",name:"supermarket",label:"Super Market Details",variant:"outlined",value:s.supermarket,onChange:i}),a.supermarket&&Object(Q.jsx)("p",{children:a.supermarket})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{name:"file",className:"custom-input",onChange:function(e){V(e.target.files[0])},type:"file",id:"outlined-basic",label:"Upload Document",variant:"outlined",InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:Object(Q.jsx)(v.a,{})})},InputLabelProps:{shrink:!0}}),a.file&&Object(Q.jsx)("p",{children:a.file})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{name:"file1",onChange:function(e){$(e.target.files[0])},type:"file",id:"outlined-basic",label:"Upload Document",variant:"outlined",InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:Object(Q.jsx)(v.a,{})})},InputLabelProps:{shrink:!0}}),a.file1&&Object(Q.jsx)("p",{children:a.file1})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",name:"location",label:"Location",variant:"outlined",value:s.location,onChange:i}),a.location&&Object(Q.jsx)("p",{children:a.location})]}),Object(Q.jsx)(A,{children:Object(Q.jsx)("button",{type:"submit",children:"Next"})})]}),"   "]}),Object(Q.jsxs)(T,{children:["Already have an Account?",Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/Login",children:"Login"})})]})]})})]})})})},X=P.a.div(G||(G=Object(y.a)(["\n\nfont-size: 13px;\nfont: normal normal normal 13px/22px Lato;\nletter-spacing: 0px;\ncolor: #8F8F8F;\nopacity: 1;\nalign-self: flex-start;\npadding-left: 60px;\n\n@media screen and (max-width:768px){\nalign-self: center;\npadding:0;\n}\n\n"]))),K=P.a.div(H||(H=Object(y.a)(["\nwidth: 100%;\ndisplay: flex;\n/* text-align: center; */\n\ncolor: #8F8F8F;\nfont-size: 15px;\njustify-content:space-around;\n&>span>a{\n    text-decoration: none;\n    color:#E32279;\n    cursor: pointer;\n}\n"]))),ee=(t(64),function(e){var n=e.submitForm,t=Z(n,J),i=t.handleChange,s=t.values,c=t.handleSubmit,a=t.errors;return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"OTP Verification"}),Object(Q.jsx)(X,{children:"Please enter the OTP below to complete the verification process"}),Object(Q.jsx)(E,{children:Object(Q.jsxs)("form",{onSubmit:c,children:[Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"text",name:"Otp",onChange:i,value:s.Otp,id:"outlined-basic",label:"Mobile OTP",variant:"outlined"}),a.Otp&&Object(Q.jsx)("p",{children:a.Otp})]}),Object(Q.jsxs)(K,{children:["Didn't Recieve",Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/",children:"Request New OTP"})})]}),Object(Q.jsxs)(F,{className:"spacing_otp",children:[Object(Q.jsx)(g.a,{type:"text",name:"Otp1",onChange:i,value:s.Otp1,id:"outlined-basic",label:"Email OTP",variant:"outlined"}),a.Otp1&&Object(Q.jsx)("p",{children:a.Otp1})]}),Object(Q.jsxs)(K,{children:[Object(Q.jsx)("span",{children:"Didn't Recieve"}),Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/",children:"Request New OTP"})})]}),Object(Q.jsx)(A,{className:"spacing_next",children:Object(Q.jsx)("button",{type:"submit",children:"Next"})})]})})]})})]})})})}),ne=t(157),te=t(84),ie=t.n(te),se=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"Bank Details"}),Object(Q.jsxs)(E,{children:[Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",label:"Account Holder",variant:"outlined",required:!0})}),Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",label:"Select Bank",variant:"outlined",required:!0,select:!0,children:[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}].map((function(e){return Object(Q.jsx)(ne.a,{value:e.value,children:e.label},e.value)}))})}),Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"number",id:"outlined-basic",label:"Account Number",variant:"outlined",required:!0})}),Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"password",id:"outlined-basic",label:"Re-Enter Account Number",variant:"outlined",required:!0,InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:Object(Q.jsx)(ie.a,{style:{color:"green"},onClick:function(){}})})}})}),Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",label:"Branch Code",variant:"outlined",required:!0})}),Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"text",id:"outlined-basic",label:"Branch Name",variant:"outlined",required:!0})}),Object(Q.jsx)(A,{children:Object(Q.jsx)("button",{children:"Done"})})]})]})})]})})})},ce=t(156),ae=(t(111),function(e){var n=e.submitForm,t=Z(n,J),i=t.handleChange,s=t.values,c=t.handleSubmit,a=t.errors,r=Object(x.useState)(!1),l=Object(m.a)(r,2),j=l[0],d=l[1],o=function(){d(!j)};return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"Login"}),Object(Q.jsx)(E,{children:Object(Q.jsxs)("form",{onSubmit:c,children:[Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:"email",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:s.email,onChange:i}),a.email&&Object(Q.jsx)("p",{children:a.email})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:j?"text":"password",id:"outlined-basic",label:"Password",variant:"outlined",name:"password",value:s.password,onChange:i,InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:j?Object(Q.jsx)(L.a,{style:{cursor:"pointer"},onClick:o}):Object(Q.jsx)(U.a,{style:{cursor:"pointer"},onClick:o})})}}),a.password&&Object(Q.jsx)("p",{children:a.password})]}),Object(Q.jsxs)(K,{className:!0,children:[Object(Q.jsxs)("span",{children:[" ",Object(Q.jsx)("span",{children:Object(Q.jsx)(ce.a,{className:"Checkdesign"})}),"Remember Login Details"]}),Object(Q.jsx)("span",{className:"adjust_forgotpassword",children:Object(Q.jsx)(f.b,{exact:!0,to:"/Resetpassword",children:"Forgot Password?"})})]}),Object(Q.jsx)(A,{className:"spacing_next",children:Object(Q.jsx)("button",{type:"submit",children:"LOG IN"})})]})}),Object(Q.jsxs)(T,{children:["Don't have an Account?",Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/",children:"Sign Up"})})]})]})})]})})})}),re=P.a.div(Y||(Y=Object(y.a)(["\nfont-size: 16px;\ncolor: #202020;\nopacity: 1;\nfont-weight: bold;\n"]))),le=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"Forgot Password"}),Object(Q.jsx)(re,{children:"Please enter your registered e-mail or mobile number to reset your password"}),Object(Q.jsx)(X,{children:"We need to verify your account,your data will be secured and private."}),Object(Q.jsxs)(E,{children:[Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"Email",id:"outlined-basic",label:"Email",variant:"outlined",required:!0})}),Object(Q.jsx)(A,{className:"spacing_next",children:Object(Q.jsx)("button",{children:"Get OTP"})})]})]})})]})})})},je=P.a.div($||($=Object(y.a)(["\nfont-size: 14px;\n/* align-self: flex-start;\nmargin-left: 60px; */\n&>span>a{\n    color:#E32279;\n}\n"]))),de=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsxs)(N,{children:[" ",Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"OTP Verification"}),Object(Q.jsxs)(je,{children:["If wrong number provided,",Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/",children:"Click here to edit"})})]}),Object(Q.jsx)(X,{children:"Please enter the OTP below to complete the verification process"}),Object(Q.jsxs)(E,{children:[Object(Q.jsx)(F,{children:Object(Q.jsx)(g.a,{type:"number",id:"outlined-basic",label:"Enter OTP",variant:"outlined",required:!0})}),Object(Q.jsxs)(K,{children:[Object(Q.jsx)("span",{children:"Didn't Recieve?"}),Object(Q.jsx)("span",{children:Object(Q.jsx)(f.b,{to:"/",children:"Request New OTP"})})]}),Object(Q.jsx)(A,{className:"spacing_next",children:Object(Q.jsx)("button",{children:"Proceed"})})]})]})]})]})})})},oe=function(e){var n=e.submitForm,t=Z(n,J),i=t.handleChange,s=t.values,c=t.handleSubmit,a=t.errors,r=Object(x.useState)(!1),l=Object(m.a)(r,2),j=l[0],d=l[1],o=Object(x.useState)(!1),b=Object(m.a)(o,2),O=b[0],p=b[1],u=function(){d(!j)},h=function(){p(!O)};return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(C,{children:Object(Q.jsxs)(k,{children:[Object(Q.jsx)(S,{}),Object(Q.jsx)(N,{children:Object(Q.jsxs)(R,{children:[Object(Q.jsx)(q,{children:"Reset Password"}),Object(Q.jsx)(X,{children:"Enter 4 Digit Verification Code (OTP) Sent On Your Registered Mobile Number/E-mail Address."}),Object(Q.jsx)(E,{children:Object(Q.jsxs)("form",{onSubmit:c,children:[Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:j?"text":"password",name:"password",value:s.password,onChange:i,id:"outlined-basic",label:"New Password",variant:"outlined",InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:j?Object(Q.jsx)(L.a,{style:{cursor:"pointer"},onClick:u}):Object(Q.jsx)(U.a,{style:{cursor:"pointer"},onClick:u})})}}),a.password&&Object(Q.jsx)("p",{children:a.password})]}),Object(Q.jsxs)(F,{children:[Object(Q.jsx)(g.a,{type:O?"text":"password",id:"outlined-basic",name:"password2",value:s.password2,onChange:i,label:"Re-Enter Password",variant:"outlined",InputProps:{endAdornment:Object(Q.jsx)(D.a,{position:"end",children:O?Object(Q.jsx)(L.a,{style:{cursor:"pointer"},onClick:h}):Object(Q.jsx)(U.a,{style:{cursor:"pointer"},onClick:h})})}}),a.password2&&Object(Q.jsx)("p",{children:a.password2})]}),Object(Q.jsx)(A,{className:"spacing_next",children:Object(Q.jsx)("button",{type:"submit",children:"Reset Password"})})]})})]})})]})})})};var be=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(h.c,{children:[Object(Q.jsx)(h.a,{exact:!0,path:"/",element:Object(Q.jsx)(W,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Otp",element:Object(Q.jsx)(ee,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Bank",element:Object(Q.jsx)(se,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Login",element:Object(Q.jsx)(ae,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Forgotpassword",element:Object(Q.jsx)(le,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Otpverification",element:Object(Q.jsx)(de,{})}),Object(Q.jsx)(h.a,{exact:!0,path:"/Resetpassword",element:Object(Q.jsx)(oe,{})})]})})};u.a.render(Object(Q.jsx)(O.a.StrictMode,{children:Object(Q.jsx)(f.a,{children:Object(Q.jsx)(be,{})})}),document.getElementById("root"))},64:function(e,n,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.fb97b0d2.chunk.js.map