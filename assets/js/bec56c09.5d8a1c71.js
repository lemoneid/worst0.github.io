"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1658],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),r=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=r(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=r(t),d=i,o=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(o,c(c({ref:n},g),{},{components:t})):a.createElement(o,c({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,c=new Array(l);c[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var r=2;r<l;r++)c[r]=t[r];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14935:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return g},default:function(){return u}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),c=["components"],p={id:"A1.\u4e34\u65f6",title:"A1.\u4e34\u65f6","typora-root-url":"../"},s="\u4e34\u65f6",r={unversionedId:"other/A1.\u4e34\u65f6",id:"other/A1.\u4e34\u65f6",isDocsHomePage:!1,title:"A1.\u4e34\u65f6",description:"`shell",source:"@site/docs/99.other/A1.\u4e34\u65f6.md",sourceDirName:"99.other",slug:"/other/A1.\u4e34\u65f6",permalink:"/other/A1.\u4e34\u65f6",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/99.other/A1.\u4e34\u65f6.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"A1.\u4e34\u65f6",title:"A1.\u4e34\u65f6","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"F1.\u7269\u7406\u8ba4\u8bc6",permalink:"/Science/F1.\u7269\u7406\u8ba4\u8bc6"},next:{title:"B1.\u4e34\u65f6\u7b14\u8bb0",permalink:"/other/B1.\u4e34\u65f6\u7b14\u8bb0"}},g=[],m={toc:g};function u(e){var n=e.components,p=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e34\u65f6"},"\u4e34\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""\n"""""\u65b0\u6587\u4ef6\u6807\u9898\n""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""\n"\u65b0\u5efa.c,.h,.sh,.java\u6587\u4ef6\uff0c\u81ea\u52a8\u63d2\u5165\u6587\u4ef6\u5934 \nautocmd BufNewFile *.cpp,*.[ch],*.sh,*.rb,*.java,*.py exec ":call SetTitle()" \n""\u5b9a\u4e49\u51fd\u6570SetTitle\uff0c\u81ea\u52a8\u63d2\u5165\u6587\u4ef6\u5934 \nfunc SetTitle() \n    "\u5982\u679c\u6587\u4ef6\u7c7b\u578b\u4e3a.sh\u6587\u4ef6 \n    if &filetype == \'sh\' \n        call setline(1,"\\#!/bin/bash") \n        call append(line("."), "") \n    elseif &filetype == \'python\'\n        call setline(1,"#!/usr/bin/env python")\n        call append(line("."),"# coding=utf-8")\n        call append(line(".")+1, "") \n\n    elseif &filetype == \'ruby\'\n        call setline(1,"#!/usr/bin/env ruby")\n        call append(line("."),"# encoding: utf-8")\n        call append(line(".")+1, "")\n\n"    elseif &filetype == \'mkd\'\n"        call setline(1,"<head><meta charset=\\"UTF-8\\"></head>")\n    else \n        call setline(1, "/*************************************************************************") \n        call append(line("."), "    > File Name: ".expand("%")) \n        call append(line(".")+1, "  > Author: yanzhiwei") \n        call append(line(".")+2, "  > Mail: 1931248856@qq.com") \n        call append(line(".")+3, "  > Created Time: ".strftime("%c")) \n        call append(line(".")+4, " ************************************************************************/") \n        call append(line(".")+5, "")\n    endif\n    if expand("%:e") == \'cpp\'\n        call append(line(".")+6, "#include <iostream>")\n        call append(line(".")+7, "#include <algorithm>")\n        call append(line(".")+8, "#include <cstdio>")\n        call append(line(".")+9, "#include <cstdlib>")\n        call append(line(".")+10, "#include <cmath>")\n        call append(line(".")+11, "#include <cstring>")\n        call append(line(".")+12, "#include <queue>")\n        call append(line(".")+13, "#include <vector>")\n        call append(line(".")+14, "#include <map>")\n        call append(line(".")+15, "using namespace std;")\n        call append(line(".")+16, "")\n    endif\n    if &filetype == \'c\'\n        call append(line(".")+6, "#include <stdio.h>")\n        call append(line(".")+7, "#include <stdlib.h>")\n        call append(line(".")+8, "#include <string.h>")\n        call append(line(".")+9, "#include <math.h>")\n        call append(line(".")+10, "#include <time.h>")\n        call append(line(".")+11, "")\n    endif\n    if expand("%:e") == \'h\'\n        call append(line(".")+6, "#ifndef _".toupper(expand("%:r"))."_H")\n        call append(line(".")+7, "#define _".toupper(expand("%:r"))."_H")\n        call append(line(".")+8, "#endif")\n    endif\n    if &filetype == \'java\'\n        call append(line(".")+6,"public class ".expand("%:r"))\n        call append(line(".")+7,"")\n    endif\n    "\u65b0\u5efa\u6587\u4ef6\u540e\uff0c\u81ea\u52a8\u5b9a\u4f4d\u5230\u6587\u4ef6\u672b\u5c3e\nendfunc \nautocmd BufNewFile * normal G\n\n\n\n')),(0,l.kt)("p",null,"\u4efb\u52a1 \u4efb\u52a1\u63cf\u8ff0\uff1a\u8bbe\u8ba1\u4e00\u4e2a\u7c7b\uff0c\u7528\u4e8e\u68c0\u67e5 int \u6570\u7ec4\u5728\u4f7f\u7528\u65f6\u4e0b\u6807\u662f\u5426\u8d8a\u754c\u7684\u7c7b\uff0c\u5982\u8d8a\u754c\u7ed9\u51fa\u63d0\u793a\uff0c \u8981\u6c42\u5b9e\u73b0 const \u548c\u975e const \u4e24\u79cd\u5f62\u5f0f\uff0c\u5728 main \u4e2d\u9a8c\u8bc1\u3002 \u53c2\u8003\u8bbe\u8ba1: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyArray{\n    private:    int *m_p;//\u6570\u7ec4\u7a7a\u95f4\u7684\u8d77\u59cb\u5730\u5740 size_t m_len;\n              //\u7533\u8bf7\u7684\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\n    public:    MyArray(size_t n);//n \u8868\u793a\u7533\u8bf7\u7684\u52a8\u6001\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u3002    \n    ~MyArray();  \n    MyArray(const MyArray &a);   \n    MyArray &operator=(const MyArray &a);    \n    int &operator[](size_t index);    \n    const int &operator[](size_t index) const;};\n    \n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20201120202104621",src:t(30973).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20201020204735650",src:t(64242).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20201020192407652",src:t(31114).Z})),(0,l.kt)("p",null,"\u5bbf\u820d6\u4e2a\u4eba\uff0c3\u628a\u4f1e\uff0c\u8981\u6c42\u6bcf\u4e2a\u51fa\u53bb\u4e09\u6b21\uff1b\u591a\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u6bcf\u6b210,1,sleep(1)\u79d2\u3002\u968f\u673a\u6570"),(0,l.kt)("p",null,"\u94f6\u884c\u5bb6\u7b97\u6cd5\uff0cpv\u64cd\u4f5c\uff0c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200916195037075",src:t(12334).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200916195026896",src:t(86088).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200809162830617",src:t(46051).Z})),(0,l.kt)("p",null,"ctags -I ",(0,l.kt)("strong",{parentName:"p"},"THROW _I "),"attribute_pure",(0,l.kt)("strong",{parentName:"p"}," -I "),"nonnull -I ",(0,l.kt)("strong",{parentName:"p"},"attribute")," --file-scope=yes --langmap=c:+.h --languages=c,c++ --links=yes --c-kinds=+p --c++-kinds=+p --fields=+iaS --extra=+q -f ~/.vim/systags /usr/include/* /usr/include/x86_64-linux-gnu/sys/"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200809120206056",src:t(30103).Z})),(0,l.kt)("p",null,"\u5806\u533a\uff0c\u6808\u533a\uff0c\u4ee3\u7801\u533a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200808151327353",src:t(91949).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200801204757794",src:t(83592).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200704155612196",src:t(37711).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200623193533890",src:t(83455).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200621184812631",src:t(43521).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200620200025187",src:t(83215).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200621180554553",src:t(74973).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200613153142100",src:t(17193).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200611211049148",src:t(60229).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200611210311158",src:t(11796).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200611191542192",src:t(50463).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200609190019441",src:t(15368).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200607164207903",src:t(6188).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200606185457852",src:t(2800).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200602203848366",src:t(59836).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200531205655580",src:t(44507).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200531202009734",src:t(92438).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200530182542947",src:t(28780).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200530145812043",src:t(33980).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200526213616176",src:t(74482).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200526211051006",src:t(94065).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200505195306884",src:t(18706).Z})),(0,l.kt)("p",null,"18Line"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200502193545273",src:t(56049).Z})),(0,l.kt)("p",null,"\u6307\u9488\u6570\u7ec4"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200517205607933",src:t(62754).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200523204513932",src:t(28740).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200524181844937",src:t(18182).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200524183350455",src:t(8369).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200524210522132",src:t(54577).Z})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0},56049:function(e,n,t){n.Z=t.p+"assets/images/image-20200502193545273-1589068225160-9b45865a0c3710861da01126e1d80c85.png"},18706:function(e,n,t){n.Z=t.p+"assets/images/image-20200505195306884-1d854a6270ff2157af3dd9f0c3d65029.png"},62754:function(e,n,t){n.Z=t.p+"assets/images/image-20200517205607933-52bd2098f1697562d57c568401354872.png"},28740:function(e,n,t){n.Z=t.p+"assets/images/image-20200523204513932-e3dce91ed9afc1341609951ce51b36e4.png"},18182:function(e,n,t){n.Z=t.p+"assets/images/image-20200524181844937-3445dd83465fdc304999f4b607597e35.png"},8369:function(e,n,t){n.Z=t.p+"assets/images/image-20200524183350455-f246cda9e232a33bf5b8c141a55409c2.png"},54577:function(e,n,t){n.Z=t.p+"assets/images/image-20200524210522132-1c2317f3e1194ca47e2ff33679754ff7.png"},94065:function(e,n,t){n.Z=t.p+"assets/images/image-20200526211051006-c8313b9e44c9380339145c101ceaf27b.png"},74482:function(e,n,t){n.Z=t.p+"assets/images/image-20200526213616176-f43879cadde2bd70e5be1e7209662d35.png"},33980:function(e,n,t){n.Z=t.p+"assets/images/image-20200530145812043-e7737e5c0e2bf4503fcc98ec7706dcc4.png"},28780:function(e,n,t){n.Z=t.p+"assets/images/image-20200530182542947-96afef26b6d8e2057d8a64bfa54dbd2a.png"},92438:function(e,n,t){n.Z=t.p+"assets/images/image-20200531202009734-63f3b2631f2bd1a66e40f6a86195f3d2.png"},44507:function(e,n,t){n.Z=t.p+"assets/images/image-20200531205655580-6e2d22c100c9259b255a5e249fd32ba2.png"},59836:function(e,n,t){n.Z=t.p+"assets/images/image-20200602203848366-309aa9c663f459bf7f540ccadfcdde67.png"},2800:function(e,n,t){n.Z=t.p+"assets/images/image-20200606185457852-98ef90b268f96153a1404e4eb2f73652.png"},6188:function(e,n,t){n.Z=t.p+"assets/images/image-20200607164207903-e3dee5b9609e92e743e655338e6eebf0.png"},15368:function(e,n,t){n.Z=t.p+"assets/images/image-20200609190019441-e63d411d5ce3a9c71d2a436759e12828.png"},50463:function(e,n,t){n.Z=t.p+"assets/images/image-20200611191542192-fb70ffa8210d3dc17cc9ca7c5b9b4d9c.png"},11796:function(e,n,t){n.Z=t.p+"assets/images/image-20200611210311158-3302d62bd8eacad1748d8d853a473b84.png"},60229:function(e,n,t){n.Z=t.p+"assets/images/image-20200611211049148-1b3aea18451c2d742affb11893a87263.png"},17193:function(e,n,t){n.Z=t.p+"assets/images/image-20200613153142100-4954471e4c88c79392121a8be5b05024.png"},83215:function(e,n,t){n.Z=t.p+"assets/images/image-20200620200025187-775a22241ec739a15d112e829603d9f7.png"},74973:function(e,n,t){n.Z=t.p+"assets/images/image-20200621180554553-67dce55f6ecbeb98fc081b803bc8cf93.png"},43521:function(e,n,t){n.Z=t.p+"assets/images/image-20200621184812631-ef1ee706f7982bd983b8f50d0b2e7b33.png"},83455:function(e,n,t){n.Z=t.p+"assets/images/image-20200623193533890-cba88e4f42fb123e36e6fc59d7ac6966.png"},37711:function(e,n,t){n.Z=t.p+"assets/images/image-20200704155612196-423ee99b6bb1acb8e464e09c343b0b5f.png"},83592:function(e,n,t){n.Z=t.p+"assets/images/image-20200801204757794-e24b0d69478bd31e25345604c853568d.png"},91949:function(e,n,t){n.Z=t.p+"assets/images/image-20200808151327353-d3481b52d9d66117e4e9c4464a717c19.png"},30103:function(e,n,t){n.Z=t.p+"assets/images/image-20200809120206056-3e30e19109d888f10bee18506c655fa5.png"},46051:function(e,n,t){n.Z=t.p+"assets/images/image-20200809162830617-6fb5a5c97d0cfd9ac1972e217fe4481d.png"},86088:function(e,n,t){n.Z=t.p+"assets/images/image-20200916195026896-362bbccd126f3579b168e5abb5458d5d.png"},12334:function(e,n,t){n.Z=t.p+"assets/images/image-20200916195037075-751f677d2dd323fe4f947110eed47946.png"},31114:function(e,n,t){n.Z=t.p+"assets/images/image-20201020192407652-798320b8c3f77f6320231aabbed37176.png"},64242:function(e,n,t){n.Z=t.p+"assets/images/image-20201020204735650-1f7a5be2795845398b760aaabf402916.png"},30973:function(e,n,t){n.Z=t.p+"assets/images/image-20201120202104621-5b33b0f1d19b9d02ce2246b8fe10893a.png"}}]);