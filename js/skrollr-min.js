!function(e,t,r){"use strict";function n(r){if(s=t.documentElement,c=t.body,R(),St=this,r=r||{},Ct=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];_t=r.edgeStrategy||"set",xt={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},Et=r.forceHeight!==!1,Et&&(Ft=r.scale||1),Ht=r.mobileDeceleration||x,qt=r.smoothScrolling!==!1,Lt=r.smoothScrollingDuration||A,Mt={targetTop:St.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(wt=t.getElementById(r.skrollrBody||E),wt&&lt(),W(),vt(s,[y,S],[T])):vt(s,[y,b],[T]),St.refresh(),st(e,"resize orientationchange",function(){var e=s.clientWidth,t=s.clientHeight;(t!==Ot||e!==Nt)&&(Ot=t,Nt=e,Vt=!0)});var o=U();return function a(){Q(),Ut=o(a)}(),St}var o={get:function(){return St},init:function(e){return St||new n(e)},VERSION:"0.6.29"},a=Object.prototype.hasOwnProperty,i=e.Math,l=e.getComputedStyle,s,c,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,B=/\{\?\}/g,_=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,G=/[a-z\-]+-gradient/g,K="",Y="",R=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(l){var t=l(c,null);for(var r in t)if(K=r.match(e)||+r==r&&t[r].match(e))break;if(!K)return void(K=Y="");K=K[0],"-"===K.slice(0,1)?(Y=K,K={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[K]):Y="-"+K.toLowerCase()+"-"}},U=function(){var t=e.requestAnimationFrame||e[K.toLowerCase()+"RequestAnimationFrame"],r=Tt();return(Gt||!t)&&(t=function(t){var n=Tt()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=Tt(),t()},o)}),t},X=function(){var t=e.cancelAnimationFrame||e[K.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,kt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=qt,f=_t,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Ft))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=kt[x].styleAttr,w=kt[x].classAttr):(x=i[I]=Bt++,k=i.style.cssText,w=gt(i)),kt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},vt(i,[d],[])}}}for(mt(),n=0,o=e.length;o>n;n++){var E=kt[e[n][I]];E!==r&&(et(E),rt(E))}return St},n.prototype.relativeToAbsolute=function(e,t,r){var n=s.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===D?a-=n:t===H&&(a-=n/2),r===D?a+=i:r===H&&(a+=i/2),a+=St.getScrollTop(),a+.5|0},n.prototype.animateTo=function(e,t){t=t||{};var n=Tt(),o=St.getScrollTop();return zt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:j[t.easing||k],done:t.done},zt.topDiff||(zt.done&&zt.done.call(St,!1),zt=r),St},n.prototype.stopAnimateTo=function(){zt&&zt.done&&zt.done.call(St,!0),zt=r},n.prototype.isAnimatingTo=function(){return!!zt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return $t=r===!0,Gt?Kt=i.min(i.max(t,0),At):e.scrollTo(0,t),St},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||s.scrollTop||c.scrollTop||0},n.prototype.getMaxScrollTop=function(){return At},n.prototype.on=function(e,t){return xt[e]=t,St},n.prototype.off=function(e){return delete xt[e],St},n.prototype.destroy=function(){var e=X();e(Ut),ft(),vt(s,[T],[y,b,S]);for(var t=0,n=kt.length;n>t;t++)it(kt[t].element);s.style.overflow=c.style.overflow="",s.style.height=c.style.height="",wt&&o.setStyle(wt,"transform","none"),St=r,wt=r,xt=r,Et=r,At=0,Ft=1,Ct=r,Ht=r,Dt="down",It=-1,Nt=0,Ot=0,Vt=!1,zt=r,qt=r,Lt=r,Mt=r,$t=r,Bt=0,_t=r,Gt=!1,Kt=0,Yt=r};var W=function(){var n,o,a,l,d,g,v,h,y,T,b,S;st(s,[f,u,m,p].join(" "),function(e){var s=e.changedTouches[0];for(l=e.target;3===l.nodeType;)l=l.parentNode;switch(d=s.clientY,g=s.clientX,T=e.timeStamp,P.test(l.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),St.stopAnimateTo(),n=l,o=v=d,a=g,y=T;break;case u:P.test(l.tagName)&&t.activeElement!==l&&e.preventDefault(),h=d-v,S=T-b,St.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var c=o-d,k=a-g,w=k*k+c*c;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,s.screenX,s.screenY,s.clientX,s.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=i.max(i.min(E,3),-3);var A=i.abs(E/Ht),F=E*A+.5*Ht*A*A,C=St.getScrollTop()-F,H=0;C>At?(H=(At-C)/F,C=At):0>C&&(H=-C/F,C=0),A*=1-H,St.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),s.style.overflow=c.style.overflow="hidden"},Z=function(){var e=s.clientHeight,t=pt(),r,n,o,a,l,c,f,u,m,p,d;for(u=0,m=kt.length;m>u;u++)for(r=kt[u],n=r.element,o=r.anchorTarget,a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],p=f.offset,d=t[f.constant]||0,f.frame=p,f.isPercentage&&(p*=e,f.frame=p),"relative"===f.mode&&(it(n),f.frame=St.relativeToAbsolute(o,f.anchors[0],f.anchors[1])-p,it(n,!0)),f.frame+=d,Et&&!f.isEnd&&f.frame>At&&(At=f.frame);for(At=i.max(At,dt()),u=0,m=kt.length;m>u;u++){for(r=kt[u],a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],d=t[f.constant]||0,f.isEnd&&(f.frame=At-f.offset+d);r.keyFrames.sort(bt)}},J=function(e,t){for(var r=0,n=kt.length;n>r;r++){var i=kt[r],l=i.element,s=i.smoothScrolling?e:t,c=i.keyFrames,f=c.length,u=c[0],m=c[c.length-1],p=s<u.frame,y=s>m.frame,T=p?u:m,b=i.emitEvents,S=i.lastFrameIndex,k,w;if(p||y){if(p&&-1===i.edge||y&&1===i.edge)continue;switch(p?(vt(l,[g],[h,v]),b&&S>-1&&(ut(l,u.eventType,Dt),i.lastFrameIndex=-1)):(vt(l,[h],[g,v]),b&&f>S&&(ut(l,m.eventType,Dt),i.lastFrameIndex=f)),i.edge=p?-1:1,i.edgeStrategy){case"reset":it(l);continue;case"ease":s=T.frame;break;default:case"set":var x=T.props;for(k in x)a.call(x,k)&&(w=at(x[k].value),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w));continue}}else 0!==i.edge&&(vt(l,[d,v],[g,h]),i.edge=0);for(var E=0;f-1>E;E++)if(s>=c[E].frame&&s<=c[E+1].frame){var A=c[E],F=c[E+1];for(k in A.props)if(a.call(A.props,k)){var C=(s-A.frame)/(F.frame-A.frame);C=A.props[k].easing(C),w=ot(A.props[k].value,F.props[k].value,C),w=at(w),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w)}b&&S!==E&&("down"===Dt?ut(l,A.eventType,Dt):ut(l,F.eventType,Dt),i.lastFrameIndex=E);break}}},Q=function(){Vt&&(Vt=!1,mt());var e=St.getScrollTop(),t,n=Tt(),a;if(zt)n>=zt.endTime?(e=zt.targetTop,t=zt.done,zt=r):(a=zt.easing((n-zt.startTime)/zt.duration),e=zt.startTop+a*zt.topDiff|0),St.setScrollTop(e,!0);else if(!$t){var i=Mt.targetTop-e;i&&(Mt={startTop:It,topDiff:e-It,targetTop:e,startTime:Pt,endTime:Pt+Lt}),n<=Mt.endTime&&(a=j.sqrt((n-Mt.startTime)/Lt),e=Mt.startTop+a*Mt.topDiff|0)}if(Gt&&wt&&o.setStyle(wt,"transform","translate(0, "+-Kt+"px) "+Yt),$t||It!==e){Dt=e>It?"down":It>e?"up":Dt,$t=!1;var l={curTop:e,lastTop:It,maxTop:At,direction:Dt},s=xt.beforerender&&xt.beforerender.call(St,l);s!==!1&&(J(e,St.getScrollTop()),It=e,xt.render&&xt.render.call(St,l)),t&&t.call(St,!1)}Pt=n},et=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n=e.keyFrames[t],o,a,i,l={},s;null!==(s=V.exec(n.props));)i=s[1],a=s[2],o=i.match(z),null!==o?(i=o[1],o=o[2]):o=k,a=a.indexOf("!")?tt(a):[a.slice(1)],l[i]={value:a,easing:j[o]};n.props=l}},tt=function(e){var t=[];return _.lastIndex=0,e=e.replace(_,function(e){return e.replace(M,function(e){return e/255*100+"%"})}),Y&&(G.lastIndex=0,e=e.replace(G,function(e){return Y+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},rt=function(e){var t={},r,n;for(r=0,n=e.keyFrames.length;n>r;r++)nt(e.keyFrames[r],t);for(t={},r=e.keyFrames.length-1;r>=0;r--)nt(e.keyFrames[r],t)},nt=function(e,t){var r;for(r in t)a.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},ot=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},at=function(e){var t=1;return B.lastIndex=0,e[0].replace(B,function(){return e[t++]})},it=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=kt[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,vt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=gt(n),n.style.cssText=r.styleAttr,vt(n,r.classAttr)))},lt=function(){Yt="translateZ(0)",o.setStyle(wt,"transform",Yt);var e=l(wt),t=e.getPropertyValue("transform"),r=e.getPropertyValue(Y+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Yt="")};o.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{K&&(n[K+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var st=o.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Rt.push({element:t,name:a,listener:n})},ct=o.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},ft=function(){for(var e,t=0,r=Rt.length;r>t;t++)e=Rt[t],ct(e.element,e.name,e.listener);Rt=[]},ut=function(e,t,r){xt.keyframe&&xt.keyframe.call(St,e,t,r)},mt=function(){var e=St.getScrollTop();At=0,Et&&!Gt&&(c.style.height=""),Z(),Et&&!Gt&&(c.style.height=At+s.clientHeight+"px"),Gt?St.setScrollTop(i.min(St.getScrollTop(),At)):St.setScrollTop(e,!0),$t=!0},pt=function(){var e=s.clientHeight,t={},r,n;for(r in Ct)n=Ct[r],"function"==typeof n?n=n.call(St):/p$/.test(n)&&(n=n.slice(0,-1)/100*e),t[r]=n;return t},dt=function(){var e=0,t;return wt&&(e=i.max(wt.offsetHeight,wt.scrollHeight)),t=i.max(e,c.scrollHeight,c.offsetHeight,s.scrollHeight,s.offsetHeight,s.clientHeight),t-s.clientHeight},gt=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},vt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return void(t[a]=n);for(var i=t[a],l=0,s=o.length;s>l;l++)i=yt(i).replace(yt(o[l])," ");i=ht(i);for(var c=0,f=n.length;f>c;c++)-1===yt(i).indexOf(yt(n[c]))&&(i+=" "+n[c]);t[a]=ht(i)},ht=function(e){return e.replace(N,"")},yt=function(e){return" "+e+" "},Tt=Date.now||function(){return+new Date},bt=function(e,t){return e.frame-t.frame},St,kt,wt,xt,Et,At=0,Ft=1,Ct,Ht,Dt="down",It=-1,Pt=Tt(),Nt=0,Ot=0,Vt=!1,zt,qt,Lt,Mt,$t,Bt=0,_t,Gt=!1,Kt=0,Yt,Rt=[],Ut;"function"==typeof define&&define.amd?define([],function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:e.skrollr=o}(window,document);