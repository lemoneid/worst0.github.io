(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[354],{6979:function(e,n,t){"use strict";var r=t(2122),a=t(9756),o=t(7294),l=t(3935),u=t(2263),c=t(5977),s=t(4996),i=t(6742),f=t(9105),h=t(6397),m=t(7052),d=t(6747),C=t(5613),k=["contextualSearch"],g=null;function p(e){var n=e.hit,t=e.children;return o.createElement(i.Z,{to:n.url},t)}function b(e){var n=e.state,t=e.onClose,r=(0,h.Z)().generateSearchPageLink;return o.createElement(i.Z,{to:r(n.query),onClick:t},"See all ",n.context.nbHits," results")}function v(e){var n,i,h=e.contextualSearch,v=(0,a.Z)(e,k),E=(0,u.default)().siteMetadata,S=(0,C.Z)(),P=null!=(n=null==(i=v.searchParameters)?void 0:i.facetFilters)?n:[],Z=h?[].concat(S,P):P,w=Object.assign({},v.searchParameters,{facetFilters:Z}),O=(0,s.C)().withBaseUrl,y=(0,c.k6)(),F=(0,o.useRef)(null),M=(0,o.useState)(!1),R=M[0],x=M[1],I=(0,o.useState)(null),j=I[0],A=I[1],B=(0,o.useCallback)((function(){return g?Promise.resolve():Promise.all([t.e(763).then(t.bind(t,3763)),Promise.all([t.e(532),t.e(945)]).then(t.bind(t,6945)),Promise.all([t.e(532),t.e(210)]).then(t.bind(t,9846))]).then((function(e){var n=e[0].DocSearchModal;g=n}))}),[]),D=(0,o.useCallback)((function(){B().then((function(){x(!0)}))}),[B,x]),U=(0,o.useCallback)((function(){x(!1)}),[x]),V=(0,o.useCallback)((function(e){B().then((function(){x(!0),A(e.key)}))}),[B,x,A]),Y=(0,o.useRef)({navigate:function(e){var n=e.suggestionUrl;y.push(n)}}).current,q=(0,o.useRef)((function(e){return e.map((function(e){var n=document.createElement("a");return n.href=e.url,Object.assign({},e,{url:O(""+n.pathname+n.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(b,(0,r.Z)({},e,{onClose:U}))}}),[U]),L=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e}),[E.docusaurusVersion]);return(0,m.D)({isOpen:R,onOpen:D,onClose:U,onInput:V,searchButtonRef:F}),o.createElement(o.Fragment,null,o.createElement(f.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(d.a,{onTouchStart:B,onFocus:B,onMouseOver:B,onClick:D,ref:F}),R&&(0,l.createPortal)(o.createElement(g,(0,r.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:j,navigator:Y,transformItems:q,hitComponent:p,resultsFooterComponent:H,transformSearchClient:L},v,{searchParameters:w})),document.body))}n.Z=function(){var e=(0,u.default)().siteConfig;return o.createElement(v,e.themeConfig.algolia)}}}]);