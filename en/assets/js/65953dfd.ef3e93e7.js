"use strict";(self.webpackChunkoz_oai=self.webpackChunkoz_oai||[]).push([[5132],{9613:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5987:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(9496),a=r(3023);function o(t){let{children:e,fallback:r}=t;return(0,a.Z)()?n.createElement(n.Fragment,null,null==e?void 0:e()):r??null}},2257:(t,e,r)=>{r.r(e),r.d(e,{Layout:()=>u,assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(6600),a=r(9496),o=r(9613),i=r(5987);const l={sidebar_position:1},s="Lista wystaw",c={unversionedId:"podstawy-api/lista-wystaw",id:"podstawy-api/lista-wystaw",title:"Lista wystaw",description:"{() => }",source:"@site/docs/podstawy-api/04-lista-wystaw.md",sourceDirName:"podstawy-api",slug:"/podstawy-api/lista-wystaw",permalink:"/hackarthon/en/docs/podstawy-api/lista-wystaw",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lista multimedi\xf3w",permalink:"/hackarthon/en/docs/podstawy-api/lista-multimediow"},next:{title:"Katalog artyst\xf3w",permalink:"/hackarthon/en/docs/podstawy-api/katalog-artystow"}},p={},u=t=>{let{children:e,color:r,window:n}=t;const[i,l]=a.useState("https://apihackaton.zacheta.art.pl/api/v1/exhibition"),[s,c]=a.useState((()=>null==n?void 0:n.localStorage.getItem("token"))),[p,u]=a.useState();return(0,o.kt)("div",{className:"flex border-solid border-2"},(0,o.kt)("div",null,(0,o.kt)("fieldset",null,(0,o.kt)("input",{value:i,onChange:t=>l(t.target.value)}),(0,o.kt)("br",null),(0,o.kt)("input",{value:s,onChange:t=>{null==n||n.localStorage.setItem("token",t.target.value),c(t.target.value)},placeholder:"Token"}),(0,o.kt)("br",null),(0,o.kt)("button",{onClick:()=>fetch(`${i}`,{headers:{Authorization:`Bearer ${s}`}}).then((t=>t.json())).then(u).catch((t=>u("error")))},"wczytaj"),(0,o.kt)("pre",null,JSON.stringify(p,null,2)))))},d=[{value:"Filtrowanie",id:"filtrowanie",level:2}],y={Layout:u,toc:d};function f(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lista-wystaw"},"Lista wystaw"),(0,o.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(u,{mdxType:"Layout"}))),(0,o.kt)("h2",{id:"filtrowanie"},"Filtrowanie"))}f.isMDXComponent=!0}}]);