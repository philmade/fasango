(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2031],{84151:function(e,r,t){"use strict";var i=t(44285),n=(t(27378),t(14971)),s=t(47939),c=t(79894),l=t.n(c),a=t(24246);r.Z=function(e){var r=e.title,t=e.description,c=e.children,o=e.footer,d=e.url,u=void 0===d?"":d,h=e.linkHref,x=void 0===h?"":h,p=e.imgUrl,f=e.imgAlt,v=e.onClick,m=e.icon,j=e.containerHeightClassName,b=void 0===j?"h-32":j,g=e.loading,k=void 0!==g&&g,y=function(e){var r=e.children;return(0,a.jsx)(l(),{href:x,children:(0,a.jsx)("a",{children:r})})},N=function(e){var r=e.children;return(0,a.jsx)("a",{href:u,children:r})},w=function(e){var r=e.children;return(0,a.jsx)("div",{children:r})},O=function(e){var r=e.children;return(0,a.jsx)("button",{onClick:v,children:r})},_=u||x||v,q=["group relative text-left","bg-panel-header-light dark:bg-panel-header-dark","border border-panel-border-light dark:border-panel-border-dark","rounded-md py-4 px-6 flex flex-row","transition ease-in-out duration-150",b];_&&(q=[].concat((0,i.Z)(q),["cursor-pointer","hover:bg-panel-border-light dark:hover:bg-panel-border-dark","hover:border-panel-border-hover-light","dark:hover:border-panel-border-hover-dark hover:border-gray-300"]));var P=function(e){var r=e.children;return(0,a.jsx)("div",{className:"mr-4 flex flex-col",children:r})},C=(0,a.jsxs)("div",{className:q.join(" "),children:[p&&(0,a.jsx)(P,{children:(0,a.jsx)("img",{className:" transition-all group-hover:scale-110 ",src:"".concat(p),alt:"".concat(f),width:"26"})}),m&&(0,a.jsx)(P,{children:m}),(0,a.jsxs)("div",{className:"flex h-full w-full flex-col space-y-2",children:[(0,a.jsx)("h5",{className:"text-scale-1200",children:r}),(c||t)&&(0,a.jsxs)("div",{className:"flex w-full flex-1 flex-col",children:[(0,a.jsx)("p",{className:"text-sm text-scale-1100",children:t}),(0,a.jsx)("div",{className:"w-full",children:c&&c})]}),o&&(0,a.jsx)("div",{className:"w-full",children:o})]}),_&&(0,a.jsx)("div",{className:" absolute right-4 top-4 text-scale-900 transition-all duration-200 group-hover:right-3 group-hover:text-scale-1200 ",children:k?(0,a.jsx)(n.Z,{className:"animate-spin"}):(0,a.jsx)(s.Z,{})})]});return v?(0,a.jsx)(O,{children:C}):x?(0,a.jsx)(y,{children:C}):u?(0,a.jsx)(N,{children:C}):(0,a.jsx)(w,{children:C})}},34680:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var i=t(43659),n=t(42753),s=t(90849),c=t(55732),l=t(11246),a=t(34707),o=t.n(a),d=t(98784),u=t(68043),h=t(30398),x=t(27102),p=t(73443),f=t(72036),v=t(27378),m=t(84151),j=t(24246),b=function(e){var r=e.title,t=e.description,i=e.sql,n=e.onClick,s=(0,v.useState)(!1),c=s[0],l=s[1];function a(){l(!0),n(i,r)}return(0,j.jsx)(m.Z,{title:r,loading:c,onClick:function(){return a()},footer:(0,j.jsx)("span",{className:"text-scale-1100 text-sm",children:t})})},g=t(90046),k=t(22917),y=t(86677),N=t(58663),w=t(24903);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var q=(0,i.Pi)((function(){var e=(0,x.oR)().ui,r=(0,k.UO)().ref,t=(0,y.useRouter)(),i=(0,p.Z)().data,n=(0,d.partition)(f.o_,{type:"template"}),s=(0,l.Z)(n,2),a=s[0],v=s[1],m=(0,k.Mk)(),O=(0,N.W2)(),q=(0,x.FH)(u.KA.CREATE,"user_content",{resource:{type:"sql",owner_id:null===i||void 0===i?void 0:i.id},subject:{id:null===i||void 0===i?void 0:i.id}}),P=function(){var n=(0,c.Z)(o().mark((function n(s,c){var l,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return",console.error("Project ref is required"));case 2:if(q){n.next=4;break}return n.abrupt("return",e.setNotification({category:"info",message:"Your queries will not be saved as you do not have sufficient permissions"}));case 4:try{l=(0,g.U)({name:c,sql:s,owner_id:null===i||void 0===i?void 0:i.id}),a=_(_({},l),{},{id:(0,w.k$)()}),O.addSnippet(a,r,!0),t.push("/project/".concat(r,"/sql/").concat(a.id))}catch(o){e.setNotification({category:"error",message:"Failed to create new query: ".concat(o.message)})}case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:"block h-full space-y-8 overflow-y-auto p-6",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("h1",{className:"text-scale-1200 mb-3 text-xl",children:"Scripts"}),(0,j.jsx)("p",{className:"text-scale-1100 text-sm",children:"Quick scripts to run on your database."}),(0,j.jsxs)("p",{className:"text-scale-1100 text-sm",children:["Click on any script to fill the query box, modify the script, then click",(0,j.jsx)("span",{className:"text-code",children:"Run"}),"."]})]}),(0,j.jsx)("div",{className:"grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:a.map((function(e){return(0,j.jsx)(b,{title:e.title,description:e.description,sql:e.sql,onClick:function(r,i){P(r,i),h.Z.sendEvent({category:"scripts",action:"script_clicked",label:e.title},m,t)}},e.title)}))})]}),(0,j.jsxs)("div",{className:"mb-8",children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("h1",{className:"text-scale-1200 mb-3 text-xl",children:"Quick start"}),(0,j.jsx)("p",{className:"text-scale-1100 text-sm",children:"While we're in beta, we want to offer a quick way to explore Supabase. While we build importers, check out these simple starters."}),(0,j.jsxs)("p",{className:"text-scale-1100 text-sm",children:["Click on any script to fill the query box, modify the script, then click",(0,j.jsx)("span",{className:"text-code",children:"Run"}),"."]})]}),(0,j.jsx)("div",{className:"grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:v.map((function(e){return(0,j.jsx)(b,{title:e.title,description:e.description,sql:e.sql,onClick:function(r,i){P(r,i),h.Z.sendEvent({category:"quickstart",action:"quickstart_clicked",label:e.title},m,t)}},e.title)}))})]})]})})),P=q,C=function(){return(0,j.jsx)(P,{})};C.getLayout=function(e){return(0,j.jsx)(n.Vk,{title:"SQL",children:e})};var E=(0,i.Pi)(C)},65425:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/sql",function(){return t(34680)}])}},function(e){e.O(0,[7930,1188,2056,5286,9774,2888,179],(function(){return r=65425,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=sql-876e5d2ab99fab22.js.map