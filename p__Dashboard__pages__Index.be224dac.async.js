(self.webpackChunkparami_app=self.webpackChunkparami_app||[]).push([[3796],{55347:function(j,T,e){"use strict";e.d(T,{ZP:function(){return F}});var $=e(51822),L=e(70727),y=e(88570),m=e(75505);const u=`Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:`;function k(a){const v=$.U;return v.__polkadotjs||(v.__polkadotjs={}),v.__polkadotjs[a]||(v.__polkadotjs[a]=[]),v.__polkadotjs[a]}function U(a){let v=0;for(const{version:W}of a)v=Math.max(v,W.length);return v}function B(a){const v=U(a),W=({name:Z,version:A})=>`	${A.padEnd(v)}	${Z}`;return a.map(W).join(`
`)}function C(a){const v=O=>(0,y.H)(O)?{version:O}:O,W=a.map(v),Z=U(W),A=({path:O,version:c})=>`	${c.padEnd(Z)}	${!O||O.length<5?"<unknown>":O}`;return W.map(A).join(`
`)}function p(a){if((0,L.m)(a))try{return a()||""}catch(v){return""}return a||""}function t({name:a,version:v},W,Z=[]){(0,m.h)(a.startsWith("@polkadot"),()=>`Invalid package descriptor ${a}`);const A=k(a);if(A.push({path:p(W),version:v}),A.length!==1)console.warn(`${a} has multiple versions, ensure that there is only one installed.
${u}
${C(A)}`);else{const O=Z.filter(c=>c&&c.version!==v);O.length&&console.warn(`${a} requires direct dependencies exactly matching version ${v}.
${u}
${B(O)}`)}}const b={name:"@polkadot/util",version:"7.8.2"},S={name:"@polkadot/util-crypto",version:"7.8.2"};t({name:"@polkadot/keyring",version:"7.8.2"},typeof __dirname!="undefined"&&__dirname,[b,S]);var E=e(63667),F=E.Y},46312:function(j,T,e){"use strict";e.d(T,{_:function(){return m}});var $=e(84066),L=e(73968);const y={12:16*8,15:20*8,18:24*8,21:28*8,24:32*8};function m(u=12,k=!1){return(0,$.DK)()&&!k?(0,$.s)(u):(0,L.OF)(y[u])}},55133:function(j){j.exports={modal:"modal___1O81X",codeInput:"codeInput___1b6is",verifyForm:"verifyForm___3o9Cw",highLight:"highLight___wTtyW",verifyInput:"verifyInput___29jF0",buttons:"buttons___2s-8l",button:"button___13mjZ",title:"title___35CCk",confirmContainer:"confirmContainer___3-95Y",alertContainer:"alertContainer___HBKri",field:"field___mBf3w",labal:"labal___1ZC5A",small:"small___1qvTc",labalIcon:"labalIcon___Wx-BW",value:"value___16uzM"}},9050:function(j){j.exports={selectAccount:"selectAccount___1teE1",field:"field___25N9O",title:"title___1fbWV",value:"value___16IkH"}},56324:function(j){j.exports={firstPage:"firstPage___3UK_4",slogan:"slogan___D38Ou",buttons:"buttons___1JumY",button:"button___1ATFT",title:"title___3sur9",desc:"desc___2KzUB",buttonImport:"buttonImport___3VBCH",spinWrapper:"spinWrapper___32w6a"}},24787:function(j){j.exports={mainContainer:"mainContainer___VzUCC",mainBgContainer:"mainBgContainer___2Nlq7",mainIndexContainer:"mainIndexContainer___1Mqvq",background:"background___25786",logoMark:"logoMark___153gX",mainTopContainer:"mainTopContainer___2Cw6K",pageContainer:"pageContainer___2ssxe",stepContainer:"stepContainer___LPJXV",contentContainer:"contentContainer___2e-al",badge:"badge___3vf4B",dashboardCard:"dashboardCard___3oOcj",windowCard:"windowCard___3FjX2",windowCardBody:"windowCardBody___2zSRs",field:"field___3q5d2",title:"title___1BPSo",value:"value___1TvCY",rowField:"rowField___1vUg5",switchButton:"switchButton___3EjXy",statistic:"statistic___2TWER",modalBody:"modalBody___3SJQA",dividerTitle:"dividerTitle___1UTj3",table:"table___1zfPw",withAfterInput:"withAfterInput___3UZxJ",tabSelector:"tabSelector___2tj32",tabItem:"tabItem___3ymbk",inactive:"inactive___12iuZ",noAssets:"noAssets___FcwbD",topImage:"topImage___mHPfd"}},69764:function(j,T,e){"use strict";var $=e(71194),L=e(50146),y=e(57663),m=e(71577),u=e(402),k=e(3887),U=e(67294),B=e(55133),C=e.n(B),p=e(54549),t=e(85893),b=k.Z.Title,S=function(E){var F=E.visable,a=E.title,v=E.content,W=E.footer,Z=E.close,A=E.bodyStyle;return(0,t.jsx)(L.Z,{title:a?(0,t.jsx)(b,{level:3,className:C().title,children:a}):null,closable:!!Z,closeIcon:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.Z,{shape:"circle",size:"middle",type:"ghost",icon:(0,t.jsx)(p.Z,{onClick:Z})})}),className:C().modal,centered:!0,visible:F,width:650,footer:W,bodyStyle:A,children:v})};T.Z=S},17172:function(j,T,e){"use strict";e.r(T),e.d(T,{default:function(){return D}});var $=e(20228),L=e(11382),y=e(57663),m=e(71577),u=e(74379),k=e(38648),U=e(3182),B=e(2824),C=e(94043),p=e.n(C),t=e(67294),b=e(43581),S=e(81773),N=e(24787),E=e.n(N),F=e(56324),a=e.n(F),v=e(69764),W=e(22385),Z=e(31097),A=e(51625),O=e(9050),c=e.n(O),s=e(60058),n=e(85893),l=function(g){var x=g.accounts,o=function(){var d=(0,U.Z)(p().mark(function K(I){var _,V;return p().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return localStorage.setItem("parami:dashboard:accountMeta",JSON.stringify(I)),h.prev=1,h.next=4,(0,s.Lu)(I==null?void 0:I.address);case 4:if(_=h.sent,_){h.next=8;break}return k.default.error({key:"accessDenied",message:"Access Denied",description:"The account does not exist",duration:null}),h.abrupt("return");case 8:return localStorage.setItem("parami:dashboard:account",I==null?void 0:I.address),h.next=11,(0,s.RA)(I==null?void 0:I.address);case 11:if(V=h.sent,V===null){h.next=18;break}return localStorage.setItem("parami:dashboard:did",V),window.location.href=A.Z.page.dashboard.didPage,h.abrupt("return");case 18:return k.default.error({key:"accessDenied",message:"Access Denied",description:"The account does not exist",duration:null}),h.abrupt("return");case 20:h.next=26;break;case 22:return h.prev=22,h.t0=h.catch(1),k.default.error({key:"unknownError",message:h.t0.message||h.t0,duration:null}),h.abrupt("return");case 26:case"end":return h.stop()}},K,null,[[1,22]])}));return function(I){return d.apply(this,arguments)}}();return(0,n.jsx)("div",{className:c().selectAccount,children:x.map(function(d){var K;return(0,n.jsxs)("div",{className:c().field,onClick:function(){o(d)},children:[(0,n.jsx)("span",{className:c().title,children:d==null||(K=d.meta)===null||K===void 0?void 0:K.name}),(0,n.jsx)(Z.Z,{placement:"bottomRight",title:d==null?void 0:d.address,children:(0,n.jsx)("span",{className:c().value,children:d==null?void 0:d.address})})]})})})},r=l,i=e(7085),f=function(){var g=(0,b.tT)("apiWs"),x=(0,t.useState)(!1),o=(0,B.Z)(x,2),d=o[0],K=o[1],I=(0,t.useState)([]),_=(0,B.Z)(I,2),V=_[0],ee=_[1],h=(0,t.useState)(!0),ne=(0,B.Z)(h,2),ae=ne[0],te=ne[1],R=(0,b.YB)(),se=function(){var z=(0,U.Z)(p().mark(function X(){var Q,G,q,P,Y,J,H;return p().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(g){w.next=2;break}return w.abrupt("return");case 2:return w.next=4,g.query.assets.metadata.entries();case 4:for(Q=w.sent,G={},q=0;q<Q.length;q++)P=(0,B.Z)(Q[q],2),Y=P[0],J=P[1],H=Y.toHuman(),H&&(G[H[0]]=J.toHuman());localStorage.setItem("parami:dashboard:assets",JSON.stringify(G));case 8:case"end":return w.stop()}},X)}));return function(){return z.apply(this,arguments)}}(),ie=function(){var z=(0,U.Z)(p().mark(function X(){var Q,G;return p().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,S.$y)("Parami Dashboard");case 2:if(Q=P.sent,Q.length!==0){P.next=7;break}k.default.error({message:R.formatMessage({id:"error.noExtension.title"}),description:R.formatMessage({id:"error.noExtension.description"}),duration:null,onClick:function(){var Y=(0,U.Z)(p().mark(function H(){return p().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:window.open("https://polkadot.js.org/extension/");case 1:case"end":return w.stop()}},H)}));function J(){return Y.apply(this,arguments)}return J}(),onClose:function(){var Y=(0,U.Z)(p().mark(function H(){return p().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:window.open("https://polkadot.js.org/extension/");case 1:case"end":return w.stop()}},H)}));function J(){return Y.apply(this,arguments)}return J}()}),P.next=19;break;case 7:return P.next=9,(0,S.vK)();case 9:if(G=P.sent,G.length!==0){P.next=14;break}k.default.error({message:R.formatMessage({id:"error.noExtension.title"}),description:R.formatMessage({id:"error.noExtension.description"}),duration:6}),P.next=19;break;case 14:return localStorage.setItem("parami:dashboard:accounts",JSON.stringify(G)),P.next=17,se();case 17:ee(G),K(!0);case 19:case"end":return P.stop()}},X)}));return function(){return z.apply(this,arguments)}}();return(0,t.useEffect)(function(){g&&te(!1)},[g]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:E().mainIndexContainer,children:[(0,n.jsx)("div",{className:E().background}),(0,n.jsx)("div",{className:E().logoMark}),(0,n.jsx)("div",{className:E().pageContainer,children:(0,n.jsxs)("div",{className:a().firstPage,children:[(0,n.jsx)("div",{className:a().slogan,children:(0,n.jsx)("div",{className:a().slogan,children:R.formatMessage({id:"dashboard.index.title"})})}),(0,n.jsxs)("div",{className:a().buttons,children:[(0,n.jsxs)(m.Z,{block:!0,size:"large",type:"primary",shape:"round",className:a().button,onClick:function(){b.m8.push(A.Z.page.homePage)},children:[(0,n.jsx)("div",{className:a().title,children:R.formatMessage({id:"dashboard.index.createAccount"})}),(0,n.jsx)("span",{className:a().desc,children:R.formatMessage({id:"dashboard.index.createAccount.desc"})})]}),(0,n.jsx)(L.Z,{indicator:(0,n.jsx)(i.Z,{spin:!0}),style:{width:"100%"},wrapperClassName:a().spinWrapper,spinning:ae,children:(0,n.jsxs)(m.Z,{block:!0,ghost:!0,size:"large",type:"link",shape:"round",className:"".concat(a().button," ").concat(a().buttonImport),onClick:function(){ie()},children:[(0,n.jsx)("div",{className:a().title,children:R.formatMessage({id:"dashboard.index.selectAccount"})}),(0,n.jsx)("span",{className:a().desc,children:R.formatMessage({id:"dashboard.index.selectAccount.desc"})})]})})]})]})})]}),(0,n.jsx)(v.Z,{visable:d,title:R.formatMessage({id:"dashboard.index.selectAccount"}),content:(0,n.jsx)(r,{accounts:V}),footer:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m.Z,{block:!0,shape:"round",size:"large",onClick:function(){K(!1)},children:R.formatMessage({id:"common.close"})})})})]})},D=f},47832:function(j,T,e){"use strict";e.d(T,{QM:function(){return k},Gh:function(){return U}});var $=e(74379),L=e(38648),y=e(81354),m=e.n(y),u=function(C){var p=C;if(p===""||p===void 0||!p){L.default.error({message:"Wrong Password",duration:null});return}var t=p.length%4;t=4-t;for(var b=0;b<t;b+=1)p=p.concat("p");return p},k=function(C,p){var t=u(C);if(!(t==null||!t)){var b=m().enc.Utf8.parse(t),S=m().enc.Utf8.parse(t),N=m().enc.Utf8.parse(p),E=m().AES.encrypt(N,b,{keySize:128/8,iv:S,mode:m().mode.CBC,padding:m().pad.Pkcs7});return E.ciphertext.toString()}},U=function(C,p){var t=u(C);if(!(t==null||!t)){var b=m().enc.Utf8.parse(t),S=m().enc.Utf8.parse(t),N=m().enc.Hex.parse(p),E=m().enc.Base64.stringify(N),F=m().AES.decrypt(E,b,{keySize:128/8,iv:S,mode:m().mode.CBC,padding:m().pad.Pkcs7});return F.toString(m().enc.Utf8)}}},60058:function(j,T,e){"use strict";e.d(T,{kp:function(){return b},Bc:function(){return S},Rg:function(){return N},RA:function(){return E},sG:function(){return F},dr:function(){return a},qy:function(){return v},wz:function(){return W},Lu:function(){return Z},Ob:function(){return A},UB:function(){return O}});var $=e(8870),L=e(2824),y=e(3182),m=e(94043),u=e.n(m),k=e(96534),U=e(55347),B=e(46312),C=e(47832),p=e(81603),t=new U.ZP({type:"sr25519"}),b=function(){var c=(0,y.Z)(u().mark(function s(){var n;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,B._)(12);case 2:return n=r.sent,r.abrupt("return",{mnemonic:n});case 4:case"end":return r.stop()}},s)}));return function(){return c.apply(this,arguments)}}(),S=function(){var c=(0,y.Z)(u().mark(function s(n,l){var r;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return r="",r=(0,C.QM)(l,n),f.abrupt("return",{keystore:r});case 3:case"end":return f.stop()}},s)}));return function(n,l){return c.apply(this,arguments)}}(),N=function(){var c=(0,y.Z)(u().mark(function s(n){var l;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=t.createFromUri(n),i.abrupt("return",{address:l.address});case 2:case"end":return i.stop()}},s)}));return function(n){return c.apply(this,arguments)}}(),E=function(){var c=(0,y.Z)(u().mark(function s(n){var l;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,window.apiWs.query.did.didOf(n);case 2:if(l=i.sent,!l.isEmpty){i.next=5;break}return i.abrupt("return",null);case 5:return i.abrupt("return",l.toHuman().toString());case 6:case"end":return i.stop()}},s)}));return function(n){return c.apply(this,arguments)}}(),F=function(){var c=(0,y.Z)(u().mark(function s(n,l,r,i){var f,D,M,g;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,window.apiWs.tx.did.register(null);case 2:if(f=o.sent,!(r&&i)){o.next=8;break}return o.next=6,f.paymentInfo(i);case 6:return D=o.sent,o.abrupt("return",D);case 8:if(M=(0,C.Gh)(n,l),!(M==null||!M)){o.next=11;break}return o.abrupt("return");case 11:return g=t.createFromUri(M),o.next=14,(0,p.Y)(f,g);case 14:return o.abrupt("return",o.sent);case 15:case"end":return o.stop()}},s)}));return function(n,l,r,i){return c.apply(this,arguments)}}(),a=function(){var c=(0,y.Z)(u().mark(function s(n,l,r,i,f,D){var M,g,x,o,d,K;return u().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,window.apiWs.tx.did.setMetadata("name",n);case 2:return M=_.sent,_.next=5,window.apiWs.tx.did.setMetadata("pic",l);case 5:return g=_.sent,_.next=8,window.apiWs.tx.utility.batch([M,g]);case 8:if(x=_.sent,!(f&&D)){_.next=14;break}return _.next=12,x.paymentInfo(D);case 12:return o=_.sent,_.abrupt("return",o);case 14:if(d=(0,C.Gh)(r,i),!(d==null||!d)){_.next=17;break}throw new Error("Wrong password");case 17:return K=t.createFromUri(d),_.next=20,(0,p.Y)(x,K);case 20:return _.abrupt("return",_.sent);case 21:case"end":return _.stop()}},s)}));return function(n,l,r,i,f,D){return c.apply(this,arguments)}}(),v=function(){var c=(0,y.Z)(u().mark(function s(n){var l;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=t.createFromUri(n),i.abrupt("return",{address:l.address});case 2:case"end":return i.stop()}},s)}));return function(n){return c.apply(this,arguments)}}(),W=function(){var c=(0,y.Z)(u().mark(function s(){var n;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,window.apiWs.consts.balances.existentialDeposit;case 2:return n=r.sent,r.abrupt("return",n.toString());case 4:case"end":return r.stop()}},s)}));return function(){return c.apply(this,arguments)}}(),Z=function(){var c=(0,y.Z)(u().mark(function s(n){var l,r;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,window.apiWs.query.system.account(n);case 2:if(r=f.sent,!r.isEmpty){f.next=5;break}return f.abrupt("return",!1);case 5:if(((l=r.toHuman())===null||l===void 0?void 0:l.nonce)!==0){f.next=7;break}return f.abrupt("return",!1);case 7:return f.abrupt("return",!0);case 8:case"end":return f.stop()}},s)}));return function(n){return c.apply(this,arguments)}}(),A=function(){var c=(0,y.Z)(u().mark(function s(n){var l,r,i,f,D,M,g;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=(0,k.Zc)(n),o.next=3,window.apiWs.query.did.metadata(l);case 3:if(r=o.sent,r.isEmpty){o.next=13;break}return i=r.toHuman(),o.next=8,window.apiWs.rpc.did.batchGetMetadata(n,["pic","name"]);case 8:return f=o.sent,D=(0,L.Z)(f,2),M=D[0],g=D[1],o.abrupt("return",(0,$.Z)((0,$.Z)({},i),{},{avatar:M,nickname:g}));case 13:return o.abrupt("return",null);case 14:case"end":return o.stop()}},s)}));return function(n){return c.apply(this,arguments)}}(),O=function(){var c=(0,y.Z)(u().mark(function s(n,l,r,i,f){var D,M,g,x;return u().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(D=window.apiWs.tx.did.setMetadata("name",n),!(i&&f)){d.next=6;break}return d.next=4,D.paymentInfo(f);case 4:return M=d.sent,d.abrupt("return",M);case 6:if(g=(0,C.Gh)(l,r),!(g==null||!g)){d.next=9;break}throw new Error("Wrong password");case 9:return x=t.createFromUri(g),d.next=12,(0,p.Y)(D,x);case 12:return d.abrupt("return",d.sent);case 13:case"end":return d.stop()}},s)}));return function(n,l,r,i,f){return c.apply(this,arguments)}}()},80950:function(){},96419:function(){},56353:function(){},8623:function(){},42480:function(){},7748:function(){},56619:function(){},77108:function(){},55024:function(){}}]);
