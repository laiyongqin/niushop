"use strict";(function(e,t){var i=document,n="placeholder",o="text-overflow:ellipsis;overflow:hidden;cursor:text;color:gray;opacity:1;padding:0;border:0;",r="change keypress keyup keydown input blur DOMAttrModified".split(/\s/),f=g("input")[n]===t,a=i.documentElement.firstChild,l=g("style"),u=i.documentMode,s=e.parseInt,c="normal",p="static",d="px",h=e.getComputedStyle?function(t){return e.getComputedStyle(t,null)}:0;function g(e){return i.createElement(e)}function m(e){return e.runtimeStyle||e.style}function y(e){return e.currentStyle||h(e)}function v(){var t=this;if(/^text(area)?|password|email|search|tel|url$/i.test(t.type)){var o,f,a,l=function(){var e=n in t?t[n]:t.getAttribute(n);if(!o&&e){o=g(n);o.onmousedown=function(){setTimeout(function(){t.focus()},1);return false}}if(o){o.innerHTML=e||""}},u=function(){clearTimeout(f);if(o){var e=o.innerHTML&&!t.value,i=y(t),n=m(o),r=t.parentNode,a=r&&(t.offsetHeight||t.offsetWidth);n.display=e&&a?"block":"none";if(!a){f=setTimeout(u,50)}else if(e){if(/^textarea$/i.test(t.tagName)){n.whiteSpace=c;n.wordBreak="break-all"}else{n.whiteSpace="nowrap";n.wordBreak=c}if(i.position!==p||y(r).position!==p){n.width=i.textAlign==="left"?"auto":h?h(t).width:t.clientWidth-s(i.paddingLeft)-s(i.paddingRight)+d;n.left=t.offsetLeft+t.clientLeft+d;n.top=t.offsetTop+t.clientTop+d;n.position="absolute";v("marginLeft","paddingLeft");v("marginTop","paddingTop")}if(h&&i.lineHeight===c){n.lineHeight=h(t).height}else{v("lineHeight")}v("textAlign");v("fontFamily");v("fontWidth");v("fontSize");if(t.nextSibling){r.insertBefore(o,t.nextSibling)}else{r.appendChild(o)}}}},v=function(e,i){try{m(o)[e]=y(t)[i||e]}catch(n){}};if(r.forEach){a=function(e,n,o){(o||t).addEventListener(e,n,true);if(!o){i.addEventListener(e,function(e){if(e.target===t){n()}},false)}};r.forEach(function(e){a(e,function(e){l();u()})})}else if(t.attachEvent){a=function(e,i,n){(n||t).attachEvent("on"+e,i)};a("propertychange",function(){switch(event.propertyName){case n:l();default:u()}});a("keypress",u)}l();u();if(a){a("resize",u,e)}}}function w(e){var t=e("input,textarea").each(v);if(f){(function(){if(i.readyState==="complete"){t.each(function(){var e=this;if(e.getAttribute("autofocus")!==null){try{e.focus();return false}catch(t){}}})}else{setTimeout(arguments.callee,200)}})()}}function T(e,t){t=(t||"")+n;if(l.styleSheet){l.styleSheet.addRule(t,e)}else{l.appendChild(i.createTextNode(t+"{"+e+"}"))}}a.insertBefore(l,a.firstChild);if(f||u){T(o);if(e.LQ){w(LQ)}else if(e.jQuery){jQuery(w)}}if(f){var b={set:function(e){this.setAttribute(n,e)},get:function(){return this.getAttribute(n)||""}},L=Object.defineProperty,x="prototype";if(L){L(HTMLTextAreaElement[x],n,b);L(HTMLInputElement[x],n,b)}}else{if(u>9){T("color:transparent !important;",":-ms-input-")}else{T(o,"netscape"in e?"::-moz-":"::-webkit-input-")}}})(this);