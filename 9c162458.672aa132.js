(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{183:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(183)),i={},c={unversionedId:"js/features/odata/common/function-imports/request-builder",id:"js/features/odata/common/function-imports/request-builder",isDocsHomePage:!1,title:"request-builder",description:"The function imports request builder helps build a request for a service operation containing parameters in a typesave way.",source:"@site/docs/js/features/odata/common/function-imports/request-builder.mdx",slug:"/js/features/odata/common/function-imports/request-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/function-imports/request-builder",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/common/function-imports/request-builder.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1601906093},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"pathname:///api/1.28.1/classes/sap_cloud_sdk_core.functionimportrequestbuilderv2"}),"function imports request builder")," helps build a request for a service operation containing parameters in a typesave way.\nThis time, as an example, the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_WHSE_OUTB_DLV_ORDER/resource"}),Object(a.b)("inlineCode",{parentName:"a"},"Warehouse Outbound Delivery Order Service"))," is used, because not all the services contain function imports like the ",Object(a.b)("inlineCode",{parentName:"p"},"Business Partner Service"),".\nThe type safe client for the ",Object(a.b)("inlineCode",{parentName:"p"},"Warehouse Outbound Delivery Order Service")," can be found in the package ",Object(a.b)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-warehouse-outbound-delivery-order-service"),"."),Object(a.b)("p",null,"The example below creates a function import request builder for the service operation ",Object(a.b)("inlineCode",{parentName:"p"},"PostGoodsIssue")," and then execute it against your service."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'postGoodsIssue({outboundDeliveryOrder: "order"})\n  .execute(destination);\n')),Object(a.b)("p",null,"The service operation is defined in the service metadata."))}p.isMDXComponent=!0}}]);