var amenuOptions={menuId:"accordion",linkIdToMenuHtml:null,expand:"single",speed:200,license:"2a8e9"},amenu=new McAcdnMenu(amenuOptions);function McAcdnMenu(n){"use strict";"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this[s](/^\s+|\s+$/g,"")});var t,e,i,o="className",a="length",r="addEventListener",c="parentNode",d="nodeName",f="style",s="replace",u="height",l="display",p="clientHeight",m=document,v="createElement",w="getElementById",g="fromCharCode",h="charCodeAt",y=setTimeout,$=function(n,t){return m[n](t)},b=function(n,t){if("undefined"!=typeof getComputedStyle)var e=getComputedStyle(n,null);else e=n.currentStyle?n.currentStyle:n[f];return e[t]},H=function(n,t){return n.getElementsByTagName(t)},T=0,N=0,L=n.expand,k=0,M=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],U=function(n,t){for(var e=[],i=0;i<n[a];i++)e[e[a]]=String[g](n[h](i)-(t||3));return e.join("")},Z=function(n,t,e){n[r]?n[r](t,e,!1):n.attachEvent&&n.attachEvent("on"+t,e)},C=function(n,t){for(var e=n[a];e--;)if(n[e]===t)return!0;return!1},S=function(n,t){return C(n[o].split(" "),t)},x=function(n,t,e){S(n,t)||(n[o]?e?n[o]=t+" "+n[o]:n[o]+=" "+t:n[o]=t)},I=function(n,t){if(n[o]){for(var e="",i=n[o].split(" "),r=0,c=i[a];r<c;r++)i[r]!==t&&(e+=i[r]+" ");n[o]=e.trim()}},R=function(n){n[c].removeChild(n),n=null},B=function(n){if(n&&1==n.nodeType){var t=n.childNodes;if(t&&t[a])for(var e=t[a];e--;)3==t[e].nodeType&&""==t[e].nodeValue.trim()&&R(t[e]),B(t[e])}},K=function(n){n&&n.stopPropagation?n.stopPropagation():window.event&&(window.event.cancelBubble=!0)},X=function(n){n.s1=b(n,"marginTop"),n.s2=b(n,"marginBottom"),n.s3=b(n,"paddingTop"),n.s4=b(n,"paddingBottom"),n.s34=parseFloat(n.s3)+parseFloat(n.s4),n.s0=n[p]-n.s34+"px"},E=function(n){var e=n[f];e[u]=e.marginTop=e.marginBottom=e.paddingTop=e.paddingBottom="0px",y(function(){e[l]="none"},t+10)},Y=function(n){if(n[p])n.s0=n.Ht?n.Ht:n[p]-n.s34+"px",n[f][u]=n.s0,n[p],E(n),I(n.caret,"active");else{var e=n[f];G(n,0),e[l]="block",n.Ht?n.s0=n.Ht:(e[u]="auto",n.s0=n[p]-n.s34+"px"),e[u]="0px",n[p],G(n,1),function(n){var e=n[f];e[u]=n.s0,e.marginTop=n.s1,e.marginBottom=n.s2,e.paddingTop=n.s3,e.paddingBottom=n.s4,y(function(){G(n,0),n.Ht||(n[f][u]="auto"),n[p],G(n,1)},t)}(n),x(n.caret,"active")}},j=function(n){t?Y(n):function(n){n[p]?(I(n.caret,"active"),n[f][l]="none"):(x(n.caret,"active"),n[f][l]="block",n.Ht&&(n[f][u]=n.Ht))}(n)},z=function(n,e){for(var o,r=H(n,"li"),d=r[a];d--;)(o=r[d].subUl)&&(S(r[d],"active")?(x(o.caret,"active"),o.Ht&&(o[f][u]=o.Ht),e&&!o[p]&&j(o)):"all"==L||"alltop"==L&&o[c][c]==i?x(o.caret,"active"):(o[f][l]="none",t&&E(o)))},V=function(n){var t=n.target||n.srcElement;"DIV"==t[d]&&("LI"==t[c][d]?t=t[c]:"LI"==t[c][c][d]&&(t=t[c][c]));var e=t.subUl;if(e){if(("single"==L||N)&&!e[p])for(var i,o=t[c].children,r=0;r<o[a];r++)(i=o[r].subUl)&&i!=e&&i[p]>0&&j(i);if(e.Ht&&e[p])return;j(e)}},O=function(t){("LI"==t[d]||"A"==t[d])&&x(t,"active",1),(!t.id||t.id!=n.menuId)&&O(t[c])},q=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],G=function(n,e){t&&(n[f].transition=n[f].WebkitTransition="all "+(e?t:0)+"ms ease")},W=function(n,t){for(var e,i,r,c=n.childNodes,s=c[a];s--;)if(i=(e=c[s]).childNodes[a]>1?e.childNodes[1]:0,t&&x(e,"top",1),i){e.subUl=i,x(e,"has-sub"),X(i),(r=$(v,"div"))[o]="caret",t&&N&&(i.Ht=N,i[f].overflow="auto");var u=e.firstChild;u&&"DIV"==u[d]?i.caret=u.insertBefore(r,u.firstChild):i.caret=e.insertBefore(r,u),G(i,1),Z(e,"click",V),Z(i,"click",K),1==i.nodeType&&"UL"==i.nodeName&&W(i,0)}},A=function(t){J(n.license),this.a(t)},J=function(n){var t=function(n){return n.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"5555")}(document.domain.replace("www.","5555"));try{"function"==typeof atob&&function(n,t){var e=U(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="),n[a]+parseInt(n.charAt(1))).substr(0,3);"function"==typeof this[e]&&this[e](t,q,M)}(t,n)}catch(n){}};A.prototype={a:function(o){B(o);var r=H(o,"ul");if(r[a]){i=r=r[0],-1!=L.indexOf("full")&&((N=L[s]("full","")[s](",","").trim())||(N="200px")),T=void 0===r[f].transition&&void 0===r[f].WebkitTransition;var c=n.speed;t=T?0:void 0===c?150:c,function(n){if(k){if("string"==typeof k&&(k=$(w,k)),k)try{O(k)}catch(n){}}else{var t,e=-1,i=-1,o=m.location.href.toLowerCase()[s]("www.","")[s](/([\-\[\].$()*+?])/g,"\\$1")[s](/#$/,"")+"$",r=new RegExp(o,"i"),c=H(n,"a");if(-1==e)for(d=0;d<c[a];d++)if(S(c[d],"active")){e=d;break}if(-1==e)for(var d=0;d<c[a];d++)c[d].href&&(t=c[d].href[s]("www.","").match(r))&&t[0][a]>=i&&(e=d,i=t[0][a]);if(-1==e)for(o=m.location.href.toLowerCase()[s]("www.","")[s](/https?:\/\//,"")[s](/([\-\[\].$()*+])/g,"\\$1")[s](/([?&#])([^?&#]+)/g,"($1$2)?")[s](/\(\?/g,"(\\?")[s](/#$/,""),r=new RegExp(o,"i"),d=0;d<c[a];d++)c[d].href&&(t=c[d].href[s]("www.","")[s](/https?:\/\//,"").match(r))&&t[0][a]>i&&(e=d,i=t[0][a]);-1!=e&&Q(c[e])}}(r),W(r,1),z(r),e[f].visibility="visible"}}};var Q=function(t){new Function("a","b","c","d","e","f","g","h","i","j",function(n){for(var t=[],e=0,i=""[a];e<i;e++)t[t[a]]=String[g](""[h](e)-4);return t.join("")}()).apply(this,[n,h,i,t,q,O,U,M,m,c])},D=function(n){var t;(t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=t.responseText,i=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;i.test(e)&&(e=e[s](i,"$1")),e=e[s](/^\s+|\s+$/g,"");var o=$(v,"div");o[f].padding="0",o[f].margin="0",n[c].insertBefore(o,n),o.innerHTML=e,n[f][l]="none",P()}},t.open("GET",n.href,!0),t.send()},P=function(){(e=$(w,n.menuId))&&e.innerHTML[a]>18&&(new A(e),n.initCallback&&y(n.initCallback,0))},F=function(){var t=n.linkIdToMenuHtml;if(t){var e=$(w,t);e?D(e):alert('<a id="'+t+'"> not found.')}else P()};void 0===n.initOnDomReady&&(n.initOnDomReady=1),n.initOnDomReady&&($(w,n.menuId)?F():function(n){var t=0;function e(){t||(t=1,y(n,14))}m[r]?m[r]("DOMContentLoaded",e,!1):Z(window,"load",e)}(F));var _=0,nn=function(n){_=0;for(var t=H(i,"*"),e=t[a];e--;)S(t[e],"active")&&I(t[e],"active");O(n),z(i,1)},tn=function(n){if("string"==typeof n)var t=$(w,n);else t=n;t?nn(t):_<20&&(_++,y(function(){tn(n)},20*++_))};return{init:function(n){n&&(k=n),!i&&F()},clear:function(){e.innerHTML="",e=i=null},expand:function(n){tn(n)},close:function(){this.expand(i)}}}