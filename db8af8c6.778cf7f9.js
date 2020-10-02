(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),r=(n(0),n(155)),i={id:"extensions-supported-by-sap-cloud-sdk-for-java",title:"Extensions overview",sidebar_label:"Overview",description:"Discover rich eco-system of SAP Cloud SDK for Java via various value-add extensions. They usually happen thanks to contributors from within and outside of SAP and provide additional features on top of standard SDK offering. We document them in this section.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","integrations","extensions","libraries"]},s={unversionedId:"java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java",id:"java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java",isDocsHomePage:!1,title:"Extensions overview",description:"Discover rich eco-system of SAP Cloud SDK for Java via various value-add extensions. They usually happen thanks to contributors from within and outside of SAP and provide additional features on top of standard SDK offering. We document them in this section.",source:"@site/docs/java/features/extensions/overview.mdx",slug:"/java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/extensions/overview.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Caching Capabilities of the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/resilience/caching"},next:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/java/features/extensions/extension-library/curconv/sap-currency-conversion-extension-library-for-cloud-sdk-for-java"}},c=[{value:"What are extensions?",id:"what-are-extensions",children:[{value:"How extension different from other features?",id:"how-extension-different-from-other-features",children:[]},{value:"Extension vs type-safe API client library?",id:"extension-vs-type-safe-api-client-library",children:[]}]},{value:"Where can I find supported extensions?",id:"where-can-i-find-supported-extensions",children:[]},{value:"Benefits for developers using SDK",id:"benefits-for-developers-using-sdk",children:[]},{value:"Benefits for contributors",id:"benefits-for-contributors",children:[]},{value:"How to contribute?",id:"how-to-contribute",children:[]},{value:"Feedback and support",id:"feedback-and-support",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-are-extensions"},"What are extensions?"),Object(r.b)("p",null,"By providing versatile and reliable core functionality to aid modern cloud development SAP Cloud SDK also becomes an important integration layer for various SAP technologies. To leverage this and benefit developers using SDK, we accept contributions from libraries and services coherent with SDK's mission and value proposition."),Object(r.b)("h3",{id:"how-extension-different-from-other-features"},"How extension different from other features?"),Object(r.b)("p",null,"We make sure extension libraries are well integrated into the Cloud SDK's ecosystem and call them extensions to make it clear they are not the core SDK components. It doesn't make the features introduced by them less valuable for a developer. These extensions are usually shipped in separate packages similar to libraries generated from API definitions."),Object(r.b)("h3",{id:"extension-vs-type-safe-api-client-library"},"Extension vs type-safe API client library?"),Object(r.b)("p",null,"Usually, with an extension, you get more than a nice API client but also a hand-crafted code specific to needs that go beyond calling and API."),Object(r.b)("h2",{id:"where-can-i-find-supported-extensions"},"Where can I find supported extensions?"),Object(r.b)("p",null,"Visit extension library in the left-side menu."),Object(r.b)("h2",{id:"benefits-for-developers-using-sdk"},"Benefits for developers using SDK"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"More features and simplicity out of the box"),Object(r.b)("li",{parentName:"ul"},"Well integrated with other SDK features like destination handling, multi-tenancy, resilience, caching, etc."),Object(r.b)("li",{parentName:"ul"},"Single initial support channel"),Object(r.b)("li",{parentName:"ul"},"High code quality ensured by SDK Team"),Object(r.b)("li",{parentName:"ul"},"Consistent APIs"),Object(r.b)("li",{parentName:"ul"},"Detailed documentation by developers")),Object(r.b)("h2",{id:"benefits-for-contributors"},"Benefits for contributors"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"At the moment only services and libraries from withing SAP can be contributed and released together with SAP Cloud SDK for Java."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Increased adoption thanks to the huge SDK user base"),Object(r.b)("li",{parentName:"ul"},"On-boarding to the best development practices"),Object(r.b)("li",{parentName:"ul"},"Code reviews by the SDK Team"),Object(r.b)("li",{parentName:"ul"},"High level of automation in the contribution process"),Object(r.b)("li",{parentName:"ul"},"Ship your library to Maven Central with Cloud SDK"),Object(r.b)("li",{parentName:"ul"},"Easy process to document your extension on the SDK's ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sap.github.io/cloud-sdk/"}),"documentation portal"))),Object(r.b)("h2",{id:"how-to-contribute"},"How to contribute?"),Object(r.b)("p",null,"If you:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"maintain a library in SAP cloud ecosystem"),Object(r.b)("li",{parentName:"ul"},"have a service in SAP cloud ecosystem that you believe will strengthen Cloud SDK offering and provides additional value to your customers by being part of Cloud SDK"),Object(r.b)("li",{parentName:"ul"},"know of a service or library within SAP that you would like to use in the context of SAP Cloud SDK")),Object(r.b)("p",null,"We're happy to hear from you via email: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"mailto:cloudsdk@sap.com"}),"cloudsdk@sap.com")),"  or reach out to us via SAP internal communication channels."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"What if you're outside of SAP")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you're outside of SAP but know about valuable library or service missing from SAP Cloud SDK offering, please, let us know."))),Object(r.b)("h2",{id:"feedback-and-support"},"Feedback and support"),Object(r.b)("p",null,"We hope you're happy developing with SAP Cloud SDK for Java. We're happy to hear back from you to help us further improve. Send you feedback, ideas, suggestions to ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"mailto:cloudsdk@sap.com"}),"cloudsdk@sap.com"))))}d.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);