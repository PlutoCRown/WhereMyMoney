"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[977],{15359:function(L,h,e){e.d(h,{_:function(){return p}});function p(l){return{get:function(u){var D=localStorage.getItem(l);return D?JSON.parse(D):u},set:function(u){localStorage.setItem(l,JSON.stringify(u))}}}},28820:function(L,h,e){e.d(h,{X:function(){return g}});var p=e(94434),l=e.n(p),u=e(46686),D=e.n(u),x=e(38114),P=e(93236),b=e(15359),M=(0,b._)("Purpose"),A=M.get([{id:"1",name:"\u{1F354}\u996E\u98DF"},{id:"2",name:"\u{1F6FB}\u4EA4\u901A"}]),g=function(){var y=(0,P.useState)(A),m=D()(y,2),d=m[0],v=m[1],o=function(a){v(a),M.set(a)};return{name:"Purpose",data:d,Add:function(a){var r={id:(0,x.f)(),name:""};d.push(r),o(l()(d)),a(r)},rename:function(a,r,E){if(r!=""){var i=d.filter(function(t){return t.id==a})[0];i.name=r,i.color=E,o(l()(d))}},del:function(a){o(l()(d.filter(function(r){return r.id!=a})))}}}},66506:function(L,h,e){e.d(h,{V:function(){return g}});var p=e(94434),l=e.n(p),u=e(46686),D=e.n(u),x=e(38114),P=e(93236),b=e(15359),M=(0,b._)("Taker"),A=M.get([{id:"1",name:"\u6211"},{id:"2",name:"\u4F60"}]),g=function(){var y=(0,P.useState)(A),m=D()(y,2),d=m[0],v=m[1],o=function(a){v(a),M.set(a)};return{name:"Taker",data:d,Add:function(a){var r={id:(0,x.f)(),name:""};d.push(r),o(l()(d)),a(r)},rename:function(a,r,E){if(r!=""){var i=d.filter(function(t){return t.id==a})[0];i.name=r,i.color=E,o(l()(d))}},del:function(a){o(l()(d.filter(function(r){return r.id!=a})))}}}},3137:function(L,h,e){e.d(h,{fi:function(){return l.f},ED:function(){return y},Xs:function(){return m.X},Vd:function(){return p.V}});var p=e(66506),l=e(19896),u=e(94434),D=e.n(u),x=e(46686),P=e.n(x),b=e(38114),M=e(93236),A=e(15359),g=(0,A._)("Fountainhead"),W=g.get([{id:"1",name:"Work"},{id:"2",name:"SideProject"}]),y=function(){var o=(0,M.useState)(W),c=P()(o,2),a=c[0],r=c[1],E=function(t){r(t),g.set(t)};return{name:"Fountainhead",data:a,Add:function(t){var j={id:(0,b.f)(),name:""};a.push(j),E(D()(a)),t(j)},rename:function(t,j,V){if(j!=""){var G=a.filter(function(k){return k.id==t})[0];G.name=j,G.color=V,E(D()(a))}},del:function(t){E(D()(a.filter(function(j){return j.id!=t})))}}},m=e(28820),d=e(2395)},19896:function(L,h,e){e.d(h,{f:function(){return W}});var p=e(94434),l=e.n(p),u=e(46686),D=e.n(u),x=e(30279),P=e.n(x),b=e(93236),M=e(15359),A=(0,M._)("BillData"),g=A.get([]).map(function(y){return P()(P()({},y),{},{date:new Date(Date.parse(y.date))})}),W=function(){var m=(0,b.useState)(g),d=D()(m,2),v=d[0],o=d[1],c=function(t){o(t),A.set(t)},a=function(t){t.date=new Date(Date.parse(t.date)),v.unshift(t),c(l()(v)),console.log(t)},r=function(){console.log(v)},E=function(){console.log(v)};return{data:v,Add:a,rename:r,del:E}}},2395:function(L,h,e){e.d(h,{B:function(){return y}});var p=e(94434),l=e.n(p),u=e(46686),D=e.n(u),x=e(30279),P=e.n(x),b=e(93236),M=e(15359),A=e(38114),g=(0,M._)("ShoppingList"),W=g.get([]).map(function(m){return P()(P()({},m),{},{date:new Date(Date.parse(m.date)),stopDate:m.stopDate?new Date(Date.parse(m.stopDate)):void 0})}),y=function(){var d=(0,b.useState)([{id:"1234",date:new Date("2020,7,10"),name:"\u624B\u673A",price:2799,coefficient:1,isStopped:!1,Remark:""},{id:"123124",date:new Date("2020,10,10"),name:"\u7535\u8111",price:4299,isStopped:!1,coefficient:.7142857142857143,Remark:"\u7535\u8111\u53EA\u6709\u5DE5\u4F5C\u65E5\u624D\u7528\uFF0C\u65E5\u5747\u8981\u4E585/7"}]),v=D()(d,2),o=v[0],c=v[1],a=function(t){o.unshift(P()({id:(0,A.f)(),isStopped:!1},t)),c(l()(o))};function r(i,t,j){i[t]=j,c(l()(o))}var E=function(t){c(o.filter(function(j){return j.id!==t}))};return{data:o,Add:a,mutation:r,del:E}}},85325:function(L,h,e){e.r(h),e.d(h,{default:function(){return be}});var p=e(46686),l=e.n(p),u=e(93236),D=e(34954),x=e(28217),P=e(3926),b=e(2908),M=e(93651),A=e(41797),g=e(99976),W=e.n(g),y=e(93275),m=e.n(y),d=e(72248),v=e(27918),o=e(31149),c=e(65453),a=e(10244),r,E,i,t=(0,o.ZP)(c.Z)(function(R){var s,O=R.theme;return s={},m()(s,"&.".concat(a.Z.head),{backgroundColor:O.palette.common.black,color:O.palette.common.white}),m()(s,"&.".concat(a.Z.body),{fontSize:14}),s}),j=(0,o.ZP)(A.Z)(function(R){var s=R.theme;return{"&:hover":{backgroundColor:s.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),V=(0,o.ZP)(d.Z)(r||(r=W()([`
  font-size: 14;
  height: 64px;
  padding: 10px;
`]))),G=(0,o.ZP)(v.Z)(E||(E=W()([`
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`]))),k=(0,o.ZP)(v.Z)(i||(i=W()([`
  font-size: 28px;
  .icon {
    vertical-align: middle;
  }
  .switch {
    cursor: pointer;
  }
`]))),ie=e(83496),_e=e(58237),n=e(62086),me=function(s){var O=s.data,S=s.Add;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{component:M.Z,sx:{maxHeight:440},children:(0,n.jsxs)(D.Z,{stickyHeader:!0,sx:{minWidth:700},children:[(0,n.jsx)(b.Z,{children:(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(t,{children:"\u8D26\u5355\u65E5\u671F"}),(0,n.jsx)(t,{children:"\u8D26\u5355\u6240\u5C5E"}),(0,n.jsx)(t,{children:"\u652F\u51FA/\u6536\u5165\u539F\u56E0"}),(0,n.jsx)(t,{children:"\u91D1\u989D"}),(0,n.jsx)(t,{align:"right",children:"\u5907\u6CE8"}),(0,n.jsx)(t,{align:"right",children:" "})]})}),(0,n.jsx)(x.Z,{children:O.map(function(C){return(0,n.jsxs)(j,{children:[(0,n.jsx)(t,{component:"th",scope:"row",children:C.date.toDateString()}),(0,n.jsx)(t,{children:C.Taker}),(0,n.jsx)(t,{children:C.Reason}),(0,n.jsx)(t,{children:C.Amount}),(0,n.jsx)(t,{align:"right",children:C.Remark}),(0,n.jsx)(t,{align:"right",children:(0,n.jsx)(G,{children:(0,n.jsx)(ie.Z,{})})})]},C.id)})})]})}),(0,n.jsx)(V,{variant:"contained",fullWidth:!0,startIcon:(0,n.jsx)(_e.Z,{}),onClick:S,children:"\u9A6C\u4E0A\u8BB0\u4E00\u7B14"})]})},ce=me,ve=e(4860),fe=e(9053),he=e(40569),Z=e(88624),J=e(90858),De=e(96291),pe=e(23419),Ce=e(16840),Pe=e(44858),Ee=e(87409),Me=e(30279),N=e.n(Me),Ae=e(32327),ye=e(35871),je=e(17490),Oe=function(s){var O=s.label,S=s.icon,C=s.Iref,I=s.SelectList,T=s.CreateFn,H=u.useState(null),U=l()(H,2),X=U[0],Q=U[1],Y=function(_){return _.slice(4,_.length-1)};return(0,n.jsx)(Ae.Z,{value:X,onChange:function(_,f){if(console.log("onChange",f),typeof f=="string")console.warn("\u8FD9\u91CC\u6C38\u8FDC\u4E0D\u4F1A\u662Fstring,\u4F46\u662F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48"),Q({id:crypto.randomUUID(),name:f});else{if((f==null?void 0:f.id)==="NEW ADD"&&T){var K=T(Y(f.name));f.id=K.id,f.name=K.name}Q(f)}},filterOptions:function(_,f){var K=(0,ye.D)()(_,f),F=f.inputValue,w=_.some(function(q){return F===q.name});return F!==""&&!w&&K.push({id:"NEW ADD",name:'\u6DFB\u52A0 "'.concat(F,'"')}),K},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:I,getOptionLabel:function(_){return typeof _=="string"?(console.warn("\u8FD9\u91CC\u6C38\u8FDC\u4E0D\u4F1A\u662Fstring,\u4F46\u662F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48"),_):_.id==="NEW ADD"?Y(_.name):_.name},renderOption:function(_,f){return(0,n.jsx)("li",N()(N()({},_),{},{children:f.name}))},freeSolo:!0,renderInput:function(_){return(0,n.jsx)(J.Z,N()(N()({},_),{},{label:O,InputProps:N()(N()({},_.InputProps),{},{startAdornment:(0,n.jsx)(je.Z,{position:"start",children:S})}),inputRef:C}))}})},ne=Oe,$=e(3137),ge=function(s){var O=s.handleClose,S=s.open,C=(0,u.useState)(!1),I=l()(C,2),T=I[0],H=I[1],U=(0,$.Vd)(),X=U.data,Q=U.Add,Y=U.rename,B=(0,$.Xs)(),_=B.data,f=B.Add,K=B.rename,F=(0,$.ED)(),w=F.data,q=F.Add,We=F.rename,te=(0,u.useRef)(null),ae=(0,u.useRef)(null),re=(0,u.useRef)(null),oe=(0,u.useRef)(null),se=(0,u.useRef)(null),Re=(0,$.fi)(),Se=Re.Add,ee=function(z,Ie){return function(Ue){var ue={id:"",name:""};return z(function(de){ue=de,Ie(de.id,Ue)}),ue}},Be=function(){var z={id:crypto.randomUUID(),date:se.current.value,Taker:te.current.value,Reason:ae.current.value,Amount:re.current.value*(T?1:-1),Remark:oe.current.value};Se(z),O()};return(0,n.jsxs)(ve.Z,{onClose:O,open:S,children:[(0,n.jsx)(fe.Z,{children:(0,n.jsx)(k,{children:(0,n.jsxs)(v.Z,{textAlign:"center",className:"box",children:[T?(0,n.jsx)(pe.Z,{className:"icon"}):(0,n.jsx)(Ce.Z,{className:"icon"})," ",T?"\u83B7\u5F97\u6536\u5165":"\u82B1\u4E86\u4E00\u7B14"," ",(0,n.jsx)(De.Z,{onClick:function(){return H(function(z){return!z})},className:"icon switch"})]})})}),(0,n.jsx)(he.Z,{children:(0,n.jsxs)(Z.ZP,{container:!0,rowGap:2,columnGap:1,width:400,justifyContent:"center",children:[(0,n.jsx)(Z.ZP,{xs:5,item:!0,children:(0,n.jsx)(ne,{label:"".concat(T?"\u6536\u5165":"\u652F\u51FA","\u6240\u5C5E"),SelectList:X,icon:(0,n.jsx)(Pe.Z,{}),Iref:te,CreateFn:ee(Q,Y)})}),(0,n.jsx)(Z.ZP,{xs:6,item:!0,children:(0,n.jsx)(ne,{label:"".concat(T?"\u6536\u5165\u6765\u6E90":"\u652F\u51FA\u539F\u56E0"),SelectList:T?w:_,icon:(0,n.jsx)(Ee.Z,{}),Iref:ae,CreateFn:T?ee(q,We):ee(f,K)})}),(0,n.jsx)(Z.ZP,{xs:11,item:!0,children:(0,n.jsx)(J.Z,{fullWidth:!0,required:!0,id:"amount",label:"".concat(T?"\u6536\u5165":"\u652F\u51FA","\u91D1\u989D"),type:"number",inputProps:{ref:re}})}),(0,n.jsx)(Z.ZP,{xs:11,item:!0,children:(0,n.jsx)(J.Z,{id:"date",label:"\u65E5\u671F",type:"date",style:{width:"100%"},InputLabelProps:{shrink:!0},inputRef:se})}),(0,n.jsx)(Z.ZP,{xs:11,item:!0,children:(0,n.jsx)(J.Z,{fullWidth:!0,id:"remarks",label:"\u5907\u6CE8",multiline:!0,rows:4,defaultValue:"",variant:"standard",inputProps:{ref:oe}})}),(0,n.jsx)(Z.ZP,{xs:12,item:!0,children:(0,n.jsx)(d.Z,{fullWidth:!0,variant:"contained",onClick:Be,type:"submit",children:"\u5B8C\u6210"})})]})})]})},Te=ge,xe=e(19896);function Le(R,s,O,S,C,I){return{id:R,date:s,From:O,By:S,amount:C,remarks:I}}var be=function(){var R=(0,u.useState)(!1),s=l()(R,2),O=s[0],S=s[1],C=(0,xe.f)(),I=C.data,T=C.del,H=function(){return S(!0)},U=function(){return S(!1)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(ce,{data:I,Add:H}),(0,n.jsx)(Te,{open:O,handleClose:U})]})}},38114:function(L,h,e){e.d(h,{f:function(){return p}});var p=function(){return crypto&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).substr(2,9)}}}]);