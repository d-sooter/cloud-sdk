(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(151)),i={title:"Use the OData v4 client for JavaScript / TypeScript",sidebar_label:"OData v4 client API",description:"Use the SAP Cloud SDK for JavaScript to build and run OData v4 requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},c={unversionedId:"js/features/odata/odata-v4-client",id:"js/features/odata/odata-v4-client",isDocsHomePage:!1,title:"Use the OData v4 client for JavaScript / TypeScript",description:"Use the SAP Cloud SDK for JavaScript to build and run OData v4 requests in a type-safe way.",source:"@site/docs/js/features/odata/odata-v4-client.mdx",slug:"/js/features/odata/odata-v4-client",permalink:"/cloud-sdk/docs/js/features/odata/odata-v4-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/odata-v4-client.mdx",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1599498386,sidebar_label:"OData v4 client API",sidebar:"someSidebar",previous:{title:"Use the OData client for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/odata/odata-v2-client"},next:{title:"Destinations in the SAP Cloud SDK for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}},s=[{value:"Making a request using a generated OData v4 client",id:"making-a-request-using-a-generated-odata-v4-client",children:[{value:"Filter",id:"filter",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"OData v4 is experimental and not ready for production")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Typed client for OData v4 is under heavy development and was released only as ",Object(o.b)("inlineCode",{parentName:"p"},"experimental/Beta"),". Please, use it on you own discretion. We'll explicitly communicate in the release notes when it's stable and general availability."))),Object(o.b)("p",null,"For more details on ",Object(o.b)("strong",{parentName:"p"},"how to execute requests")," using a (pre-)generated OData client refer to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./execute-odata-request"}),"this documentation"),"."),Object(o.b)("h2",{id:"making-a-request-using-a-generated-odata-v4-client"},"Making a request using a generated OData v4 client"),Object(o.b)("h3",{id:"filter"},"Filter"),Object(o.b)("h4",{id:"filter-on-one-to-many-navigation-properties"},"Filter on One-To-Many Navigation Properties"),Object(o.b)("p",null,"OData V4 introduces ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators"}),"lambda operators")," e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"any"),"/",Object(o.b)("inlineCode",{parentName:"p"},"all"),", so that the root property of the one-to-many navigation properties can be filtered. Below is an example that demonstrates how to use the lambda operator ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/api/1.28.1/modules/sap_cloud_sdk_core#any"}),"any"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  Get all people that have at least one friend that matches all the following conditions:\n    - Has first name 'firstName'\n    - Has last name 'lastName'\n*/\n.filter(\n  any(\n    People.FRIENDS.filter(\n      People.FIRST_NAME.equals('firstName'),\n      People.LAST_NAME.equals('lastName')\n    )\n  )\n)\n")),Object(o.b)("p",null,"The generated ",Object(o.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the URL will be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"$filter=(/any(a0:((a0/Friends/FirstName eq 'firstName' and a0/Friends/LastName eq 'lastName'))))\n")))}d.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);