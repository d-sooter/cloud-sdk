(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{108:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return r})),n.d(a,"rightToc",(function(){return d})),n.d(a,"default",(function(){return u}));var t=n(2),o=n(6),i=(n(0),n(151)),l={id:"sap-cloud-sdk-linux-how-to",title:"Getting started on Linux",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Cloud SDK on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},r={unversionedId:"java/guides/sap-cloud-sdk-linux-how-to",id:"java/guides/sap-cloud-sdk-linux-how-to",isDocsHomePage:!1,title:"Getting started on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",source:"@site/docs/java/guides/linux-how-to.md",slug:"/java/guides/sap-cloud-sdk-linux-how-to",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/guides/linux-how-to.md",version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1590437078,sidebar_label:"SAP Cloud SDK on Linux",sidebar:"someSidebar",previous:{title:"Tutorials for the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"},next:{title:"Video tutorial: Getting started with the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloudsdk-for-java"}},d=[{value:"Get SAP Cloud SDK development environment for Java on Linux (Debian based distribution)",id:"get-sap-cloud-sdk-development-environment-for-java-on-linux-debian-based-distribution",children:[]},{value:"Required knowledge",id:"required-knowledge",children:[]},{value:"Let&#39;s install dependencies",id:"lets-install-dependencies",children:[{value:"Installing JDK and Maven",id:"installing-jdk-and-maven",children:[]},{value:"Use maven to build and deploy your App",id:"use-maven-to-build-and-deploy-your-app",children:[]},{value:"Cloud Foundry Command Line Interface (CLI)",id:"cloud-foundry-command-line-interface-cli",children:[]},{value:"Installing IntelliJ Idea IDE",id:"installing-intellij-idea-ide",children:[]}]},{value:"Initialize and build your App",id:"initialize-and-build-your-app",children:[{value:"To initialize your SAP Cloud SDK App from the maven archetype",id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype",children:[]},{value:"Building your App",id:"building-your-app",children:[]},{value:"Bind your CLI to SAP Cloud Foundry",id:"bind-your-cli-to-sap-cloud-foundry",children:[]},{value:"Deploying your App",id:"deploying-your-app",children:[]}]}],c={rightToc:d};function u(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"get-sap-cloud-sdk-development-environment-for-java-on-linux-debian-based-distribution"},"Get SAP Cloud SDK development environment for Java on Linux (Debian based distribution)"),Object(i.b)("p",null,"This tutorial will guide you through getting your SAP Cloud SDK development environment up and running on Linux. All the\nsteps were verified on Ubuntu 18.04 and should be in compliance with other Debian based distributions."),Object(i.b)("h2",{id:"required-knowledge"},"Required knowledge"),Object(i.b)("p",null,"No initial knowledge is required."),Object(i.b)("h2",{id:"lets-install-dependencies"},"Let's install dependencies"),Object(i.b)("h3",{id:"installing-jdk-and-maven"},"Installing JDK and Maven"),Object(i.b)("p",null,"SAP Cloud SDK supports Java 8 and Java 11"),Object(i.b)("p",null,"I'll base this example on Java 8"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install openjdk-8-jdk\n")),Object(i.b)("p",null,"Updating alternatives to make sure right version of Java is used"),Object(i.b)("p",null,"Your distribution might have a different version of Java installed by default. You can check you Java version by\nrunning:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"java -version\n")),Object(i.b)("p",null,"As you can see bellow, my laptop has Java 11 as default."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"openjdk 11.0.5 2019-10-15\nOpenJDK Runtime Environment (build 11.0.5+10-post-Ubuntu-0ubuntu1.1)\nOpenJDK 64-Bit Server VM (build 11.0.5+10-post-Ubuntu-0ubuntu1.1, mixed mode)\n")),Object(i.b)("p",null,"Check what Java versions you have on you machine with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"update-java-alternatives --list\n")),Object(i.b)("p",null,"After installing OpenJDK 8 you should now have both Java 8 and Java 11"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64\njava-1.8.0-openjdk-amd64       1081       /usr/lib/jvm/java-1.8.0-openjdk-amd64\n")),Object(i.b)("p",null,"To switch between Java versions run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo update-alternatives --config java\n")),Object(i.b)("p",null,"In my case I have to press ",Object(i.b)("strong",{parentName:"p"},"2")," to make Java 8 default"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"Selection    Path                                            Priority   Status\n------------------------------------------------------------\n0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      auto mode\n*1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      manual mode\n2            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode\nPress <enter> to keep the current choice[*], or type selection number:\n")),Object(i.b)("p",null,"Check Java version again. Mind, ",Object(i.b)("inlineCode",{parentName:"p"},"version")," parameter has just one hyphen for Java 8 CLI"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"java -version\n")),Object(i.b)("p",null,"You have now switched to Java 8"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'openjdk version "1.8.0_232"\nOpenJDK Runtime Environment (build 1.8.0_232-8u232-b09-0ubuntu1.1-b09)\nOpenJDK 64-Bit Server VM (build 25.232-b09, mixed mode)\n')),Object(i.b)("h3",{id:"use-maven-to-build-and-deploy-your-app"},"Use ",Object(i.b)("a",Object(t.a)({parentName:"h3"},{href:"https://maven.apache.org/"}),"maven")," to build and deploy your App"),Object(i.b)("p",null,"Install maven with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install maven\n")),Object(i.b)("p",null,"To check if ",Object(i.b)("inlineCode",{parentName:"p"},"maven")," is installed correctly run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mvn --version\n")),Object(i.b)("p",null,"You'll see the maven version and build details"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'Apache Maven 3.6.1\nMaven home: /usr/share/maven\nJava version: 1.8.0_232, vendor: Private Build, runtime: /usr/lib/jvm/java-8-openjdk-amd64/jre\nDefault locale: en_US, platform encoding: ANSI_X3.4-1968\nOS name: "linux", version: "5.3.0-26-generic", arch: "amd64", family: "unix"\n')),Object(i.b)("p",null,"To find out more about Apache Maven, how to get it for your Linux distribution and detailed tutorials ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://maven.apache.org/"}),"follow the\nofficial maven documentation"),"."),Object(i.b)("h3",{id:"cloud-foundry-command-line-interface-cli"},"Cloud Foundry Command Line Interface (CLI)"),Object(i.b)("p",null,"To deploy your App developed with SAP Cloud SDK to ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.sap.com/products/cloud-platform.html"}),"SAP Cloud Platform"),"\nyou'll need Cloud Foundry CLI. You can download latest release of DEB package ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli/releases"}),"from official CF GitHub\nrepository")," or follow\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"}),"instructions")," to install it with you package\nmanager: apt-get, yum and homebrew are supported."),Object(i.b)("p",null,"After installing the CLI you might need to reload you shell before it becomes available. To check if it works run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cf\n")),Object(i.b)("h3",{id:"installing-intellij-idea-ide"},"Installing IntelliJ Idea IDE"),Object(i.b)("p",null,"For best developer experience we recommend getting community version of ",Object(i.b)("strong",{parentName:"p"},"IntelliJ Idea"),". Download gzip archive from the\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.jetbrains.com/idea/download/#section=linux"}),"official site")," and follow installation instructions for you\nsystem."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Another supported IDE is ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.eclipse.org/ide/"}),"Eclipse"),"."))),Object(i.b)("h2",{id:"initialize-and-build-your-app"},"Initialize and build your App"),Object(i.b)("h3",{id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype"},"To initialize your SAP Cloud SDK App from the maven archetype"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mvn archetype:generate -DarchetypeGroupId=com.sap.cloud.sdk.archetypes -DarchetypeArtifactId=scp-cf-tomee -DarchetypeVersion=RELEASE\n")),Object(i.b)("p",null,"The snippet above will create a Tomee App, you can also use archetype for Spring Boot."),Object(i.b)("h3",{id:"building-your-app"},"Building your App"),Object(i.b)("p",null,"Change directory to the root of the App you've just created"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cd /<app-root-directory>\n")),Object(i.b)("p",null,"To build your APP run"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean package\n")),Object(i.b)("p",null,"After a successful build you'll find a ",Object(i.b)("inlineCode",{parentName:"p"},"target")," folder within you App's root folder containing a ",Object(i.b)("inlineCode",{parentName:"p"},"war")," file\nalong with other build artifacts. This ",Object(i.b)("inlineCode",{parentName:"p"},"war")," file is a packaged version of your web-app that's going to be deployed to the\nSAP Cloud Foundry environment."),Object(i.b)("h3",{id:"bind-your-cli-to-sap-cloud-foundry"},"Bind your CLI to SAP Cloud Foundry"),Object(i.b)("p",null,"Let's associate you Cloud Foundry (CF) CLI to your SAP account by providing an API endpoint and logging in with your\naccount."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Select endpoint depending on your region:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Europe ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://api.cf.eu10.hana.ondemand.com"}),"https://api.cf.eu10.hana.ondemand.com")),Object(i.b)("li",{parentName:"ul"},"US East: ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://api.cf.us10.hana.ondemand.com"}),"https://api.cf.us10.hana.ondemand.com")),Object(i.b)("li",{parentName:"ul"},"US CENTRAL: ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://api.cf.us20.hana.ondemand.com"}),"https://api.cf.us20.hana.ondemand.com"))),Object(i.b)("p",null,"To use a snippet for Europe run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    cf api https://api.cf.eu10.hana.ondemand.com\n")),Object(i.b)("p",null,"Provide your credential for SAP Cloud Foundry by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cf login\n")),Object(i.b)("h3",{id:"deploying-your-app"},"Deploying your App"),Object(i.b)("p",null,"To deploy your app run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cf push\n")),Object(i.b)("p",null,"After a successful deployment you'll see a status of just pushed App:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'Waiting for app to start...\nname:                test-app\nrequested state:     started\nisolation segment:   trial\nroutes:              test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com\nlast uploaded:       Sun 12 Jan 14:29:02 CET 2020\nstack:               cflinuxfs3\nbuildpacks:          sap_java_buildpack\ntype:            web\ninstances:       1/1\nmemory usage:    1024M\nstart command:   JRE_HOME="META-INF/.sap_java_buildpack/sapjvm" JBP_CONFIG_SAPJVM_MEMORY_STACK_THREADS="250" JBP_CLASSPATH="" JBP_CONFIG_SAPJVM_MEMORY_CLASS_COUNT="" JAVA_HOME="META-INF/.sap_java_buildpack/sapjvm"\nJBP_CONFIG_SAPJVM_MEMORY_HEADROOM="0" CATALINA_HOME="META-INF/.sap_java_buildpack/tomee7" JAVA_OPTS=" -Djava.io.tmpdir=$TMPDIR -Dhttp.port=$PORT -Daccess.logging.enabled=false\n-Dlogback.configurationFile=file:META-INF/.sap_java_buildpack/tomee7/conf/logback.xml -DSAPJVM_EXTENSION_COMMAND_HANDLER=com.sap.xs2rt.dropletaddon.JvmExtensionCommandHandler\n-Djava.protocol.handler.pkgs=com.sap.xs.statistics.stream.handling.protocols -agentpath:/app/META-INF/.sap_java_buildpack/jvm_kill/jvmkill-1.12.0.RELEASE-trusty.so=printHeapHistogram=1 -Dsun.net.inetaddr.ttl=0\n-Dsun.net.inetaddr.negative.ttl=0" ./META-INF/.sap_java_buildpack/tomee7/bin/catalina.sh run\nstate     since                  cpu     memory         disk           details\n#0   running   2020-01-12T13:30:29Z   69.0%   446.2M of 1G   191.1M of 1G\n')),Object(i.b)("p",null,"To verify your deployment take a ",Object(i.b)("inlineCode",{parentName:"p"},"URL")," indicated in ",Object(i.b)("inlineCode",{parentName:"p"},"routes")," section from deployment output above. Put it into your\nbrowser and add ",Object(i.b)("inlineCode",{parentName:"p"},"/hello")," at the end. It should look similar to: ",Object(i.b)("inlineCode",{parentName:"p"},"https://test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com/hello")))}u.isMDXComponent=!0},151:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var t=n(0),o=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var a=o.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=u(e.components);return o.a.createElement(c.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},b=o.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(n),b=t,m=p["".concat(l,".").concat(b)]||p[b]||s[b]||i;return n?o.a.createElement(m,r(r({ref:a},c),{},{components:n})):o.a.createElement(m,r({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=b;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);