(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{uehb:function(n,e,r){"use strict";r.r(e),r("ls82");var t=r("NcyZ");function o(n,e,r,t,o,u,i){try{var c=n[u](i),a=c.value}catch(s){return void r(s)}c.done?e(a):Promise.resolve(a).then(t,o)}function u(n){return function(){var e=this,r=arguments;return new Promise(function(t,u){var i=n.apply(e,r);function c(n){o(i,t,u,c,a,"next",n)}function a(n){o(i,t,u,c,a,"throw",n)}c(void 0)})}}r("kB5k"),r("2lG3"),r("M39V"),e.default=function(n){var e,o=n.apiKey,i=n.rpcUrl,c=n.networkId,a=n.preferred;return{name:n.label||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:n.iconSrc,wallet:(e=u(regeneratorRuntime.mark(function n(e){var a,s,f,l,d;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(73).then(r.t.bind(null,"n8m1",7));case 2:return a=new(0,n.sent.default)(o,i?{chainId:c,rpcUrl:i}:1===c?void 0:Object(t.m)(c)),s=a.getProvider(),f=e.BigNumber,l=e.getAddress,n.abrupt("return",{provider:s,instance:a,interface:{name:"Fortmatic",connect:function(){return a.user.login().then(function(n){return d=!0,n})},disconnect:function(){return a.user.logout()},address:{get:function(){return d?l(s):Promise.resolve()}},network:{get:function(){return Promise.resolve(c)}},balance:{get:function(){var n=u(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d&&a.user.getBalances().then(function(n){return n[0]?f(n[0].crypto_amount).times(f("1000000000000000000")).toString(10):null}));case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return a.user.settings()}}});case 8:case"end":return n.stop()}},n)})),function(n){return e.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:a}}}}]);