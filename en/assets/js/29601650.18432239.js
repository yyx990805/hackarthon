"use strict";(self.webpackChunkoz_oai=self.webpackChunkoz_oai||[]).push([[7682],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,k=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5987:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9496),a=r(3023);function o(e){let{children:t,fallback:r}=e;return(0,a.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):r??null}},6496:(e,t,r)=>{r.r(t),r.d(t,{Layout:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(6600),a=r(9496),o=r(9613),i=r(5987);const l={sidebar_position:1},s="Lista eksponat\xf3w",p={unversionedId:"podstawy-api/lista-eksponatow",id:"podstawy-api/lista-eksponatow",title:"Lista eksponat\xf3w",description:"{() => }",source:"@site/docs/podstawy-api/02-lista-eksponatow.md",sourceDirName:"podstawy-api",slug:"/podstawy-api/lista-eksponatow",permalink:"/hackarthon/en/docs/podstawy-api/lista-eksponatow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Podstawowe informacje",permalink:"/hackarthon/en/docs/podstawy-api/podstawowe-informacje"},next:{title:"Lista multimedi\xf3w",permalink:"/hackarthon/en/docs/podstawy-api/lista-multimediow"}},c={},u=e=>{let{children:t,color:r,window:n}=e;const[i,l]=a.useState("https://apihackaton.zacheta.art.pl/api/v1/artworks"),[s,p]=a.useState((()=>n.localStorage.getItem("token"))),[c,u]=a.useState();return(0,o.kt)("div",{className:"flex border-solid border-2"},(0,o.kt)("div",null,(0,o.kt)("fieldset",null,(0,o.kt)("input",{value:i,onChange:e=>l(e.target.value)}),(0,o.kt)("br",null),(0,o.kt)("input",{value:s,onChange:e=>{n.localStorage.setItem("token",e.target.value),p(e.target.value)},placeholder:"Token"}),(0,o.kt)("br",null),(0,o.kt)("button",{onClick:()=>fetch(`${i}`,{headers:{Authorization:`Bearer ${s}`}}).then((e=>e.json())).then(u).catch((e=>u("error")))},"wczytaj"),(0,o.kt)("pre",null,JSON.stringify(c,null,2)))))},d=[],f={Layout:u,toc:d};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lista-eksponat\xf3w"},"Lista eksponat\xf3w"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export token='abcdeadbeef' # api pozyskane z konta\ncurl --request GET \\\n  --url https://apihackaton.zacheta.art.pl/api/v1/artworks \\\n  --header 'Authorization: Bearer '$token''\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const options = {\n  method: 'GET',\n  headers: {\n    Authorization: `Bearer ${token}`\n  }\n};\n\nfetch('https://apihackaton.zacheta.art.pl/api/v1/artworks', options)\n  .then(response => response.json())\n  .then(response => console.log(response))\n  .catch(err => console.error(err));\n")),(0,o.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(u,{mdxType:"Layout"}))))}k.isMDXComponent=!0}}]);