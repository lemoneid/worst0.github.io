(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8410],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return k},kt:function(){return g}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),m=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},k=function(t){var n=m(t.components);return a.createElement(u.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(e),g=r,c=d["".concat(u,".").concat(g)]||d[g]||o[g]||l;return e?a.createElement(c,i(i({ref:n},k),{},{components:e})):a.createElement(c,i({ref:n},k))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},81213:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return o}});var a=e(22122),r=e(19756),l=(e(67294),e(3905)),i=["components"],p={id:"A1.CBasic",title:"A1.CBasic","typora-root-url":"../"},u={unversionedId:"Programming_Language/A1.CBasic",id:"Programming_Language/A1.CBasic",isDocsHomePage:!1,title:"A1.CBasic",description:"[TOC]",source:"@site/docs/4.Programming_Language/A1.C-basic.md",sourceDirName:"4.Programming_Language",slug:"/Programming_Language/A1.CBasic",permalink:"/Programming_Language/A1.CBasic",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/4.Programming_Language/A1.C-basic.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"A1.CBasic",title:"A1.CBasic","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"D1.EP",permalink:"/Online_Judge/D1.EP"},next:{title:"A2.Cimprove",permalink:"/Programming_Language/A2.Cimprove"}},m=[{value:"Linux",id:"linux",children:[]},{value:"C\u8bed\u8a00\u8bed\u6cd5",id:"c\u8bed\u8a00\u8bed\u6cd5",children:[{value:"\u57fa\u672c\u6ce8\u610f\u4e8b\u9879",id:"\u57fa\u672c\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[]},{value:"\u8d44\u6599",id:"\u8d44\u6599",children:[]}]},{value:"\u82f1\u8bed",id:"\u82f1\u8bed",children:[]}],k={toc:m};function o(t){var n=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[TOC]"),(0,l.kt)("h1",{id:"c\u8bed\u8a00\u57fa\u7840"},"C\u8bed\u8a00\u57fa\u7840"),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("p",null,"Linux\u73af\u5883\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential\n")),(0,l.kt)("p",null,"\u547d\u4ee4\u540e - \u5f00\u5934\u7684\u53c2\u6570\u90fd\u662f\u547d\u4ee4\u7684\u914d\u7f6e\u9879\u3002"),(0,l.kt)("p",null,"\u7f16\u8bd1 gcc -o Program main.c \u4f1a\u751f\u6210 program exe\u6587\u4ef6"),(0,l.kt)("p",null,"\u82e5\u4f7f\u7528 gcc main.c  \u9ed8\u8ba4\u751f\u6210 a.out exe \u6587\u4ef6"),(0,l.kt)("h2",{id:"c\u8bed\u8a00\u8bed\u6cd5"},"C\u8bed\u8a00\u8bed\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u672c\u6ce8\u610f\u4e8b\u9879"},"\u57fa\u672c\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"main"),"\uff0c\u901a\u5e38\u8ba4\u4e3a\u662fC\u8bed\u8a00\u7684\u7a0b\u5e8f\u5165\u53e3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"C\u8bed\u8a00\u547d\u540d"),"\uff1a\u5b57\u6bcd\u3001\u6570\u5b57(\u4e0d\u53ef\u5f00\u5934)\u3001\u4e0b\u5212\u7ebf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f5c\u7528\u57df"),"\uff1a\u5916\u58f0\u660e\uff08\u4f5c\u7528-\u5f53\u524d\u6240\u5728\u53ca\u5176\u5185\u90e8-\u4f5c\u7528\u57df\uff09\uff0c\u91cc\u5bf9\u5916\u53ef\u8d4b\u503c\u3002 \u91cc\u58f0\u660e\u4e0d\u5bf9\u5916\u4ea7\u5f71\u54cd\u3002"),(0,l.kt)("p",null,"pirnt \u6253\u5370\uff1b f(format) \u683c\u5f0f\uff1b %d,c,f,lf,e;g:\u5b9e\u6570;%","*",".*:\u81ea\u5b9a\u4e49;%x:\u8fdb\u5236;\u683c\u5f0f\u5360\u4f4d\u7b26"),(0,l.kt)("p",null," \u5706\u62ec\u53f7 ( )\u3001\u65b9\u62ec\u53f7 ","[ ]","\u3001\u82b1\u62ec\u53f7 { }\u3001\u65b9\u5934\u62ec\u53f7\u3010\u3011\u3001\u7a7a\u5fc3\u65b9\u5934\u62ec\u53f7\u3016\u3017\u3001\u516d\u89d2\u62ec\u53f7\u3014\u3015"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'scanf(" I want %c",& );')," \u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"I want a")," \u65f6\uff0cscanf\u5f97\u5230\u7684\u503c\u662f ==a== "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"digit += (2 + (digit % 2 -1)); "),"  \u6574\u6570\u53d8\u5947\u6570\uff1b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f62\u53c2"),"\uff1a\u5b9a\u4e49\u51fd\u6570\uff08\u5f62\u53c2\uff09\u4e2d\uff1b\u5b9e\u53c2\uff1a\u8c03\u7528\u51fd\u6570\uff08\u5b9e\u53c2\uff09\u4f20\u53c2\uff1b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570\u5730\u5740\u53ef\u505a\u51fd\u6570\u53c2\u6570"),(0,l.kt)("inlineCode",{parentName:"p"},":int g(float (*f)(int), int a)"),"\u5185\u90e8\u8c03\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"f(int)"),"  \u4f20\u53c2",(0,l.kt)("inlineCode",{parentName:"p"},"g(func,number);")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b8f\u5b9a\u4e49"),"\u53ef\u5e26\u53c2\u6570\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"#define MAX(a,b) a>b?a:b;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32"),"\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"char string[ ]={' Y','Z','W','\\0'} "),";\u7b49\u4ef7\u4e8e  ",(0,l.kt)("inlineCode",{parentName:"p"},'char string[ ] = "YZW"'),";"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'char string[ ] = "Hello"')," ; ",(0,l.kt)("inlineCode",{parentName:"p"},'char *string2  = "Hello"'),":\u5b9e\u9645\u662f\u5728string2\u53d8\u91cf\u4e2d\u4fdd\u5b58",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello" ')," \u8fd9\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u5728\u5185\u5b58\u7684\u5730\u5740\u3002",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello"')," \u4e3a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\uff0c\u65e0\u6cd5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"string2"),"\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u4fee\u6539\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string"),'\u7684\u5730\u5740\u662f\u5185\u5b58\u6808\u533a\u7684\u5730\u5740\uff0cstring2\u662f\u76f4\u63a5\u5173\u8054\u5230 `"Hello" \u5b57\u7b26\u4e32\u5b57\u9762\u91cf \u5728\u5b57\u9762\u91cf\u6c60\u4e2d\u7684\u5730\u5740;\u4e24\u8005\u4e0d\u540c\uff1b'),(0,l.kt)("p",null,"0XEOUL\u662f\u5408\u6cd5\u6574\u6570\u578b\u53d8\u91cf\uff1b0x:\u5341\u516d\u8fdb\u5236; U:\u65e0\u7b26\u53f7; L:\u957f\u6574\u6570;"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7edf\u8ba1\u5b57\u7b26\u4e32"),"\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"while((c=getchar())!='\\n')"),";  "),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},'for(; ;){scanf("%c",&string[i]);}')),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u6570\u636e\u7684\u683c\u5f0f\u5316"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"sprintf"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"int sprintf(char *string, char *format [,argument,...]);")," "),(0,l.kt)("p",null," string:\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u88ab\u5199\u5165\u7684\u5b57\u7b26\u4e32;format:\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5199\u5165\u7684\u683c\u5f0f; \u6ce8\u610f:string\u7684\u7a7a\u95f4\uff0c\u9632\u6b62\u6ea2\u51fa"),(0,l.kt)("p",null," eg ",(0,l.kt)("inlineCode",{parentName:"p"},'sprintf(information,"%s. He is %d-year-old",gender,age);')),(0,l.kt)("p",null,"strlen():\u4e0d\u5305\u62ec'\\0'; ",(0,l.kt)("inlineCode",{parentName:"p"},"strcpy(char* dest,char* source)")," \u548c strncpy:\u590d\u5236\u524dn\u4e2a\u5b57\u7b26;"),(0,l.kt)("p",null," strcat:strcat\u51fd\u6570\u5c06\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u5b57\u7b26\u4e32(==\u542b\\0== )\u62f7\u8d1d\u5230\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u5b57\u7b26\u4e32\\0\u6240\u5728\u5185\u5b58\u4f4d\u7f6e\u53ca\u4e4b\u540e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b57\u5178\u5e8f"),":\u6839\u636e\u5b57\u7b26\u5728ASCII\u7801\u4e2d\u7684\u7f16\u7801\u503c; \u7528\u6765\u6bd4\u8f83\u5b57\u7b26\u4e32\u5927\u5c0f;"),(0,l.kt)("p",null,"\u63a5\u6536\u591a\u4e2a\u5b57\u7b26\u4e32: gets();puts();"),(0,l.kt)("p",null,"\u6307\u9488:\u50a8\u5b58\u5730\u5740\u7684\u53d8\u91cf;"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5206\u914d\u5185\u5b58"),":"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6808\u533a(stack)"),":\u6211\u4eec\u5e73\u65f6\u58f0\u660e\u5c40\u90e8\u53d8\u91cf\u3001\u7ed9\u5c40\u90e8\u53d8\u91cf\u8d4b\u503c\u7684\u65f6\u5019\u5c31\u5728\u4f7f\u7528\u8fd9\u90e8\u5206\u7684\u5185\u5b58 \u3002C\u8bed\u8a00\u7a0b\u5e8f\u5728\u7f16\u8bd1\u65f6\u4f1a\u88ab\u5206\u914d\u5230\u5185\u5b58\u4e0a\u7684\u4e00\u7247\u6709\u9650\u7684\u8fde\u7eed\u533a\u57df,\u8fd9\u90e8\u5206\u5185\u5b58\u4f1a\u88ab\u7528\u4e8e\u5b58\u50a8\u5c40\u90e8\u53d8\u91cf(\u5728\u67d0\u4e00\u4e2a\u51fd\u6570\u5185\u58f0\u660e\u7684\u53d8\u91cf)\u7684\u503c\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u5806\u533a(heap)"),' :\u90e8\u5206\u7684\u5185\u5b58\u662f\u6211\u4eec\u901a\u8fc7\u7a0b\u5e8f\u624b\u52a8\u5730\u5411\u7cfb\u7edf\u7533\u8bf7\u7684\u3002\u6808\u533a\u5185\u5b58\u5927\u5c0f\u7f16\u8bd1\u65f6\u5c31\u5df2\u7ecf\u88ab\u9650\u5236,\u5982\u679c\u4f7f\u7528\u8d85\u8fc7\u9650\u5236\u7684\u5185\u5b58\u5c31\u4f1a\u51fa\u73b0"\u6ea2\u51fa"\u7684\u60c5\u51b5\u3002\n\u800c\u5806\u533a\u7684\u5185\u5b58\u53ef\u4ee5\u4e00\u76f4\u88ab\u7533\u8bf7\u3001\u4f7f\u7528,\u76f4\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u6709\u6548\u5185\u5b58\u65e0\u6cd5\u518d\u88ab\u7533\u8bf7\u4e3a\u6b62,\u76f8\u6bd4\u4e4b\u4e0b,\u5806\u533a\u63a7\u5236\u8d77\u6765\u66f4\u4e3a\u7075\u6d3b\u3002\n',(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u533a(\u6216\u4e3a\u9759\u6001\u533astatic storage area )"),' ,\u7a0b\u5e8f\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u548c\u9759\u6001\u53d8\u91cf\u90fd\u88ab\u5b58\u50a8\u5728\u8fd9\u5757\u5185\u5b58\u533a\u57df\u4e2d\u3002\u8fd9\u5757\u5185\u5b58\u6211\u4eec\u65e2\u4e0d\u8bf4\u5b83\u662f"\u6808\u533a",\u4e5f\u4e0d\u662f"\u5806\u533a"\u3002'),(0,l.kt)("p",null,"\u4e24\u4e2a\u6807\u51c6\u5e93malloc.h\u6216stdlib.h: \u90fd\u5b9a\u4e49\u4e86\u7533\u8bf7\u3001\u7ba1\u7406\u5806\u533a\u4e0a\u5185\u5b58\u7684\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"int *p;p = (int *) malloc (sizeof(int)*increase)"),":   ",(0,l.kt)("inlineCode",{parentName:"p"},"malloc"),"\u8fd4\u56de\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"void*"),"\u7c7b\u578b`"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"(int *)calloc(increase,sizeof(int))"),"\u51fd\u6570\u7533\u8bf7\u7684\u5185\u5b58\u7a7a\u95f4\u90fd\u521d\u59cb\u5316\u4e3a0;\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"malloc"),"\u672a\u88ab\u521d\u59cb\u5316\u3002calloc\u9002\u5408\u4e3a\u6570\u7ec4\u7533\u8bf7\u7a7a\u95f4arg1:\u6570\u7ec4\u5143\u7d20\u6570\u91cf;arg2:\u5143\u7d20\u7a7a\u95f4\u5927\u5c0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"free(ptr); ptr = NULL;"),"\u907f\u514d\u9519\u8bef\u4f7f\u7528ptr\u6307\u9488\u8bbf\u95ee\u5230\u5730\u5740;"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void *")," \u7c7b\u578b\u6307\u9488\u53ef\u88ab\u4efb\u610f\u6307\u9488\u53d8\u91cf\u8d4b\u503c\uff08\u9690\u5f0f\u8f6c\u6362\uff09;"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sizeof"),"\u8fd4\u56de\u64cd\u4f5c\u6570\u5360\u2f64\u7528\u5185\u5b58\u7a7a\u95f4\u2f24\u5927\u2f29\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282 (byte)\u3002sizeof \u8fd4\u56de\u503c\u662f size_t \u7c7b\u578b"),(0,l.kt)("p",null,"\u9644: \u4e0d\u8981\u2f64\u7528 int \u4ee3\u66ff size_t\uff0c\u56e0\u4e3a\u5728 32 \u4f4d\u548c 64 \u4f4d\u5e73\u53f0 size_t \u2ed3\u957f\u5ea6\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362(type)"),(0,l.kt)("p",null,"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff1a\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u7cbe\u5ea6 int->long; float->double;"),(0,l.kt)("p",null,"long double > doulbe > float > long long > long > int > char > _Bool"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d4b\u503c\u548c\u521d\u59cb\u5316\u65f6\uff0c\u53f3\u64cd\u4f5c\u6570\u603b\u662f\u88ab\u8f6c\u6362\u6210\u5de6\u64cd\u4f5c\u6570\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570\u8c03\u2f64\u7528\u65f6\uff0c\u603b\u662f\u5c06\u5b9e\u53c2\u8f6c\u6362\u4e3a\u5f62\u53c2\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 return \u8868\u8fbe\u5f0f\u7ed3\u679c\u8f6c\u6362\u4e3a\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},'\u4efb\u4f55\u7c7b\u578b 0 \u503c\u548c NULL \u6307\u9488\u90fd\u89c6\u4e3a _Bool false\uff0c\u53cd\u4e4b\u4e3a true\u3002\n\u5c06\u5bbd\u7c7b\u578b\u8f6c\u6362\u4e3a\u7a84\u7c7b\u578b\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u5c1d\u8bd5\u4e22\u5f03\u2fbc\u9ad8\u4f4d\u6216\u8005\u56db\u820d\u4e94\u2f0a\u5165\u7b49\u2f3f\u624b\u6bb5\u8fd4\u56de\u2f00\u4e00\u4e2a "\u8fd1\u4f3c\u503c"\u3002')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",src:e(99578).Z})),(0,l.kt)("h4",{id:"c\u8bed\u8a00\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u5178\u578b\u5927\u5c0f\uff08\u5b57\u8282\u4e3a\u5355\u4f4d\uff09"},"C\u8bed\u8a00\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u5178\u578b\u5927\u5c0f\uff08\u5b57\u8282\u4e3a\u5355\u4f4d\uff09"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdint.h"),"\u4e2d\u5b9a\u4e49"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u7b26\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u65e0\u7b26\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"32\u4f4d"),(0,l.kt)("th",{parentName:"tr",align:null},"64\u4f4d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[signed]"," char"),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned char"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned short"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"unsigned long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"char*")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u786e\u5ea6 6"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u786e\u5ea6 15"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long double"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u786e\u5ea6 19 \u4f4d"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u57fa\u672cC\u6570\u636e\u7c7b\u578b\u7684\u5178\u578b\u5927\u5c0f\u5206\u914d\u7684\u5b57\u8282\u6570\u662f\u7531\u7f16\u8bd1\u5668\u5982\u4f55\u7f16\u8bd1\u6240\u51b3\u5b9a\u7684\uff0c\u5e76\u4e0d\u662f\u7531\u673a\u5668\u4f4d\u6570\u800c\u51b3\u5b9a\u7684\u3002")),(0,l.kt)("p",null,"ISOC99\u5f15\u5165\u4e86\u7c7b\u6570\u636e\u7c7b\u578b\uff0c\u5176\u6570\u636e\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u968f\u7f16\u8bd1\u5668\u548c\u673a\u5668\u8bbe\u7f6e\u800c\u53d8\u5316"),"\u3002\u5176\u4e2d\u5c31\u6709\u6570\u636e\u7c7b\u578bint32_t\u548cint64_t\uff0c\u5b83\u4eec\u5206\u522b\u4e3a4\u4e2a\u5b57\u8282\u548c8\u4e2a\u5b57\u8282\u3002",(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u786e\u5b9a\u5927\u5c0f\u7684\u6574\u6570\u7c7b\u578b\u662f\u7a0b\u5e8f\u5458\u51c6\u786e\u63a7\u5236\u6570\u636e\u8868\u793a\u7684\u6700\u4f73\u9014\u5f84\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f4d\u8fd0\u7b97"),"\uff1a\u6309\u4f4d\u53d6\u53cd(NOT):~;\u6309\u4f4d\u4e0e(AND):&; \u6309\u4f4d\u6216(OR):|;\u79fb\u4f4d(shift):<<\u5de6\u548c>>\u53f3,\u4e22\u5f03\u4f4d\u88650;\u6309\u4f4d\u5f02\u6216:^; "),(0,l.kt)("p",null,"\u7ed3\u6784\u4f53"),(0,l.kt)("p",null,"\u521d\u59cb\u5316 struct name var = {\u4f9d\u6b21 }\uff1b"),(0,l.kt)("p",null,"\u7ed3\u5408\u4f53\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"union {\n    struct {\n        unsigned char b1:1;\n        unsigned char b2:1;\n        unsigned char b3:1;\n        unsigned char b4:1;\n        unsigned char reserved:4;\n    } bits;\n    unsigned char byte;\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc:1\u3001:4\u8868\u793a\u5192\u53f7\u524d\u7684\u53d8\u91cf\u53ea\u9700\u8981\u5360 11 \u4e2a\u548c 44 \u4e2a\u4e8c\u8fdb\u5236\u4f4d\uff0c\u800c\u4e0d\u6309\u7167char\u7c7b\u578b\u9ed8\u8ba4\u7684\u5b57\u8282\u6570\u5360\u7528\u5185\u5b58\u3002\u8fd9\u6837\uff0c\u7528\u8fd9\u4e2a\u7c7b\u578b\u751f\u6210\u7684\u53d8\u91cf\u5c31\u53ef\u4ee5\u88ab\u6211\u4eec\u5c31\u6309\u5b57\u8282\u6216\u8005\u6309\u4f4d\u8fdb\u884c\u8bbf\u95ee\u548c\u4f7f\u7528\u4e86\uff08\u8fd9\u4e2a\u6982\u5ff5\u88ab\u79f0\u4e3a \u4f4d\u57df\uff08bit field\uff09\uff0c\u5728\u5176\u5b83\u573a\u666f\u4e0b\u4e5f\u53ef\u4ee5\u88ab\u4f7f\u7528"),(0,l.kt)("p",null,"\u679a\u4e3e"),(0,l.kt)("p",null,"\u7cfb\u7edf\u9ed8\u8ba4\u7f16\u53f7\u4ece0\u5f00\u59cb\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"enum week {\n    SUNDAY,\n    MONDAY,\n    TUESDAY,\n    WEDNESDAY,\n    THURSDAY,\n    FRIDAY,\n    SATURDAY\n};\nenum week exam_date;\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528MONDAY\u5219\u4f1a\u76f8\u5f53\u4e8e\u4f7f\u7528\u4e862\uff0c\u6bcf\u4e00\u4e2a\u6210\u5458\u90fd\u6bd4\u4e4b\u524d\u7f16\u53f7\u591a1\u3002"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5c06SUNDAY\u548cWEDNESDAY\u90fd\u7f16\u53f7\u4e3a1\u7684\u65f6\u5019\uff0c\u4f7f\u7528MONDAY\u6216\u8005\u4f7f\u7528THURSDAY\u5219\u90fd\u4f1a\u76f8\u5f53\u4e8e\u4f7f\u7528\u4e862\u3002"),(0,l.kt)("p",null,"\u58f0\u660e\u4e86\u4e00\u4e2aenum week\u7c7b\u578b\u7684\u53d8\u91cfexam_date\uff0c\u5b83\u53ea\u80fd\u53d6\u5b9a\u4e49\u8fc7\u7684\u679a\u4e3e\u7c7b\u578b\u4e2d\u7684\u6210\u5458\u540d\u4f5c\u4e3a\u503c\uff0c\u5982exam_date = TUESDAY;\u3002 \u4e0estruct\u3001union\u4ee5\u53ca\u5176\u5b83\u7c7b\u578b\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u7ed9\u679a\u4e3e\u7c7b\u578b\u901a\u8fc7typedef\u8bbe\u7f6e\u7c7b\u578b\u522b\u540d\u3002"),(0,l.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u7531\u6574\u6570\u6210\u5458\u7ec4\u6210\uff0c\u7f16\u53f7\u4e0d\u53ef\u80fd\u662f\u975e\u6574\u6570\u3002\u4e0d\u53ef\u7528\u7ed3\u6784\u4f53\uff0c\u5171\u7528\u4f53\u6210\u5458\uff1b"),(0,l.kt)("p",null,"==\u6253\u5370",(0,l.kt)("inlineCode",{parentName:"p"},"%")," \u9700\u8981%%== "),(0,l.kt)("p",null,"==\u5b57\u7b26\u4e32\u8d4b\u503c\u9700\u8981\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"string.h\u5e93\u6587\u4ef6"),"\uff0c\u4e0d\u53ef\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"="),"=="),(0,l.kt)("p",null,"==\u5224\u65ad\u5947\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"begin & 1 ")," \u4e3a1 \uff0c\u5219\u662f\u5947\u6570\u3002== \u4f18\u5148\u7ea7\uff0c\u8fd0\u7b97\u901f\u5ea6(\u4f4d>\u56db\u5219>mod)\uff0c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"int "),"\u6700\u5927\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"INT_MIN \u548c INT_MAX\nint max = (1<<31)-1;//\u8fd9\u91cc\u8981\u52a0\u62ec\u53f7\uff0c\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\nint a=(1<<31)-2;\n@@  \u6700\u5c0f\n    int min = 1<<31;//\u7531\u4e8eint\u662f32\u4f4d\u7684\n@@ \u6700\u5927\n    int b=0x7fffffff;\n")),(0,l.kt)("p",null,"\u7ed3\u6784\u4f53\u5b9a\u4e49\u65f6\uff0c\u6210\u5458\u5143\u7d20\u987a\u5e8f\u5f71\u54cd\u7ed3\u6784\u4f53\u6240\u5360\u5185\u5b58----==\u504f\u79fb\u91cf==;\u6210\u5458\u5143\u7d20\u4e0d\u53ef\u4ee5\u6709\u7c7b\u578b\u4e3a\u5f53\u524d\u7ed3\u6784\u4f53;"),(0,l.kt)("h5",{id:"\u5934\u9012\u5f52\uff0c\u5c3e\u9012\u5f52"},"\u5934\u9012\u5f52\uff0c\u5c3e\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int factorial(int n) {  //\u5934\u9012\u5f52\n    if (n == 1) {\n        return 1;\n    }\n \n    return factorial((n - 1) * n);\n}\n\nint factorial(int n, int product) { //\u5c3e\u9012\u5f52\n    if (n == 0) {\n        return product;\n    }\n    product = product * n;\n    return factorial(n - 1, product);\n}\n")),(0,l.kt)("h5",{id:"\u725b\u987f\u6cd5\u6c42\u65b9\u7a0b\u6839-\uff1b"},"\u725b\u987f\u6cd5\u6c42\u65b9\u7a0b\u6839 \uff1b"),(0,l.kt)("h5",{id:"\u4e8c\u5206\u6cd5\u6c42\u65b9\u7a0b\u89e3\uff1b"},"\u4e8c\u5206\u6cd5\u6c42\u65b9\u7a0b\u89e3\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"double bisection(int p, int q, double (*func)(int, int, double)) {\n    double x1 = -20;\n    double x2 = 20;\n    double x = 0;\n    while(fabs((*func)(p,q,x))>EPSILON)\n    {\n        x = (x1+x2)/2.0;\n        double fx1 = (*func)(p,q,x1);\n        double fx =  (*func)(p,q,x);\n        if(fx * fx1 < 0)\n        {x2 = x;}\n        else\n        {x1 = x;}       \n    }\n    return x;\n}\ndouble f(int p, int q, double x) {\n    return p * x + q;\n}\n")),(0,l.kt)("h5",{id:"\u6298\u534a\u67e5\u627e"},"\u6298\u534a\u67e5\u627e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"function BinarySearch(List, key)\n    left = 0, right = List.length - 1\n    while left <= right\n        mid = (left + right) / 2\n        if List[mid] is key\n            return mid\n        if List[mid] < key\n            left = mid + 1\n        else\n            right = mid - 1\n    return -1\n")),(0,l.kt)("h5",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"    part[0] = 1;\n    for (i = 1; i <= x; i++) {\n        part[i] = part[i -1] + i;\n    }\n")),(0,l.kt)("h5",{id:"\u6b27\u51e0\u91cc\u5f97\u6c42\u6700\u5927\u516c\u56e0\u6570"},"\u6b27\u51e0\u91cc\u5f97\u6c42\u6700\u5927\u516c\u56e0\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int gcd(int n, int m) {     //\u8c01\u5927\u8c01\u51cf    return (m<=n ? (m == n ? m:gcd(n-m,m)) :gcd(n,m-n));}int gcd(int a, int b) {      //    return (b ? gcd(b, a % b) : a);}\n")),(0,l.kt)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u6c49\u51fd\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u5f62\u5f0f\u53ca\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"absolute \u7edd\u5bf9\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"abs\uff0cfabs\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 \u6574\u6570\uff0c\u6d6e\u70b9\u6570\uff1bC\u8bed\u8a00\u4e2d\uff0cabs \u5728 stdlib.h\u5e93\u4e2d\uff1bfabs()\u5e94\u8be5\u5305\u542bmath\u3002 C++\u4e2d\uff0c\u53ea\u9700\u8981\u5305\u62eccmath")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"math.h\u5e93\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"power \u5e42"),(0,l.kt)("td",{parentName:"tr",align:null},"pow(a,n) \u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"pow(a,n) \u51fd\u6570,  \u5f00n\u65b9\u6839pow(x,1.0 / n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trigonometric function \u4e09\u89d2\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"sin,cos,tan,asin,acos,atan()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cc\u7cbe\u5ea6:PI = acos(-1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logarithmic function \u5bf9\u6570\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"log():\u4ee5e\u4e3a\u5e95 ln",(0,l.kt)("em",{parentName:"td"},";s log10(): \u4ee510\u4e3a\u5e95 lg")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6362\u5e95\u516c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eil/floor function \u4e0a/\u4e0b\u53d6\u6574\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"ceil(); floor()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cc\u7cbe\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"square root function \u5e73\u65b9\u6839\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"sqrt();"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cc\u7cbe\u5ea6")))),(0,l.kt)("h3",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,l.kt)("p",null,"wiki\uff1b\u767e\u5ea6(\u963f\u91cc)+\u8c37\u6b4c \u7f16\u7801\u89c4\u8303\uff1bc\uff0cc++ reference\uff1bC\u8bed\u8a00\u6838\u5fc3\u6280\u672f\uff0c\u7cbe\u5ea69,10\u7ae0\uff1b"),(0,l.kt)("h2",{id:"\u82f1\u8bed"},"\u82f1\u8bed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u82f1\u8bed"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6c49\u8bd1"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"digit"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6570\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"divisor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u56e0\u5b50"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7d20\u6570"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"argument/parameter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5199arg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"matrix"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u77e9\u9635"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"format"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pointer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6307\u9488"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53d8\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"bisection"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e8c\u5206"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"binary"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e8c\u8fdb\u5236\uff0c\u4e8c\u5143\u7684"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"memory leak"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5185\u5b58\u6cc4\u6f0f"),(0,l.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0},99578:function(t,n,e){"use strict";n.Z=e.p+"assets/images/6baa8d67540351c7839ecc9a203535d3b47a47ee-3b9b9717d41f72595218dd520a6e003d.png"}}]);