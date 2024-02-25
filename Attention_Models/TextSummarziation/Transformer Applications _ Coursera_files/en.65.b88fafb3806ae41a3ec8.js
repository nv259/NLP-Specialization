(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"/hAQ":function(module,t,e){"use strict";e.d(t,"d",(function(){return saveWorkspace})),e.d(t,"b",(function(){return getWorkspaceById})),e.d(t,"c",(function(){return getWorkspacesByImage})),e.d(t,"e",(function(){return startAsyncPublishWorkspace})),e.d(t,"a",(function(){return checkStatus}));var n=e("fw5G"),a=e.n(n),r=e("S+eF"),i=e.n(r),u=e("DnuM"),o=e("7t8k"),c=(e("i1xi"),Object(u.a)("/api/authoringWorkspaceTemplates.v1/",{type:"rest"})),s=(Object(u.a)("/api/authoringInstructorWorkspaces.v1/",{type:"rest"}),Object(u.a)("/api/workspacePublishStates.v1/",{type:"rest"})),d=["id","name","description","courseId","volumes","sharedWorkspace","entryPoints","publishedTemplate"].join(","),saveWorkspace=function(t){return t.id?function(t,e){var n=new a.a(t),r={name:e.name,description:e.description,mountPaths:Object(o.a)(e.mountPoints)};return i()(c.patch(n.toString(),{data:r})).then((function(t){return t.elements[0]}),(function(t){throw t&&t.responseJSON}))}(t.id,t):function(t){var e=new a.a,n={name:t.name,description:t.description,mountPaths:Object(o.a)(t.mountPoints),courseId:t.courseId,imageName:t.imageName};return i()(c.post(e.toString(),{data:n})).then((function(t){return t.elements[0]}),(function(t){throw t&&t.responseJSON}))}(t)},getWorkspaceById=function(t){var e=new a.a(t).addQueryParam("fields",d);return Promise.resolve(c.get(e.toString()).then((function(t){return t.elements[0]}),(function(t){throw t&&t.responseJSON})))},getWorkspacesByImage=function(t,e){var n=(new a.a).addQueryParam("q","byCourseAndImage").addQueryParam("courseId",t).addQueryParam("imageTag",e).addQueryParam("fields",d);return Promise.resolve(c.get(n.toString())).then((function(t){return t.elements}),(function(t){throw null==t?void 0:t.responseJSON}))},startAsyncPublishWorkspace=function(t,e){var n=(new a.a).addQueryParam("action","asyncPublish").addQueryParam("id",t);return i()(c.post(n.toString(),{data:e}))},checkStatus=function(t){var e=new a.a(t);return i()(s.get(e.toString()))}},"1YBB":function(module,exports){exports.default={"ar":true,"de":true,"el":true,"es":true,"fr":true,"hi":true,"hu":true,"id":true,"it":true,"ja":true,"kk":true,"ko":true,"nl":true,"pl":true,"pt":true,"ru":true,"sv":true,"th":true,"tr":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"3i0v":function(module,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return u})),e.d(t,"e",(function(){return o})),e.d(t,"d",(function(){return c})),e.d(t,"c",(function(){return s}));e("lSNA");var n=e("3tO9"),a=e.n(n),r=e("Q21/"),i=(e("YVeV"),{JUPYTER_NOTEBOOK:"JUPYTER_NOTEBOOK",VSCODE:"VSCODE",RSTUDIO:"RSTUDIO",LINUX:"LINUX",VIRTUAL_BROWSER:"VIRTUAL_BROWSER",CUSTOM:"CUSTOM"}),u=a()(a()({},r.b),{},{NONE:"NONE"}),o="360038168492",c="linked_labs",s="360044758731-Solving-Common-Issues-with-Coursera-Labs"},"6aOg":function(module,t,e){"use strict";var n=e("lSNA"),a=e.n(n),r=e("q1tI"),i=e("TSYQ"),u=e.n(i),o=e("uhOI"),c=e("gNwb"),s=e("VbXa"),d=e.n(s),l=function(t){function LabLauncher(e){var n;return(n=t.call(this,e)||this).handleApiButtonClick=function(){if(n.state.apiStatus!==o.a)return Promise.resolve();var t=window.open("","_blank"),handleFailure=function(){return null==t||t.close(),n.resetApiStatusAfterDelay(),n.handleApiError(),n.setApiStatus(o.b)};return n.setApiStatus(o.c).then((function(){return(0,n.props.getLaunchUrl)()})).then((function(e){var a=n.props,r=a.onLaunch,i=a.onComplete;if(e)return n.resetApiStatusAfterDelay(),t&&(t.location.href=e),null==r||r(e),null==i||i(),n.setApiStatus(o.d);handleFailure()}),handleFailure).catch(handleFailure)},n.handleApiError=function(){var t=n.props,e=t.onError,a=t.onComplete;null==e||e(),null==a||a()},n.setApiStatus=function(t){return new Promise((function(e){n.setState({apiStatus:t},(function(){e()}))}))},n.resetApiStatus=function(){clearTimeout(n.resetApiStatusTimeoutId),n.resetApiStatusTimeoutId=0,n.setApiStatus(o.a)},n.resetApiStatusAfterDelay=function(){var t=n.props.resetApiStatusDelay;n.resetApiStatusTimeoutId=window.setTimeout(n.resetApiStatus,t)},n.resetApiStatusTimeoutId=0,n.state={apiStatus:o.a,onClick:n.handleApiButtonClick},n}return d()(LabLauncher,t),LabLauncher.prototype.render=function(){var t=this.props.render;return t(this.state)},LabLauncher}(r.Component);l.defaultProps={resetApiStatusDelay:5e3};var p=l,f=e("TSwX"),h=e("BBzL"),b=e.n(h),m=Object(c.e)({type:"BUTTON"})(f.a),WorkspaceButton_getApiButtonLabel=function(t,e,n){return a()(a()(a()(a()({},o.a,n||(e?b()("Launch #{appName}",{appName:e}):b()("Launch"))),o.c,b()("Launching...")),o.d,e?b()("Launched #{appName}",{appName:e}):b()("Launched")),o.b,e?b()("Error opening #{appName}",{appName:e}):b()("Error"))[t]};t.a=function(t){var e=t.className,n=t.getLaunchUrl,a=t.resetApiStatusDelay,i=t.appName,o=t.label,c=t.icon,s=t.variant,d=t.size,l=t.role,f=void 0===l?"button":l,h=t.trackingName,b=void 0===h?"workspace_launch_button":h;return(r.createElement("div",{className:u()(e)},r.createElement(p,{getLaunchUrl:n,resetApiStatusDelay:a,render:function(t){var e=t.apiStatus,n=t.onClick;return(r.createElement(m,{label:WorkspaceButton_getApiButtonLabel(e,i,o),variant:s,onClick:n,apiStatus:e,beforeSendIcon:c,size:d,trackingName:b,iconPosition:"after",role:f}))}})))}},"7t8k":function(module,t,e){"use strict";e.d(t,"b",(function(){return volumesToMountpoints})),e.d(t,"a",(function(){return mountPointsToMountPaths}));var n=e("YVeV"),a=e.n(n),mountPathValidationError=function(t,e,n){if(/[^a-zA-Z0-9/]/.test(t))return a()("Mount points can only contain letters and numbers");if(""===t||"/"===t||!/\/[^\0]+/.test(t))return a()("Must begin with /, and not equal /");if("/"===t.slice(-1))return a()("Please exclude terminating /");if(e&&n){if(n.filter((function(t){return t.id!==e})).map((function(t){return t.path})).includes(t))return a()("Mount path already in use");var r=n.find((function(n){return n.id!==e&&(null==n?void 0:n.oldPath)===t}));if(r)return a()("Mount path already in use by: {path}",{path:r.path})}return""},volumesToMountpoints=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map((function(t){return{id:Math.floor(1e8*Math.random())+"",path:t}}))},mountPointsToMountPaths=function(t){var e={};return t.forEach((function(t){t.delete?e[t.oldPath||t.path]={typeName:"deleteMountPath",definition:{}}:t.isNew||!t.oldPath||t.oldPath===t.path||mountPathValidationError(t.path)?mountPathValidationError(t.path)||(e[t.path]={typeName:"addFilesToMountPath",definition:t.file?{files:{assetId:t.file}}:{}}):e[t.oldPath]={typeName:"renameMountPath",definition:{newName:t.path}}})),e}},"9r9f":function(module,exports){exports.default={"ar":true,"de":true,"el":true,"es":true,"fr":true,"hi":true,"hu":true,"id":true,"it":true,"ja":true,"kk":true,"ko":true,"nl":true,"pl":true,"pt":true,"ru":true,"sv":true,"th":true,"tr":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},LHpZ:function(module,t,e){"use strict";var n=e("fsL8"),a=e.n(n),r=e("yXPU"),i=e.n(r),u=e("VbXa"),o=e.n(u),c=e("lSNA"),s=e.n(c),d=e("q1tI"),l=e("uhOI"),p=e("tjv+"),f=e("b1i5"),h=e("TSwX"),b=e("Xc+a"),m=e.n(b),getApiButtonLabel=function(t){return s()(s()(s()(s()({},l.a,m()("Generate/Update shared link")),l.c,m()("Updating...")),l.d,m()("Shared link updated")),l.b,m()("Error updating shared link"))[t]},v=function(t){function PublishButton(){for(var e,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))||this).state={apiStatus:l.a},e.setApiStatus=function(){var t=i()(a()().mark((function _callee(t){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){e.setState({apiStatus:t},(function(){n()}))})));case 1:case"end":return n.stop()}}),_callee)})));return function(e){return t.apply(this,arguments)}}(),e.resetApiStatus=function(){e.resetApiStatusTimeoutId=0,e.setApiStatus(l.a)},e.resetApiStatusAfterDelay=function(){var t=e.props.resetApiStatusDelay;e.resetApiStatusTimeoutId=window.setTimeout(e.resetApiStatus,t)},e.publishLab=i()(a()().mark((function _callee2(){var t,n,r,i;return a()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.props,n=t.courseId,r=t.itemId,i=t.onPublish,e.state.apiStatus===l.a){a.next=4;break}return a.abrupt("return",Promise.resolve());case 4:return a.abrupt("return",e.setApiStatus(l.c).then((function(){return Object(f.k)(n,r,!0).then((function(t){var n=t.id;return Object(p.a)(n).then((function(){return e.resetApiStatusAfterDelay(),i?Promise.resolve(i()).then((function(){return e.setApiStatus(l.d)})):e.setApiStatus(l.d)})).catch((function(){return e.resetApiStatusAfterDelay(),e.setApiStatus(l.b)}))})).catch((function(){return e.resetApiStatusAfterDelay(),e.setApiStatus(l.b)}))})));case 5:case"end":return a.stop()}}),_callee2)}))),e.resetApiStatusTimeoutId=0,e}return o()(PublishButton,t),PublishButton.prototype.render=function(){var t=this.state.apiStatus;return(d.createElement(h.a,{label:getApiButtonLabel(t),variant:"secondary","data-e2e":"shareable-lab-publish-button",onClick:this.publishLab,apiStatus:t,size:"small"}))},PublishButton}(d.Component);v.defaultProps={resetApiStatusDelay:5e3},t.a=v},"Q21/":function(module,t,e){"use strict";e.d(t,"a",(function(){return n})),e.d(t,"b",(function(){return a}));var n=function(t){return t.FAILED="FAILED",t.FAULT="FAULT",t.IN_PROGRESS="IN_PROGRESS",t.STOPPED="STOPPED",t.SUCCEEDED="SUCCEEDED",t.TIMED_OUT="TIMED_OUT",t}({}),a=function(t){return t.NB_GRADER="NB_GRADER",t.VSCODE_CUSTOM_GRADER="VSCODE_CUSTOM_GRADER",t.VSCODE_PRECONFIGURED_JAVA="VSCODE_PRECONFIGURED_JAVA",t}({})},UXDO:function(module,t,e){"use strict";e.d(t,"a",(function(){return n}));var n="hub.labs.coursera.org"},"Xc+a":function(module,exports,t){var e=t("9r9f"),n=e.default?e.default:{},a=(0,t("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},YVeV:function(module,exports,t){var e=t("1YBB"),n=e.default?e.default:{},a=(0,t("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},cgmF:function(module,t,e){"use strict";e.r(t);var n,a,r,i,u,o,c,s,d,l,p=e("VbXa"),f=e.n(p),h=e("VkAN"),b=e.n(h),m=e("AeFk"),v=e("q1tI"),O=e("17x9"),S=e.n(O),g=e("MnCE"),A=e("8cuT"),I=e("pR6o"),y=e("Xx5p"),L=e("FdHa"),P=e("HDKb"),j=e("5mFy"),U=e("7Dw/"),w=e("8Hdl"),E=e("6/Gu"),k=e("SJ7i"),N=e("KXbA"),T=e("RdUL"),D=e("3i0v"),C=e("RT5p"),R=e("loer"),M=e("pnKK"),V=e("q5zD"),B=e("bh+/"),x=e("b1i5"),UngradedLabItemActions_loadUngradedLab=function(t,e){var n=e.courseId,a=e.itemId,r=e.done;Object(x.h)(n,a).then((function(e){return t.dispatch(B.a.SetUngradedLab,{launcher:e})})).then(r)},UngradedLabItemActions_clearUngradedLab=function(t){t.dispatch(B.a.ClearUngradedLab)},Q=e("LHpZ"),W=e("BVC1"),F=e("6aOg"),G=e("Xc+a"),H=e.n(G),X=function(t){function UngradedLabLauncher(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).getLaunchUrl=function(){return new Promise((function(t){t(W.a.join(e.props.itemLink,"lab"))}))},e}return f()(UngradedLabLauncher,t),UngradedLabLauncher.prototype.render=function(){var t=this.props,e=t.defaultLabel,n=t.label,a=t.icon,r=t.variant,i=t.size;return(v.createElement("div",{className:"rc-UngradedLabLauncher"},v.createElement(F.a,{className:"m-b-0",getLaunchUrl:this.getLaunchUrl,label:n||e,appName:H()("Lab"),icon:a,variant:r,size:i,role:"link",trackingName:"ungraded_lab_launch_button"})))},UngradedLabLauncher}(v.Component),z=e("z3RS"),Y=e("Q/rb"),J=e("oYx3");e.d(t,"UngradedLabItem",(function(){return K}));var q={accordion:Object(m.c)(n||(n=b()(["\n    margin-bottom: var(--cds-spacing-150);\n  "]))),accordionHeader:Object(m.c)(a||(a=b()(["\n    span {\n      ",";\n    }\n  "])),y.a.h2semibold),formattedMessage:Object(m.c)(r||(r=b()(["\n    margin-right: var(--cds-spacing-50);\n  "]))),header:Object(m.c)(i||(i=b()(["\n    margin-bottom: var(--cds-spacing-400);\n    "," {\n      margin-bottom: var(--cds-spacing-600);\n    }\n  "])),L.a.up("md")),launcher:Object(m.c)(u||(u=b()(["\n    margin-bottom: var(--cds-spacing-400);\n  "]))),shareInstructions:Object(m.c)(o||(o=b()(["\n    margin-bottom: var(--cds-spacing-600);\n  "]))),shareLink:Object(m.c)(c||(c=b()(["\n    margin-top: var(--cds-spacing-100);\n  "])))},K=function(t){function UngradedLabItem(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).handlePublishForSharing=function(){var t=e.context.executeAction,n=e.props,a=n.courseId,r=n.computedItem;return new Promise((function(e){t(UngradedLabItemActions_loadUngradedLab,{courseId:a,itemId:r.id,done:e})}))},e}f()(UngradedLabItem,t);var e=UngradedLabItem.prototype;return e.componentWillUnmount=function(){(0,this.context.executeAction)(UngradedLabItemActions_clearUngradedLab)},e.render=function(){var t,e=this.props,n=e.courseId,a=e.itemMetadata,r=e.computedItem,i=e.launcher,u=r.itemGrade.isPassing(),o=null==i?void 0:null===(t=i.shareConfig)||void 0===t?void 0:t.shareInstructions,c=!!o&&"VIRTUAL_BROWSER"!==i.imageApplicationType,p=!C.c.isEmpty(o);return i?Object(m.d)(Y.a,{courseId:n,feedbackType:"ungradedLab",computedItem:r,className:"rc-GradedDiscussionPromptItem"},Object(m.d)(z.a,{itemName:r.name,itemMetadata:a,courseId:n,contentBeforeName:u?d||(d=Object(m.d)(V.a,{name:"circle-outer",innerIcon:"check",size:"lg",className:"completion-checkmark"})):void 0}),Object(m.d)(M.a,{courseId:r.courseId,show:!0}),Object(m.d)("div",{className:"ungraded-lab-button-container",css:q.launcher},Object(m.d)(X,{courseId:n,itemId:r.id,itemLink:a.getBaseLink(),label:i.label,icon:Object(m.d)(N.a,{title:H()("Opens in new tab.")}),variant:"primary",size:"medium"})),!C.c.isEmpty(i.description)&&Object(m.d)("div",null,Object(m.d)(P.a,{defaultExpanded:!0,css:q.accordion},Object(m.d)(j.a,{label:H()("Instructions"),component:"h2",css:q.accordionHeader}),Object(m.d)(U.a,null,Object(m.d)(R.a,{cml:i.description,isControlled:!0})))),!C.c.isEmpty(i.offlineInstructions)&&Object(m.d)("div",null,Object(m.d)(P.a,{defaultExpanded:!0,css:q.accordion},Object(m.d)(j.a,{label:H()("Offline Instructions"),component:"h2",css:q.accordionHeader}),Object(m.d)(U.a,null,Object(m.d)(R.a,{cml:i.offlineInstructions,isControlled:!0})))),c&&Object(m.d)("div",{className:"share-lab panel",css:q.shareInstructions},p&&Object(m.d)(P.a,{defaultExpanded:!0,css:q.accordion,"data-e2e":"sharing-instructions"},Object(m.d)(j.a,{label:H()("Sharing Instructions"),component:"h2",css:q.accordionHeader}),Object(m.d)(U.a,null,Object(m.d)(R.a,{cml:o,isControlled:!0}))),Object(m.d)(P.a,{defaultExpanded:!0,css:q.accordion,"data-e2e":"share-my-work"},Object(m.d)(j.a,{label:H()("Share My Work"),component:"h2",css:q.accordionHeader}),Object(m.d)(U.a,null,Object(m.d)(w.a,{variant:"body1"},Object(m.d)(E.a,{container:!0,direction:"row"},Object(m.d)(E.a,{item:!0,css:q.formattedMessage},H()("Generate or update a read-only copy of your lab.")," ",l||(l=Object(m.d)(J.a,{articleId:D.c,variant:"quiet"}))))),i.sharedWorkspaceUrl&&Object(m.d)("div",{css:q.shareLink,"data-e2e":"shareable-lab-link"},Object(m.d)(w.a,{variant:"body1"},Object(m.d)("strong",null,H()("Your shareable lab link:"))," ",Object(m.d)("a",{href:i.sharedWorkspaceUrl},i.sharedWorkspaceUrl))),Object(m.d)("div",{className:"share-instructions button",css:q.shareLink},Object(m.d)(Q.a,{courseId:n,itemId:r.id,onPublish:this.handlePublishForSharing})))))):s||(s=Object(m.d)(T.a,null))},UngradedLabItem}(v.Component);K.contextTypes={executeAction:S.a.func.isRequired};t.default=Object(g.b)(Object(g.o)((function(t){return{courseId:t.itemMetadata.get("course.id")}})),Object(I.a)((function(t,e){var n=t.executeAction,a=e.courseId,r=e.itemMetadata;n(UngradedLabItemActions_loadUngradedLab,{courseId:a,itemId:r.id})})),Object(A.a)(["UngradedLabItemStore"],(function(t){return{launcher:t.UngradedLabItemStore.getLauncher()}})),k.a)(K)},i1xi:function(module,t,e){"use strict";e.d(t,"a",(function(){return constructLaunchUrl})),e.d(t,"c",(function(){return constructWorkspaceUrl})),e.d(t,"e",(function(){return extractLabHostname})),e.d(t,"d",(function(){return extractContentPath})),e.d(t,"f",(function(){return getPathFromUrl})),e.d(t,"b",(function(){return constructOrigin})),e.d(t,"j",(function(){return updateUrlQueryString})),e.d(t,"i",(function(){return isMessageFromInnerFrame})),e.d(t,"g",(function(){return isInnerFrameMessageAUrl})),e.d(t,"h",(function(){return isInnerFrameMessageAnIsActive}));var n=e("cDf5"),a=e.n(n),r=e("fw5G"),i=e.n(r),u=e("33yf"),o=e.n(u),c=e("UXDO"),constructLaunchUrl=function(t,e,n,a){var r=function(t,e){var n,a,r=new i.a(t);for(var u in e){var o=(n=r.getQueryParamValue(u),void 0!==(a=null==e?void 0:e[u])?a:"true"===n||"false"!==n&&void 0);void 0===o?r.deleteQueryParam(u):r.replaceQueryParam(u,String(o))}return r.query()}(t,e);return n&&a?(new i.a).setProtocol("https").setHost(n).setPath(o.a.join("connect",a)).setQuery(r).toString():new i.a(t).setQuery(r).toString()},isUrlParsable=function(t){try{return!!new URL(t)}catch(t){return!1}},constructWorkspaceUrl=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.a;return"https://".concat(e,"/connect/").concat(t)},extractLabHostname=function(t){return t?isUrlParsable(t)?new URL(t).hostname:t:""},extractContentPath=function(t){return t?isUrlParsable(t)?new URL(t).searchParams.get("path")||"":t:""},getPathFromUrl=function(t){try{var e=new URL(t);return e.pathname+e.search+e.hash}catch(e){return t}},constructOrigin=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a,e=arguments.length>1?arguments[1]:void 0;return t.startsWith("dev")?"".concat(e||"hub",".").concat(t,".labs-dev.coursera.org"):e?t.replace("hub",e):t},updateUrlQueryString=function(t,e,n){return t.hasQueryParam(e)&&t.deleteQueryParam(e),e&&n&&t.addQueryParam(e,n),t},isMessageFromInnerFrame=function(t){return"object"===a()(t)&&!0===t.fromInnerFrame},isInnerFrameMessageAUrl=function(t){return isMessageFromInnerFrame(t)&&"innerFrameUrl"in t},isInnerFrameMessageAnIsActive=function(t){return isMessageFromInnerFrame(t)&&"isActive"in t&&!0===t.isActive}},oYx3:function(module,t,e){"use strict";var n=e("q1tI"),a=e("fAYU"),r=e("xt11"),i=e("2aIb"),u=e.n(i);t.a=function(t){var e=t.articleId,i=t.sectionId,o=t.variant,c=Object(r.f)(e,i);return n.createElement(a.a,{href:c,target:"_blank",rel:"noopener noreferrer",typographyVariant:"bodyPrimary",variant:o,"aria-label":u()("Learn more")},u()("Learn more"))}},"tjv+":function(module,t,e){"use strict";e.d(t,"a",(function(){return checkPublishStatus}));var n=e("/hAQ"),checkPublishStatus=function(t,e){return new Promise((function(a,r){var i=setInterval((function(){Object(n.a)(t).then((function(t){var e,n,u,o,c,s,d,l=null==t?void 0:null===(e=t.elements)||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:null===(u=n.publishStatus)||void 0===u?void 0:u.typeName,p=null==t?void 0:null===(o=t.elements)||void 0===o?void 0:null===(c=o[0])||void 0===c?void 0:null===(s=c.publishStatus)||void 0===s?void 0:null===(d=s.definition)||void 0===d?void 0:d.publishedTemplateId;"publishSucceeded"===l?(clearTimeout(i),a(null==p?void 0:p.split("@")[0])):"publishFailed"===l&&(clearTimeout(i),r())}))}),e||5e3)}))}}}]);
//# sourceMappingURL=en.65.b88fafb3806ae41a3ec8.js.map