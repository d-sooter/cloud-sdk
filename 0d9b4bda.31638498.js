(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,v=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return n?i.a.createElement(v,c(c({ref:t},l),{},{components:n})):i.a.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(183)),o={id:"key-features",title:"Key features",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Key features",description:"Key features of SAP Cloud SDK. Seamlessly build and extend SAP services and applications.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={unversionedId:"overview/key-features",id:"overview/key-features",isDocsHomePage:!1,title:"Key features",description:"Key features of SAP Cloud SDK. Seamlessly build and extend SAP services and applications.",source:"@site/docs/overview/key-features.mdx",slug:"/overview/key-features",permalink:"/cloud-sdk/docs/overview/key-features",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/overview/key-features.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Key features"},d=[{value:"CLI",id:"cli",children:[]},{value:"Typed OData Client",id:"typed-odata-client",children:[]},{value:"Cloud Abstractions",id:"cloud-abstractions",children:[]},{value:"Client Libraries",id:"client-libraries",children:[]},{value:"Odata",id:"odata",children:[]},{value:"Open API",id:"open-api",children:[]},{value:"Events and Messaging",id:"events-and-messaging",children:[]},{value:"CI/CD Pipelines",id:"cicd-pipelines",children:[]},{value:"Blue Green Deployment",id:"blue-green-deployment",children:[]},{value:"DevOps",id:"devops",children:[]},{value:"Test Utilities",id:"test-utilities",children:[]}],l={rightToc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"There is no full feature parity between JavaScript  and Java libraries.\nPlease, review respective documentation sections to find out more."))),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("h2",{id:"typed-odata-client"},"Typed OData Client"),Object(a.b)("h2",{id:"cloud-abstractions"},"Cloud Abstractions"),Object(a.b)("h2",{id:"client-libraries"},"Client Libraries"),Object(a.b)("h2",{id:"odata"},"Odata"),Object(a.b)("h2",{id:"open-api"},"Open API"),Object(a.b)("h2",{id:"events-and-messaging"},"Events and Messaging"),Object(a.b)("h2",{id:"cicd-pipelines"},"CI/CD Pipelines"),Object(a.b)("h2",{id:"blue-green-deployment"},"Blue Green Deployment"),Object(a.b)("h2",{id:"devops"},"DevOps"),Object(a.b)("h2",{id:"test-utilities"},"Test Utilities"))}s.isMDXComponent=!0}}]);