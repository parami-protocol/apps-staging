(self.webpackChunkparami_app=self.webpackChunkparami_app||[]).push([[2072],{55133:function(w){w.exports={modal:"modal___1O81X",codeInput:"codeInput___1b6is",verifyForm:"verifyForm___3o9Cw",highLight:"highLight___wTtyW",verifyInput:"verifyInput___29jF0",buttons:"buttons___2s-8l",button:"button___13mjZ",title:"title___35CCk",confirmContainer:"confirmContainer___3-95Y",alertContainer:"alertContainer___HBKri",field:"field___mBf3w",labal:"labal___1ZC5A",small:"small___1qvTc",labalIcon:"labalIcon___Wx-BW",value:"value___16uzM"}},31639:function(w){w.exports={ad3:"ad3___22MgQ",unit:"unit___UR_Yf"}},69764:function(w,T,n){"use strict";var b=n(71194),U=n(50146),x=n(57663),u=n(71577),P=n(402),g=n(3887),L=n(67294),O=n(55133),h=n.n(O),c=n(54549),l=n(85893),C=g.Z.Title,A=function(W){var B=W.visable,p=W.title,i=W.content,o=W.footer,r=W.close,d=W.bodyStyle;return(0,l.jsx)(U.Z,{title:p?(0,l.jsx)(C,{level:3,className:h().title,children:p}):null,closable:!!r,closeIcon:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{shape:"circle",size:"middle",type:"ghost",icon:(0,l.jsx)(c.Z,{onClick:r})})}),className:h().modal,centered:!0,visible:B,width:650,footer:o,bodyStyle:d,children:i})};T.Z=A},46656:function(w,T,n){"use strict";var b=n(71194),U=n(50146),x=n(47673),u=n(32787),P=n(22385),g=n(31097),L=n(17462),O=n(76772),h=n(57663),c=n(71577),l=n(3182),C=n(2824),A=n(402),R=n(3887),W=n(94043),B=n.n(W),p=n(67294),i=n(43581),o=n(55133),r=n.n(o),d=n(3548),v=n(68855),a=n(85893),f=R.Z.Title,m=function(_){var y=_.visable,s=_.setVisable,e=_.passphrase,I=_.setPassphrase,t=_.func,D=_.changePassphrase,Z=(0,i.tT)("apiWs"),H=(0,i.tT)("currentUser"),M=H.wallet,V=(0,i.tT)("balance"),Q=V.balance,X=(0,p.useState)(!1),Y=(0,C.Z)(X,2),G=Y[0],F=Y[1],J=(0,p.useState)(),z=(0,C.Z)(J,2),k=z[0],q=z[1],K=(0,i.YB)(),ee=function(S){I(S?S.target.value:"")},ne=function(){if(F(!0),!e||e.length<6){F(!1);return}t&&t(),s(!1),F(!1)},te=function(){var N=(0,l.Z)(B().mark(function S(){var $;return B().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!(!!Z&&!!M.account)){j.next=5;break}return j.next=3,t(!0,M.account);case 3:$=j.sent,$&&q($.partialFee);case 5:case"end":return j.stop()}},S)}));return function(){return N.apply(this,arguments)}}();return(0,p.useEffect)(function(){!!Z&&!!(M!=null&&M.account)&&y&&te()},[Z,M==null?void 0:M.account,y]),(0,p.useEffect)(function(){!!(M!=null&&M.passphrase)&&y&&!D&&I(M==null?void 0:M.passphrase)},[M==null?void 0:M.passphrase,e,y,D]),(0,a.jsxs)(U.Z,{title:(0,a.jsx)(f,{level:3,children:K.formatMessage({id:"modal.security.title"})}),closable:!1,className:r().modal,centered:!0,visible:y,width:400,footer:(0,a.jsxs)("div",{className:r().buttons,children:[(0,a.jsx)(c.Z,{type:"text",shape:"round",size:"large",className:r().button,onClick:function(){s(!1)},loading:G,children:K.formatMessage({id:"common.decline"})}),(0,a.jsx)(c.Z,{type:"primary",shape:"round",size:"large",className:r().button,onClick:function(){ne()},disabled:!e||e.length<6,loading:G,children:K.formatMessage({id:"common.confirm"})})]}),children:[(0,a.jsxs)("div",{className:r().confirmContainer,children:[!!k&&!!(k!=null&&k.toString())>Q.free&&(0,a.jsx)(O.Z,{description:K.formatMessage({id:"error.balance.low"}),type:"warning",showIcon:!0,banner:!0,className:r().alertContainer}),(0,a.jsxs)("div",{className:r().field,children:[(0,a.jsxs)("div",{className:r().labal,children:[K.formatMessage({id:"modal.security.gas"}),(0,a.jsxs)("span",{className:r().small,children:["(",K.formatMessage({id:"modal.security.estimated"}),")"]}),(0,a.jsx)(g.Z,{placement:"bottom",title:K.formatMessage({id:"modal.security.gas.tooltip",defaultMessage:"Gas fees are paid to crypto miners who process transactions on the network. Parami does not profit from gas fees."}),children:(0,a.jsx)(v.Z,{className:r().labalIcon})})]}),(0,a.jsx)("div",{className:r().value,children:(0,a.jsx)(d.Z,{value:k,style:{fontSize:"0.8rem",fontWeight:900}})})]})]}),!e&&(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,a.jsxs)("div",{className:r().codeInput,children:[(0,a.jsxs)("div",{className:r().verifyForm,children:[(0,a.jsx)("span",{className:(e==null?void 0:e.slice(0))&&!(e!=null&&e.slice(1,5))&&r().highLight,children:e==null?void 0:e.slice(0,1).replace(/[^]/,"\u2731")}),(0,a.jsx)("span",{className:(e==null?void 0:e.slice(1))&&!(e!=null&&e.slice(2,5))&&r().highLight,children:e==null?void 0:e.slice(1,2).replace(/[^]/,"\u2731")}),(0,a.jsx)("span",{className:(e==null?void 0:e.slice(2,3))&&!(e!=null&&e.slice(3,5))&&r().highLight,children:e==null?void 0:e.slice(2,3).replace(/[^]/,"\u2731")}),(0,a.jsx)("span",{className:(e==null?void 0:e.slice(3,4))&&!(e!=null&&e.slice(4,5))&&r().highLight,children:e==null?void 0:e.slice(3,4).replace(/[^]/,"\u2731")}),(0,a.jsx)("span",{className:(e==null?void 0:e.slice(4,5))&&!(e!=null&&e.slice(5))&&r().highLight,children:e==null?void 0:e.slice(4,5).replace(/[^]/,"\u2731")}),(0,a.jsx)("span",{className:(e==null?void 0:e.slice(5))&&r().highLight,children:e==null?void 0:e.slice(5).replace(/[^]/,"\u2731")})]}),(0,a.jsx)(u.Z.Password,{autoFocus:!0,autoComplete:"new-password",size:"large",className:r().verifyInput,onChange:ee,value:e,disabled:G,maxLength:6,visibilityToggle:!1})]})})]})};T.Z=m},3548:function(w,T,n){"use strict";var b=n(67294),U=n(31639),x=n.n(U),u=n(96534),P=n(85893),g=function(O){var h=O.value,c=O.style;return(0,P.jsxs)("div",{className:x().ad3,style:c,children:[h?(0,u.MP)(h):"--",(0,P.jsx)("span",{className:x().unit,children:"\xA0$AD3"})]})};T.Z=g},57651:function(w,T,n){"use strict";var b=n(67294),U=n(31639),x=n.n(U),u=n(96534),P=n(85893),g=function(O){var h=O.value,c=O.symbol;return(0,P.jsxs)("div",{className:x().did,children:[h?(0,u.MP)(h):"--",c&&(0,P.jsxs)("span",{className:x().unit,children:["\xA0$",c]})]})};T.Z=g},47832:function(w,T,n){"use strict";n.d(T,{QM:function(){return g},Gh:function(){return L}});var b=n(74379),U=n(38648),x=n(81354),u=n.n(x),P=function(h){var c=h;if(c===""||c===void 0||!c){U.default.error({message:"Wrong Password",duration:null});return}var l=c.length%4;l=4-l;for(var C=0;C<l;C+=1)c=c.concat("p");return c},g=function(h,c){var l=P(h);if(!(l==null||!l)){var C=u().enc.Utf8.parse(l),A=u().enc.Utf8.parse(l),R=u().enc.Utf8.parse(c),W=u().AES.encrypt(R,C,{keySize:128/8,iv:A,mode:u().mode.CBC,padding:u().pad.Pkcs7});return W.ciphertext.toString()}},L=function(h,c){var l=P(h);if(!(l==null||!l)){var C=u().enc.Utf8.parse(l),A=u().enc.Utf8.parse(l),R=u().enc.Hex.parse(c),W=u().enc.Base64.stringify(R),B=u().AES.decrypt(W,C,{keySize:128/8,iv:A,mode:u().mode.CBC,padding:u().pad.Pkcs7});return B.toString(u().enc.Utf8)}}},1615:function(w,T,n){"use strict";n.d(T,{Ht:function(){return O},$1:function(){return c},rL:function(){return C},HF:function(){return A},w5:function(){return B}});var b=n(3182),U=n(94043),x=n.n(U),u=n(63667),P=n(47832),g=n(81603),L=new u.Y({type:"sr25519"}),O=function(){var p=(0,b.Z)(x().mark(function i(o,r,d,v,a,f,m){var E,_,y,s,e;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.apiWs.query.system.number();case 2:if(E=t.sent,_=window.apiWs.tx.swap.buyTokens(o,r,d,E.toNumber()+5),!(f&&m)){t.next=9;break}return t.next=7,_.paymentInfo(m);case 7:return y=t.sent,t.abrupt("return",y);case 9:if(s=(0,P.Gh)(v,a),!(s==null||!s)){t.next=12;break}throw new Error("Wrong password");case 12:return e=L.createFromUri(s),t.next=15,(0,g.Y)(_,e);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}},i)}));return function(o,r,d,v,a,f,m){return p.apply(this,arguments)}}(),h=null,c=function(){var p=(0,b.Z)(x().mark(function i(o,r,d,v,a,f,m){var E,_,y,s,e;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.apiWs.query.system.number();case 2:if(E=t.sent,_=window.apiWs.tx.swap.buyCurrency(o,r,d,E.toNumber()+5),!(f&&m)){t.next=9;break}return t.next=7,_.paymentInfo(m);case 7:return y=t.sent,t.abrupt("return",y);case 9:if(s=(0,P.Gh)(v,a),!(s==null||!s)){t.next=12;break}throw new Error("Wrong password");case 12:return e=L.createFromUri(s),t.next=15,(0,g.Y)(_,e);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}},i)}));return function(o,r,d,v,a,f,m){return p.apply(this,arguments)}}(),l=null,C=function(){var p=(0,b.Z)(x().mark(function i(o,r,d,v,a,f,m,E){var _,y,s,e,I;return x().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,window.apiWs.query.system.number();case 2:if(_=D.sent,y=window.apiWs.tx.swap.addLiquidity(o,r,d,v,_.toNumber()+5),!(m&&E)){D.next=9;break}return D.next=7,y.paymentInfo(E);case 7:return s=D.sent,D.abrupt("return",s);case 9:if(e=(0,P.Gh)(a,f),!(e==null||!e)){D.next=12;break}throw new Error("Wrong password");case 12:return I=L.createFromUri(e),D.next=15,(0,g.Y)(y,I);case 15:return D.abrupt("return",D.sent);case 16:case"end":return D.stop()}},i)}));return function(o,r,d,v,a,f,m,E){return p.apply(this,arguments)}}(),A=function(){var p=(0,b.Z)(x().mark(function i(o,r,d,v,a,f,m){var E,_,y,s,e;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.apiWs.query.system.number();case 2:if(E=t.sent,_=window.apiWs.tx.swap.removeLiquidity(o,r,d,E.toNumber()+5),!(f&&m)){t.next=9;break}return t.next=7,_.paymentInfo(m);case 7:return y=t.sent,t.abrupt("return",y);case 9:if(s=(0,P.Gh)(v,a),!(s==null||!s)){t.next=12;break}throw new Error("Wrong password");case 12:return e=L.createFromUri(s),t.next=15,(0,g.Y)(_,e);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}},i)}));return function(o,r,d,v,a,f,m){return p.apply(this,arguments)}}(),R=null,W=null,B=function(){var p=(0,b.Z)(x().mark(function i(o,r,d,v,a){var f,m,E,_;return x().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(f=window.apiWs.tx.swap.acquireReward(o),!(v&&a)){s.next=6;break}return s.next=4,f.paymentInfo(a);case 4:return m=s.sent,s.abrupt("return",m);case 6:if(E=(0,P.Gh)(r,d),!(E==null||!E)){s.next=9;break}throw new Error("Wrong password");case 9:return _=L.createFromUri(E),s.next=12,(0,g.Y)(f,_);case 12:return s.abrupt("return",s.sent);case 13:case"end":return s.stop()}},i)}));return function(o,r,d,v,a){return p.apply(this,arguments)}}()},80950:function(){},96419:function(){},56353:function(){},8623:function(){},42480:function(){},7748:function(){},56619:function(){},77108:function(){},55024:function(){}}]);
