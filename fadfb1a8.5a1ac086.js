(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(146)),i={id:"sap-currency-conversion-glossary",title:"Currency conversion glossary",sidebar_label:"Glossary",description:"Let's look at some terms and main concepts used in Currency Conversion library",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"java/features/extensions/extension-library/curconv/sap-currency-conversion-glossary",id:"java/features/extensions/extension-library/curconv/sap-currency-conversion-glossary",isDocsHomePage:!1,title:"Currency conversion glossary",description:"Let's look at some terms and main concepts used in Currency Conversion library",source:"@site/docs/java/features/extensions/extension-library/curconv/glossary.md",permalink:"/cloud-sdk/docs/java/features/extensions/extension-library/curconv/sap-currency-conversion-glossary",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/extensions/extension-library/curconv/glossary.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1598046351,sidebar_label:"Glossary"},c=[{value:"Data Adapter",id:"data-adapter",children:[]},{value:"Integration Objects",id:"integration-objects",children:[]},{value:"Direct Conversions",id:"direct-conversions",children:[]},{value:"Indirect Conversions By Using an Inverse Rate",id:"indirect-conversions-by-using-an-inverse-rate",children:[]},{value:"Indirect Conversions By Using a Reference Rate",id:"indirect-conversions-by-using-a-reference-rate",children:[]},{value:"Fixed Rate",id:"fixed-rate",children:[]},{value:"Non-Fixed Rate",id:"non-fixed-rate",children:[]},{value:"Default and Overwriting Tenant",id:"default-and-overwriting-tenant",children:[]},{value:"Default and Overwriting Tenant Setting",id:"default-and-overwriting-tenant-setting",children:[]},{value:"Big Decimal",id:"big-decimal",children:[]},{value:"Rounding Off",id:"rounding-off",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-adapter"},"Data Adapter"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"data adapter")," provides the conversion library with access to relevant exchange rates and configurations."),Object(o.b)("p",null,"You can either use a ",Object(o.b)("strong",{parentName:"p"},"default"),"  implementation of the data adapter or provide a custom one to connect to your exchange rates source and configurations."),Object(o.b)("p",null,"You can use data adapter to call the Conversion API. The conversion library calls a relevant data adapter methods to provide the information you need for conversion. If you use a ",Object(o.b)("strong",{parentName:"p"},"default")," implementation of the data adapter, the library can access the persisted data and use it to perform conversions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The default implementation is only available is used together with integration objects."))),Object(o.b)("h2",{id:"integration-objects"},"Integration Objects"),Object(o.b)("p",null,"Integration objects are reusable artifacts consisting of data models and applications (UIs) that send the required information to the library, and services that operate on the data models. These artifacts are shipped with Currency Conversion and can be used in addition to the library."),Object(o.b)("p",null,"As an application developer who gets currency exchange rates from your own data sources, you would typically have to create database artifacts that store your currency exchange rate information, and then create mechanisms to access these rates in your applications. The reusable artifacts shipped by Currency Conversion eliminate these steps and provide data models that can persist your currency exchange rates. You also get services that can perform create, update, and delete operations on these data models, out of the box. In addition to this, there are three application UIs you can use to perform the same tasks. The data models and services constitute the Currency Conversion integration objects."),Object(o.b)("p",null,"For more information, see Using the Manage Exchange RatesApplication, Using the Manage Default Configurations Application, and Using the Manage Exchange Rate Type Details Application."),Object(o.b)("h2",{id:"direct-conversions"},"Direct Conversions"),Object(o.b)("p",null,"Direct conversions happen between a source currency and a target currency, by using the exact, direct rate for the source to the target currency. If you opt for conversion by using a direct currency, a conversion request with USD as the source currency and EUR as the target currency is performed using only if the the exchange rate from USD to EUR is available. The conversion fails if this direct rate is not available to the library."),Object(o.b)("h2",{id:"indirect-conversions-by-using-an-inverse-rate"},"Indirect Conversions By Using an Inverse Rate"),Object(o.b)("p",null,"You can request for a conversion from INR to USD even if the rates available are from USD to INR. You (or your consumers) enable the inverse rates setting for each exchange rate type. You can then provide the rate type information by using the data adapter. Note that inverse rates are only used if no direct rates are available. For example, if you have enabled the inverse rate type for INR to USD and if a direct rate is available for this currency pair, it will still be given precedence over the inverse rate. If a direct rate from INR to USD is not found, the library looks for the USD to INR rate."),Object(o.b)("h2",{id:"indirect-conversions-by-using-a-reference-rate"},"Indirect Conversions By Using a Reference Rate"),Object(o.b)("p",null,"A currency conversion can be performed by using a reference or intermediate currency outside of your desired currency pair. A conversion from INR to USD can be performed by using a reference currency, say EUR, with the currency exchange rates for INR to EUR and USD to EUR. Note that this can be done only if a reference currency for these rates is specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"<toCurrency>")," field."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If a reference currency is provided, it takes precedence over direct rates. The conversion will be performed based on the reference currency specified. Inverse rates are not considered in this scenario."))),Object(o.b)("h2",{id:"fixed-rate"},"Fixed Rate"),Object(o.b)("p",null,"The exact exchange rate provided at run-time. The library uses the run-time rates to perform the conversion."),Object(o.b)("h2",{id:"non-fixed-rate"},"Non-Fixed Rate"),Object(o.b)("p",null,'A set of exchange rates you provide to the library. The library picks the "best rate" from the list and uses it to perform each conversion. You must implement the data adapter to enable the library to read the exchange rates from your data source.'),Object(o.b)("h2",{id:"default-and-overwriting-tenant"},"Default and Overwriting Tenant"),Object(o.b)("p",null,'By default, the conversion library operates in the context of the calling tenant, that is, the customer that uses your application to initiate a Currency Conversion call. This is a "default tenant". You can choose to override this tenant by using the TenantAccessor class to perform conversions for them.'),Object(o.b)("h2",{id:"default-and-overwriting-tenant-setting"},"Default and Overwriting Tenant Setting"),Object(o.b)("p",null,"By default, the conversion library works with the default tenant settings you provide as part of the data adapter implementation. These settings can include the default data provider and default data provider source for your application's consumers'. However, if your business case requires you to provide exchange rates to your consumers, instead of them providing their own rates, you can use the OverrideTenantSetting class to provide a different default provider and source while calling the conversion API."),Object(o.b)("p",null,"For more information, see Setting Up Tenant Context Detection in Initial Setup."),Object(o.b)("h2",{id:"big-decimal"},"Big Decimal"),Object(o.b)("p",null,'The library uses the Big DecimalInformation published on non-SAP site class, which allows you to control the precision and scale of your currency exchange rates. For direct conversions, the scale of the result is calculated by adding the scale of the amount and the exchange rate. For example, if you have two exchange rates: 13.74 and 1.32, the result would be 15.0600. For indirect conversions, the scales are added as well, with the rounding rule of "half upInformation published on non-SAP site" applied.'),Object(o.b)("p",null,"The library returns the converted amount both as a string and a big decimal. You can work with the big decimal object and specify a scale of your choice."),Object(o.b)("h2",{id:"rounding-off"},"Rounding Off"),Object(o.b)("p",null,"Rounded off values represent the usable currency amounts in relation to your business case. This means that the amounts are rounded off to a precision and value which makes sense in a business. The conversion library provides you with a rounded off amount that can be used in businesses."),Object(o.b)("p",null,"This is done by using an exponent value of the converted amount. An exponent represents the relationship between a major and minor currency unit. For example, 100 cents make one US Dollar (USD). An exponent value represents this relationship with a base of 10. So, in this example, the exponent of the US Dollar is 2. Similarly, exponents for all currencies are published by ISO and this information is also available in the CurrencyInformation published on non-SAP site class."),Object(o.b)("p",null,"This rounding off logic is applied to all conversion amounts."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The library provides both the unrounded and rounded-off amounts in the result set. You can choose which one to use, based on your use case."))))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,p=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return n?r.a.createElement(p,s(s({ref:t},d),{},{components:n})):r.a.createElement(p,s({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);