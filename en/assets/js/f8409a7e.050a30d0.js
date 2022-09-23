"use strict";(self.webpackChunkoz_oai=self.webpackChunkoz_oai||[]).push([[3206],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),y=n,m=s["".concat(p,".").concat(y)]||s[y]||u[y]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5987:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(9496),n=r(3023);function i(e){let{children:t,fallback:r}=e;return(0,n.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):r??null}},1761:(e,t,r)=>{r.r(t),r.d(t,{Form:()=>y,Init:()=>u,Odp:()=>s,Pytanie:()=>m,assets:()=>d,contentTitle:()=>p,default:()=>w,frontMatter:()=>l,metadata:()=>c,toc:()=>k});var a=r(6600),n=r(9496),i=r(9613),o=r(5987);const l={sidebar_position:0},p="Wprowadzenie do API zach\u0119ty",c={unversionedId:"intro",id:"intro",title:"Wprowadzenie do API zach\u0119ty",description:"* REST API",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/hackarthon/en/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Hackathon",permalink:"/hackarthon/en/docs/category/hackathon"}},d={},u=e=>{let{children:t}=e;return window.i=1,(0,i.kt)(n.Fragment,null)},s=e=>{var t;let{children:r}=e;return(0,i.kt)("label",null,(0,i.kt)("input",{type:"radio",name:`pyt${null==(t=window)?void 0:t.i}`}),r)},y=e=>{let{children:t}=e;return(0,i.kt)("form",{action:"https://zochniak.pl/oaiz/save.php",method:"POST",onSubmit:e=>{(e.target||e.target.closest("form")).querySelector(".resp").innerHTML="Gratulacje, wygra\u0142e\u015b/-a\u015b?"}},t,(0,i.kt)("div",{class:"resp"}),(0,i.kt)("button",{type:"submit"},"Wy\u015blij"))},m=e=>{let{children:t}=e;return(0,i.kt)("div",{style:{marginTop:"30px",display:"flex",flexDirection:"column"}},"Pytanie ",window.i++,". ",t)},k=[{value:"Endpointy",id:"endpointy",level:2},{value:"Quiz",id:"quiz",level:2}],h={Init:u,Odp:s,Form:y,Pytanie:m,toc:k};function w(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wprowadzenie-do-api-zach\u0119ty"},"Wprowadzenie do API zach\u0119ty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/"},"REST API")),(0,i.kt)("li",{parentName:"ul"},"zgodne z OpenAPI Spec v3 (Swagger)"),(0,i.kt)("li",{parentName:"ul"},"zgodne z JSONApi"),(0,i.kt)("li",{parentName:"ul"},"dostepne kolekcje z przyk\u0142adowymi u\u017cyciami")),(0,i.kt)("h2",{id:"endpointy"},"Endpointy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/api/v1/artworks - eksponaty"),(0,i.kt)("li",{parentName:"ul"},"/api/v1/multimedia - pliki"),(0,i.kt)("li",{parentName:"ul"},"/api/v1/artists - arty\u015bci"),(0,i.kt)("li",{parentName:"ul"},"/api/v1/exhibitions - wystawy"),(0,i.kt)("li",{parentName:"ul"},"/api/v1/literature")),(0,i.kt)("h2",{id:"quiz"},"Quiz"),(0,i.kt)("p",null,"Sprawd\u017a swoj\u0105 wiedz\u0119"),(0,i.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>(0,i.kt)(y,{mdxType:"Form"},(0,i.kt)(u,{mdxType:"Init"}),(0,i.kt)(m,{mdxType:"Pytanie"},(0,i.kt)("b",null,"Zbior\xf3w jakiego obiketu dotyczy Hackathon"),(0,i.kt)(s,{mdxType:"Odp"},"Zach\u0119ta Narodowa Galeria Sztuki"),(0,i.kt)(s,{mdxType:"Odp"},"Wikipedia"),(0,i.kt)(s,{mdxType:"Odp"},"British Museum")),(0,i.kt)("a",{href:"/hackarthon/docs/hackarthon/quiz"},"Wi\u0119cej pyta\u0144 w sekcji Quiz")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url 'https://apihackaton.zacheta.art.pl/api/v1/artists/23' \\\n  --header 'Accept: application/vnd.api+json' \\\n  --header 'Authorization: Bearer {{token}}}}' \\\n  --header 'Host: apihackathon.zacheta.art.pl'\n")),(0,i.kt)("h1",{id:"inwentaryzacja"},(0,i.kt)("a",{parentName:"h1",href:"/hackarthon/en/docs/przykladowe-zastosowania/inwentaryzacja"},"Inwentaryzacja")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/d9hTKQ1qU34",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h1",{id:"mapa-wydarze\u0144"},(0,i.kt)("a",{parentName:"h1",href:"./przykladowe-zastosowania/02-mapa%20wydarzen.mdx"},"Mapa wydarze\u0144")),(0,i.kt)("video",{src:"videos/map.mp4"}),(0,i.kt)("video",{src:"videos/virtualgallery.mp4"}))}w.isMDXComponent=!0}}]);