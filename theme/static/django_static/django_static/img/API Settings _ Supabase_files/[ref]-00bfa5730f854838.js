(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7873],{90558:function(e){e.exports=function(e,s){for(var t,r=-1,a=e.length;++r<a;){var l=s(e[r]);void 0!==l&&(t=void 0===t?l:t+l)}return t}},61981:function(e,s,t){var r=t(89278),a=t(90558);e.exports=function(e,s){return e&&e.length?a(e,r(s,2)):0}},33114:function(e,s,t){"use strict";var r=t(79894),a=t.n(r),l=t(27378),c=t(93942),n=t(78651),i=t(47314),o=t(65961),d=t(24246);s.Z=function(e){var s=e.icon,t=e.title,r=e.description,x=e.url,h=e.urlLabel,u=void 0===h?"Read more":h,m=e.defaultVisibility,p=void 0!==m&&m,j=e.hideCollapse,f=void 0!==j&&j,v=e.button,b=e.className,g=void 0===b?"":b,N=e.block,y=void 0!==N&&N,w=(0,l.useState)(p),k=w[0],Z=w[1];return(0,d.jsx)("div",{className:"".concat(y?"block w-full":"","\n      block w-full rounded border border-scale-600 bg-scale-100 py-3 dark:border-scale-500 dark:bg-scale-400 ").concat(g),children:(0,d.jsxs)("div",{className:"flex flex-col px-4",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{className:"flex w-full space-x-3 lg:items-start",children:[s&&(0,d.jsx)("span",{className:"text-scale-900",children:s}),(0,d.jsx)("div",{className:"flex-grow",children:(0,d.jsx)("h5",{className:"text-sm text-scale-1200",children:t})})]}),r&&!f?(0,d.jsx)("div",{className:"cursor-pointer text-scale-900",onClick:function(){return Z(!k)},children:k?(0,d.jsx)(c.Z,{size:14,strokeWidth:1.5}):(0,d.jsx)(n.Z,{size:14,strokeWidth:1.5})}):null]}),(r||x||v)&&(0,d.jsxs)("div",{className:"flex flex-col space-y-3 overflow-hidden transition-all ".concat(k?"mt-3":""),style:{maxHeight:k?500:0},children:[(0,d.jsx)("div",{className:"text-scale-1100 text-sm",children:r}),x&&(0,d.jsx)(a(),{href:x,children:(0,d.jsx)("a",{target:"_blank",rel:"noreferrer",className:"pt-2",children:(0,d.jsx)(i.z,{type:"default",icon:(0,d.jsx)(o.Z,{}),children:u})})}),v&&(0,d.jsx)("div",{children:v})]})]})})}},36891:function(e,s,t){"use strict";t.d(s,{d:function(){return r}});var r={functionsInvStats:function(e,s){return["projects",e,"functions-inv-stats",{interval:s.interval,functionId:s.functionId}]},dailyStats:function(e,s){return["projects",e,"daily-stats",{attribute:s.attribute,startDate:s.startDate,endDate:s.endDate,interval:s.interval}]},infraMonitoring:function(e,s){return["projects",e,"infra-monitoring",{attribute:s.attribute,startDate:s.startDate,endDate:s.endDate,interval:s.interval}]},usageApiCounts:function(e,s){return["projects",e,"usage.api-counts",s]}}},49418:function(e,s,t){"use strict";var r=t(99099),a=t(27378);s.Z=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,a.useMemo)((function(){var e,t=s[0],a=s[1];return null!==(e=t[0])&&void 0!==e&&e[a]?r.h6.apply(void 0,s).sort((function(e,t){return new Date(e[s[1]])-new Date(t[s[1]])})):t}),[JSON.stringify(s[0])].concat(s))}},87537:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Ne}});var r=t(90849),a=t(43659),l=t(27102),c=t(36802),n=t(20796),i=t(42753),o=t(34465),d=t(65512),x=t(79305),h=t(27693),u=t.n(h),m=t(79894),p=t.n(m),j=t(27378),f=t(86677),v=t(2674),b=t(47314),g=t(51664),N=t(34789),y=t(72853),w=t(85742),k=t(23753),Z=t(29324),O=t(96423),P=t(90089),_=t(55732),S=t(34707),A=t.n(S),z=t(36492),D=t(14919),C=t(36891),R=["enabled"];function I(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?I(Object(t),!0).forEach((function(s){(0,r.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function q(e,s){return T.apply(this,arguments)}function T(){return(T=(0,_.Z)(A().mark((function e(s,t){var r,a,l;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.projectRef,a=s.interval,r){e.next=3;break}throw new Error("projectRef is required");case 3:if(a){e.next=5;break}throw new Error("interval is required");case 5:return e.next=7,(0,D.U2)("".concat(n.T5,"/projects/").concat(r,"/analytics/endpoints/usage.api-counts?interval=").concat(a),{signal:t});case 7:if(!(l=e.sent).error){e.next=10;break}throw l.error;case 10:return e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=t(86827),W=t(61981),U=t.n(W),M=t(49418),F=t(24246),V=[{key:"minutely",label:"60 minutes",startValue:1,startUnit:"hour",format:"MMM D, h:mma"},{key:"hourly",label:"24 hours",startValue:24,startUnit:"hour",format:"MMM D, ha"},{key:"daily",label:"7 days",startValue:7,startUnit:"day",format:"MMM D"}],K=function(e){(0,x.Z)(e);var s=(0,f.useRouter)(),t=(0,c.UO)().ref,r=(0,j.useState)("hourly"),a=r[0],l=r[1],n=function(e){var s=e.projectRef,t=e.interval,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.enabled,l=void 0===a||a,c=(0,P.Z)(r,R);return(0,z.a)(C.d.usageApiCounts(s,t),(function(e){var r=e.signal;return q({projectRef:s,interval:t},r)}),E({enabled:l&&"undefined"!==typeof s&&"undefined"!==typeof t},c))}({projectRef:t,interval:a}),i=n.data,o=(n.error,n.isLoading),d=V.find((function(e){return e.key===a}))||V[1],h=u()().subtract(d.startValue,d.startUnit),m=u()(),p=(0,M.Z)((null===i||void 0===i?void 0:i.result)||[],"timestamp",["total_auth_requests","total_rest_requests","total_storage_requests","total_realtime_requests"],0,h.toISOString(),m.toISOString()),_=d.format||"MMM D, ha",S=function(e,r){var a=u()(e.timestamp).toISOString();s.push("/project/".concat(t,"/logs/edge-logs?ite=").concat(encodeURIComponent(a)))};return(0,F.jsxs)("div",{className:"space-y-6",children:[(0,F.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,F.jsx)(v.ZP,{side:"bottom",align:"start",overlay:(0,F.jsx)(v.ZP.RadioGroup,{value:a,onChange:l,children:V.map((function(e){return(0,F.jsx)(v.ZP.Radio,{value:e.key,children:e.label},e.key)}))}),children:(0,F.jsx)(b.z,{as:"span",type:"default",iconRight:(0,F.jsx)(g.Z,{}),children:d.label})}),(0,F.jsxs)("span",{className:"text-xs text-scale-1000",children:["Statistics for past ",d.label]})]}),(0,F.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8",children:[(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"space-y-4",children:[(0,F.jsx)(Y,{icon:(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(N.Z,{strokeWidth:2,size:16})}),title:"Database",href:"/project/".concat(t,"/editor")}),(0,F.jsx)(y.Z,{active:o,children:(0,F.jsx)(L.Z,{title:"REST Requests",data:p,xAxisKey:"timestamp",yAxisKey:"total_rest_requests",onBarClick:function(e){return S(e)},customDateFormat:_,highlightedValue:U()(p,"total_rest_requests")})})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"space-y-4",children:[(0,F.jsx)(Y,{icon:(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(w.Z,{strokeWidth:2,size:16})}),title:"Auth",href:"/project/".concat(t,"/auth/users")}),(0,F.jsx)(y.Z,{active:o,children:(0,F.jsx)(L.Z,{title:"Auth Requests",data:p,xAxisKey:"timestamp",yAxisKey:"total_auth_requests",onBarClick:function(e){return S(e)},customDateFormat:_,highlightedValue:U()(p||[],"total_auth_requests")})})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"space-y-4",children:[(0,F.jsx)(Y,{icon:(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(k.Z,{strokeWidth:2,size:16})}),title:"Storage",href:"/project/".concat(t,"/storage/buckets")}),(0,F.jsx)(y.Z,{active:o,children:(0,F.jsx)(L.Z,{title:"Storage Requests",data:p,xAxisKey:"timestamp",yAxisKey:"total_storage_requests",onBarClick:function(e){return S(e)},customDateFormat:_,highlightedValue:U()(p,"total_storage_requests")})})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"space-y-4",children:[(0,F.jsx)(Y,{icon:(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(Z.Z,{strokeWidth:2,size:16})}),title:"Realtime"}),(0,F.jsx)(y.Z,{active:o,children:(0,F.jsx)(L.Z,{title:"Realtime Requests",data:p,xAxisKey:"timestamp",yAxisKey:"total_realtime_requests",onBarClick:function(e){return S(e)},customDateFormat:_,highlightedValue:U()(p,"total_realtime_requests")})})]})})]})]})},Y=function(e){var s=null!==e&&void 0!==e&&e.href?p():"div";return(0,F.jsx)(s,{href:e.href,children:(0,F.jsxs)("div",{className:"flex items-center space-x-3 opacity-80 transition "+(e.href?"cursor-pointer hover:text-gray-1200 hover:opacity-100":""),children:[(0,F.jsx)("p",{children:e.icon}),(0,F.jsx)("span",{className:"flex items-center space-x-1",children:(0,F.jsx)("h4",{className:"mb-0 text-lg",children:e.title})})]})})},B=t(38480),J=t(65961),H=t(4708),Q=t(40622),G=t(68043),X=t(25024),$=t(33769),ee=t(14971),se=t(3648),te=t(2288),re=t(43109),ae=t(1318),le=t(20951),ce=function(){var e,s,t,r,a,n,i=(0,c.UO)().ref,o=[{name:"Javascript",key:"js"},{name:"Dart",key:"dart"}],d=(0,j.useState)(o[0]),x=d[0],h=d[1],u=(0,te.qP)({projectRef:i}),m=u.data,f=u.isError,v=u.isLoading,b=(0,re.tb)({projectRef:i}),g=b.data,N=b.isError,y=b.isLoading,w=null===g||void 0===g?void 0:g.jwtSecretUpdateStatus,k=(0,l.FH)(G.KA.READ,"service_api_keys"),Z=null===m||void 0===m?void 0:m.autoApiService,P=null!==(e=null===Z||void 0===Z?void 0:Z.service_api_keys)&&void 0!==e?e:[],_=0===P.length,S=void 0===w||w===X.iL.Updated,A="".concat(null!==(s=null===Z||void 0===Z?void 0:Z.protocol)&&void 0!==s?s:"https","://").concat(null!==(t=null===Z||void 0===Z?void 0:Z.endpoint)&&void 0!==t?t:"-"),z=P.find((function(e){return"anon"===e.tags})),D=null!==(r=null===(a=ae.Z.init(A)[x.key])||void 0===a?void 0:a.code)&&void 0!==r?r:"No snippet available";return(0,F.jsx)(O.Z,{title:(0,F.jsxs)("div",{className:"space-y-3",children:[(0,F.jsx)("h5",{className:"text-base",children:"Project API"}),(0,F.jsxs)("p",{className:"text-sm text-scale-1000",children:["Your API is secured behind an API gateway which requires an API Key for every request.",(0,F.jsx)("br",{}),"You can use the parameters below to use Supabase client libraries."]})]}),children:f||N?(0,F.jsxs)("div",{className:"flex items-center justify-center py-8 space-x-2",children:[(0,F.jsx)($.Z,{size:16,strokeWidth:1.5}),(0,F.jsx)("p",{className:"text-sm text-scale-1100",children:f?"Failed to retrieve API keys":"Failed to update JWT secret"})]}):_||v||y?(0,F.jsxs)("div",{className:"flex items-center justify-center py-8 space-x-2",children:[(0,F.jsx)(ee.Z,{className:"animate-spin",size:16,strokeWidth:1.5}),(0,F.jsx)("p",{className:"text-sm text-scale-1100",children:v||_?"Retrieving API keys":"JWT secret is being updated"})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(O.Z.Content,{children:(0,F.jsx)(se.Z,{label:"Project URL",readOnly:!0,copy:!0,disabled:!0,className:"input-mono",value:A,descriptionText:"A RESTful endpoint for querying and managing your database.",layout:"horizontal"})}),(0,F.jsx)(O.Z.Content,{className:"border-t border-panel-border-interior-light dark:border-panel-border-interior-dark",children:(0,F.jsx)(se.Z,{readOnly:!0,disabled:!0,layout:"horizontal",className:"input-mono",label:(0,F.jsxs)("div",{className:"space-y-2",children:[(0,F.jsx)("p",{className:"text-sm",children:"API Key"}),(0,F.jsxs)("div",{className:"flex items-center space-x-1 -ml-1",children:[null===z||void 0===z||null===(n=z.tags)||void 0===n?void 0:n.split(",").map((function(e,s){return(0,F.jsx)("code",{className:"text-xs",children:e},"".concat(e).concat(s))})),(0,F.jsx)("code",{className:"text-xs",children:"public"})]})]}),copy:k&&S,reveal:"anon"!==(null===z||void 0===z?void 0:z.tags)&&k&&S,value:k?w===X.iL.Failed?"JWT secret update failed, new API key may have issues":w===X.iL.Updating?"Updating JWT secret...":null===Z||void 0===Z?void 0:Z.defaultApiKey:"You need additional permissions to view API keys",onChange:function(){},descriptionText:(0,F.jsxs)("p",{children:["This key is safe to use in a browser if you have enabled Row Level Security (RLS) for your tables and configured policies. You may also use the service key which can be found"," ",(0,F.jsx)(p(),{href:"/project/".concat(i,"/settings/api"),children:(0,F.jsx)("a",{className:"transition text-brand-800 hover:text-brand-900",children:"here"})})," ","to bypass RLS."]})})}),(0,F.jsxs)("div",{className:"border-t border-panel-border-interior-light dark:border-panel-border-interior-dark",children:[(0,F.jsx)("div",{className:"flex items-center bg-scale-200",children:o.map((function(e){var s=x.key===e.key;return(0,F.jsx)("div",{className:["px-3 py-1 text-sm cursor-pointer transition","".concat(s?"bg-scale-300":"bg-scale-200 text-scale-1000")].join(" "),onClick:function(){return h(e)},children:e.name},e.key)}))}),(0,F.jsx)("div",{className:"bg-scale-300 px-4 py-6 min-h-[200px]",children:(0,F.jsx)(le.Z,{className:x.key,children:D})})]})]})})},ne=function(){return(0,F.jsxs)("div",{className:"w-full h-full relative pointer-events-none",children:[(0,F.jsxs)("div",{className:["w-[290px] lg:w-[400px] h-[180px] bg-scale-100 border border-scale-500","rounded-t px-4 py-3 space-y-1 overflow-hidden"].join(" "),children:[(0,F.jsxs)("div",{className:"text-xs font-mono space-x-4 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"1"}),(0,F.jsxs)("p",{className:"text-blue-900",children:["create table ",(0,F.jsxs)("span",{className:"text-scale-1200",children:["countries ","("]})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"2"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["id ",(0,F.jsx)("span",{className:"text-blue-900",children:"bigint generated by default"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"3"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["name ",(0,F.jsx)("span",{className:"text-blue-900",children:"text"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"4"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["iso2 ",(0,F.jsx)("span",{className:"text-blue-900",children:"text not null"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"5"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["iso3 ",(0,F.jsx)("span",{className:"text-blue-900",children:"text"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"6"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["local_name ",(0,F.jsx)("span",{className:"text-blue-900",children:"text"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-8 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"7"}),(0,F.jsxs)("p",{className:"text-scale-1200",children:["continent ",(0,F.jsx)("span",{className:"text-blue-900",children:"continents"})]})]}),(0,F.jsxs)("div",{className:"text-xs font-mono space-x-4 flex items-center",children:[(0,F.jsx)("span",{className:"text-scale-1000",children:"8"}),(0,F.jsx)("p",{className:"text-blue-900",children:");"})]})]}),(0,F.jsxs)("div",{className:["w-[260px] lg:w-[320px] h-[160px] lg:h-[220px] bg-scale-300 border border-scale-500","absolute right-0 top-[50px] lg:-top-[40px] rounded-t overflow-y-hidden"].join(" "),children:[(0,F.jsxs)("div",{className:"h-[24px] flex items-center border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"id"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"name"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"iso2"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"1"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Angola"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"AO"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"2"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Timor-Leste"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"TL"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"3"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Serbia"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"RS"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"4"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Bahamas"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"BS"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"5"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Chile"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"CL"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"6"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Denmark"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"DK"})})]}),(0,F.jsxs)("div",{className:"h-[30px] flex items-center bg-scale-200 border-b border-scale-500",children:[(0,F.jsx)("div",{className:"w-[10%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("div",{className:"w-3 h-3 rounded border border-scale-600"})}),(0,F.jsx)("div",{className:"w-[20%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"7"})}),(0,F.jsx)("div",{className:"w-[40%] h-full flex items-center border-r border-scale-500 px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"Singapore"})}),(0,F.jsx)("div",{className:"w-[30%] h-full flex items-center px-2",children:(0,F.jsx)("p",{className:"text-xs",children:"SG"})})]})]})]})},ie=function(e){(0,x.Z)(e);var s=(0,f.useRouter)(),t=s.query.ref;return(0,F.jsxs)("div",{className:"grid grid-cols-12 gap-4 lg:gap-20",children:[(0,F.jsx)("div",{className:"col-span-12",children:(0,F.jsxs)("div",{className:"flex flex-col space-y-20",children:[(0,F.jsx)("div",{className:"flex h-full flex-col justify-between",children:(0,F.jsxs)("div",{className:"space-y-2",children:[(0,F.jsx)("h3",{className:"text-xl text-scale-1200",children:"Welcome to your new project"}),(0,F.jsx)("p",{className:"text-base text-scale-1100",children:"Your project has been deployed on its own instance, with its own API all set up and ready to use."})]})}),(0,F.jsxs)("div",{className:"grid grid-cols-12 gap-4",children:[(0,F.jsxs)("div",{className:"col-span-12 flex flex-col justify-center space-y-8 lg:col-span-7",children:[(0,F.jsxs)("div",{className:"space-y-2",children:[(0,F.jsx)("h3",{className:"text-xl text-scale-1200",children:"Get started by building out your database"}),(0,F.jsx)("p",{className:"text-base text-scale-1100",children:"Start building your app by creating tables and inserting data. Our table editor makes Postgres as easy to use as a spreadsheet, but there's also our SQL editor if you need something more."})]}),(0,F.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,F.jsx)(p(),{href:"/project/".concat(t,"/editor"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",icon:(0,F.jsx)(B.Z,{src:"".concat(s.basePath,"/img/table-editor.svg"),style:{width:"".concat(14,"px"),height:"".concat(14,"px")},preProcessor:function(e){return e.replace(/svg/,'svg class="m-auto text-color-inherit"')}}),children:"Table editor"})})}),(0,F.jsx)(p(),{href:"/project/".concat(t,"/sql"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",icon:(0,F.jsx)(B.Z,{src:"".concat(s.basePath,"/img/sql-editor.svg"),style:{width:"".concat(14,"px"),height:"".concat(14,"px")},preProcessor:function(e){return e.replace(/svg/,'svg class="m-auto text-color-inherit"')}}),children:"SQL editor"})})}),(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/database",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{type:"default",icon:(0,F.jsx)(J.Z,{size:14}),children:"About Database"})})})]})]}),(0,F.jsx)("div",{className:"col-span-12 lg:col-span-5",children:(0,F.jsx)(ne,{})})]}),(0,F.jsxs)("div",{className:"flex h-full flex-col justify-between space-y-6",children:[(0,F.jsxs)("div",{className:"max-w-2xl space-y-2",children:[(0,F.jsx)("h3",{className:"text-xl text-scale-1200",children:"Explore our other products"}),(0,F.jsx)("p",{className:"text-base text-scale-1100",children:"Supabase provides all the backend features you need to build a product. You can use it completely, or just the features you need."})]}),(0,F.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-4 md:gap-y-0 xl:grid-cols-4",children:[(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"flex flex-col space-y-4 md:px-3",children:[(0,F.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(w.Z,{strokeWidth:2,size:16})}),(0,F.jsx)("h5",{children:"Authentication"})]}),(0,F.jsx)("div",{className:"flex flex-grow md:min-h-[50px] xl:min-h-[75px]",children:(0,F.jsx)("p",{className:"text-sm text-scale-1000",children:"A complete user management system that works without any additional tools."})}),(0,F.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,F.jsx)(p(),{href:"/project/".concat(t,"/auth/users"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",children:"Explore Auth"})})}),(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/auth",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{className:"translate-y-[1px]",icon:(0,F.jsx)(J.Z,{size:14}),type:"default",children:"About Auth"})})})]})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"flex flex-col space-y-4 md:px-3",children:[(0,F.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(k.Z,{strokeWidth:2,size:16})}),(0,F.jsx)("h5",{children:"Storage"})]}),(0,F.jsx)("div",{className:"flex md:min-h-[50px] xl:min-h-[75px]",children:(0,F.jsx)("p",{className:"text-sm text-scale-1000",children:"Store, organize, and serve any file types of any size from multiple buckets."})}),(0,F.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,F.jsx)(p(),{href:"/project/".concat(t,"/storage/buckets"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",children:"Explore Storage"})})}),(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/storage",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{className:"translate-y-[1px]",icon:(0,F.jsx)(J.Z,{size:14}),type:"default",children:"About Storage"})})})]})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"flex flex-col space-y-4 md:px-3",children:[(0,F.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(H.Z,{strokeWidth:2,size:16})}),(0,F.jsx)("h5",{children:"Edge Functions"})]}),(0,F.jsx)("div",{className:"flex md:min-h-[50px] xl:min-h-[75px]",children:(0,F.jsx)("p",{className:"text-sm text-scale-1000",children:"Write custom code without deploying or scaling servers, with fast deploy times and low latency."})}),(0,F.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,F.jsx)(p(),{href:"/project/".concat(t,"/functions"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",children:"Explore Functions"})})}),(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/functions",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{className:"translate-y-[1px]",icon:(0,F.jsx)(J.Z,{size:14}),type:"default",children:"About Functions"})})})]})]})}),(0,F.jsx)(O.Z,{children:(0,F.jsxs)(O.Z.Content,{className:"flex flex-col space-y-4 md:px-3",children:[(0,F.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,F.jsx)("div",{className:"rounded bg-scale-600 p-1.5 text-scale-1000 shadow-sm",children:(0,F.jsx)(Q.Z,{strokeWidth:2,size:16})}),(0,F.jsx)("h5",{children:"Realtime"})]}),(0,F.jsx)("div",{className:"flex md:min-h-[50px] xl:min-h-[75px]",children:(0,F.jsx)("p",{className:"text-sm text-scale-1000",children:"Listen to your PostgreSQL database in realtime via websockets."})}),(0,F.jsx)("div",{className:"flex items-center space-x-2",children:(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/realtime",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{className:"translate-y-[1px]",icon:(0,F.jsx)(J.Z,{size:14}),type:"default",children:"About Realtime"})})})})]})})]})]})]})}),(0,F.jsx)("div",{className:"col-span-12 lg:col-span-4",children:(0,F.jsxs)("div",{className:"space-y-6",children:[(0,F.jsxs)("div",{className:"space-y-2",children:[(0,F.jsx)("h3",{className:"text-xl text-scale-1200",children:"Connecting to your new project"}),(0,F.jsxs)("p",{className:"text-base text-scale-1100 lg:max-w-sm",children:["Interact with your database through the"," ",(0,F.jsx)(p(),{href:"https://supabase.com/docs/reference",children:(0,F.jsx)("a",{className:"text-brand-900",children:"Supabase client libraries"})})," ","with your API keys."]}),(0,F.jsx)("p",{className:"text-base text-scale-1100 lg:max-w-sm",children:"More information about your project's keys can be found in your project's API settings."})]}),(0,F.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,F.jsx)(p(),{href:"/project/".concat(t,"/settings/api"),children:(0,F.jsx)("a",{children:(0,F.jsx)(b.z,{type:"default",children:"View API settings"})})}),(0,F.jsx)(p(),{href:"https://supabase.com/docs/guides/database/api",children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{className:"translate-y-[1px]",type:"default",icon:(0,F.jsx)(J.Z,{}),children:"About APIs"})})})]})]})}),(0,F.jsx)("div",{className:"col-span-12 lg:col-span-8",children:(0,F.jsx)(ce,{})})]})},oe=t(95925),de=t(33114),xe=t(45322),he=(0,a.Pi)((function(e){(0,x.Z)(e);var s=(0,c.UO)().ref,t=(0,xe.DK)({projectRef:s}),r=t.data,a=t.error,l=t.isLoading;if(a)return(0,F.jsx)(de.Z,{hideCollapse:!0,defaultVisibility:!0,icon:(0,F.jsx)($.Z,{strokeWidth:2}),title:"There was an issue loading the usage details of your project"});var n=!!r&&["db_egress","storage_egress","monthly_active_users","realtime_message_count","func_invocations"].map((function(e){return r[e].usage})).some((function(e){return(null!==e&&void 0!==e?e:0)>0}));return(0,F.jsx)(F.Fragment,{children:l?(0,F.jsxs)("div",{className:"flex w-full items-center justify-center space-x-2",children:[(0,F.jsx)(ee.Z,{className:"animate-spin",size:14}),(0,F.jsx)("p",{className:"text-sm",children:"Retrieving project usage statistics"})]}):n?(0,F.jsx)(K,{}):(0,F.jsx)(ie,{})})})),ue=t(87574),me=t(11597),pe=t(70946),je=t(86051),fe=function(){var e,s,t,r=(0,c.UO)().ref,a=(0,je.h1)({projectRef:r},{enabled:n.Qy}).data,l=null!==(e=null===a||void 0===a?void 0:a.databaseUpgradeStatus)&&void 0!==e?e:{},i=l.target_version,o=l.status,d=l.initiated_at,x=l.error,h="supabase-upgrade-".concat(r,"-").concat(d),m=null!==(s="true"===(null===(t=localStorage)||void 0===t?void 0:t.getItem(h)))&&void 0!==s&&s,f=(0,j.useState)(!m),v=f[0],g=f[1],N=o===X.h.Failed,y=u()(null!==d&&void 0!==d?d:0).utc().format("DD MMM YYYY HH:mm:ss"),w="Upgrade information:%0A\u2022 Initiated at: ".concat(d,"%0A\u2022 Target Version: ").concat(i,"%0A\u2022 Error: ").concat(x);return N&&v?(0,F.jsx)("div",{className:"max-w-7xl",children:(0,F.jsx)(me.Z,{withIcon:!0,variant:"warning",title:"Postgres version upgrade to ".concat(i," was not successful (Initiated at ").concat(y," UTC)"),actions:(0,F.jsxs)("div",{className:"flex items-center h-full space-x-4",children:[(0,F.jsx)(p(),{href:"/support/new?category=Database_unresponsive&ref=".concat(r,"&subject=").concat("Upgrade%20failed%20for%20project","&message=").concat(w),children:(0,F.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,F.jsx)(b.z,{type:"default",children:"Contact support"})})}),(0,F.jsx)(b.z,{type:"text",className:"px-1",icon:(0,F.jsx)(pe.Z,{size:16,strokeWidth:1.5}),onClick:function(){return g(!1),void localStorage.setItem(h,"true")}})]}),children:"Your project and its data are not affected. Please reach out to us via our support form for assistance with the upgrade."})}):null};function ve(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function be(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?ve(Object(t),!0).forEach((function(s){(0,r.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var ge=function(){var e,s=(0,l.oR)().ui,t=((0,c.UO)().ref,s.selectedProject),r=(null===(e=s.selectedProject)||void 0===e||e.subscription_tier,"default"!==(null===t||void 0===t?void 0:t.ref)&&void 0!==(null===t||void 0===t?void 0:t.name)?null===t||void 0===t?void 0:t.name:"Welcome to your project");return(0,F.jsxs)("div",{className:"mx-auto my-16 w-full max-w-7xl space-y-16",children:[(0,F.jsx)("div",{className:"mx-6 flex items-center space-x-6",children:(0,F.jsx)("h1",{className:"text-3xl",children:r})}),(0,F.jsx)("div",{className:"mx-6",children:(0,F.jsx)(fe,{})}),(null===t||void 0===t?void 0:t.status)===n.S.INACTIVE&&(0,F.jsx)(ue.Z,{}),(0,F.jsx)("div",{className:"mx-6",children:n.Qy&&(null===t||void 0===t?void 0:t.status)!==n.S.INACTIVE&&(0,F.jsx)(he,{})}),(null===t||void 0===t?void 0:t.status)!==n.S.INACTIVE&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"space-y-8",children:[(0,F.jsx)("div",{className:"mx-6",children:(0,F.jsx)("h4",{className:"text-lg",children:"Client libraries"})}),(0,F.jsx)("div",{className:"mx-6 mb-12 grid gap-12 md:grid-cols-3",children:oe.l.map((function(e){return(0,F.jsx)(o.Z,be({},e),e.language)}))})]}),(0,F.jsxs)("div",{className:"space-y-8",children:[(0,F.jsx)("div",{className:"mx-6",children:(0,F.jsx)("h4",{className:"text-lg",children:"Example projects"})}),(0,F.jsx)("div",{className:"mx-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:oe.B.sort((function(e,s){return e.title.localeCompare(s.title)})).map((function(e){return(0,F.jsx)(d.Z,be({},e),e.url)}))})]})]})]})};ge.getLayout=function(e){return(0,F.jsx)(i.$E,{children:(0,F.jsx)("main",{style:{maxHeight:"100vh"},className:"flex-1 overflow-y-auto",children:e})})};var Ne=(0,a.Pi)(ge)},29324:function(e,s,t){"use strict";var r=t(90849),a=(t(27378),t(87066)),l=t(12163),c=t(24246);function n(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}s.Z=function(e){return(0,c.jsx)(l.Z,function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?n(Object(t),!0).forEach((function(s){(0,r.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}({icon:a.Z},e))}},7225:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]",function(){return t(87537)}])},87066:function(e,s,t){"use strict";var r=t(27378),a=t(23615),l=t.n(a);function c(){return c=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function n(e,s){if(null==e)return{};var t,r,a=function(e,s){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=(0,r.forwardRef)((function(e,s){var t=e.color,a=void 0===t?"currentColor":t,l=e.size,i=void 0===l?24:l,o=n(e,["color","size"]);return r.createElement("svg",c({ref:s,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))}));i.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},i.displayName="Zap",s.Z=i}},function(e){e.O(0,[7930,1188,6226,2056,5286,3457,9774,2888,179],(function(){return s=7225,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=[ref]-00bfa5730f854838.js.map