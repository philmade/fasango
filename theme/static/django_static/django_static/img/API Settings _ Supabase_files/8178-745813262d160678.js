"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8178],{8178:function(e,t,n){var r=n(90849),o=n(55732),a=n(34707),s=n.n(a),c=n(27378),i=n(43659),l=n(27102),u=n(24903),d=n(96423),p=n(92836),f=n(66564),m=n(20796),b=n(14919),h=n(14353),g=n(3648),j=n(51452),x=n(68043),v=n(24246);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.C=(0,i.Pi)((function(){var e,t,n=(0,l.oR)(),r=n.ui,a=n.app,i=null!==(e=null===(t=r.selectedProject)||void 0===t?void 0:t.ref)&&void 0!==e?e:"default",f=(0,c.useState)(!0),m=f[0],b=f[1],h=(0,c.useState)(),g=h[0],x=h[1];(0,c.useEffect)((function(){_()}),[]);var _=function(){var e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,a.database.getPoolingConfiguration(i);case 3:t=e.sent,x(t),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(m)return(0,v.jsx)(d.Z,{title:(0,v.jsx)("h5",{className:"mb-0",children:"Connection Pooling"},"panel-title"),children:(0,v.jsxs)(d.Z.Content,{className:"space-y-8",children:[Array.from({length:5}).map((function(e,t){return(0,v.jsxs)(c.Fragment,{children:[(0,v.jsxs)("div",{className:"grid gap-2 items-center md:grid md:grid-cols-12 md:gap-x-4 w-full",children:[(0,v.jsx)(j.Z,{className:"h-4 w-1/3 col-span-4",delayIndex:t}),(0,v.jsx)(j.Z,{className:"h-8 w-full col-span-8",delayIndex:t})]}),(0,v.jsx)(p.Z,{light:!0})]},t)})),(0,v.jsx)(j.Z,{className:"h-8 w-full"})]})});if(g.error)return(0,v.jsx)("div",{className:"p-4",children:(0,v.jsx)("p",{className:"text-scale-1000",children:"Error loading pooling configuration"})});if(!g.pgbouncer_enabled&&null==g.pool_mode)return(0,v.jsx)(d.Z,{title:(0,v.jsx)("h5",{className:"mb-0",children:"Connection Pooling is not available for this project"},"panel-title"),children:(0,v.jsx)(d.Z.Content,{children:(0,v.jsx)("p",{className:"text-scale-1000",children:"Please start a new project to enable this feature."})})});var y=g,w=(0,u.Ff)(y,["db_host","db_name","db_port","db_user","inserted_at"]),P=(0,u.Ff)(y,["default_pool_size","ignore_startup_parameters","pool_mode","pgbouncer_enabled"]);return(0,v.jsx)(O,{projectRef:i,bouncerInfo:P,connectionInfo:w})}));var O=(0,i.Pi)((function(e){var t=e.projectRef,n=e.bouncerInfo,r=e.connectionInfo,a=(0,l.oR)().ui,i=(0,l.FH)(x.KA.UPDATE,"projects"),u=(0,c.useState)({pool_mode:n.pool_mode||"transaction",default_pool_size:n.default_pool_size||"",ignore_startup_parameters:n.ignore_startup_parameters||"",pgbouncer_enabled:n.pgbouncer_enabled}),d=u[0],j=u[1],_=function(){var e=(0,o.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.r$)("".concat(m.T5,"/projects/").concat(t,"/config/pgbouncer"),{pgbouncer_enabled:n.pgbouncer_enabled,default_pool_size:n.default_pool_size,ignore_startup_parameters:n.ignore_startup_parameters,pool_mode:n.pool_mode,max_client_conn:n.max_client_conn});case 3:if(!(r=e.sent).error){e.next=8;break}throw r.error;case 8:j(y({},r)),a.setNotification({category:"success",message:"Successfully saved settings"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),a.setNotification({category:"error",message:"Failed to update config: ".concat(e.t0.message)});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsx)(h.Z,{title:"Connection Pooling",schema:{properties:{pool_mode:{title:"Pool Mode",type:"string",options:[{label:"Transaction",value:"transaction"},{label:"Session",value:"session"}]},ignore_startup_parameters:{title:"Ignore Startup Parameters",type:"string",help:'Defaults are either blank or "extra_float_digits"'}},required:["pool_mode"],type:"object"},model:d,submitLabel:"Save",cancelLabel:"Cancel",onChangeModel:function(e){return j(e)},onSubmit:function(e){return _(e)},onReset:function(){return j(n)},disabled:!i,disabledMessage:"You need additional permissions to update connection pooling settings",children:(0,v.jsxs)("div",{className:"space-y-6 py-4",children:[n.pgbouncer_enabled&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Z,{name:"pool_mode",showInlineError:!0,errorMessage:"You must select one of the two options"}),(0,v.jsx)("div",{className:"!mt-1 flex",style:{marginLeft:"calc(33% + 0.5rem)"},children:(0,v.jsxs)("p",{className:"text-sm text-scale-900",children:["Specify when a connection can be returned to the pool. To find out the most suitable mode for your use case,"," ",(0,v.jsx)("a",{className:"text-green-900",target:"_blank",rel:"noreferrer",href:"https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pool",children:"click here"}),"."]})}),(0,v.jsx)(p.Z,{light:!0}),(0,v.jsx)(f.Z,{name:"ignore_startup_parameters"})]}),(0,v.jsx)(p.Z,{light:!0}),(0,v.jsx)(g.Z,{className:"input-mono",layout:"horizontal",readOnly:!0,copy:!0,disabled:!0,value:r.db_port,label:"Port"}),(0,v.jsx)(p.Z,{light:!0}),(0,v.jsx)(g.Z,{className:"input-mono",layout:"vertical",readOnly:!0,copy:!0,disabled:!0,label:"Connection string",value:"postgres://".concat(r.db_user,":[YOUR-PASSWORD]@")+"".concat(r.db_host,":").concat(r.db_port)+"/".concat(r.db_name)})]})})})}))},14353:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(55732),o=n(34707),a=n.n(o),s=n(27378),c=n(47314),i=n(11246),l=n(90849),u=n(81461),d=n(86236),p=n.n(d),f=n(17140),m=n(24246);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(e){var t=e.schema,n=e.model,r=e.disabled,o=void 0!==r&&r,a=e.children,s=e.formRef,c=e.onSubmit,i=e.onChangeModel,l=void 0===i?function(){}:i,d=new f.j(t,j(t));return(0,m.jsx)(u.Z,{disabled:o,onChangeModel:l,ref:s,schema:d,onSubmit:c,submitField:function(){return(0,m.jsx)(m.Fragment,{})},model:n,children:a})},g=new(p())({strict:!1,allErrors:!0,useDefaults:!0});g=g.addFormat("absolute-url","^(http://|https://)");var j=function(e){var t=g.compile(e);return function(n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);if(Object.entries(r).map((function(t){var n=(0,i.Z)(t,2),o=n[0],a=n[1],s=-1!=e.required.indexOf(o);r[o]="string"===typeof a&&s?x(a):a})),t(r),t.errors&&t.errors.length)return{details:t.errors}}},x=function(e){return""===e.trim()?null:e};function v(e){var t,n=e.schema,o=e.title,i=e.model,l=e.children,u=e.onChangeModel,d=void 0===u?function(e){}:u,p=e.onReset,f=void 0===p?function(){}:p,b=e.onSubmit,g=e.submitLabel,j=void 0===g?"Save":g,x=e.cancelLabel,v=void 0===x?"Cancel":x,_=e.message,y=void 0===_?"":_,O=e.disabled,w=void 0!==O&&O,P=e.disabledMessage,N=void 0===P?"":P,Z=(0,s.useState)(!1),S=Z[0],k=Z[1],C=(0,s.useState)(!1),D=C[0],E=C[1];return(0,m.jsxs)("section",{className:"section-block mb-8",children:[(0,m.jsxs)("div",{className:" flex h-12 items-center overflow-hidden border-b border-panel-border-light bg-panel-header-light px-6 dark:border-panel-border-dark dark:bg-panel-header-dark",children:[(0,m.jsx)("div",{className:"flex-1 text-left",children:(0,m.jsx)("h6",{children:o||""})}),w&&N?(0,m.jsx)("p",{className:"text-sm text-scale-1000",children:N}):(0,m.jsxs)("div",{className:"flex transition duration-150 ".concat(D?"opacity-100":"cursor-default opacity-0"),children:[(0,m.jsx)(c.z,{onClick:function(){t.reset(),k(!1),E(!1),f&&f()},type:"default",disabled:!D,children:v||"Cancel"}),(0,m.jsx)(c.z,{onClick:function(){t.submit().then((function(){k(!0)})).catch((function(e){console.error("Error on submitting",e)}))},loading:S,disabled:w||!D,type:"primary",className:"ml-2 hover:border-green-500",children:j||"Save"})]}),(0,m.jsx)("span",{className:"text-sm text-scale-900",children:y})]}),(0,m.jsx)("div",{className:"Form section-block--body px-6 py-3",children:(0,m.jsx)(h,{disabled:w,onChangeModel:function(e){E(!0),d&&d(e)},formRef:function(e){return t=e},schema:n,model:i,onSubmit:function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t).then((function(){k(!1),E(!1)})).catch((function(){return k(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:l})})]})}}}]);
//# sourceMappingURL=8178-745813262d160678.js.map