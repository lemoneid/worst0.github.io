(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3085],{79366:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(71525),l=n(3905),c=n(3541),o=n(571),i=n(86700);t.default=function(e){var t=e.content,n=t.frontMatter,s=t.metadata,u=n.title,m=n.description,f=n.wrapperClassName,d=n.hide_table_of_contents,v=s.permalink;return r.createElement(a.Z,{title:u,description:m,permalink:v,wrapperClassName:null!=f?f:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},r.createElement("main",null,r.createElement("div",{className:"container container--fluid"},r.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--8 col--offset-2"},r.createElement("div",{className:"container"},r.createElement(l.Zo,{components:c.Z},r.createElement(t,null)))),!d&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(o.Z,{toc:t.toc})))))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],c=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,i=document.getElementsByClassName(e);a<i.length&&!o;){var s=i[a],u=s.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===m&&(l&&l.classList.remove(t),s.classList.add(t),c(s),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},r.createElement(i,{toc:t}))}},6979:function(e,t,n){"use strict";var r=n(22122),a=n(19756),l=n(67294),c=n(73935),o=n(52263),i=n(5977),s=n(44996),u=n(36742),m=n(99105),f=n(6397),d=n(57052),v=n(16747),h=n(95613),g=["contextualSearch"],E=null;function p(e){var t=e.hit,n=e.children;return l.createElement(u.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,r=(0,f.Z)().generateSearchPageLink;return l.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function k(e){var t,u,f=e.contextualSearch,k=(0,a.Z)(e,g),b=(0,o.default)().siteMetadata,Z=(0,h.Z)(),N=null!=(t=null==(u=k.searchParameters)?void 0:u.facetFilters)?t:[],S=f?[].concat(Z,N):N,_=Object.assign({},k.searchParameters,{facetFilters:S}),w=(0,s.C)().withBaseUrl,P=(0,i.k6)(),y=(0,l.useRef)(null),O=(0,l.useState)(!1),L=O[0],M=O[1],x=(0,l.useState)(null),R=x[0],B=x[1],F=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,83763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),I=(0,l.useCallback)((function(){F().then((function(){M(!0)}))}),[F,M]),A=(0,l.useCallback)((function(){M(!1)}),[M]),U=(0,l.useCallback)((function(e){F().then((function(){M(!0),B(e.key)}))}),[F,M,B]),j=(0,l.useRef)({navigate:function(e){var t=e.suggestionUrl;P.push(t)}}).current,z=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:w(""+t.pathname+t.hash)})}))})).current,D=(0,l.useMemo)((function(){return function(e){return l.createElement(C,(0,r.Z)({},e,{onClose:A}))}}),[A]),H=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",b.docusaurusVersion),e}),[b.docusaurusVersion]);return(0,d.D)({isOpen:L,onOpen:I,onClose:A,onInput:U,searchButtonRef:y}),l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+k.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(v.a,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:I,ref:y}),L&&(0,c.createPortal)(l.createElement(E,(0,r.Z)({onClose:A,initialScrollY:window.scrollY,initialQuery:R,navigator:j,transformItems:z,hitComponent:p,resultsFooterComponent:D,transformSearchClient:H},k,{searchParameters:_})),document.body))}t.Z=function(){var e=(0,o.default)().siteConfig;return l.createElement(k,e.themeConfig.algolia)}}}]);