(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(157)),o=(a(160),a(166)),s=a(167),c={title:"Executing a request using a generated OData client",sidebar_label:"Executing a request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},u={unversionedId:"js/features/odata/execute-odata-request",id:"js/features/odata/execute-odata-request",isDocsHomePage:!1,title:"Executing a request using a generated OData client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs/js/features/odata/execute-odata-request.mdx",slug:"/js/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/execute-odata-request.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1599077928,sidebar_label:"Executing a request",sidebar:"someSidebar",previous:{title:"Generate an OData client for JavaScript",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},next:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/odata/generic-http-client"}},l=[{value:"General request structure",id:"general-request-structure",children:[{value:"Setting custom request headers",id:"setting-custom-request-headers",children:[]},{value:"Setting custom query parameters",id:"setting-custom-query-parameters",children:[]},{value:"Setting a custom service path",id:"setting-a-custom-service-path",children:[]}]}],d={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pregenerated OData clients for SAP S/4HANA you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, that we refer to as ",Object(i.b)("em",{parentName:"p"},"entities"),"."),Object(i.b)("p",null,"To make a request towards an entity set, entities offer a fluent API."),Object(i.b)("h2",{id:"general-request-structure"},"General request structure"),Object(i.b)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),Object(i.b)("p",null,"When using a custom OData client, import an entity from the generated service directory (",Object(i.b)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",Object(i.b)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",Object(i.b)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),Object(i.b)("p",null,"When using one of the predefined OData clients, simply import it from the npm module"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { PredefinedEntity } from '@sap/cloud-sdk-vdm-predefined-service';\n")),Object(i.b)("p",null,"Every entity has a ",Object(i.b)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," request type."),Object(i.b)("p",null,"See the list below for details on all available request types (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),Object(i.b)(o.a,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v2-client#getall-request-builder"},Object(i.b)("code",null,"getAll"))," Build requests to get a list of entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v2-client#getbykey-request-builder"},Object(i.b)("code",null,"getByKey"))," Build requests to get an entity based on a key (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v2-client#create-request-builder"},Object(i.b)("code",null,"create"))," Build requests to create entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v2-client#update-request-builder"},Object(i.b)("code",null,"update"))," Build requests to update entities (OData v2)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v2-client#delete-request-builder"},Object(i.b)("code",null,"delete"))," Build requests to delete entities (OData v2)")),Object(i.b)(s.a,{value:"v4",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v4-client#getall-request-builder"},Object(i.b)("code",null,"getAll"))," Build requests to get a list of entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v4-client#getbykey-request-builder"},Object(i.b)("code",null,"getByKey"))," Build requests to get an entity based on a key (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v4-client#create-request-builder"},Object(i.b)("code",null,"create"))," Build requests to create entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v4-client#update-request-builder"},Object(i.b)("code",null,"update"))," Build requests to update entities (OData v4)"),Object(i.b)("li",null,Object(i.b)("a",{href:"./odata-v4-client#delete-request-builder"},Object(i.b)("code",null,"delete"))," Build requests to delete entities (OData v4)"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Some entities do not support all of the request types, which in turn won't be available through the API."))),Object(i.b)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above). All requests can be configured by setting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-custom-request-headers"}),"custom request headers"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-custom-query-parameters"}),"custom query parameters")," and a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-a-custom-service-path"}),"custom service path"),"."),Object(i.b)("p",null,"Each request type has additional request specific configuration options, e. g. creating an entity ",Object(i.b)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",Object(i.b)("inlineCode",{parentName:"p"},"create")," requests, eTag handling for ",Object(i.b)("inlineCode",{parentName:"p"},"update")," and ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getByKey")," requests."),Object(i.b)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution. Once the request is configured use the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," function and pass a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../connectivity/destination-js-sdk"}),"destination")," to it. This will automatically construct your request URL and headers, execute the request and return a typed response if applicable."),Object(i.b)("h3",{id:"setting-custom-request-headers"},"Setting custom request headers"),Object(i.b)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request. You can specify additional custom headers using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomHeaders")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomHeaders({\n    apikey: 'my-api-key'\n  });\n")),Object(i.b)("p",null,"The keys and values of the passed object correspond with the header names and values. Custom headers take priority over automatically generated headers. Automatically generated headers are sent with lower case header names, custom header keep the case they were set in.\nIn the example above we pass an ",Object(i.b)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Setting an ",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," or ",Object(i.b)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."))),Object(i.b)("h3",{id:"setting-custom-query-parameters"},"Setting custom query parameters"),Object(i.b)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration. You can add custom parameters by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function. Custom query parameters take precedence over those created by the SAP Cloud SDK."),Object(i.b)("p",null,"In the example below an additional query parameter ",Object(i.b)("inlineCode",{parentName:"p"},"language=en")," will be added to the request url:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n\n  .withCustomQueryParameters({\n    language: 'en'\n  });\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you want to set a query parameter in quotes (e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),"."))),Object(i.b)("h3",{id:"setting-a-custom-service-path"},"Setting a custom service path"),Object(i.b)("p",null,"If a service specification contains a specification for the servicePath, the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",Object(i.b)("inlineCode",{parentName:"p"},"'/sap/opu/odata/sap/'")," for SAP S/4HANA services). When there is no such path defined in the specification it can be manually set in the ",Object(i.b)("inlineCode",{parentName:"p"},"service-mapping.json"),". It can also be adjusted per request by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),Object(i.b)("p",null,"This will add the custom service path to your request. Executing the example request above against a destination with URL '",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://my.s4-system.com'"}),"https://my.s4-system.com'")," would then execute the request against something like this: '",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://my.s4-system.com/my/custom/service/path/MyEntity'"}),"https://my.s4-system.com/my/custom/service/path/MyEntity'"),"."))}b.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return a?r.a.createElement(m,s(s({ref:t},u),{},{components:a})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},160:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(159),r=a(161);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+l:l}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},161:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},163:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},164:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},165:function(e,t,a){"use strict";var n=a(0),r=a(164);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(165),o=a(163),s=a(47),c=a.n(s),u=37,l=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,d=e.values,b=e.groupId,p=Object(i.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(n.useState)(s),O=f[0],v=f[1],j=Object(n.useState)(!1),y=j[0],g=j[1];if(null!=b){var w=m[b];null!=w&&w!==O&&d.some((function(e){return e.value===w}))&&v(w)}var q=function(e){v(e),null!=b&&h(b,e)},N=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),C(e)},onFocus:function(){return q(t)},onClick:function(){q(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);