(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(s,".").concat(p)]||u[p]||b[p]||o;return n?a.a.createElement(h,r(r({ref:t},l),{},{components:n})):a.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";var i=n(0),a=n(19);t.a=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},141:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var i=n(140),a=n(143);function o(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,s=o.forcePrependBaseUrl,r=void 0!==s&&s,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;var d=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+d:d}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),o=(n(0),n(139)),s=(n(141),{id:"destination-js-sdk",title:"Destinations in the SAP Cloud SDK for JavaScript / TypeScript",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]}),r={unversionedId:"js/features/connectivity/destination-js-sdk",id:"js/features/connectivity/destination-js-sdk",isDocsHomePage:!1,title:"Destinations in the SAP Cloud SDK for JavaScript / TypeScript",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",source:"@site/docs/js/features/connectivity/destination.md",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/connectivity/destination.md",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1596630343,sidebar_label:"Destinations",sidebar:"someSidebar",previous:{title:"Use the OData v4 client for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-v4-client-for-javascript-and-typescript"},next:{title:"Proxies in the SAP Cloud SDK for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"The Lookup Flow",id:"the-lookup-flow",children:[{value:"Local Environment Variable",id:"local-environment-variable",children:[]},{value:"Service Instance",id:"service-instance",children:[]},{value:"Destination Service",id:"destination-service",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Most applications developed on SAP Cloud Platform (SCP) will integrate in some way with other LoB solutions and systems.\nIntegration means the exchange of data and it is necessary to abstract the details on the data exchange from your code base.\nThe reasons for this abstraction are manifold: URLs defining a resource may change, authentication information should not be part of code, in case of a multi customer application the locations depends on the customer, etc."),Object(o.b)("p",null,"On SCP this abstraction is provided by a so called destination object.\nThis object can be obtained at runtime of the application and contains information like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"URL"),Object(o.b)("li",{parentName:"ul"},"Authentication"),Object(o.b)("li",{parentName:"ul"},"Proxy Settings (see the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk"}),"proxy documentation")," for more details)   "),Object(o.b)("li",{parentName:"ul"},"...")),Object(o.b)("p",null,"The SAP Cloud SDK helps you receiving this object and provides also options for local testing outside the SCP."),Object(o.b)("p",null,"The SDK provides a generator to create a client or data model based on a service definition.\nFor S/4HANA this client has been created and published to npm.\nIn this ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"}),"tutorial series")," a detailed step-by-step guide how to use the data model is presented.\nA simple request to receive some business-partners from an S/4 HANA system would look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"BusinessPartner.requestBuilder()\n  .getAll().filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"yourDestination")," is a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/api/1.21.0/interfaces/sap_cloud_sdk_core.destination"}),Object(o.b)("inlineCode",{parentName:"a"},"Destination")," object"),".\nIn principle, you could create a destination object yourself or read it from somewhere and then pass it to the ",Object(o.b)("inlineCode",{parentName:"p"},"execute()")," method.\nHowever, this would not be very flexible and convenient as discussed above.\nThe SDK provides some help for this problem.\nIf just a destinationName is provided i.e.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),".execute({\"destinationName\": 'myDestination'})\n")),Object(o.b)("p",null,"the SDK tries to look the destination up for you.\nThe details on this process are explained in the next chapters."),Object(o.b)("h2",{id:"the-lookup-flow"},"The Lookup Flow"),Object(o.b)("p",null,"When given a ",Object(o.b)("inlineCode",{parentName:"p"},"destinationName")," the SDK tries three things to find a destination:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Checking local environment variables"),Object(o.b)("li",{parentName:"ol"},"Checking a service instance"),Object(o.b)("li",{parentName:"ol"},"Using the destination service")),Object(o.b)("p",null,"Once a destination is found, the flow is stopped and the destination is returned.\nSo local env beats service instance beats destination service in case all contain a destination with the given name."),Object(o.b)("h3",{id:"local-environment-variable"},"Local Environment Variable"),Object(o.b)("p",null,"This option is present for deployment and testing in a local environment outside the SCP where no destination services are available.\nThe SDK provides a ",Object(o.b)("inlineCode",{parentName:"p"},"mockDestinationsEnv(...destinations)")," method which takes a list of destination objects, transforms it to a JSON array and assigns it to the ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.destinations"),".\nAt runtime, the SDK will check whether a destination with the given is present and use it, if it is.\nIf a destination with the same name as the one given as ",Object(o.b)("inlineCode",{parentName:"p"},"destinationName")," is found it is taken for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"mockDestinationsEnv({\n  authTokens: [],\n  authentication: 'NoAuthentication',\n  name: 'TESTINATION',\n  isTrustingAllCertificates: false,\n  url: 'https://mys4hana.com'\n})\n")),Object(o.b)("p",null,"would set a destination with name ",Object(o.b)("inlineCode",{parentName:"p"},"TESTINATION"),"."),Object(o.b)("h3",{id:"service-instance"},"Service Instance"),Object(o.b)("p",null,"It is possible that the service credentials in other words ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variables contain a destination.\nIf you want to use this information the name of the service instance must be provided as destination name.\nCurrently two services types are supported out of the box ",Object(o.b)("inlineCode",{parentName:"p"},"business-logging")," and ",Object(o.b)("inlineCode",{parentName:"p"},"s4-hana-cloud")," with the following transformation functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"//business-logging\n(serviceBinding) => { \n    url: serviceBinding.credentials.writeUrl,\n    authentication: 'OAuth2ClientCredentials',\n    username: serviceBinding.credentials.uaa.clientid,\n    password: serviceBinding.credentials.uaa.clientsecret\n};\n\n//s4-hana-cloud\n(serviceBinding) => {\n    url: serviceBinding.credentials.URL,\n    authentication: 'BasicAuthentication',\n    username: serviceBinding.credentials.User,\n    password: serviceBinding.credentials.Password\n};\n")),Object(o.b)("h3",{id:"destination-service"},"Destination Service"),Object(o.b)("p",null,"This is the normal case in a productive environment.\nIn order to access the destination service, the SDK will first fetch an access token from the XSUAA service.\nThis token is used to make a call to the destination service returning the destinations.\nFor a simple service this would be the end of the story.\nHowever, the destination service is special in a way that it is a ",Object(o.b)("inlineCode",{parentName:"p"},"tenant aware serive"),".\nSuch services make it possible to build multi tenant applications.\nSo what defines a tenant aware service?"),Object(o.b)("p",null,"Assume you want to build a simple application showing the 5 newest business-partner in an S/4 system.\nYou want to offer this application as a service to customers.\nOf course you want to make this service cost efficient and host it only once and let multiple customers use it.\nThis leads now naturally to the requirement that your service needs to return the data related to the specific customers.\nA customer is represented by an account on SCP and a service considering the account is a ",Object(o.b)("inlineCode",{parentName:"p"},"tenant aware service"),". "),Object(o.b)("p",null,"Tenant aware services on SCP are offered to customers via an ",Object(o.b)("inlineCode",{parentName:"p"},"subscription")," which works on a high level as follows:\nIf a customer wants to use a service, a subscription is created linking the customer account and the one account hosting the service.\nIn the following the term ",Object(o.b)("inlineCode",{parentName:"p"},"subscriber account")," will be used for the accounts using a service and ",Object(o.b)("inlineCode",{parentName:"p"},"provider account")," for the one hosting it."),Object(o.b)("p",null,"After this little definition detour, let's go back to the destination service and the SDK.\nFor simplicity an optional argument of the destination lookup has been neglected in the beginning:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),".execute({destinationName: 'myDestination', jwt: 'yourJWT'})\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"jwt")," argument takes the JSON web token (JWT) issued by an XSUAA as input.\nThis token contains a field ",Object(o.b)("inlineCode",{parentName:"p"},"zid")," holding the tenant id which will be used in the lookup process.\nThe lookup process done by the SDK involves the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Request an access token for the destination service and a given tenant id from the XSUAA. "),Object(o.b)("li",{parentName:"ul"},"Due to the subscription between provider and subscriber, the XSUAA is allowed to issue the token."),Object(o.b)("li",{parentName:"ul"},"The token allows for calling the destination service on behalf of the given tenant.\nThe tenant and service information are encoded in the access token."),Object(o.b)("li",{parentName:"ul"},"Make a call to the destination service using the obtained access token."),Object(o.b)("li",{parentName:"ul"},"The destination maintained in the given tenant are returned.")),Object(o.b)("p",null,"If no token is given or the destination is not found in the subscriber account the provider account is used as a fallback.\nIn order to control this fallback behaviour a selection strategy can be passed to the destination lookup:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),".execute({destinationName: 'myDestination', jwt: 'yourJWT'},{selectionStrategy:'alwaysSubscriber'})\n")),Object(o.b)("p",null,"There are three selection strategies defined in the SDK: ",Object(o.b)("inlineCode",{parentName:"p"},"alwaysSubscriber"),", ",Object(o.b)("inlineCode",{parentName:"p"},"alwaysProvider")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategy can be passed as an optional argument to the ",Object(o.b)("inlineCode",{parentName:"p"},".execute()")," method.\nThe default value is ",Object(o.b)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategies can be used to control for which account a destination lookup is attempted:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"alwaysSubscriber: Only try to get destinations from the subscriber account.\nA valid JWT is mandatory to receive something."),Object(o.b)("li",{parentName:"ul"},"alwaysProvider: Only try to get destination from the provider account.\nA JWT is not needed.\nEven if you present a subscriber JWT the provider destination will be returned if present."),Object(o.b)("li",{parentName:"ul"},"subscriberFirst: Tries to get from the subscriber first using the JWT.\nIf no valid JWT is provided or the destination is not found it tries the provider as described for alwaysProvider.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"One aspect has been left out for simplicity.\nIn principle it is possible to define destinations not only on the account level but also on the destination service level.\nThese destinations are called ",Object(o.b)("inlineCode",{parentName:"p"},"instance destinations")," since they are tied to an service binding called instance on SCP.\nIn every request these destinations are added to the destinations returned by the destination service."))))}d.isMDXComponent=!0}}]);