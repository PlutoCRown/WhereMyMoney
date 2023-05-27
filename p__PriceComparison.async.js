"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{99780:function(N,d,n){n.d(d,{S:function(){return f},W:function(){return E}});var _=n(99976),u=n.n(_),c=n(69607),l=n(93651),j=n(27918),h,v,E=(0,c.Z)(l.Z)(h||(h=u()([`
  position: relative;
  background-color: #fff;
  padding: 10px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  /* text-align: center; */
  height: 80px;
  transition: transform 300ms;
  &:hover {
    transform: translateY(-10px);
  }
  .switch {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  &::after {
    position: absolute;
    right: 42px;
    top: 10px;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(237, 98, 87);
    box-shadow: 16px 0 rgb(250, 195, 43), 32px 0 rgb(38, 191, 45);
  }
`]))),f=(0,c.Z)(j.Z)(v||(v=u()([`
  padding: 30px;
  padding-top: 10px;
  width: 40vw;
  height: 80vh;
`])))},99125:function(N,d,n){n.d(d,{T:function(){return L},W:function(){return P}});var _=n(46686),u=n.n(_),c=n(54595),l=n(78603),j=n(30878),h=n(93236),v=n(62086),E={Toast:function(g,z){}},f=(0,h.createContext)(E),P=function(){return h.useContext(f)},L=function(g){var z=(0,c.R)({open:!1,color:"info",message:""}),W=u()(z,2),s=W[0],C=W[1],U=function(b,D){C({open:!0,color:b,message:D}),setTimeout(function(){return C({open:!1})},3e3)},S=function(b,D){D!=="clickaway"&&C({open:!1})};return(0,v.jsxs)(f.Provider,{value:{Toast:U},children:[g.children,(0,v.jsx)(l.Z,{open:s.open,autoHideDuration:6e3,onClose:S,children:(0,v.jsx)(j.Z,{onClose:S,severity:s.color,children:s.message})})]})}},15359:function(N,d,n){n.d(d,{_:function(){return _}});function _(u){return{get:function(c){var l=localStorage.getItem(u);return l?JSON.parse(l):c},set:function(c){localStorage.setItem(u,JSON.stringify(c))}}}},2395:function(N,d,n){n.d(d,{B:function(){return y}});var _=n(94434),u=n.n(_),c=n(46686),l=n.n(c),j=n(30279),h=n.n(j),v=n(93236),E=n(15359),f=n(38114),P=(0,E._)("ShoppingList"),L=P.get([]).map(function(g){return h()(h()({},g),{},{date:new Date(Date.parse(g.date)),stopDate:g.stopDate?new Date(Date.parse(g.stopDate)):void 0})}),y=function(){var z=(0,v.useState)([{id:"1234",date:new Date("2020,7,10"),name:"\u624B\u673A",price:2799,coefficient:1,isStopped:!1,Remark:""},{id:"123124",date:new Date("2020,10,10"),name:"\u7535\u8111",price:4299,isStopped:!1,coefficient:.7142857142857143,Remark:"\u7535\u8111\u53EA\u6709\u5DE5\u4F5C\u65E5\u624D\u7528\uFF0C\u65E5\u5747\u8981\u4E585/7"}]),W=l()(z,2),s=W[0],C=W[1],U=function(D){s.unshift(h()({id:(0,f.f)(),isStopped:!1},D)),C(u()(s))};function S(b,D,J){b[D]=J,C(u()(s))}var e=function(D){C(s.filter(function(J){return J.id!==D}))};return{data:s,Add:U,mutation:S,del:e}}},42289:function(N,d,n){n.r(d),n.d(d,{default:function(){return Ce}});var _=n(93275),u=n.n(_),c=n(46686),l=n.n(c),j=n(2395),h=n(99976),v=n.n(h),E=n(69607),f=n(99780),P=n(27918),L,y,g=(0,E.Z)(f.W)(L||(L=v()([`
  width: 150px;
  height: unset;
  margin: 10px;
  overflow: hidden;
  .aline {
    vertical-align: middle;
  }
  .value {
    font-weight: normal;
  }
  .header {
    font-size: 12px;
    user-select: none;
    color: #aaa;
  }
  &:hover {
    transform: scale(0.98);
    &::after {
      top: 0px;
      box-shadow: 16px -15px rgb(75, 93, 241), 32px -30px rgb(75, 93, 241);
    }
  }

  &::after {
    /* transition: box-shadow 0.2s top 0.2s; */
    transition: all 0.2s ease-in-out;
    position: absolute;
    right: 42px;
    top: -30px;
    content: "";
    width: 12px;
    height: 50px;
    border-radius: 0;
    background-color: rgb(75, 93, 241);
    box-shadow: 16px 15px rgb(75, 93, 241), 32px 30px rgb(75, 93, 241);
  }
`]))),z=(0,E.Z)(P.Z)(y||(y=v()([`
  display: flex;
  /* flex-direction: column; */
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  .addBtn {
    opacity: 0.5;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
`]))),W=n(54595),s=n(93236),C=n(4860),U=n(9053),S=n(39767),e=n(62086),b=function(t){var a=t.open,i=t.close;return(0,e.jsxs)(C.Z,{open:a,onClose:i,children:[(0,e.jsx)(U.Z,{children:"\u5173\u4E8E\u6B64\u9875\u9762"}),(0,e.jsxs)(S.Z,{children:["\u2728\u6027\u4EF7\u6BD4\u662F\u4E00\u4E2A\u7528\u6765\u7EDF\u8BA1\u8D2D\u4E70\u7269\u4EF6\u5B9E\u9645\u6210\u672C\u7684\u5DE5\u5177\u3002",(0,e.jsx)("br",{}),"\u2716\uFE0F\u4F60\u53EF\u4EE5\u8F93\u5165\u8D2D\u4E70\u7269\u54C1\u7684\u4EF7\u683C\u548C\u65F6\u95F4\uFF0C\u5DE5\u5177\u5C06\u4E3A\u4F60\u8BA1\u7B97\u65E5\u5747\u6210\u672C",(0,e.jsx)("br",{}),"\u{1F6D1}\u5982\u679C\u7269\u54C1\u635F\u574F\u6216\u8005\u6D88\u8017\u6B86\u5C3D\uFF0C\u4F60\u53EF\u4EE5\u6253\u5F00\u5176\u8BE6\u7EC6\u754C\u9762\u9009\u62E9\u505C\u6B62\u8BA1\u6570",(0,e.jsx)("br",{}),"\u{1F4CA}\u5982\u679C\u9700\u8981\u63A7\u5236\u6743\u91CD\uFF0C\u4F60\u53EF\u4EE5\u8C03\u6574\u751F\u6548\u6BD4\u4F8B"]})]})},D=n(12296),J=n(98777),k=n.n(J),ae=n(94562),w=function(t){var a=t.status;return(0,e.jsxs)("span",{style:{fontSize:"1rem",marginLeft:"0.5rem",verticalAlign:"middle"},children:[(0,e.jsx)(ae.Z,{color:a?"secondary":"error",variant:"dot"}),(0,e.jsx)("span",{style:{fontSize:12,marginLeft:10},children:a?"\u8BA1\u7B97\u4E2D":"\u5DF2\u505C\u6B62"})]})},oe=function(t){var a=t.item,i=t.openDetail,r=k()(new Date),o=function(p){return(p.price/((p.isStopped&&k()(p.stopDate)||r).diff(p.date,"days")+1)*p.coefficient).toFixed(2)};return(0,e.jsxs)(g,{onClick:i,children:[a.name,(0,e.jsxs)("div",{className:"aline",children:[(0,e.jsx)("div",{className:"header",children:"\u65E5\u5747"}),(0,e.jsx)("div",{className:"value",children:o(a)})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{className:"aline",children:[(0,e.jsx)("div",{className:"header",children:"\u603B\u4EF7"}),(0,e.jsx)("div",{className:"header",children:a.price})]}),(0,e.jsxs)("div",{className:"aline",children:[(0,e.jsx)("div",{className:"header",children:"\u751F\u6548\u65E5"}),(0,e.jsx)("div",{className:"header",children:((r.diff(a.date,"days")+1)*a.coefficient).toFixed(0)})]}),(0,e.jsxs)("div",{className:"aline",children:[(0,e.jsx)("div",{className:"header",children:"\u4F7F\u7528\u7387"}),(0,e.jsx)("div",{className:"header",children:a.coefficient.toFixed(2)})]})]}),(0,e.jsx)(D.Z,{}),(0,e.jsx)(w,{status:!a.isStopped}),(0,e.jsx)("div",{className:"header",children:a.date.toDateString()})]},a.id)},se=n(10226),q=n(99751),re=n(3926),ue=n(93651),ee=n(34954),ne=n(28217),$=n(41797),I=n(65453),ie=n(55933),le=n(865),te=n(72248),de=n(59431),G=n(90858),ce=function(t){var a=t.editing,i=t.textType,r=t.value,o=t.onChange,m=(0,s.useRef)();return(0,e.jsx)(I.Z,{children:(0,e.jsx)("div",{style:{height:"2em",width:"20em"},children:a?(0,e.jsx)(G.Z,{autoFocus:!0,defaultValue:r,inputRef:m,onBlur:function(){return o(m.current.value)},size:"small",type:i,variant:"standard"}):(0,e.jsx)("span",{style:{fontSize:"1.15em"},children:r})})})},me=n(83496),V=function(t){var a=t.EditIcon;return(0,e.jsxs)($.Z,{children:[(0,e.jsx)(I.Z,{component:"th",scope:"row",children:t.name}),(0,e.jsx)(ce,{editing:t.editing==t.editingKey,value:t.value,onChange:function(r){t.onChangeFn(r),t.setEditing("")},textType:t.textType}),(0,e.jsx)(I.Z,{align:"center",onClick:function(){return t.setEditing(t.editingKey)},style:{cursor:"pointer"},sx:{"&:hover":{backgroundColor:function(r){return r.palette.grey[200]}}},children:a||(0,e.jsx)(me.Z,{sx:{color:function(r){return r.palette.grey[700]}}})})]})},pe=n(99125),_e=function(t){var a,i=t.open,r=t.close,o=t.opening,m=t.mutation,p=t.delFn,A=(0,pe.W)(),T=A.Toast,M=(0,s.useState)(""),H=l()(M,2),O=H[0],Z=H[1],X=(0,s.useState)(!1),R=l()(X,2),Q=R[0],Y=R[1],De=(0,e.jsx)(se.Z,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:function(x){return x.palette.grey[500]}},children:(0,e.jsx)(de.Z,{})});return(0,e.jsxs)(C.Z,{open:i,onClose:r,children:[(0,e.jsxs)(U.Z,{children:["\u5173\u4E8E",o==null?void 0:o.name,De]}),(0,e.jsx)(S.Z,{children:(0,e.jsxs)(q.Z,{spacing:2,children:[(0,e.jsx)(re.Z,{component:ue.Z,children:(0,e.jsx)(ee.Z,{sx:{minWidth:400},"aria-label":"caption table",children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(V,{name:"\u603B\u4EF7",editingKey:"price",onChangeFn:function(x){m(o,"price",parseFloat(x))},textType:"number",value:o.price,editing:O,setEditing:Z}),(0,e.jsx)(V,{name:"\u8D77\u59CB\u65E5",editingKey:"startDate",onChangeFn:function(x){m(o,"date",new Date(x))},textType:"date",value:o.date.toDateString?o.date.toDateString():o.date,editing:O,setEditing:Z}),(0,e.jsx)(V,{name:"\u6BD4\u4F8B",editingKey:"coefficient",onChangeFn:function(x){m(o,"coefficient",parseFloat(x))},textType:"number",value:o.coefficient,editing:O,setEditing:Z}),(0,e.jsxs)($.Z,{children:[(0,e.jsx)(I.Z,{component:"th",scope:"row",children:"\u72B6\u6001"}),(0,e.jsx)(I.Z,{children:(0,e.jsx)(w,{status:!o.isStopped})}),(0,e.jsx)(I.Z,{align:"right",children:(0,e.jsx)(ie.Z,{checked:!o.isStopped,onChange:function(x){return m(o,"isStopped",!x.target.checked)}})})]}),(0,e.jsx)($.Z,{children:(0,e.jsx)(I.Z,{style:{padding:0},colSpan:6,children:(0,e.jsx)(le.Z,{in:o.isStopped,timeout:"auto",unmountOnExit:!0,children:(0,e.jsx)(ee.Z,{children:(0,e.jsx)(ne.Z,{children:(0,e.jsx)(V,{name:"\u7EC8\u6B62\u65E5",editingKey:"stopDate",value:((a=o.stopDate)===null||a===void 0?void 0:a.toDateString())||new Date().toDateString(),onChangeFn:function(x){m(o,"date",new Date(x))},textType:"date",editing:O,setEditing:Z})})})})})})]})})}),(0,e.jsx)(q.Z,{children:(0,e.jsx)(te.Z,{variant:"contained",color:Q?"error":"inherit",onBlur:function(){return Y(!1)},onClick:function(x){Q?(r(),T("success","\u5220\u9664\u4E86".concat(o.name)),p(o.id)):Y(!0)},children:Q?"\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F \u518D\u6B21\u70B9\u51FB\u5220\u9664":"\u5220\u9664"})})]})})]})},B=n(88624),he=n(16704),ve=function(t){var a=t.open,i=t.close,r=t.AddFn,o=t.openHelper,m=(0,s.useRef)(null),p=(0,s.useRef)(null),A=(0,s.useRef)(null),T=(0,s.useRef)(null),M=(0,s.useRef)(null),H=function(){var Z={name:m.current.value,coefficient:parseFloat(A.current.value),price:parseFloat(p.current.value),date:new Date(T.current.value),Remark:M.current.value||""};r(Z),i()};return(0,e.jsx)(C.Z,{open:a,onClose:i,children:(0,e.jsxs)(U.Z,{children:["\u6DFB\u7F6E\u4E00\u9879\u7269\u54C1",(0,e.jsx)("span",{style:{color:"#666",fontSize:14,marginLeft:10,verticalAlign:"middle"},children:(0,e.jsx)(he.Z,{onClick:o})}),(0,e.jsx)(S.Z,{children:(0,e.jsxs)(B.ZP,{rowGap:2,columnGap:2,container:!0,children:[(0,e.jsx)(B.ZP,{item:!0,xs:6,children:(0,e.jsx)(G.Z,{label:"\u540D\u5B57",style:{width:"100%"},variant:"outlined",inputRef:m})}),(0,e.jsx)(B.ZP,{item:!0,xs:5,children:(0,e.jsx)(G.Z,{label:"\u65E5\u671F",variant:"outlined",style:{width:"100%"},InputLabelProps:{shrink:!0},inputRef:T,type:"date"})}),(0,e.jsx)(B.ZP,{item:!0,xs:6,children:(0,e.jsx)(G.Z,{label:"\u91D1\u989D",style:{width:"100%"},variant:"outlined",inputRef:p,type:"number"})}),(0,e.jsx)(B.ZP,{item:!0,xs:5,children:(0,e.jsx)(G.Z,{label:"\u6BD4\u4F8B",defaultValue:1,style:{width:"100%"},variant:"outlined",inputRef:A,type:"number"})}),(0,e.jsx)(B.ZP,{item:!0,xs:11.4,children:(0,e.jsx)(G.Z,{label:"\u5907\u6CE8",style:{width:"100%"},variant:"outlined",inputRef:M,type:"string"})}),(0,e.jsx)(B.ZP,{item:!0,xs:9.5,children:(0,e.jsxs)("a",{style:{color:"#ccc",fontSize:14,cursor:"pointer"},children:["*",(0,e.jsx)("u",{children:"\u540D\u5B57\u8BBE\u5B9A\u540E\u4E0D\u53EF\u66F4\u6539"})]})}),(0,e.jsx)(B.ZP,{item:!0,xs:0,children:(0,e.jsx)(te.Z,{variant:"contained",onClick:H,children:"\u5B8C\u6210"})})]})})]})})},xe=function(){var t=(0,j.B)(),a=t.data,i=t.Add,r=t.mutation,o=t.del,m=(0,W.R)({detail:!1,adding:!1,QandA:!1}),p=l()(m,2),A=p[0],T=p[1],M=function(Q,Y){return function(){return T(u()({},Q,Y))}},H=(0,s.useState)(a[0]),O=l()(H,2),Z=O[0],X=O[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(z,{children:[a.map(function(R){return(0,e.jsx)(oe,{item:R,openDetail:function(){return X(R),T({detail:!0})}},R.id)}),(0,e.jsx)(g,{className:"addBtn",onClick:M("adding",!0),children:(0,e.jsx)("span",{style:{fontSize:80},children:"+"})})]}),(0,e.jsx)(ve,{open:A.adding,openHelper:function(){return T({QandA:!0})},close:M("adding",!1),AddFn:i}),(0,e.jsx)(_e,{open:A.detail,close:M("detail",!1),opening:Z,mutation:r,delFn:o}),(0,e.jsx)(b,{open:A.QandA,close:M("QandA",!1)})]})},fe=xe,ge=function(){return(0,e.jsx)("div",{children:(0,e.jsx)(fe,{})})},Ce=ge},38114:function(N,d,n){n.d(d,{f:function(){return _}});var _=function(){return crypto&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).substr(2,9)}},54595:function(N,d,n){n.d(d,{R:function(){return h}});var _=n(30279),u=n.n(_),c=n(46686),l=n.n(c),j=n(93236);function h(v){var E=(0,j.useState)(v||{}),f=l()(E,2),P=f[0],L=f[1];return[P,function(y){return L(u()(u()({},P),y))}]}}}]);
