/*! Lity - v3.0.0-dev - 2017-07-17
* http://sorgalla.com/lity/
* Copyright (c) 2015-2017 Jan Sorgalla; Licensed MIT */
!function(t,n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(t,e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(t,require("jquery")):t.lity=n(t,t.jQuery||t.Zepto)}("undefined"!=typeof window?window:this,function(e,u){"use strict";function f(e){var t=T();return L&&e.length?(e.one(L,t.resolve),setTimeout(t.resolve,500)):t.resolve(),t.promise()}function y(e,t,n){if(1===arguments.length)return u.extend({},e);if("string"==typeof t){if(void 0===n)return"undefined"==typeof e[t]?null:e[t];e[t]=n}else u.extend(e,t);return this}function i(e){var t=e.indexOf("?");-1<t&&(e=e.substr(t+1));for(var n,i=decodeURI(e.split("#")[0]).split("&"),r={},o=0,a=i.length;o<a;o++)i[o]&&(r[(n=i[o].split("="))[0]]=n[1]);return r}function r(e,t){if(!t)return e;if("string"===u.type(t)&&(t=i(t)),-1<e.indexOf("?")){var n=e.split("?");e=n.shift(),t=u.extend({},i(n[0]),t)}return e+"?"+u.param(t)}function o(e,t){var n=e.indexOf("#");return-1===n?t:(0<n&&(e=e.substr(n)),t+e)}function a(e,t,n,i){return t&&t.element().addClass("lity-iframe"),n&&(e=r(e,n)),i&&(e=o(i,e)),'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+e+'"/></div>'}function l(e){return u('<span class="lity-error"/>').append(e)}function t(e,t){var n=t.opener()&&t.opener().data("lity-desc")||"Image with no description",i=u('<img src="'+e+'" alt="'+n+'"/>'),r=T(),o=function(){r.reject(l("Failed loading image"))};return i.on("load",function(){if(0===this.naturalWidth)return o();r.resolve(i)}).on("error",o),r.promise()}function n(e,t){var n,i,r;try{n=u(e)}catch(o){return!1}return!!n.length&&(i=u('<i style="display:none !important"/>'),r=n.hasClass("lity-hide"),t.element().one("lity:remove",function(){i.before(n).remove(),r&&!n.closest(".lity-content").length&&n.addClass("lity-hide")}),n.removeClass("lity-hide").after(i))}function s(e,t){var n=M.exec(e);return!!n&&a("https://www.youtube"+(n[2]||"")+".com/embed/"+n[4]+"?autoplay=1",t,n[5],e)}function d(e,t){var n=P.exec(e);return!!n&&a("https://player.vimeo.com/video/"+n[3]+"?autoplay=1",t,n[4],e)}function c(e,t){var n=F.exec(e);return!!n&&(0!==e.indexOf("http")&&(e="https:"+e),a("https://www.facebook.com/plugins/video.php?href="+e+"&autoplay=1",t,n[4],e))}function p(e,t){var n=A.exec(e);return!!n&&a("https://www.google."+n[3]+"/maps?"+n[6],t,{output:0<n[6].indexOf("layer=c")?"svembed":"embed"},e)}function m(e,t){return a(e,t)}function v(){return D.documentElement.clientHeight?D.documentElement.clientHeight:Math.round(z.height())}function h(e){var t=C();t&&(27===e.keyCode&&t.options("esc")&&t.close(),9===e.keyCode&&g(e,t))}function g(e,t){var n=t.element().find(H),i=n.index(D.activeElement);e.shiftKey&&i<=0?(n.get(n.length-1).focus(),e.preventDefault()):e.shiftKey||i!==n.length-1||(n.get(0).focus(),e.preventDefault())}function b(){u.each(q,function(e,t){t.resize()})}function w(e){1===q.unshift(e)&&(O.addClass("lity-active"),z.on({resize:b,keydown:h})),u("body > *").not(e.element()).addClass("lity-hidden").each(function(){var e=u(this);undefined===e.data($)&&e.data($,e.attr(W)||null)}).attr(W,"true")}function x(t){t.element().attr(W,"true"),1===q.length&&(O.removeClass("lity-active"),z.off({resize:b,keydown:h})),((q=u.grep(q,function(e){return t!==e})).length?q[0].element():u(".lity-hidden")).removeClass("lity-hidden").each(function(){var e=u(this),t=e.data($);t?e.attr(W,t):e.removeAttr(W),e.removeData($)})}function C(){return 0===q.length?null:q[0]}function k(n,i,r,e){var o,a="inline",l=u.extend({},r);return e&&l[e]?(o=l[e](n,i),a=e):(u.each(["inline","iframe"],function(e,t){delete l[t],l[t]=r[t]}),u.each(l,function(e,t){return!t||(!(!t.test||t.test(n,i))||(!1!==(o=t(n,i))?(a=e,!1):void 0))})),{handler:a,content:o||""}}function E(e,t,n,i){function r(e){l=u(e).css("max-height",v()+"px"),a.find(".lity-loader").each(function(){var e=u(this);f(e).always(function(){e.remove()})}),a.removeClass("lity-loading").find(".lity-content").empty().append(l),d=!0,l.trigger("lity:ready",[s])}var o,a,l,s=this,d=!1,c=!1;t=u.extend({},I,t),a=u(t.template),s.element=function(){return a},s.opener=function(){return n},s.content=function(){return l},s.options=u.proxy(y,s,t),s.handlers=u.proxy(y,s,t.handlers),s.resize=function(){d&&!c&&l.css("max-height",v()+"px").trigger("lity:resize",[s])},s.close=function(){if(d&&!c){c=!0,x(s);var e=T();if(i&&(D.activeElement===a[0]||u.contains(a[0],D.activeElement)))try{i.focus()}catch(t){}return l.trigger("lity:close",[s]),a.removeClass("lity-opened").addClass("lity-closed"),f(l.add(a)).always(function(){l.trigger("lity:remove",[s]),a.remove(),a=undefined,e.resolve()}),e.promise()}},o=k(e,s,t.handlers,t.handler),a.attr(W,"false").addClass("lity-loading lity-opened lity-"+o.handler).appendTo("body").focus().on("click","[data-lity-close]",function(e){u(e.target).is("[data-lity-close]")&&s.close()}).trigger("lity:open",[s]),w(s),u.when(o.content).always(r)}function j(e,t,n){e.preventDefault?(e.preventDefault(),e=(n=u(this)).data("lity-target")||n.attr("href")||n.attr("src")):n=u(n);var i=new E(e,u.extend({},n.data("lity-options")||n.data("lity"),t),n,D.activeElement);if(!e.preventDefault)return i}var D=e.document,z=u(e),T=u.Deferred,O=u("html"),q=[],W="aria-hidden",$="lity-"+W,H='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',I={esc:!0,handler:null,handlers:{image:t,inline:n,youtube:s,vimeo:d,googlemaps:p,facebookvideo:c,iframe:m},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},K=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,M=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,P=/(vimeo(pro)?\.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,A=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,F=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,L=function(){var e=D.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(e.style[n]!==undefined)return t[n];return!1}();return t.test=function(e){return K.test(e)},j.version="3.0.0-dev",j.options=u.proxy(y,j,I),j.handlers=u.proxy(y,j,I.handlers),j.current=C,j.iframe=a,u(D).on("click.lity","[data-lity]",j),j});