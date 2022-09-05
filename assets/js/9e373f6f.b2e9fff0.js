"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"BrowserFetcher.download"},l="BrowserFetcher.download() method",i={unversionedId:"api/puppeteer.browserfetcher.download",id:"version-17.1.1/api/puppeteer.browserfetcher.download",title:"BrowserFetcher.download() method",description:"Initiates a GET request to download the revision from the host.",source:"@site/versioned_docs/version-17.1.1/api/puppeteer.browserfetcher.download.md",sourceDirName:"api",slug:"/api/puppeteer.browserfetcher.download",permalink:"/api/puppeteer.browserfetcher.download",draft:!1,tags:[],version:"17.1.1",frontMatter:{sidebar_label:"BrowserFetcher.download"},sidebar:"sidebar",previous:{title:"BrowserFetcher.canDownload",permalink:"/api/puppeteer.browserfetcher.candownload"},next:{title:"BrowserFetcher.host",permalink:"/api/puppeteer.browserfetcher.host"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browserfetcherdownload-method"},"BrowserFetcher.download() method"),(0,a.kt)("p",null,"Initiates a GET request to download the revision from the host."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserFetcher {\n  download(\n    revision: string,\n    progressCallback?: (x: number, y: number) => void\n  ): Promise<BrowserFetcherRevisionInfo | undefined>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"revision"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The revision to download.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"progressCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"(x: number, y: number) =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A function that will be called with two arguments: How many bytes have been downloaded and the total number of bytes of the download.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.browserfetcherrevisioninfo"},"BrowserFetcherRevisionInfo")," ","|"," undefined",">"),(0,a.kt)("p",null,"A promise with revision information when the revision is downloaded and extracted."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This method is affected by the current ",(0,a.kt)("inlineCode",{parentName:"p"},"product"),"."))}c.isMDXComponent=!0}}]);