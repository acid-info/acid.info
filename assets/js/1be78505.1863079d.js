"use strict";(self.webpackChunklogos_docusaurus_docs_template=self.webpackChunklogos_docusaurus_docs_template||[]).push([[514,481],{88910:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),l=a(86010),r=a(18015),o=a(69061),i=a(63735),d=a(11614),c=a(6725);const s="menu_NjKY",u="menuWithAnnouncementBar_U5pk";function m(e){let{path:t,sidebar:a,className:m}=e;const f=function(){const{isActive:e}=(0,o.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,d.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",s,f&&u,m)},n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(c.default,{items:a,activePath:t,level:1})))}},87879:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(70655),l=n.__importDefault(a(67294)),r=n.__importDefault(a(86010)),o=a(93945),i=n.__importDefault(a(60969)),d=n.__importDefault(a(88910)),c=n.__importDefault(a(37138));t.default=l.default.memo((function(e){let{path:t,sidebar:a,onCollapse:n,isHidden:s}=e;const{navbar:{hideOnScroll:u},docs:{sidebar:{hideable:m}}}=(0,o.useThemeConfig)();return l.default.createElement("div",{className:(0,r.default)(c.default.sidebar,u&&c.default.sidebarWithHideableNavbar,s&&c.default.sidebarHidden)},u&&l.default.createElement(i.default,{tabIndex:-1,className:c.default.sidebarLogo}),l.default.createElement(d.default,{path:t,sidebar:a}))}))},80668:(e,t,a)=>{const n=a(70655),l=n.__importDefault(a(67294)),r=a(93945),o=n.__importDefault(a(87879)),i=n.__importDefault(a(54677));t.Z=function(e){const t=(0,r.useWindowSize)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement(o.default,{...e}),n&&l.default.createElement(i.default,{...e}))}},33387:(e,t,a)=>{const n=a(70655),l=a(31665),r=n.__importDefault(a(88746)),o=a(11614),i=a(93945),d=a(18279),c=n.__importDefault(a(5730)),s=n.__importDefault(a(6725)),u=n.__importDefault(a(86010)),m=n.__importStar(a(67294)),f=n.__importDefault(a(38238));function p(e){let{categoryLabel:t,onClick:a}=e;return m.default.createElement("button",{"aria-label":(0,o.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}t.Z=function(e){let{item:t,onItemClick:a,activePath:n,level:o,index:b,...h}=e;const{items:_,label:E,collapsible:g,className:v,href:k}=t,{docs:{sidebar:{autoCollapseCategories:C}}}=(0,i.useThemeConfig)(),N=function(e){const t=(0,c.default)();return(0,m.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,d.findFirstCategoryLink)(e):void 0),[e,t])}(t),S=(0,d.isActiveSidebarItem)(t,n),y=(0,d.isSamePath)(k,n),{collapsed:I,setCollapsed:T}=(0,i.useCollapsible)({initialState:()=>!!g&&(!S&&t.collapsed)}),{expandedItem:D,setExpandedItem:x}=(0,d.useDocSidebarItemsExpandedState)(),L=function(e){void 0===e&&(e=!I),x(e?null:b),T(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:n}=e;const l=(0,i.usePrevious)(t);(0,m.useEffect)((()=>{t&&!l&&a&&n(!1)}),[t,l,a,n])}({isActive:S,collapsed:I,updateCollapsed:L}),(0,m.useEffect)((()=>{g&&null!=D&&D!==b&&C&&T(!0)}),[g,D,b,T,C]),m.default.createElement("li",{className:(0,u.default)(i.ThemeClassNames.docs.docSidebarItemCategory,i.ThemeClassNames.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},v)},m.default.createElement("div",{className:(0,u.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y})},m.default.createElement(r.default,{className:(0,u.default)("menu__link",{"menu__link--sublist":g,"menu__link--active":S}),onClick:g?e=>{null==a||a(t),k||e.preventDefault(),L()}:()=>{null==a||a(t)},"aria-current":y?"page":void 0,"aria-expanded":g?!I:void 0,href:g?N??"#":N,...h},g&&m.default.createElement(l.ChevronUpIcon,{className:f.default.chevron}),m.default.createElement(l.Typography,{variant:"body2",color:"primary"},E)),k&&g&&m.default.createElement(p,{categoryLabel:E,onClick:e=>{e.preventDefault(),L()}})),m.default.createElement(i.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},m.default.createElement(s.default,{items:_,tabIndex:I?-1:0,onItemClick:a,activePath:n,level:o+1})))}},89481:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(70655),l=n.__importDefault(a(67294)),r=n.__importStar(a(11614)),o=a(93945),i=n.__importDefault(a(66867)),d=n.__importDefault(a(22566)),c=n.__importDefault(a(86010)),s=a(31665),u=n.__importDefault(a(88746));t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(o.PageMetadata,{title:(0,r.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),l.default.createElement(i.default,null,l.default.createElement("main",{className:(0,c.default)("container margin-vert--xl",d.default.root)},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col col--6 col--offset-3"},l.default.createElement(s.Typography,{variant:"h1"},l.default.createElement(r.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.default.createElement(s.Typography,{variant:"body1",component:"p"},l.default.createElement(r.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for."),l.default.createElement("br",null),l.default.createElement(r.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))),l.default.createElement(u.default,{to:"/"},l.default.createElement(s.Button,{size:"large",variant:"outlined"},l.default.createElement(r.default,{id:"theme.NotFound.backToHome",description:"The label of the back to home link on the 404 page"},"Back to home")))))))}},93687:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(67294),l=a(86010),r=a(44873),o=a(18015),i=a(39105),d=a(85919),c=a(6141),s=a(50003),u=a(66867),m=a(11614),f=a(20883);const p="backToTopButton_sjWU",b="backToTopButtonShow_xfvO";function h(){const{shown:e,scrollToTop:t}=(0,f.a)({threshold:300});return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",o.k.common.backToTopButton,p,e&&b),type:"button",onClick:t})}var _=a(39657),E=a(16550),g=a(80668),v=a(87462);function k(e){return n.createElement("svg",(0,v.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const C="expandButton_m80_",N="expandButtonIcon_BlDH";function S(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:C,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(k,{className:N}))}const y={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function I(e){let{children:t}=e;const a=(0,s.V)();return n.createElement(n.Fragment,{key:(null==a?void 0:a.name)??"noSidebar"},t)}function T(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,E.TH)(),[d,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{d&&c(!1),!d&&(0,_.n)()&&c(!0),r((e=>!e))}),[r,d]);return n.createElement("aside",{className:(0,l.default)(o.k.docs.docSidebarContainer,y.docSidebarContainer,a&&y.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(y.docSidebarContainer)&&a&&c(!0)}},n.createElement(I,null,n.createElement("div",{className:(0,l.default)(y.sidebarViewport,d&&y.sidebarViewportHidden)},n.createElement(g.Z,{sidebar:t,path:i,onCollapse:s,isHidden:d}),d&&n.createElement(S,{toggleSidebar:s}))))}const D={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function x(e){let{hiddenSidebarContainer:t,children:a}=e;const r=(0,s.V)();return n.createElement("main",{className:(0,l.default)(D.docMainContainer,(t||!r)&&D.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",D.docItemWrapper,t&&D.docItemWrapperEnhanced)},a))}const L="docPage__5DB",A="docsWrapper_BCFX";function w(e){let{children:t}=e;const a=(0,s.V)(),[l,r]=(0,n.useState)(!1);return n.createElement(u.default,{wrapperClassName:A},n.createElement(h,null),n.createElement("div",{className:L},a&&n.createElement(T,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),n.createElement(x,{hiddenSidebarContainer:l},t)))}var H=a(89481),M=a(26145);function F(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(M.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function B(e){const{versionMetadata:t}=e,a=(0,d.hI)(e);if(!a)return n.createElement(H.default,null);const{docElement:i,sidebarName:u,sidebarItems:m}=a;return n.createElement(n.Fragment,null,n.createElement(F,e),n.createElement(r.FG,{className:(0,l.default)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(c.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(w,null,i)))))}},54677:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(67294),l=a(86010),r=a(18015),o=a(82306),i=a(35022),d=a(6725);const c=e=>{let{sidebar:t,path:a}=e;const o=(0,i.e)();return n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(d.default,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function s(e){return n.createElement(o.Zo,{component:c,props:e})}const u=n.memo(s)},6725:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),l=a(67294),r=a(55132),o=a(33387),i=a(86010),d=a(18015),c=a(85919),s=a(88746),u=a(71699),m=a(43399);const f="menuExternalLink_NmtK";function p(e){let{item:t,onItemClick:a,activePath:r,level:o,index:p,...b}=e;const{href:h,label:_,className:E,autoAddBaseUrl:g}=t,v=(0,c._F)(t,r),k=(0,u.default)(h);return l.createElement("li",{className:(0,i.default)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",E),key:_},l.createElement(s.default,(0,n.Z)({className:(0,i.default)("menu__link",!k&&f,{"menu__link--active":v}),autoAddBaseUrl:g,"aria-current":v?"page":void 0,to:h},k&&{onClick:a?()=>a(t):void 0},b),_,!k&&l.createElement(m.Z,null)))}const b="menuHtmlItem_M9Kj";function h(e){let{item:t,level:a,index:n}=e;const{value:r,defaultStyle:o,className:c}=t;return l.createElement("li",{className:(0,i.default)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(a),o&&[b,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:r}})}function _(e){let{item:t,...a}=e;switch(t.type){case"category":return l.createElement(o.Z,(0,n.Z)({item:t},a));case"html":return l.createElement(h,(0,n.Z)({item:t},a));default:return l.createElement(p,(0,n.Z)({item:t},a))}}function E(e){let{items:t,...a}=e;return l.createElement(r.D,null,t.map(((e,t)=>l.createElement(_,(0,n.Z)({key:t,item:e,index:t},a)))))}const g=(0,l.memo)(E)},38238:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={chevron:"chevron_How5"}},22566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={root:"root_jG9K"}},37138:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={sidebar:"sidebar_UEyd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar__00c",sidebarHidden:"sidebarHidden_F1ZE",sidebarLogo:"sidebarLogo_Ydl9"}}}]);