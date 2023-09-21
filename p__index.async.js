"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{99125:function(S,r,e){e.d(r,{T:function(){return g},W:function(){return i}});var _=e(46686),a=e.n(_),C=e(54595),f=e(78603),h=e(30878),o=e(93236),t=e(62086),p={Toast:function(j,d){}},s=(0,o.createContext)(p),i=function(){return o.useContext(s)},g=function(j){var d=(0,C.R)({open:!1,color:"info",message:""}),m=a()(d,2),l=m[0],c=m[1],D=function(b,M){c({open:!0,color:b,message:M}),setTimeout(function(){return c({open:!1})},3e3)},x=function(b,M){M!=="clickaway"&&c({open:!1})};return(0,t.jsxs)(s.Provider,{value:{Toast:D},children:[j.children,(0,t.jsx)(f.Z,{open:l.open,autoHideDuration:6e3,onClose:x,children:(0,t.jsx)(h.Z,{onClose:x,severity:l.color,children:l.message})})]})}},92040:function(S,r,e){e.r(r),e.d(r,{default:function(){return z}});var _=e(46686),a=e.n(_),C=e(99751),f=e(15571),h=e(96233),o=e(93236),t=e(44161),p=e(88297),s=e(64369),i=e(12850),g=e(54096),u=e(60297),j=e(99976),d=e.n(j),m=e(69607),l=e(27918),c,D,x,O=(0,m.Z)(l.Z)(c||(c=d()([`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    78.88deg,
    #ced4e6 9.16%,
    #c1bae7 43.89%,
    #adb3d3 64.72%
  );
`]))),b=(0,m.Z)(l.Z)(D||(D=d()([`
  height: 100%;
  min-width: 176px;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab {
    min-height: 66px;
  }
  .titleWapper {
    user-select: none;
    position: sticky;
    top: 0px;
    z-index: 100;
    backdrop-filter: blur(6px);
  }
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 32px;
  }
  position: relative;
  width: 20vw;
  overflow: scroll;
`]))),M=(0,m.Z)(l.Z)(x||(x=d()([`
  box-sizing: border-box;
  width: 80vw;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  /* border: 10px solid red; */
  &::-webkit-scrollbar {
    display: none;
  }
`]))),B=e(85837),I=e(99125),L=e(54595),n=e(62086),U={config:{useCurrencySuffixSymbol:"\u5143",useCurrencyPrefixSymbol:"\uFFE5"},setConfig:function(v){}},Z=(0,o.createContext)(U),J=function(){return React.useContext(Z)},K=function(v){var y=(0,L.R)(U.config),T=a()(y,2),W=T[0],A=T[1];return(0,n.jsx)(Z.Provider,{value:{config:W,setConfig:A},children:v.children})},G=K,H=function(v){return(0,n.jsx)(G,{children:(0,n.jsx)(I.T,{children:v.children})})},N=H;function z(){t.m8.location.pathname==="/"&&t.m8.push("dashbroad");var E=t.m8.location.pathname.split("/").at(-1),v=(0,o.useState)(E),y=a()(v,2),T=y[0],W=y[1],A=function(Q,R){t.m8.push(R),W(R)};(0,o.useEffect)(function(){console.log("\u600E\u4E48\u4F1A\u66F4\u65B0\u5462")},[]);var F=[{name:"\u770B\u677F",value:"dashbroad",icon:(0,n.jsx)(s.Z,{})},{name:"\u8D26\u5355",value:"bill",icon:(0,n.jsx)(p.Z,{})},{name:"\u81EA\u52A8\u4EFB\u52A1",value:"auto-task",icon:(0,n.jsx)(u.Z,{})},{name:"\u6027\u4EF7\u6BD4",value:"price-comparison",icon:(0,n.jsx)(i.Z,{})},{name:"\u63D2\u4EF6",value:"plug-in",icon:(0,n.jsx)(B.Z,{})},{name:"\u8BBE\u7F6E",value:"setting",icon:(0,n.jsx)(g.Z,{})}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(O,{children:[(0,n.jsxs)(b,{children:[(0,n.jsx)(C.Z,{justifyContent:"center",direction:"row",className:"titleWapper",children:(0,n.jsx)("div",{className:"title",children:"\u{1F914}\u6211\u7684\u94B1\u5462 "})}),(0,n.jsx)(f.Z,{orientation:"vertical",value:T,onChange:A,children:F.map(function(P){return(0,n.jsx)(h.Z,{className:"tab",label:P.name,value:P.value,icon:P.icon,iconPosition:"start"},P.value)})})]}),(0,n.jsx)(M,{children:(0,n.jsx)(N,{children:(0,n.jsx)(t.j3,{})})})]})})}},54595:function(S,r,e){e.d(r,{R:function(){return o}});var _=e(30279),a=e.n(_),C=e(46686),f=e.n(C),h=e(93236);function o(t){var p=(0,h.useState)(t||{}),s=f()(p,2),i=s[0],g=s[1];return[i,function(u){return g(a()(a()({},i),u))}]}}}]);
