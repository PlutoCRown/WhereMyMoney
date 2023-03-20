"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{58237:function(f,o,e){var h,l=e(70489);h={value:!0},o.Z=void 0;var i=l(e(57770)),r=e(62086),s=(0,i.default)((0,r.jsx)("path",{d:"M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6zm-4-6v4h2v-4h-2zm-4 4h2V9h-2v8zm-2 0v-6H7v6h2z"}),"Addchart");o.Z=s},19492:function(f,o,e){e.d(o,{AF:function(){return D},HS:function(){return P},KZ:function(){return j},Yk:function(){return E},sP:function(){return M}});var h=e(99976),l=e.n(h),i=e(93275),r=e.n(i),s=e(72248),c=e(27918),d=e(31149),t=e(65453),u=e(10244),_=e(41797),v,n,p,E=(0,d.ZP)(t.Z)(function(C){var m,a=C.theme;return m={},r()(m,"&.".concat(u.Z.head),{backgroundColor:a.palette.common.black,color:a.palette.common.white}),r()(m,"&.".concat(u.Z.body),{fontSize:14}),m}),D=(0,d.ZP)(_.Z)(function(C){var m=C.theme;return{"&:nth-of-type(odd)":{backgroundColor:m.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),P=(0,d.ZP)(s.Z)(v||(v=l()([`
  font-size: 14;
  height: 64px;
  padding: 10px;
`]))),j=(0,d.ZP)(c.Z)(n||(n=l()([`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`]))),M=(0,d.ZP)(c.Z)(p||(p=l()([`
  font-size: 28px;
  .icon {
    vertical-align: middle;
  }
  .switch {
    cursor: pointer;
  }
`])))},2395:function(f,o,e){e.d(o,{B:function(){return c}});var h=e(94434),l=e.n(h),i=e(46686),r=e.n(i),s=e(93236),c=function(){var t=(0,s.useState)([{id:"string",date:new Date,name:"item",price:12345,coefficient:.7142857142857143,Remark:"string"}]),u=r()(t,2),_=u[0],v=u[1];(0,s.useEffect)(function(){console.log(_)},[_]);var n=function(P){_.unshift(P),v(l()(_)),console.log(P)},p=function(){console.log(_)},E=function(){console.log(_)};return{data:_,Add:n,rename:p,del:E}}},91466:function(f,o,e){e.r(o),e.d(o,{default:function(){return P}});var h=e(93236),l=e(34954),i=e(28217),r=e(3926),s=e(2908),c=e(93651),d=e(41797),t=e(19492),u=e(83496),_=e(58237),v=e(2395),n=e(62086),p=function(){var M=(0,v.B)(),C=M.data,m=M.Add;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Z,{component:c.Z,children:[(0,n.jsxs)(l.Z,{sx:{minWidth:700},children:[(0,n.jsx)(s.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(t.Yk,{children:"\u7269\u54C1"}),(0,n.jsx)(t.Yk,{children:"\u8D2D\u7269\u65E5\u671F"}),(0,n.jsx)(t.Yk,{children:"\u91D1\u989D"}),(0,n.jsx)(t.Yk,{children:"\u5F53\u524D\u5E73\u5747"}),(0,n.jsx)(t.Yk,{align:"right",children:"\u5907\u6CE8"}),(0,n.jsx)(t.Yk,{align:"right",children:" "})]})}),(0,n.jsx)(i.Z,{children:C.map(function(a){return(0,n.jsxs)(t.AF,{children:[(0,n.jsx)(t.Yk,{component:"th",scope:"row",children:a.date.toDateString()}),(0,n.jsx)(t.Yk,{children:a.name}),(0,n.jsx)(t.Yk,{children:a.price}),(0,n.jsx)(t.Yk,{children:a.price*a.coefficient/(new Date().getDay()-a.date.getDay()+1)}),(0,n.jsx)(t.Yk,{align:"right",children:a.Remark}),(0,n.jsx)(t.Yk,{align:"right",children:(0,n.jsx)(t.KZ,{children:(0,n.jsx)(u.Z,{})})})]},a.id)})})]}),(0,n.jsx)(t.HS,{variant:"contained",fullWidth:!0,startIcon:(0,n.jsx)(_.Z,{}),children:"\u65B0\u8D2D\u7F6E\u7269\u54C1"})]})})},E=p,D=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(E,{})})},P=D}}]);
