(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),i=(n(0),n(183)),r=n(194),l={id:"scp-workflow-rest-api",title:"Typesafe client for SAP Cloud Platform Workflow REST API",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SCP Workflow API",description:"Learn how to access the SCP Workflow REST API with the typesafe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","workflow"]},c={unversionedId:"java/features/rest/clients/scp-workflow-rest-api",id:"java/features/rest/clients/scp-workflow-rest-api",isDocsHomePage:!1,title:"Typesafe client for SAP Cloud Platform Workflow REST API",description:"Learn how to access the SCP Workflow REST API with the typesafe client from the SAP Cloud SDK for Java",source:"@site/docs/java/features/rest/clients/scp-workflow-rest-api.mdx",slug:"/java/features/rest/clients/scp-workflow-rest-api",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/rest/clients/scp-workflow-rest-api.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"SCP Workflow API",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"},next:{title:"Call a BAPI/RFC Module with SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/bapi-and-rfc/bapi-and-rfc-overview"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Example Use Case for this guide",id:"example-use-case-for-this-guide",children:[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Consume the SCP Workflow REST API",id:"consume-the-scp-workflow-rest-api",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Cloud Foundry configuration",id:"cloud-foundry-configuration",children:[]},{value:"Develop your App",id:"develop-your-app",children:[]},{value:"Invoke the Java Client Library",id:"invoke-the-java-client-library",children:[]}]},{value:"Capabilities and limitations",id:"capabilities-and-limitations",children:[{value:"Capabilities and benefits",id:"capabilities-and-benefits",children:[]},{value:"Known Limitations",id:"known-limitations",children:[]}]},{value:"Video tutorial",id:"video-tutorial",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{mdxType:"MvnBadge"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US"}),"SAP Cloud Platform (SCP) Workflow service")," is available on the Cloud Foundry environment ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blogs.sap.com/2019/04/03/workflow-and-business-rules-now-available-in-cloud-foundry-environment-of-sap-cloud-platform/"}),"since April 2019"),". It helps you build, run and manage workflows to model processes that span from simple approval steps to complex business scenarios with several involved parties."),Object(i.b)("p",null,"Imagine a business scenario involving multiple parties, complex validation logic, and parallel execution flows. ",Object(i.b)("strong",{parentName:"p"},"SCP Workflow service")," solves exactly this problem. To benefit from features offered by REST API of the SCP Workflow service you can leverage type-safe client library provided by ",Object(i.b)("strong",{parentName:"p"},"SAP Cloud SDK")," and discover it via your IDE or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/df943e71122448caaf3c49f5ffd80627.html"}),"manually integrate it into your application"),"."),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blogs.sap.com/2018/01/09/sap-cloud-platform-workflow-developer-center/"}),"this blog post")," for an overview of all resources about the SCP Workflow Service."),Object(i.b)("h2",{id:"example-use-case-for-this-guide"},"Example Use Case for this guide"),Object(i.b)("h3",{id:"problem"},"Problem"),Object(i.b)("p",null,"We need to model a business workflow involving multiple parties, complex validation logic, and parallel flows execution together with other business logic in your App hosted on the SAP Cloud Platform."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("p",null,"Use SAP Cloud Platform Workflow service and its REST API. You can do workflows modeling using a convenient visual editor and call SCP Workflow REST API via type-safe client library module provided by SAP Cloud SDK for Java. Additionally, you'll get other benefits off SAP Cloud SDK like destinations and authentication handling, complete type-safety, multi-tenancy, easy resilience, and caching configuration."),Object(i.b)("h2",{id:"consume-the-scp-workflow-rest-api"},"Consume the SCP Workflow REST API"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Add the latest version of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"SAP Cloud SDK")," to your Java application dependencies or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../getting-started"}),"generate a new one from archetypes that we provide"),"."),Object(i.b)("p",null,"After we have an SAP Cloud SDK-based Java App, we can invoke the SCP Workflow REST API in our business logic. More specifically, we are interested in retrieving a list of all workflow definitions that exist in the connected SCP Workflow service instance which corresponds to the API endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"/v1/workflow-definitions"),". You can find it under the section ",Object(i.b)("inlineCode",{parentName:"p"},"Workflow Definitions")," on the left-hand side of your CF cockpit."),Object(i.b)("h3",{id:"cloud-foundry-configuration"},"Cloud Foundry configuration"),Object(i.b)("p",null,"Let's look in detail at all necessary steps of Cloud Foundry configuration to run this scenario."),Object(i.b)("h4",{id:"bind-app-to-scp-workflow-service-instance"},"Bind App to SCP Workflow Service instance"),Object(i.b)("p",null,"Refer to the documentation on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/e8d88dd056f14c75af59e68d6b20345f.html"}),"help.sap.com")," for the full picture. We'll outline essentials with the assumption that you understand or have all of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Which Cloud Foundry subaccount and space you want to use"),Object(i.b)("li",{parentName:"ul"},"You have access to the SCP Workflow Service feature"),Object(i.b)("li",{parentName:"ul"},"You possess all necessary authorizations on Cloud Foundry"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../../guides/cf-cli"}),"You have installed the Cloud Foundry Command Line Interface (CLI) on your machine"),".")),Object(i.b)("h5",{id:"identifying-necessary-oauth-scopes"},"Identifying necessary OAuth Scopes"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The SCP Workflow REST API is protected and requires authenticating with an OAuth 2.0 access token. Each particular API endpoint requires the client to provide an access token valid for the respective endpoint. The token must be issued for the respective OAuth scope that corresponds to the desired API endpoint."))),Object(i.b)("p",null,"Let's figure out which OAuth scope is relevant for our application. For that, we have to check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource"}),"SCP Workflow API documentation")," to find out that the endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"/v1/workflow-definitions")," is assigned to the scope ",Object(i.b)("inlineCode",{parentName:"p"},"WORKFLOW_DEFINITION_GET"),"."),Object(i.b)("h5",{id:"create-service-instance-configuration"},"Create Service Instance Configuration"),Object(i.b)("p",null,"Open a text editor and create a JSON file with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "authorities": ["WORKFLOW_DEFINITION_GET"]\n}\n')),Object(i.b)("p",null,"Remember where you've saved the file, you'll need it later."),Object(i.b)("h5",{id:"create-service-instance"},"Create service instance"),Object(i.b)("p",null,"Open the command line and authenticate at your Cloud Foundry organization by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"cf login"),"."),Object(i.b)("p",null,"Consider specifying the respective ",Object(i.b)("strong",{parentName:"p"},"subaccount"),", ",Object(i.b)("strong",{parentName:"p"},"organization"),", and ",Object(i.b)("strong",{parentName:"p"},"space")," with ",Object(i.b)("inlineCode",{parentName:"p"},"cf target")," if necessary."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to navigate to the directory that contains ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," configuration file we created before and run the following to create the service instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf create-service workflow standard my-workflow-service -c <path-to-json-file>\n")),Object(i.b)("p",null,'This command creates an instance of the SCP Workflow Service in the CF space that your CLI points to. More specifically, it uses the service plan "standard" and takes the ',Object(i.b)("inlineCode",{parentName:"p"},"JSON")," configuration into account. Note that we named the service instance ",Object(i.b)("inlineCode",{parentName:"p"},"my-workflow"),". If you have chosen a different name, please, remember the name as you'll need it for your deployment descriptor ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," later on."),Object(i.b)("p",null,"Once the service instance creation is finished, you can see the service instance in your CF space under ",Object(i.b)("inlineCode",{parentName:"p"},"Services")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Service Instances")," in the left-hand side menu."),Object(i.b)("h5",{id:"bind-your-app-to-service-instance"},"Bind your App to Service Instance"),Object(i.b)("p",null,"Open the file ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," in your project and mention your service instance under ",Object(i.b)("inlineCode",{parentName:"p"},"services")," as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"applications:\n- name: awesome-app\n  memory: 1024M\n  timeout: 600\n  random-route: false\n  path: application/target/awesome-app-application.war\n  buildpacks:\n  - sap_java_buildpack\n  env:\n    TARGET_RUNTIME: tomee7\n    SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n    JBP_CONFIG_SAPJVM_MEMORY_SIZES: metaspace:128m..\n  services:\n  - my-destination\n  - my-workflow\n  routes:\n  - route: <omitted-on-purpose>\n")),Object(i.b)("p",null,"Now, redeploy your app with ",Object(i.b)("inlineCode",{parentName:"p"},"cf push"),"."),Object(i.b)("h5",{id:"take-note-of-api-endpoint-and-oauth-credentials"},"Take Note of API endpoint and OAuth Credentials"),Object(i.b)("p",null,"After app deployment has finished, go to your CF space and navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Services\\Service Instances"),". You should see the service instance you created along with the information that is bound to your application."),Object(i.b)("p",null,"Click on the service instance name, for instance ",Object(i.b)("inlineCode",{parentName:"p"},"my-workflow"),", in the upcoming screen you should see the headline ",Object(i.b)("inlineCode",{parentName:"p"},"Service Instance: my-workflow - Referencing Apps"),". Make sure that the entry belongs to your app is selected in the table below, given that multiple apps are bound to the same service instance."),Object(i.b)("p",null,"Consider the ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," content below the table. For your convenience, we recommend copying that ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," to a text editor. Here is a quick example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "endpoints": {\n        "workflow_odata_url": "foo",\n        "workflow_rest_url": "bar"\n    },\n    "html5-apps-repo": {\n        "app_host_id": "foo"\n    },\n    "uaa": {\n        "uaadomain": "bar",\n        "tenantmode": "dedicated",\n        "sburl": "bar",\n        "clientid": "foo",\n        "verificationkey": "bar",\n        "apiurl": "foo",\n        "xsappname": "bar",\n        "identityzone": "foo",\n        "identityzoneid": "bar",\n        "clientsecret": "foo",\n        "tenantid": "bar",\n        "url": "foo"\n    },\n    "sap.cloud.service": "com.sap.bpm.workflow",\n    "saasregistryappname": "workflow",\n    "content_endpoint": "foo"\n}\n')),Object(i.b)("p",null,"Next look carefully at the ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," content and collect the values for the following ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"workflow_rest_url")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clientid")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clientsecret"))),Object(i.b)("p",null,"You'll need these values in the next step."),Object(i.b)("h4",{id:"create-http-destination"},"Create HTTP Destination"),Object(i.b)("p",null,"Go to your CF subaccount, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Connectivity\\Destinations")," in the left-hand side menu, and create a new HTTP destination with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: Workflow-Api"),Object(i.b)("li",{parentName:"ul"},"Type: HTTP"),Object(i.b)("li",{parentName:"ul"},"URL: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"workflow_rest_url")),Object(i.b)("li",{parentName:"ul"},"Proxy Type: Internet"),Object(i.b)("li",{parentName:"ul"},"Authentication: OAuth2ClientCredentials"),Object(i.b)("li",{parentName:"ul"},"Client ID: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"clientid")),Object(i.b)("li",{parentName:"ul"},"Client Secret: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"clientsecret")),Object(i.b)("li",{parentName:"ul"},"Token Service URL: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"url")," appended by ",Object(i.b)("inlineCode",{parentName:"li"},"/oauth/token?grant_type=client_credentials"))),Object(i.b)("p",null,"Click save. Restart your app by navigating to ",Object(i.b)("inlineCode",{parentName:"p"},"Spaces\\<you-space-name>\\Applications"),". Chose your App from the list by clicking on the link with its name and find restart button on the page that loads."),Object(i.b)("h3",{id:"develop-your-app"},"Develop your App"),Object(i.b)("h4",{id:"dependency-assumptions"},"Dependency assumptions"),Object(i.b)("p",null,"We assume that you have a Java project using the SAP Cloud SDK. If not, we recommend going ahead and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/docs/java/getting-started"}),"creating one from one of the Maven archetypes"),". You should also have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/download.cgi"}),"Apache Maven")," installed and be able to successfully run ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean install")," from the root of your project."),Object(i.b)("p",null,"Make sure that you have the SAP Cloud SDK Bill-of-Material (BOM) in your ",Object(i.b)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," structure like on the example below."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Always use the latest version of SAP Cloud SDK")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Current version is: ",Object(i.b)(r.a,{mdxType:"MvnBadge"})))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'}),"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.sap.cloud.sdk</groupId>\n      <artifactId>sdk-bom</artifactId>\n      \x3c!-- WF API is supported in ver 3.19.1 of the SDK and above. Please, always use the latest version --\x3e\n      <version>3.XX.X</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),Object(i.b)("h4",{id:"add-scp-workflow-library-dependency-to-your-project"},"Add SCP Workflow library dependency to your project"),Object(i.b)("p",null,"You can refer to the Java client library for the SCP Workflow service with the following Maven dependency:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'}),"<dependency>\n    <groupId>com.sap.cloud.sdk.services</groupId>\n    <artifactId>scp-workflow-cf</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"After adding the dependency to your ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," file run ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean install")," to let ",Object(i.b)("inlineCode",{parentName:"p"},"Maven")," install it."),Object(i.b)("h3",{id:"invoke-the-java-client-library"},"Invoke the Java Client Library"),Object(i.b)("p",null,"The name of the HTTP destination that we configured in the SCP cockpit is ",Object(i.b)("inlineCode",{parentName:"p"},"Workflow-API"),". Let's create a Java representation of this destination."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'final String destinationName = "Workflow-Api";\nfinal HttpDestination httpDestination = DestinationAccessor.getDestination(destinationName).asHttp();\n')),Object(i.b)("p",null,"Now we can make the first call to SCP Workflow API by invoking the method to get the list of all existing workflow definitions. For that, we pass the HTTP destination as an argument to the constructor of the API class."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final List<WorkflowDefinition> workflowDefinitions =\n        new WorkflowDefinitionsApi(httpDestination).queryDefinitions();\n")),Object(i.b)("p",null,"This is how we call the SCP Workflow REST API in a type-safe manner and benefit from type-safe access to the resulting response objects. For instance, we can read particular details about each workflow definition. We'll log them for demonstration purposes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"workflowDefinitions.forEach(workflowDefinition -> {\n    log.info(workflowDefinition.getName());\n    log.info(workflowDefinition.getVersion());\n    log.info(workflowDefinition.getCreatedAt().toString());\n});\n")),Object(i.b)("p",null,"Another benefit is that the SCP Workflow API library allows us to inspect all jobs related to a particular workflow definition together with many other properties. You can check the SCP Workflow API's model definition on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.sap.com/package/SAPCPWorkflowAPIs?section=Artifacts"}),"SAP API Hub")," or simply use your IDE to discover available properties via its auto-complete function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final WorkflowDefinition workflowDefinition = workflowDefinitions.get(0);\nworkflowDefinition.getJobs().forEach(job -> {\n    log.info(job.getId());\n    log.info(job.getPurpose().toString());\n});\n")),Object(i.b)("h2",{id:"capabilities-and-limitations"},"Capabilities and limitations"),Object(i.b)("h3",{id:"capabilities-and-benefits"},"Capabilities and benefits"),Object(i.b)("p",null,"The Java client library for SCP Workflow enables the developer to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"invoke the REST API in a type-safe and convenient manner"),Object(i.b)("li",{parentName:"ul"},"provides Java abstractions for all REST API endpoints along with the respective model classes"),Object(i.b)("li",{parentName:"ul"},"relieves the developer from all the ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP-related")," development work like interpreting ",Object(i.b)("inlineCode",{parentName:"li"},"status codes"),", ",Object(i.b)("inlineCode",{parentName:"li"},"JSON de-/serialization"),", etc"),Object(i.b)("li",{parentName:"ul"},"it lets the developer focus on the business logic instead of coding low-level API calls"),Object(i.b)("li",{parentName:"ul"},"we keep the library up to date with the latest Workflow API specification which simplifies maintainability of your App's code"),Object(i.b)("li",{parentName:"ul"},"we integrate the SCP Workflow library with other valuable SAP Cloud SDK capabilities, such as the tenant-aware destination retrieval and many more")),Object(i.b)("h3",{id:"known-limitations"},"Known Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The library is currently released as Beta. We'll communicate in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../../release-notes-sap-cloud-sdk-for-java"}),"release notes")," about production General Availability release."),Object(i.b)("li",{parentName:"ul"},"We support SCP Workflow API only on SCP Cloud Foundry. The SCP Neo landscape in ",Object(i.b)("strong",{parentName:"li"},"Not supported!")),Object(i.b)("li",{parentName:"ul"},"In the current state, it is required to create a destination manually instead of letting the library resolve it for you via VCAP_SERVICES binding available on SCP Cloud Foundry.")),Object(i.b)("h2",{id:"video-tutorial"},"Video tutorial"),Object(i.b)("p",null,"This video tutorial by the developer advocate team of SAP Cloud Platform will help you get up to speed with SAP Cloud SDK for Java and Workflow API in 60 minutes."),Object(i.b)("div",{class:"sdk-video-container"},Object(i.b)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/ug2UcXK2lH4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}d.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.align;return o.a.createElement("span",{className:t?"col text--right":""},o.a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},o.a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);