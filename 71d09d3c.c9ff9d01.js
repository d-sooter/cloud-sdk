(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),o=(a(0),a(209)),i={id:"overview",title:"OData with the Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},c={id:"java/features/odata/overview",title:"OData with the Cloud SDK for Java",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",source:"@site/docs/java/features/odata/overview.md",permalink:"/cloud-sdk/docs/java/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/odata/overview.md",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1590509776,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Getting started - SDK for Java",permalink:"/cloud-sdk/docs/java/getting-started"},next:{title:"Typed OData client generator for Java",permalink:"/cloud-sdk/docs/java/features/odata/java-generate-odata-vmd-v2-v4"}},l=[{value:"What is OData?",id:"what-is-odata",children:[]},{value:"What does the Cloud SDK offer?",id:"what-does-the-cloud-sdk-offer",children:[]}],d={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-odata"},"What is OData?"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.odata.org/"}),"OData")," is an open standard for building and consuming RESTful APIs. It defines a query language to send and retrieve data via HTTP and to perform operations on data."),Object(o.b)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4. The latter comes with more and improved functionality. Full details on the standards are to be found in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"documentation"),"."),Object(o.b)("h2",{id:"what-does-the-cloud-sdk-offer"},"What does the Cloud SDK offer?"),Object(o.b)("p",null,"The Cloud SDK supports consumption of OData services through the following features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An OData client that is capable of building and executing OData requests"),Object(o.b)("li",{parentName:"ul"},"The concept of a typed OData client that allows for building requests in a type-aware and thus type-safe manner"),Object(o.b)("li",{parentName:"ul"},"A generator (available as command line interface and Maven plugin) that is capable of generating typed OData clients from service definitions (OData metadata documents)"),Object(o.b)("li",{parentName:"ul"},"Java Virtual Data Model (VDM): pre-generated typed OData client for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"}),"all OData services of SAP S/4HANA Cloud"))),Object(o.b)("p",null,"The SDK supports both OData v2 and OData v4 protocols. However, parts of the v4 implementation are still in beta and not all features are supported yet."))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),s=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=s(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return a?n.a.createElement(b,c({ref:t},d,{components:a})):n.a.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);