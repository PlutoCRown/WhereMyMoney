"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969],{95207:function(mn,S,t){t.r(S),t.d(S,{default:function(){return dn}});var v=t(93236),g=t(27918),I=t(34600),B=t(45892),E=t(65483),O=t(85819),U=t(81229),L=t(94434),N=t.n(L),W=t(46686),c=t.n(W),C=t(88624),G=t(55933),b=t(4860),H=t(76671),R=t(99976),h=t.n(R),m=t(69607),V=t(93651),y,A,z=(0,m.Z)(V.Z)(y||(y=h()([`
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
`]))),K=(0,m.Z)(g.Z)(A||(A=h()([`
  padding: 30px;
  padding-top: 10px;
  width: 40vw;
  height: 80vh;
`]))),M=t(74800),Y=t(14012),J=t(51774),p=t(90858),f=t(17490),Q=t(18421),F=t(10226),X=t(12296),$=t(72248),w=t(75253),k=t(96472),q=t(49981),_=t(38815),nn=t(16646),tn=t(18127),n=t(62086),sn=function(){var e=(0,v.useState)("init"),s=c()(e,2),a=s[0],i=s[1],l={init:{icon:(0,n.jsx)(q.Z,{}),text:"\u9A8C\u8BC1\u670D\u52A1\u5668"},pending:{icon:(0,n.jsx)(_.Z,{className:"rotate"}),text:"\u6B63\u5728\u68C0\u67E5"},success:{icon:(0,n.jsx)(tn.Z,{}),text:"\u670D\u52A1\u5668\u53EF\u7528"},fail:{icon:(0,n.jsx)(nn.Z,{}),text:"\u9A8C\u8BC1\u5931\u8D25"}},x=function(){a!="success"&&a!="pending"&&(i("pending"),setTimeout(function(){var d=0;d?i("success"):(i("fail"),setTimeout(function(){a=="fail"&&i("init")},2e3))},2e3))};return{verify:x,verifyUI:l[a]}},P,an=(0,m.Z)(g.Z)(P||(P=h()([`
  position: relative;
  .div {
    margin: 10px;
  }
  .account {
    width: 40%;
  }
  .password {
    width: 40%;
    position: absolute;
    right: 90px;
  }
  .login {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .rotate {
    animation: 1s ease-in infinite ROTATE;
  }
  @keyframes ROTATE {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`]))),en=function(){var e=(0,v.useState)(!1),s=c()(e,2),a=s[0],i=s[1],l=sn(),x=l.verify,u=l.verifyUI;return(0,n.jsxs)(an,{children:[(0,n.jsx)(p.Z,{label:"\u8FDC\u7A0B\u670D\u52A1\u5668",variant:"outlined",fullWidth:!0,helperText:"*\u8BF7\u786E\u4FDD\u670D\u52A1\u5668\u7684\u5B89\u5168\u6027\uFF0C\u672C\u8F6F\u4EF6\u5E76\u4E0D\u4F1A\u4E0A\u4F20\u60A8\u7684\u4FE1\u606F",InputProps:{startAdornment:(0,n.jsx)(f.Z,{position:"start",children:(0,n.jsx)(w.Z,{})}),endAdornment:(0,n.jsx)(f.Z,{position:"end",children:(0,n.jsx)(Q.Z,{title:u.text,children:(0,n.jsx)(F.Z,{onClick:x,children:u.icon})})})}}),(0,n.jsx)(X.Z,{textAlign:"left",className:"div",children:"\u670D\u52A1\u5668\u4FE1\u606F"}),(0,n.jsx)(p.Z,{label:"\u8D26\u53F7",variant:"standard",className:"account",InputProps:{startAdornment:(0,n.jsx)(f.Z,{position:"start",children:(0,n.jsx)(M.Z,{})})}}),(0,n.jsx)(p.Z,{label:"\u5BC6\u7801",variant:"standard",className:"password",InputProps:{type:a?"text":"password",startAdornment:(0,n.jsx)(f.Z,{position:"start",children:(0,n.jsx)(k.Z,{})}),endAdornment:(0,n.jsx)(f.Z,{position:"end",children:(0,n.jsx)(F.Z,{onClick:function(){return i(function(Z){return!Z})},children:a?(0,n.jsx)(Y.Z,{}):(0,n.jsx)(J.Z,{})})})}}),(0,n.jsx)($.Z,{variant:"contained",className:"login",children:"\u767B\u5F55"})]})},on={UI:(0,n.jsx)(en,{})},rn=function(){var e=[{name:"\u4E91\u540C\u6B65  ",cfg:on,enable:!1},{name:"\u5F00\u5173\u8FD8\u662F\u6CA1\u7528\u7684",cfg:{},enable:!1},{name:"\u63D2\u4EF6\u5E94\u8BE5\u662F\u89E3\u8026\u5408\u7684",cfg:{},enable:!1},{name:"\u5916\u90E8\u6570\u636E",cfg:{},enable:!0},{name:"\u81EA\u52A8\u4EFB\u52A1",cfg:{},enable:!0}],s=(0,v.useState)(e),a=c()(s,2),i=a[0],l=a[1],x=(0,v.useState)(i[0]),u=c()(x,2),d=u[0],Z=u[1],vn=(0,v.useState)(!1),D=c()(vn,2),cn=D[0],T=D[1],fn=function(r){r.enable=!r.enable,l(N()(i))},xn=function(r){Z(r),r.cfg.UI!=null&&T(!0)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(g.Z,{sx:{flexGrow:1,overflow:"scroll",paddingTop:"20px"},children:(0,n.jsx)(C.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:i.map(function(o,r){return(0,n.jsx)(C.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,n.jsxs)(z,{onClick:function(){return xn(o)},children:[o.name,(0,n.jsx)(G.Z,{className:"switch",checked:o.enable,onClick:function(hn){return hn.stopPropagation(),fn(o)}})]})},r)})})}),(0,n.jsxs)(b.Z,{open:cn,onClose:function(){return T(!1)},children:[(0,n.jsx)(H.Z,{children:"".concat(d.name," - \u8BBE\u7F6E")}),(0,n.jsx)(K,{children:d.cfg.UI?d.cfg.UI:(0,n.jsx)(n.Fragment,{})})]})]})},ln=rn,un=function(){var e=[{icon:(0,n.jsx)(O.Z,{}),name:"Import"},{icon:(0,n.jsx)(U.Z,{}),name:"Market"}];return(0,n.jsx)("div",{style:{position:"relative",height:"100% "},children:(0,n.jsxs)(g.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(ln,{}),(0,n.jsx)(I.Z,{ariaLabel:"SpeedDial",sx:{position:"absolute",bottom:16,right:16},icon:(0,n.jsx)(B.Z,{}),children:e.map(function(s){return(0,n.jsx)(E.Z,{icon:s.icon,tooltipTitle:s.name},s.name)})})]})})},dn=un}}]);
