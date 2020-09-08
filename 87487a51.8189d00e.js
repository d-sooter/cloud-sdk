(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(151)),c=a(163),i=a(160),l=a(161),p={id:"getting-started",title:"Getting started - SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},s={unversionedId:"java/getting-started",id:"java/getting-started",isDocsHomePage:!1,title:"Getting started - SDK for Java",description:"Get up to speed with SAP Cloud SDK for Java in no time",source:"@site/docs/java/getting-started.md",slug:"/java/getting-started",permalink:"/cloud-sdk/docs/java/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/getting-started.md",version:"current",lastUpdatedBy:"Nisheeth Agarwal",lastUpdatedAt:1597788645,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Introduction - SDK for Java",permalink:"/cloud-sdk/docs/java/introduction"},next:{title:"OData with the Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/odata/overview"}},u=[{value:"Generating a project from a maven Archetype",id:"generating-a-project-from-a-maven-archetype",children:[]},{value:"Integrate the Cloud SDK for Java into your Project",id:"integrate-the-cloud-sdk-for-java-into-your-project",children:[{value:"Framework integration",id:"framework-integration",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],d={rightToc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{mdxType:"MvnBadge"}),Object(o.b)("p",null,"To get started with the SAP Cloud SDK for Java you can either create a new project or integrate the SDK into your existing one.\nYou will need an installation of Java and Maven."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Java version compatibility")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The SDK itself is compatible with Java 8 and 11.\nOther Java versions may work as well depending on your setup but are not yet tested by us.\nNote that SAP Cloud Platform Cloud Foundry environment only supports Java 8 out of the box but can be configured to also run with Java 11.\nSAP Cloud Plattform Neo only supports Java 8."))),Object(o.b)("p",null,"To start of with a clean, new project you can select ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk.archetypes/archetypes-parent"}),"one of our archetypes")," and build upon it. Alternatively you can follow ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#integrate-the-cloud-sdk-for-java-into-your-project"}),"these instructions")," to integrate the SDK into your existing setup."),Object(o.b)("h2",{id:"generating-a-project-from-a-maven-archetype"},"Generating a project from a maven Archetype"),Object(o.b)(i.a,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},Object(o.b)("p",null,"The SDK provides archetypes based on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/"}),"Spring")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tomee.apache.org/"}),"TomEE"),", so select whatever suits you best."),Object(o.b)("p",null,"Run:"),Object(o.b)(l.a,{value:"spring",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" "-DarchetypeArtifactId=scp-cf-spring" "-DarchetypeVersion=RELEASE"\n'))),Object(o.b)(l.a,{value:"tomee",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" "-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')))),Object(o.b)("p",null,"Maven will ask you to provide the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"groupId")," - usually serves as your organization identifier, i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar.cloud.app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"artifactId")," - it's your application's name, i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"mydreamapp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"version")," - we recommend keeping ",Object(o.b)("inlineCode",{parentName:"li"},"1.0-SNAPSHOT")," if you're just starting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package")," - by default this equals to ",Object(o.b)("inlineCode",{parentName:"li"},"groupId"),". Change it only if you know what you're doing")),Object(o.b)("p",null,"After providing all the interactive values to the CLI it will generate your first Cloud SDK based application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> maven-archetype-plugin:3.1.2:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< maven-archetype-plugin:3.1.2:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- maven-archetype-plugin:3.1.2:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] ....\n[INFO] ....\nDefine value for property 'groupId': foo.bar.cloud.app\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\n[INFO] Using property: gitignore = .gitignore\n[INFO] Using property: skipUsageAnalytics = false\nConfirm properties configuration:\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\ngitignore: .gitignore\nskipUsageAnalytics: false\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-tomee:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: skipUsageAnalytics, Value: false\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Project created from Archetype in dir: /home/i531196/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  02:28 min\n[INFO] Finished at: 2020-04-19T19:25:33+02:00\n[INFO] ------------------------------------------------------------------------\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congratulations! You've just setup a brand new application with the SAP Cloud SDK for Java.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To change the Java version modify the ",Object(o.b)("inlineCode",{parentName:"p"},"<java.version>")," property in the root ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml"),"."))),Object(o.b)("h2",{id:"integrate-the-cloud-sdk-for-java-into-your-project"},"Integrate the Cloud SDK for Java into your Project"),Object(o.b)("p",null,"To get started include the ",Object(o.b)("em",{parentName:"p"},"SDK BOM")," in the ",Object(o.b)("em",{parentName:"p"},"dependency management")," of your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),Object(o.b)("p",null,"If your application is running on SAP Cloud Platform please also include either:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"or:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-neo</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"If you want to connect to an S/4HANA system via the OData protocol you should also add a dependency to the client library of the SDK:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-all</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Last but not least we recommend that you include the following plugin:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.sap.cloud.sdk.plugins</groupId>\n    <artifactId>usage-analytics-maven-plugin</artifactId>\n    <version>use-latest-version-here</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>usage-analytics</goal>\n            </goals>\n            <configuration>\n                <skipUsageAnalytics>false</skipUsageAnalytics>\n                <generateSalt>true</generateSalt>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"It sends ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://blogs.sap.com/2018/10/23/usage-analytics-s4sdk/"}),"anonymized usage data"))," such as the SDK version used and helps us with improving the SDK.\nFurthermore the plugin is capable of generating a report with useful information about the project setup.\nInvoking ",Object(o.b)("inlineCode",{parentName:"p"},"diagnosis-report")," will print out the SDK modules used and their version but also other information like the Java and Maven version.\nThis is helpful when you are facing an issue and are reaching out to us for help."),Object(o.b)("h3",{id:"framework-integration"},"Framework integration"),Object(o.b)("p",null,"In general, the Cloud SDK for Java integrates natively into the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/projects/spring-boot"}),"Spring Boot")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tomee.apache.org/"}),"TomEE")," frameworks."),Object(o.b)("p",null,"In particular the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}),"SDK provides listeners")," that can extract tenant and principal information from an incoming request. To ensure these listeners are present please configure your project accordingly."),Object(o.b)(i.a,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"spring",mdxType:"TabItem"},Object(o.b)("p",null,"For a Spring based project please ensure that the application is annotated to scan for components of the SDK:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@ComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n@ServletComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n')),Object(o.b)("p",null,"Check the logs on application startup to ensure the listeners got registered. Also please check ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mvnrepository.com/artifact/com.sap.cloud.sdk/sdk-bom/latest"}),"the Spring version")," declared in the SDK BOM doesn't clash with your version of Spring.")),Object(o.b)(l.a,{value:"tomee",mdxType:"TabItem"},Object(o.b)("p",null,"For a TomEE based project the filters should be registered automatically. They are part of the ",Object(o.b)("inlineCode",{parentName:"p"},"servlet")," module which comes into the dependency tree through ",Object(o.b)("inlineCode",{parentName:"p"},"scp-cf")," or ",Object(o.b)("inlineCode",{parentName:"p"},"scp-neo")," automatically. Check the logs on application startup to ensure the listeners are being registered."))),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"guides/recommended-ide"}),"Configure you IDE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"guides/cf-cli"}),"Get and bind SAP Cloud Foundry CLI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"}),"Check tutorials for Cloud SDK for Java")),Object(o.b)("li",{parentName:"ul"},"Check out key ",Object(o.b)("strong",{parentName:"li"},"Features")," and ",Object(o.b)("strong",{parentName:"li"},"Guides")," sections"),Object(o.b)("li",{parentName:"ul"},"Check our ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"release-notes-sap-cloud-sdk-for-java"}),"release notes")),Object(o.b)("li",{parentName:"ul"},"Check ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../overview/what-is-new"}),"what's new"))))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},156:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},158:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},159:function(e,t,a){"use strict";var n=a(0),r=a(158);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(159),c=a(156),i=a(47),l=a.n(i),p=37,s=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,u=e.values,d=e.groupId,b=Object(o.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,f=Object(n.useState)(i),O=f[0],h=f[1],j=Object(n.useState)(!1),v=j[0],y=j[1];if(null!=d){var N=m[d];null!=N&&N!==O&&u.some((function(e){return e.value===N}))&&h(N)}var I=function(e){h(e),null!=d&&g(d,e)},w=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},S=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",S)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),k(e)},onFocus:function(){return I(t)},onClick:function(){I(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.align;return r.a.createElement("span",{className:t?"col text--right":""},r.a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},r.a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);