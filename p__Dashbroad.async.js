(self.webpackChunk=self.webpackChunk||[]).push([[692],{15359:function(o,_,e){"use strict";e.d(_,{_:function(){return d}});function d(a){return{get:function(n){var v=localStorage.getItem(a);return v?JSON.parse(v):n},set:function(n){localStorage.setItem(a,JSON.stringify(n))}}}},28820:function(o,_,e){"use strict";e.d(_,{X:function(){return l}});var d=e(94434),a=e.n(d),n=e(46686),v=e.n(n),y=e(38114),c=e(93236),i=e(15359),M=(0,i._)("Purpose"),O=M.get([{id:"1",name:"\u{1F354}\u996E\u98DF"},{id:"2",name:"\u{1F6FB}\u4EA4\u901A"}]),l=function(){var E=(0,c.useState)(O),D=v()(E,2),u=D[0],h=D[1],m=function(r){h(r),M.set(r)};return{name:"Purpose",data:u,Add:function(r){var s={id:(0,y.f)(),name:""};u.push(s),m(a()(u)),r(s)},rename:function(r,s,P){if(s!=""){var f=u.filter(function(t){return t.id==r})[0];f.name=s,f.color=P,m(a()(u))}},del:function(r){m(a()(u.filter(function(s){return s.id!=r})))}}}},66506:function(o,_,e){"use strict";e.d(_,{V:function(){return l}});var d=e(94434),a=e.n(d),n=e(46686),v=e.n(n),y=e(38114),c=e(93236),i=e(15359),M=(0,i._)("Taker"),O=M.get([{id:"1",name:"\u6211"},{id:"2",name:"\u4F60"}]),l=function(){var E=(0,c.useState)(O),D=v()(E,2),u=D[0],h=D[1],m=function(r){h(r),M.set(r)};return{name:"Taker",data:u,Add:function(r){var s={id:(0,y.f)(),name:""};u.push(s),m(a()(u)),r(s)},rename:function(r,s,P){if(s!=""){var f=u.filter(function(t){return t.id==r})[0];f.name=s,f.color=P,m(a()(u))}},del:function(r){m(a()(u.filter(function(s){return s.id!=r})))}}}},3137:function(o,_,e){"use strict";e.d(_,{fi:function(){return a.f},ED:function(){return E},Xs:function(){return D.X},Vd:function(){return d.V}});var d=e(66506),a=e(19896),n=e(94434),v=e.n(n),y=e(46686),c=e.n(y),i=e(38114),M=e(93236),O=e(15359),l=(0,O._)("Fountainhead"),b=l.get([{id:"1",name:"Work"},{id:"2",name:"SideProject"}]),E=function(){var m=(0,M.useState)(b),p=c()(m,2),r=p[0],s=p[1],P=function(t){s(t),l.set(t)};return{name:"Fountainhead",data:r,Add:function(t){var C={id:(0,i.f)(),name:""};r.push(C),P(v()(r)),t(C)},rename:function(t,C,R){if(C!=""){var U=r.filter(function(S){return S.id==t})[0];U.name=C,U.color=R,P(v()(r))}},del:function(t){P(v()(r.filter(function(C){return C.id!=t})))}}},D=e(28820),u=e(2395)},19896:function(o,_,e){"use strict";e.d(_,{f:function(){return b}});var d=e(94434),a=e.n(d),n=e(46686),v=e.n(n),y=e(30279),c=e.n(y),i=e(93236),M=e(15359),O=(0,M._)("BillData"),l=O.get([]).map(function(E){return c()(c()({},E),{},{date:new Date(Date.parse(E.date))})}),b=function(){var D=(0,i.useState)(l),u=v()(D,2),h=u[0],m=u[1],p=function(t){m(t),O.set(t)},r=function(t){t.date=new Date(Date.parse(t.date)),h.unshift(t),p(a()(h)),console.log(t)},s=function(){console.log(h)},P=function(){console.log(h)};return{data:h,Add:r,rename:s,del:P}}},2395:function(o,_,e){"use strict";e.d(_,{B:function(){return E}});var d=e(94434),a=e.n(d),n=e(46686),v=e.n(n),y=e(30279),c=e.n(y),i=e(93236),M=e(15359),O=e(38114),l=(0,M._)("ShoppingList"),b=l.get([]).map(function(D){return c()(c()({},D),{},{date:new Date(Date.parse(D.date)),stopDate:D.stopDate?new Date(Date.parse(D.stopDate)):void 0})}),E=function(){var u=(0,i.useState)([{id:"1234",date:new Date("2020,7,10"),name:"\u624B\u673A",price:2799,coefficient:1,isStopped:!1,Remark:""},{id:"123124",date:new Date("2020,10,10"),name:"\u7535\u8111",price:4299,isStopped:!1,coefficient:.7142857142857143,Remark:"\u7535\u8111\u53EA\u6709\u5DE5\u4F5C\u65E5\u624D\u7528\uFF0C\u65E5\u5747\u8981\u4E585/7"}]),h=v()(u,2),m=h[0],p=h[1],r=function(t){m.unshift(c()({id:(0,O.f)(),isStopped:!1},t)),p(a()(m))};function s(f,t,C){f[t]=C,p(a()(m))}var P=function(t){p(m.filter(function(C){return C.id!==t}))};return{data:m,Add:r,mutation:s,del:P}}},29230:function(o,_,e){"use strict";e.r(_),e.d(_,{default:function(){return G}});var d=e(3137),a=e(93236),n=e(62086),v=function(){var j=(0,d.fi)(),T=j.data,A=(0,a.useMemo)(function(){return T.reduce(function(g,W){return g+W.Amount},0)},[T]);return(0,n.jsxs)("div",{className:"num ".concat(A>=0?"red":"green"),children:["\uFFE5",A]})},y=v,c=e(99976),i=e.n(c),M=e(27918),O=e(93651),l=e(31149),b,E,D,u,h,m,p,r,s,P,f=(0,l.ZP)(M.Z)(b||(b=i()([`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "TODO TODO Income"
    "TODO TODO Expenditure"
    "RadialView RadialView Tips"
    "RadialView RadialView Tips";
  --radius: 20px;
`]))),t=(0,l.ZP)(O.Z)(E||(E=i()([`
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
`]))),C=(0,l.ZP)(t)(D||(D=i()([`
  overflow: visible;
  grid-area: RadialView;
  display: inherit;
`]))),R=(0,l.ZP)(t)(u||(u=i()([`
  overflow: visible;
  grid-area: TODO;
`]))),U=(0,l.ZP)(t)(h||(h=i()([`
  grid-area: Income;
`]))),S=(0,l.ZP)(t)(m||(m=i()([`
  grid-area: Expenditure;
`]))),B=(0,l.ZP)(t)(p||(p=i()([`
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
`]))),Q=(0,l.ZP)(M.Z)(r||(r=i()([`
  margin-top: 20px;
`]))),Y=(0,l.ZP)(M.Z)(s||(s=i()([`
  max-width: 300px;
  height: 100%;
  .addbtn {
    position: relative;
    bottom: 0px;
  }
`]))),K=(0,l.ZP)(M.Z)(P||(P=i()([""]))),Z=e(46686),F=e.n(Z),I=JSON.parse('["\u8FD9\u662F\u5360\u4F4D\u7F6E\u7684\u4E00\u4E2A\u677F\u5757","\u70B9\u51FB\u968F\u673A\u5207\u6362\u5176\u4ED6Tips","\u8FD8\u6CA1\u6709\u505A\u597D","\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57\u6D4B\u8BD5\u957F\u6587\u5B57"]'),V=function(){var j=function(){return I[Math.round(Math.random()*(I.length-1))]},T=(0,a.useState)(I[0]),A=F()(T,2),g=A[0],W=A[1];return(0,n.jsxs)(B,{onClick:function(){return W(j())},children:[(0,n.jsx)("b",{className:"title",children:"Tips"}),(0,n.jsx)(K,{children:g})]})},N=V,z=function(){var j=(0,d.fi)(),T=j.data,A=new Date().getDate(),g=(0,a.useMemo)(function(){return T.reduce(function(W,x){return W+(x.date.getDate()==A?x.Amount:0)},0)},[T]);return(0,n.jsxs)("div",{className:"num ".concat(g>=0?"red":"green"),children:["\uFFE5",g>=0&&"+",g]})},J=z,X=(0,a.lazy)(function(){return Promise.all([e.e(326),e.e(129)]).then(e.bind(e,80969))}),H=(0,a.lazy)(function(){return Promise.all([e.e(326),e.e(777),e.e(850)]).then(e.bind(e,96850))}),G=function(){return console.log("dashbroad reload"),(0,n.jsxs)(f,{children:[(0,n.jsx)(C,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)("h1",{children:"Loading..."}),children:(0,n.jsx)(X,{})})}),(0,n.jsx)(R,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)("h1",{children:"Loading..."}),children:(0,n.jsx)(H,{})})}),(0,n.jsxs)(U,{children:[(0,n.jsx)("b",{className:"title",children:"\u4ECA\u65E5\u6536\u652F"}),(0,n.jsx)(J,{})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)("b",{className:"title",children:"\u5F53\u524D\u5B58\u6B3E"}),(0,n.jsx)(y,{})]}),(0,n.jsx)(N,{})]})}},38114:function(o,_,e){"use strict";e.d(_,{f:function(){return d}});var d=function(){return crypto&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).substr(2,9)}},13989:function(o,_,e){var d=e(33737);function a(n){if(Array.isArray(n))return d(n)}o.exports=a,o.exports.__esModule=!0,o.exports.default=o.exports},56037:function(o){function _(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o.exports=_,o.exports.__esModule=!0,o.exports.default=o.exports},90623:function(o){function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=_,o.exports.__esModule=!0,o.exports.default=o.exports},94434:function(o,_,e){var d=e(13989),a=e(56037),n=e(94945),v=e(90623);function y(c){return d(c)||a(c)||n(c)||v()}o.exports=y,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
