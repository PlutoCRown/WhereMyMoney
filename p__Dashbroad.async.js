var $=Math.pow;(self.webpackChunk=self.webpackChunk||[]).push([[692],{93651:function(l,u,e){"use strict";e.d(u,{Z:function(){return T}});var _=e(84280),a=e(7161),t=e(93236),m=e(45924),h=e(16093),p=e(66360),v=e(31149),y=n=>{let o;return n<1?o=5.11916*$(n,2):o=4.5*Math.log(n+1)+2,(o/100).toFixed(2)},s=e(8729),g=e(85763),D=e(73258);function C(n){return(0,D.Z)("MuiPaper",n)}const d=(0,g.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var M=null,c=e(62086);const P=["className","component","elevation","square","variant"],r=n=>{const{square:o,elevation:E,variant:b,classes:U}=n,W={root:["root",b,!o&&"rounded",b==="elevation"&&`elevation${E}`]};return(0,h.Z)(W,C,U)},i=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:E}=n;return[o.root,o[E.variant],!E.square&&o.rounded,E.variant==="elevation"&&o[`elevation${E.elevation}`]]}})(({theme:n,ownerState:o})=>{var E;return(0,a.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},o.variant==="elevation"&&(0,a.Z)({boxShadow:(n.vars||n).shadows[o.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${(0,p.Fq)("#fff",y(o.elevation))}, ${(0,p.Fq)("#fff",y(o.elevation))})`},n.vars&&{backgroundImage:(E=n.vars.overlays)==null?void 0:E[o.elevation]}))});var T=t.forwardRef(function(o,E){const b=(0,s.Z)({props:o,name:"MuiPaper"}),{className:U,component:W="div",elevation:F=1,square:N=!1,variant:K="elevation"}=b,Z=(0,_.Z)(b,P),S=(0,a.Z)({},b,{component:W,elevation:F,square:N,variant:K}),R=r(S);return(0,c.jsx)(i,(0,a.Z)({as:W,ownerState:S,className:(0,m.Z)(R.root,U),ref:E},Z))})},15359:function(l,u,e){"use strict";e.d(u,{_:function(){return _}});function _(a){return{get:function(t){var m=localStorage.getItem(a);return m?JSON.parse(m):t},set:function(t){localStorage.setItem(a,JSON.stringify(t))}}}},28820:function(l,u,e){"use strict";e.d(u,{X:function(){return s}});var _=e(94434),a=e.n(_),t=e(46686),m=e.n(t),h=e(38114),p=e(93236),v=e(15359),f=(0,v._)("Purpose"),y=f.get([{id:"1",name:"\u{1F354}\u996E\u98DF"},{id:"2",name:"\u{1F6FB}\u4EA4\u901A"}]),s=function(){var D=(0,p.useState)(y),C=m()(D,2),d=C[0],M=C[1],c=function(r){M(r),f.set(r)};return{data:d,Add:function(r){var i={id:(0,h.f)(),name:""};d.push(i),c(a()(d)),r(i)},rename:function(r,i){i!=""&&(d.filter(function(O){return O.id==r})[0].name=i,c(a()(d)))},del:function(r){c(a()(d.filter(function(i){return i.id!=r})))}}}},66506:function(l,u,e){"use strict";e.d(u,{V:function(){return s}});var _=e(94434),a=e.n(_),t=e(46686),m=e.n(t),h=e(38114),p=e(93236),v=e(15359),f=(0,v._)("Taker"),y=f.get([{id:"1",name:"\u6211"},{id:"2",name:"\u4F60"}]),s=function(){var D=(0,p.useState)(y),C=m()(D,2),d=C[0],M=C[1],c=function(r){M(r),f.set(r)};return{data:d,Add:function(r){var i={id:(0,h.f)(),name:""};d.push(i),c(a()(d)),r(i)},rename:function(r,i){i!=""&&(d.filter(function(O){return O.id==r})[0].name=i,c(a()(d)))},del:function(r){c(a()(d.filter(function(i){return i.id!=r})))}}}},3137:function(l,u,e){"use strict";e.d(u,{fi:function(){return a.f},ED:function(){return D},Xs:function(){return C.X},Vd:function(){return _.V}});var _=e(66506),a=e(19896),t=e(94434),m=e.n(t),h=e(46686),p=e.n(h),v=e(38114),f=e(93236),y=e(15359),s=(0,y._)("Fountainhead"),g=s.get([{id:"1",name:"Work"},{id:"2",name:"SideProject"}]),D=function(){var c=(0,f.useState)(g),P=p()(c,2),r=P[0],i=P[1],O=function(n){i(n),s.set(n)};return{data:r,Add:function(n){var o={id:(0,v.f)(),name:""};r.push(o),O(m()(r)),n(o)},rename:function(n,o){o!=""&&(r.filter(function(E){return E.id==n})[0].name=o,O(m()(r)))},del:function(n){O(m()(r.filter(function(o){return o.id!=n})))}}},C=e(28820),d=e(2395)},19896:function(l,u,e){"use strict";e.d(u,{f:function(){return g}});var _=e(94434),a=e.n(_),t=e(46686),m=e.n(t),h=e(30279),p=e.n(h),v=e(93236),f=e(15359),y=(0,f._)("BillData"),s=y.get([]).map(function(D){return p()(p()({},D),{},{date:new Date(Date.parse(D.date))})}),g=function(){var C=(0,v.useState)(s),d=m()(C,2),M=d[0],c=d[1],P=function(n){c(n),y.set(n)},r=function(n){n.date=new Date(Date.parse(n.date)),M.unshift(n),P(a()(M)),console.log(n)},i=function(){console.log(M)},O=function(){console.log(M)};return{data:M,Add:r,rename:i,del:O}}},2395:function(l,u,e){"use strict";e.d(u,{B:function(){return p}});var _=e(94434),a=e.n(_),t=e(46686),m=e.n(t),h=e(93236),p=function(){var f=(0,h.useState)([{id:"string",date:new Date,name:"item",price:12345,coefficient:.7142857142857143,Remark:"string"}]),y=m()(f,2),s=y[0],g=y[1];(0,h.useEffect)(function(){console.log(s)},[s]);var D=function(c){s.unshift(c),g(a()(s)),console.log(c)},C=function(){console.log(s)},d=function(){console.log(s)};return{data:s,Add:D,rename:C,del:d}}},29230:function(l,u,e){"use strict";e.r(u),e.d(u,{default:function(){return Y}});var _=e(3137),a=e(93236),t=e(62086),m=function(){var I=(0,_.fi)(),A=I.data,x=(0,a.useMemo)(function(){return A.reduce(function(j,L){return j+L.Amount},0)},[A]);return(0,t.jsxs)("div",{className:"num ".concat(x>=0?"red":"green"),children:["\uFFE5",x]})},h=m,p=e(99976),v=e.n(p),f=e(27918),y=e(93651),s=e(31149),g,D,C,d,M,c,P,r,i,O,T=(0,s.ZP)(f.Z)(g||(g=v()([`
  display: grid;
  grid-template-areas:
    "TODO TODO Income"
    "TODO TODO Expenditure"
    "RadialView RadialView Tips"
    "RadialView RadialView Tips";
  --radius: 20px;
`]))),n=(0,s.ZP)(y.Z)(D||(D=v()([`
  border-radius: var(--radius);
  margin: 5px;
  opacity: 0.7;
  padding: 10px;

  .title {
    font-size: 36px;
    user-select: none;
  }
  .num {
    font-weight: 2;
    font-size: 32px;
    font-family: "KaiTi";
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
`]))),o=(0,s.ZP)(n)(C||(C=v()([`
  overflow: visible;
  grid-area: RadialView;
  min-width: 200px;
  max-height: 240px;
  display: inherit;
`]))),E=(0,s.ZP)(n)(d||(d=v()([`
  overflow: visible;
  max-height: 220px;
  grid-area: TODO;
`]))),b=(0,s.ZP)(n)(M||(M=v()([`
  grid-area: Income;
`]))),U=(0,s.ZP)(n)(c||(c=v()([`
  grid-area: Expenditure;
`]))),W=(0,s.ZP)(n)(P||(P=v()([`
  grid-area: Tips;
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`]))),F=(0,s.ZP)(f.Z)(r||(r=v()([`
  margin-top: 20px;
  min-height: 73vh;
`]))),N=(0,s.ZP)(f.Z)(i||(i=v()([`
  max-width: 300px;
  height: 100%;
  .addbtn {
    position: relative;
    bottom: 0px;
  }
`]))),K=(0,s.ZP)(f.Z)(O||(O=v()([`
  width: 300px;
  /* height: 150px;
  text-overflow: ellipsis; */
`]))),Z=e(46686),S=e.n(Z),R=JSON.parse('["\u8FD9\u662F\u5360\u4F4D\u7F6E\u7684\u4E00\u4E2A\u677F\u5757","\u70B9\u51FB\u968F\u673A\u5207\u6362\u5176\u4ED6Tips","\u8FD8\u6CA1\u6709\u505A\u597D","\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57"]'),z=function(){var I=function(){return R[Math.round(Math.random()*(R.length-1))]},A=(0,a.useState)(R[0]),x=S()(A,2),j=x[0],L=x[1];return(0,t.jsxs)(W,{onClick:function(){return L(I())},children:[(0,t.jsx)("b",{className:"title",children:"Tips"}),(0,t.jsx)(K,{children:j})]})},J=z,X=function(){var I=(0,_.fi)(),A=I.data,x=new Date().getDate(),j=(0,a.useMemo)(function(){return A.reduce(function(L,B){return L+(B.date.getDate()==x?B.Amount:0)},0)},[A]);return(0,t.jsxs)("div",{className:"num ".concat(j>=0?"red":"green"),children:["\uFFE5",j>=0&&"+",j]})},H=X,G=(0,a.lazy)(function(){return Promise.all([e.e(326),e.e(129)]).then(e.bind(e,80969))}),Q=(0,a.lazy)(function(){return Promise.all([e.e(326),e.e(777),e.e(850)]).then(e.bind(e,96850))}),Y=function(){return console.log("dashbroad reload"),(0,t.jsxs)(T,{children:[(0,t.jsx)(o,{children:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("h1",{children:"Loading..."}),children:(0,t.jsx)(G,{})})}),(0,t.jsx)(E,{children:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("h1",{children:"Loading..."}),children:(0,t.jsx)(Q,{})})}),(0,t.jsxs)(b,{children:[(0,t.jsx)("b",{className:"title",children:"\u4ECA\u65E5\u6536\u652F"}),(0,t.jsx)(H,{})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)("b",{className:"title",children:"\u5F53\u524D\u5B58\u6B3E"}),(0,t.jsx)(h,{})]}),(0,t.jsx)(J,{})]})}},38114:function(l,u,e){"use strict";e.d(u,{f:function(){return _}});var _=function(){return crypto.randomUUID()}},13989:function(l,u,e){var _=e(33737);function a(t){if(Array.isArray(t))return _(t)}l.exports=a,l.exports.__esModule=!0,l.exports.default=l.exports},56037:function(l){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},90623:function(l){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},94434:function(l,u,e){var _=e(13989),a=e(56037),t=e(94945),m=e(90623);function h(p){return _(p)||a(p)||t(p)||m()}l.exports=h,l.exports.__esModule=!0,l.exports.default=l.exports}}]);
