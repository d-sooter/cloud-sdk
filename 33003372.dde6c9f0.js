(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),i=(n(0),n(211)),a={id:"getting-started",title:"SAP Cloud SDK for Continuous Delivery",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Continuous integration and delivery are pillars for contemporary application development.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","jenkins","continuous integration","continuous delivery",'project "Piper"'],image:null},c={id:"devops/getting-started",title:"SAP Cloud SDK for Continuous Delivery",description:"Continuous integration and delivery are pillars for contemporary application development.",source:"@site/docs/devops/getting-started.md",permalink:"/cloud-sdk/docs/devops/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/devops/getting-started.md",lastUpdatedBy:"Florian Wilhelm",lastUpdatedAt:1590422470,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Destinations in the Cloud SDK for JS",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"},next:{title:"Community calls 2020",permalink:"/cloud-sdk/docs/community-calls/community-calls-2020"}},s=[{value:"Best DevOps practices at SAP",id:"best-devops-practices-at-sap",children:[{value:"SAP Cloud SDK for Continuous Delivery",id:"sap-cloud-sdk-for-continuous-delivery",children:[]},{value:"Project &quot;Piper&quot;",id:"project-piper",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"best-devops-practices-at-sap"},"Best DevOps practices at SAP"),Object(i.b)("p",null,'Continuous delivery is a method to develop software with short feedback cycles.\nIt is applicable to projects both for SAP Cloud Platform and SAP on-premise platforms.\nSAP implements tooling for continuous delivery in project "Piper".\nThe goal of project "Piper" is to substantially ease setting up continuous delivery in your project using SAP technologies.'),Object(i.b)("h3",{id:"sap-cloud-sdk-for-continuous-delivery"},"SAP Cloud SDK for Continuous Delivery"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-s4-sdk-pipeline"}),"SAP Cloud SDK for Continuous Delivery"),' is open source and free to use.\nThis ready-made pipeline is part of project "Piper" and allows you to start with continuous delivery without writing any pipeline code -- only declarative configuration is required.\nIt helps you to quickly deliver high quality applications to SAP Cloud Platform.'),Object(i.b)("p",null,"Check out the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library/pipelines/cloud-sdk/introduction/"}),"documentation of SAP Cloud SDK for Continuous Delivery")," for more details and usage hints."),Object(i.b)("h3",{id:"project-piper"},'Project "Piper"'),Object(i.b)("p",null,"For more information on continuous integration and continuous delivery (CI/CD) in the SAP ecosytem, please refer to the documentation of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library"}),'project "Piper"'),"."))}u.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);