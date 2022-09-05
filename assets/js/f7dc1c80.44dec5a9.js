"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_label:"ElementHandle.$$eval"},o="ElementHandle.$$eval() method",i={unversionedId:"api/puppeteer.elementhandle.__eval",id:"version-17.1.1/api/puppeteer.elementhandle.__eval",title:"ElementHandle.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the current element.",source:"@site/versioned_docs/version-17.1.1/api/puppeteer.elementhandle.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__eval",permalink:"/api/puppeteer.elementhandle.__eval",draft:!1,tags:[],version:"17.1.1",frontMatter:{sidebar_label:"ElementHandle.$$eval"},sidebar:"sidebar",previous:{title:"ElementHandle.$$",permalink:"/api/puppeteer.elementhandle.__"},next:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandleeval-method"},"ElementHandle.$$eval() method"),(0,a.kt)("p",null,"Runs the given function on an array of elements matching the given selector in the current element."),(0,a.kt)("p",null,"If the given function returns a promise, then this method will wait till the promise resolves."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFunc<\n      [Array<NodeFor<Selector>>, ...Params]\n    > = EvaluateFunc<[Array<NodeFor<Selector>>, ...Params]>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"The selector to query for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,a.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:null},"The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},"Params"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional arguments to pass to ",(0,a.kt)("code",null,"pageFunction"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,a.kt)("p",null,"A promise to the result of the function."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n')),(0,a.kt)("p",null,"JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const feedHandle = await page.$('.feed');\nexpect(\n  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))\n).toEqual(['Hello!', 'Hi!']);\n")))}c.isMDXComponent=!0}}]);